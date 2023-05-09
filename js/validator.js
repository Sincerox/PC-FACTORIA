
 
 
$("#formulario").validate({
    rules: {
      "txtIndicador": {
        required: true,
        minlength: 1
          }
    },
    messages: {
      "txtIndicador": {
        required: 'Requiere nombre de pokemon.',
        minlength: 'Debe tener al menos 5 caracteres.'
      }
    }
  });
