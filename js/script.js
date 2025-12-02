// toon het huidige jaar in de footer

// haal eerste het huidige jaar op
const currentYear = new Date().getFullYear();
// toon huidige jaar nadien in het element met id "year" in footer
document.getElementById("year").textContent = currentYear;

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()