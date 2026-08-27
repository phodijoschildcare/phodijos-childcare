const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

menuToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const contactForm = document.querySelector('.contact-form');
const formStatus = document.querySelector('.form-status');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formStatus.textContent = 'Thank you. We will be in touch soon.';
  contactForm.reset();
});

const aboutPhoto = document.querySelector('.about-photo');
if (aboutPhoto) {
  const secondAboutPhoto = document.createElement('img');
  secondAboutPhoto.className = 'story-photo about-photo-second';
  secondAboutPhoto.src = 'about-creative-play.png';
  secondAboutPhoto.alt = 'Children creating art together in a bright childcare classroom';
  aboutPhoto.insertAdjacentElement('afterend', secondAboutPhoto);

  const thirdAboutPhoto = document.createElement('img');
  thirdAboutPhoto.className = 'story-photo about-photo-third';
  thirdAboutPhoto.src = 'about-outdoor-play.png';
  thirdAboutPhoto.alt = 'Children playing and learning together outdoors';
  secondAboutPhoto.insertAdjacentElement('afterend', thirdAboutPhoto);
}

const safeguardingNote = 'Safeguarding is not a policy on a shelf. It is the way we welcome, listen, supervise, record and respond, every single day.';
const safeguardingParagraph = [...document.querySelectorAll('.safety-intro p')]
  .find((paragraph) => paragraph.textContent.trim() === safeguardingNote);
const dailySafetyCard = document.querySelectorAll('.safety-grid article')[2];

if (safeguardingParagraph && dailySafetyCard) {
  safeguardingParagraph.remove();
  dailySafetyCard.append(safeguardingParagraph);
}
