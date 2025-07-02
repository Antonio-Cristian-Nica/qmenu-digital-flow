# 📋 Forka - Digital Restaurant Flow

Landing page profesional para Forka con formulario integrado que envía datos directamente a Google Sheets usando **SheetDB**.

## 🚀 Configuración Rápida (2 minutos)

### 1. Instalar dependencias
```bash
npm install
```

### 2. Configurar SheetDB
1. Ve a https://sheetdb.io y regístrate gratis
2. Conecta tu Google Sheets: `https://docs.google.com/spreadsheets/d/1ewzzbgjD7z0NJOOiqBGibDCSk_xK-rt3JYBkpjeNIng/edit`
3. Copia tu API URL de SheetDB
4. Pégala en `.env`:
```env
VITE_SHEETDB_API_URL=https://sheetdb.io/api/v1/TU_API_ID
```

### 3. Ejecutar
```bash
npm run dev
```

¡Ya funciona! Los formularios se envían automáticamente a tu Google Sheets.

## 📁 Archivos importantes

- `SHEETDB-SETUP.md` - Configuración detallada de SheetDB
- `.env` - Variables de entorno (configura tu API)
- `src/services/api.ts` - Integración con SheetDB

## ✅ Características

- ✅ Formulario responsive
- ✅ Envío a Google Sheets en tiempo real
- ✅ Sistema de backup local
- ✅ Retry automático
- ✅ Debug completo en consola
- ✅ Sin configuración compleja

## 🔧 Métodos de envío

1. **SheetDB** (Principal) - API REST simple
2. **API Custom** (Opcional) - Tu backend
3. **Google Apps Script** (Backup) - Método alternativo

## 🎯 URLs importantes

- **SheetDB**: https://sheetdb.io
- **Tu Google Sheets**: https://docs.google.com/spreadsheets/d/1ewzzbgjD7z0NJOOiqBGibDCSk_xK-rt3JYBkpjeNIng/edit

---

# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/4517a109-6166-41ec-8fed-75145af12300

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/4517a109-6166-41ec-8fed-75145af12300) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/4517a109-6166-41ec-8fed-75145af12300) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
