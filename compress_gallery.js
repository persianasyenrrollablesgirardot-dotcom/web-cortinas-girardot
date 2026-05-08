const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const galeriaDir = path.join(__dirname, 'public', 'galeria');

async function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    let totalSaved = 0;
    let count = 0;
    
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            const subResult = await processDirectory(fullPath);
            totalSaved += subResult.totalSaved;
            count += subResult.count;
        } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
            const ext = path.extname(file).toLowerCase();
            const tempPath = fullPath + '.tmp';
            try {
                const metadata = await sharp(fullPath).metadata();
                // Avoid upscaling
                const width = metadata.width > 1200 ? 1200 : metadata.width;
                
                let s = sharp(fullPath).resize(width);
                if (ext === '.jpg' || ext === '.jpeg') {
                    s = s.jpeg({ quality: 65, mozjpeg: true });
                } else if (ext === '.png') {
                    s = s.png({ quality: 65, compressionLevel: 8 });
                }
                
                await s.toFile(tempPath);
                
                const newStat = fs.statSync(tempPath);
                if (newStat.size < stat.size) {
                    const saved = stat.size - newStat.size;
                    totalSaved += saved;
                    count++;
                    fs.unlinkSync(fullPath);
                    fs.renameSync(tempPath, fullPath);
                    // console.log(`Comprimido: ${file} (${(stat.size/1024/1024).toFixed(2)}MB -> ${(newStat.size/1024/1024).toFixed(2)}MB)`);
                } else {
                    fs.unlinkSync(tempPath);
                }
            } catch (err) {
                console.error(`Error procesando ${file}:`, err.message);
                if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
            }
        }
    }
    return { totalSaved, count };
}

async function main() {
    console.log("Iniciando optimización masiva de la galería...");
    const start = Date.now();
    const { totalSaved, count } = await processDirectory(galeriaDir);
    const end = Date.now();
    console.log(`Optimización completada en ${((end-start)/1000).toFixed(1)} segundos.`);
    console.log(`Se comprimieron ${count} archivos.`);
    console.log(`Espacio total ahorrado: ${(totalSaved / 1024 / 1024 / 1024).toFixed(2)} GB`);
}

main();
