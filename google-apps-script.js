/**
 * Google Apps Script para recibir datos del formulario Forka
 * 
 * Instrucciones de configuración:
 * 1. Ve a script.google.com
 * 2. Crear nuevo proyecto
 * 3. Pega este código
 * 4. Cambia SPREADSHEET_ID por el ID de tu Google Sheet
 * 5. Implementar > Nueva implementación > Aplicación web
 * 6. Ejecutar como: tu email
 * 7. Acceso: Cualquiera (incluso anónimo)
 * 8. Copia la URL de la aplicación web al archivo .env
 */

// ID extraído automáticamente de tu Google Spreadsheet
const SPREADSHEET_ID = '1ewzzbgjD7z0NJOOiqBGibDCSk_xK-rt3JYBkpjeNIng';

function doPost(e) {
  try {
    // Parsear los datos JSON enviados
    const data = JSON.parse(e.postData.contents);
    
    // Abrir la hoja de cálculo
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName('Formularios');
    
    // Si la hoja no existe, crearla con headers
    if (!sheet) {
      sheet = spreadsheet.insertSheet('Formularios');
      sheet.getRange(1, 1, 1, 7).setValues([[
        'Fecha y Hora',
        'Email',
        'Nombre del Restaurante',
        'Número de Mesas',
        'Sistema Actual',
        'Intereses',
        'Quiere Demo'
      ]]);
      
      // Formatear la primera fila
      const headerRange = sheet.getRange(1, 1, 1, 7);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('white');
    }
    
    // Preparar los datos para insertar
    const timestamp = new Date();
    const rowData = [
      timestamp,
      data.email || '',
      data.restaurantName || '',
      data.tableCount || '',
      data.currentSystem || '',
      Array.isArray(data.interests) ? data.interests.join(', ') : '',
      data.wantsDemo ? 'Sí' : 'No'
    ];
    
    // Insertar la nueva fila
    sheet.appendRow(rowData);
    
    // Opcional: Enviar email de notificación
    if (data.email) {
      sendNotificationEmail(data);
    }
    
    // Respuesta exitosa
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Datos guardados correctamente',
        timestamp: timestamp.toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error en doPost:', error);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Permitir requests GET para testing
  return ContentService
    .createTextOutput(JSON.stringify({
      message: 'Forka Survey API está funcionando',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

function sendNotificationEmail(data) {
  try {
    // Opcional: Cambiar por tu email para recibir notificaciones
    const NOTIFICATION_EMAIL = 'tu-email@ejemplo.com';
    
    const subject = `Nuevo registro en Forka: ${data.restaurantName || data.email}`;
    const body = `
Nuevo registro en el formulario de Forka:

Email: ${data.email}
Restaurante: ${data.restaurantName || 'No especificado'}
Número de mesas: ${data.tableCount || 'No especificado'}
Sistema actual: ${data.currentSystem || 'No especificado'}
Intereses: ${Array.isArray(data.interests) ? data.interests.join(', ') : 'Ninguno'}
Quiere demo: ${data.wantsDemo ? 'Sí' : 'No'}

Fecha: ${new Date().toLocaleString('es-ES')}
    `;
    
    // Comentar la siguiente línea si no quieres recibir emails
    // MailApp.sendEmail(NOTIFICATION_EMAIL, subject, body);
    
  } catch (error) {
    console.error('Error enviando email:', error);
  }
}

// Función para testing - puedes ejecutarla manualmente
function testScript() {
  const testData = {
    email: 'test@ejemplo.com',
    restaurantName: 'Restaurante Test',
    tableCount: '10',
    currentSystem: 'Manual',
    interests: ['Menú digital', 'Pagos móviles'],
    wantsDemo: true
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  console.log('Resultado del test:', result.getContent());
}
