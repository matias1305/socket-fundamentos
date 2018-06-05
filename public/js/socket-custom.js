var socket = io();

// ON: escuchar 
socket.on('connect', function(){
   console.log('Conectado al servidor');
});

socket.on('disconnect', function(){
   console.log('Perdimos conexion con el servidor');
});

// EMIT: enviar informacion
socket.emit('enviarMensaje', {
   usuario: 'matias',
   mensaje: 'hola mundo'
}, function( resp ){
   console.log('respuesta server: ', resp);
});

// Escuchar Informacion
socket.on('enviarMensaje', function(resp){
   console.log('Servidor: ', resp);
});