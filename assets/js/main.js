
function toggleNav(){
  const nav = document.getElementById('nav');
  nav.classList.toggle('open');
}

const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const status = document.getElementById('formStatus');
    status.textContent = "Envoi…";
    // Demo: fake delay then success
    await new Promise(r=>setTimeout(r, 700));
    status.textContent = "Merci ! Votre demande a été envoyée. (Remplacez par l'API backend quand vous êtes prêt.)";
    form.reset();
  });
}
