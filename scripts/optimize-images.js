// Script para optimizar imágenes del portafolio
// Convierte PNG pesados a WebP optimizados
// Uso: node scripts/optimize-images.js

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuración
const INPUT_IMAGE = path.join(__dirname, '../public/Background.png');
const OUTPUT_IMAGE = path.join(__dirname, '../public/Background.webp');
const QUALITY = 85; // Calidad del WebP (0-100)

async function optimizeImage() {
    try {
        console.log('🖼️  Optimizando imagen...\n');
        
        // Obtener info de la imagen original
        const originalStats = fs.statSync(INPUT_IMAGE);
        const originalSizeMB = (originalStats.size / 1024 / 1024).toFixed(2);
        
        console.log(`📁 Imagen original: Background.png`);
        console.log(`📊 Tamaño original: ${originalSizeMB} MB\n`);
        
        // Convertir a WebP
        await sharp(INPUT_IMAGE)
            .webp({ quality: QUALITY })
            .toFile(OUTPUT_IMAGE);
        
        // Obtener info de la imagen optimizada
        const optimizedStats = fs.statSync(OUTPUT_IMAGE);
        const optimizedSizeMB = (optimizedStats.size / 1024 / 1024).toFixed(2);
        const reduction = ((1 - optimizedStats.size / originalStats.size) * 100).toFixed(1);
        
        console.log(`✅ Imagen optimizada: Background.webp`);
        console.log(`📊 Tamaño optimizado: ${optimizedSizeMB} MB`);
        console.log(`🎉 Reducción: ${reduction}%\n`);
        
        console.log('✨ ¡Optimización completada!');
        console.log(`💡 Ahora actualiza tu código para usar "Background.webp" en lugar de "Background.png"`);
        
    } catch (error) {
        console.error('❌ Error al optimizar imagen:', error.message);
        process.exit(1);
    }
}

optimizeImage();
