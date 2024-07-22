// models/usuario.js
const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true },
  rol: { type: String, default: 'usuario' },
  fechaCreacion: { type: Date, default: Date.now }
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
