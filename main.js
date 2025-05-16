document.addEventListener('DOMContentLoaded', () => {
  console.log('Script loaded! ✅');

  // Initialize AOS animation library
  if (typeof AOS !== 'undefined') {
    AOS.init({
      once: false,
      duration: 800,
    });
  } else {
    console.warn('AOS library not loaded.');
  }

  // Render timeline steps
  const timelineContainer = document.querySelector('.timeline');
  if (timelineContainer && Array.isArray(steps)) {
    steps.forEach(step => {
      const div = document.createElement('div');
      div.className = 'step';
      div.setAttribute('data-aos', step.animation);
      div.innerHTML = `<h3>${step.title}</h3><p>${step.description}</p>`;
      timelineContainer.appendChild(div);
    });
  } else {
    console.warn('Timeline container or steps data missing.');
  }

  // Render filler intro content
  const fillerIntro = document.querySelector('.filler-intro');
  if (fillerIntro && fillerIntroContent) {
    fillerIntro.innerHTML = `
      <h2>${fillerIntroContent.title}</h2>
      <p>${fillerIntroContent.description}</p>
    `;
  } else {
    console.warn('Filler intro container or content missing.');
  }

  // Scroll button logic
  const scrollBtn = document.getElementById('scrollBtn');
  const sections = document.querySelectorAll('header.hero-header, section, footer');

  function updateScrollBtn() {
    const scrollPos = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    if (scrollPos + windowHeight >= docHeight - 10) {
      scrollBtn.classList.add('up');
    } else if (scrollPos <= 10) {
      scrollBtn.classList.remove('up');
    }
  }

  if (scrollBtn) {
    window.addEventListener('scroll', updateScrollBtn);
    updateScrollBtn();

    scrollBtn.addEventListener('click', () => {
      if (scrollBtn.classList.contains('up')) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const scrollPos = window.scrollY;
        let nextSection = null;
        for (const section of sections) {
          const top = section.getBoundingClientRect().top + window.scrollY;
          if (top > scrollPos + 10) {
            nextSection = section;
            break;
          }
        }
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  } else {
    console.warn('Scroll button (#scrollBtn) not found.');
  }

  // Render project cards
  const projectContainer = document.querySelector('.project-cards');
  if (projectContainer && Array.isArray(projects)) {
    projects.forEach(project => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${project.image}" alt="${project.title} Screenshot" />
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.url}" target="_blank" rel="noopener" class="btn">View Project</a>
      `;
      projectContainer.appendChild(card);
    });
  } else {
    console.warn('Project container or projects data missing.');
  }
});
// Render footer content
const footer = document.querySelector('footer');
if (footer && footerContent) {
  footer.innerHTML = `
    <p>${footerContent.text}</p>
    <p>Contact: <a href="mailto:${footerContent.contactEmail}">${footerContent.contactEmail}</a></p>
    <p>
      <a href="${footerContent.githubUrl}" target="_blank" rel="noopener">GitHub</a> | 
      <a href="${footerContent.linkedinUrl}" target="_blank" rel="noopener">LinkedIn</a>
    </p>
  `;
} else {
  console.warn('Footer container or content missing.');
}
