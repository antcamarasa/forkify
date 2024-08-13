import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    root: path.resolve(__dirname, 'src'), // Répertoire source de votre application
    build: {
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'src/index.html'), // Assurez-vous que l'entrée est correcte
            },
        },
    },
    optimizeDeps: {
        include: ['src/main.ts'], // Inclure le fichier d'entrée principal
    },
});
