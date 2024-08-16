document.addEventListener('DOMContentLoaded', () => {
  // Reemplaza con tu user_id de EmailJS
  emailjs.init("Y_qLJwbfQ8wYTBU-gU");  

  const form = document.getElementById('contactForm');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío normal del formulario

    const formData = new FormData(form);

    // Reemplaza 'service_id' y 'template_id' con tus valores de EmailJS
    emailjs.sendForm('service_00s5d0a', 'template_szui93m', formData)
      .then(response => {
        console.log('Éxito:', response);
        alert('¡Mensaje enviado exitosamente!');
        form.reset(); // Limpia el formulario después del envío
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Hubo un problema al enviar el mensaje.');
      });
  });
});

// document.addEventListener('DOMContentLoaded', () => {
//   emailjs.init("_qLJwbfQ8wYTBU-gU");  // Reemplaza con tu user_id

//   const form = document.getElementById('contactForm');
  
//   form.addEventListener('submit', function(event) {
//     event.preventDefault(); // Evitar el envío normal del formulario

//     const formData = new FormData(form);

//     emailjs.sendForm('service_00s5d0a', 'template_szui93m', formData)
//       .then(response => {
//         console.log('Éxito:', response);
//         alert('¡Mensaje enviado exitosamente!');
//         form.reset(); // Limpiar el formulario
//       })
//       .catch(error => {
//         console.error('Error:', error);
//         alert('Hubo un problema al enviar el mensaje.');
//       });
//   });
// });
  