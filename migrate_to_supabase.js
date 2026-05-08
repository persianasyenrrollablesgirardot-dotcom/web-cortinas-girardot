// dotenv will be loaded via node --env-file=.env.local
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function uploadFile(localPath) {
  if (!localPath) return localPath;
  if (localPath.startsWith('http')) return localPath;
  if (!localPath.startsWith('/uploads/')) return localPath; // Dejar las imágenes de /galeria o por defecto intactas

  const filename = path.basename(localPath);
  const fullPath = path.join(process.cwd(), 'public', 'uploads', filename);

  if (!fs.existsSync(fullPath)) {
    console.warn(`Archivo no encontrado: ${fullPath}`);
    return localPath;
  }

  const buffer = fs.readFileSync(fullPath);
  const ext = path.extname(filename).toLowerCase();
  const contentType = ext === '.png' ? 'image/png' : ext === '.webp' ? 'image/webp' : 'image/jpeg';

  console.log(`Subiendo ${filename} a Supabase...`);
  const { data, error } = await supabase.storage.from('web_uploads').upload(filename, buffer, {
    contentType,
    upsert: true
  });

  if (error) {
    console.error(`Error subiendo ${filename}:`, error);
    return localPath;
  }

  const { data: publicData } = supabase.storage.from('web_uploads').getPublicUrl(filename);
  console.log(` -> URL: ${publicData.publicUrl}`);
  return publicData.publicUrl;
}

async function migrate() {
  console.log('Iniciando migración de configuración local a Supabase...');
  const configPath = path.join(process.cwd(), 'public', 'config', 'images.json');
  
  if (!fs.existsSync(configPath)) {
    console.log('No se encontró images.json local.');
    return;
  }

  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

  // 1. Migrar hero_banner
  config.hero_banner = await uploadFile(config.hero_banner);

  // 2. Migrar productos_portada
  for (const key in config.productos_portada) {
    config.productos_portada[key] = await uploadFile(config.productos_portada[key]);
  }

  // 3. Migrar productos_hero
  for (const key in config.productos_hero) {
    config.productos_hero[key] = await uploadFile(config.productos_hero[key]);
  }

  // 4. Migrar paginas_bg
  for (const key in config.paginas_bg) {
    config.paginas_bg[key] = await uploadFile(config.paginas_bg[key]);
  }

  console.log('\nTodas las imágenes subidas. Actualizando base de datos...');

  const { error } = await supabase.from('site_config').update({ config_data: config }).eq('id', 1);

  if (error) {
    console.error('Error guardando en la base de datos:', error);
  } else {
    console.log('¡Migración completada con éxito! La configuración original ha sido restaurada en la nube.');
  }
}

migrate();
