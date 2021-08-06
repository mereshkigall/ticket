const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
	
	nombre: String,
	local: String,
	radio: String,
	descripcion: String,
	status: {
		type: Boolean,
		default: false
	},
	fecha: String,
	comentario: String

});

module.exports = mongoose.model('tasks', TaskSchema);