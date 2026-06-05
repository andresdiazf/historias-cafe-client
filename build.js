require('dotenv').config();
const fs = require('fs');

let config = fs.readFileSync('./js/config.example.js', 'utf8');

config = config
  .replace('TU_CLOUD_NAME', process.env.CLOUDINARY_CLOUD_NAME)
  .replace('TU_UPLOAD_PRESET', process.env.CLOUDINARY_UPLOAD_PRESET);

fs.writeFileSync('./js/config.js', config);
console.log('✅ config.js generado correctamente');