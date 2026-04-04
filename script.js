function enviarReservaWhatsApp() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const pessoas = document.getElementById("pessoas").value;
  const data = document.getElementById("data").value;
  const hora = document.getElementById("hora").value;
  const mensagem = document.getElementById("mensagem").value;

  const numeroWhatsApp = "351965436719";

  const texto = `📍 *Reserva - Free Tours Braga (Español)*%0A
👤 Nombre: ${nome}%0A
📧 Email: ${email}%0A
👥 Personas: ${pessoas}%0A
📅 Fecha: ${data}%0A
🕒 Hora: ${hora}%0A
📍 Punto de encuentro: Estación de Braga%0A
📝 Mensaje: ${mensagem}`;

  const url = `https://wa.me/${numeroWhatsApp}?text=${texto}`;
  window.open(url, "_blank");
