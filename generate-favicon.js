import sharp from 'sharp';
import fs from 'fs';

// Crear favicon PNG de 32x32
const svgBuffer = fs.readFileSync('./public/favicon.svg');

sharp(svgBuffer)
  .resize(32, 32)
  .png()
  .toFile('./public/favicon-32.png')
  .then(() => {
    console.log('Favicon PNG generado');
  })
  .catch(err => {
    console.error('Error:', err);
  });

// También crear versión de 16x16
sharp(svgBuffer)
  .resize(16, 16)
  .png()
  .toFile('./public/favicon-16.png')
  .then(() => {
    console.log('Favicon 16x16 generado');
  })
  .catch(err => {
    console.error('Error:', err);
  });
