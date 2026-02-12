// Script para optimizar imágenes del portafolio
// Convierte PNG pesados a WebP optimizados
// Uso: node scripts/optimize-images.js

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuración
const MIN_SIZE_KB = 500; // Solo optimizar imágenes mayores a 500KB

// Obtener ruta desde argumentos (ej: "apps/about" o "imagen.png")
const targetPath = process.argv[2] || '.'; // Por defecto, raíz de public

const publicDir = path.join(process.cwd(), 'public');
const absoluteTarget = path.join(publicDir, targetPath);

// Función para procesar un archivo
async function processFile(filePath) {
    if (!filePath.match(/\.(png|jpg|jpeg)$/i)) return;

    // Verificar tamaño
    const stats = fs.statSync(filePath);
    const sizeKB = stats.size / 1024;

    if (sizeKB < MIN_SIZE_KB) {
        // console.log(`⏭️  Saltando (muy pequeña): ${path.basename(filePath)} (${sizeKB.toFixed(2)} KB)`);
        return;
    }

    const outputName = filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');

    console.log(`�️  Procesando: ${path.relative(publicDir, filePath)}`);

    try {
        await sharp(filePath)
            .webp({ quality: 80 })
            .toFile(outputName);

        const originalSize = sizeKB / 1024;
        const newSize = fs.statSync(outputName).size / 1024 / 1024;

        console.log(`✅ Optimizado: ${path.basename(outputName)}`);
        console.log(`📊 ${originalSize.toFixed(2)} MB -> ${newSize.toFixed(2)} MB (-${((1 - newSize / originalSize) * 100).toFixed(1)}%)\n`);
    } catch (error) {
        console.error(`❌ Error con ${path.basename(filePath)}:`, error);
    }
}

// Función principal
async function main() {
    if (!fs.existsSync(absoluteTarget)) {
        console.error(`❌ La ruta no existe: ${targetPath}`);
        process.exit(1);
    }

    const stats = fs.statSync(absoluteTarget);

    if (stats.isDirectory()) {
        const files = fs.readdirSync(absoluteTarget);
        for (const file of files) {
            await processFile(path.join(absoluteTarget, file));
        }
    } else {
        await processFile(absoluteTarget);
    }
}

main();
