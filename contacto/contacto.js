function enviarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const consulta = document.getElementById('consulta').value;

    const datos = `Nombre: ${nombre}\nApellido: ${apellido}\nEmail: ${email}\nTeléfono: ${telefono}\nConsulta: ${consulta}\n`;

    const blob = new Blob([datos], { type: 'text/plain' });//navegador
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'contacto.txt';
    a.click();
}