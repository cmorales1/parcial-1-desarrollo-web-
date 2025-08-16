$(document).ready(function() {
    
    if(localStorage.getItem('perfil')) {
        const perfil = JSON.parse(localStorage.getItem('perfil'));
        $('#nombre').val(perfil.nombre);
        $('#correo').val(perfil.correo);
        $('#descripcion').val(perfil.descripcion);
        $('#nombre-tabla').text(perfil.nombre);
        $('#email-tabla').text(perfil.correo);
        $('#edad-tabla').text(perfil.edad);
    }

    
    $('#mostrar-alerta').click(function() {
        alert('¡Bienvenido!!');
    });

   
    $('#cambiar-fondo').click(function() {
        const color = '#' + Math.floor(Math.random()*16777215).toString(16);
        $('body').css('background-color', color);
        localStorage.setItem('fondoColor', color);
    });

  
    const colorGuardado = localStorage.getItem('fondoColor');
    if(colorGuardado) {
        $('body').css('background-color', colorGuardado);
    }

    
    $('#ver-api').click(function(e) {
        e.preventDefault();
        $('#demo-api').append('<p>Este es un contenido dinámico añadido al hacer clic.</p>');
    });

   

   
    $('#perfil-form').submit(function(e) {
        e.preventDefault();
        const nombre = $('#nombre').val().trim();
        const correo = $('#correo').val().trim();
        const descripcion = $('#descripcion').val().trim();

        if(!nombre || !correo) {
            alert('Por favor completa todos los campos requeridos.');
            return;
        }

       
        $('#nombre-tabla').text(nombre);
        $('#email-tabla').text(correo);
        $('#edad-tabla').text('26'); 

       
        const perfil = { nombre, correo, descripcion, edad: 26};
        localStorage.setItem('perfil', JSON.stringify(perfil));
        alert('Perfil guardado correctamente.');
    });

    
    $('#cambiar-fondo').click(function() {
        const color = '#' + Math.floor(Math.random()*16777215).toString(16);
        $('body').css('background-color', color);
        localStorage.setItem('fondoColor', color);
    });

  
    $('#llamar-api').click(function() {
        $('#resultado-api').fadeIn();
        $('#mensaje-api').text('Cargando...');
        $.ajax({
            url: 'https://s1uplfovq4.execute-api.us-east-1.amazonaws.com/default/exampleLinks',
            method: 'GET',
            success: function(data) {
                $('#mensaje-api').text(data.mensaje);
            },
            error: function() {
                $('#mensaje-api').text('Error al consumir la API.');
            }
        });
    });

  
    $('#perfil-img').on('mouseover', function() {
        $(this).css('transform', 'scale(1.3)');
    }).on('mouseout', function() {
        $(this).css('transform', 'scale(1)');
    });
});