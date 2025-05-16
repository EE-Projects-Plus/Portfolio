document.addEventListener('DOMContentLoaded', () => {
  console.log('Script loaded! ✅');

  AOS.init({
  once: false, // Optional: animate every time section enters view
  duration: 800, // Adjust speed
});

  // Timeline steps
  const steps = [
    {
      title: "1. Discover",
      description: "Understand your goals, audience, and brand direction.",
      animation: "fade-right"
    },
    {
      title: "2. Plan",
      description: "Outline features, content flow, and key design elements.",
      animation: "fade-left"
    },
    {
      title: "3. Build",
      description: "Develop responsive, accessible code using clean structure.",
      animation: "fade-right"
    },
    {
      title: "4. Optimize",
      description: "Leverage AI tools to speed up writing, testing and QA.",
      animation: "fade-left"
    },
    {
      title: "5. Launch",
      description: "Deploy, test live, and support any post-launch updates.",
      animation: "fade-right"
    }
  ];

  const container = document.querySelector('.timeline');
  if (container) {
    steps.forEach(step => {
      const div = document.createElement('div');
      div.className = 'step';
      div.setAttribute('data-aos', step.animation);

      div.innerHTML = `
        <h3>${step.title}</h3>
        <p>${step.description}</p>
      `;

      container.appendChild(div);
    });
  } else {
    console.warn('Timeline container not found.');
  }

  // Scroll button logic
  const scrollBtn = document.getElementById('scrollBtn');
  const allSections = Array.from(document.querySelectorAll('section'));

  if (scrollBtn && allSections.length > 0) {
    scrollBtn.addEventListener('click', () => {
      const currentY = window.scrollY;
      const next = allSections.find(section => section.offsetTop > currentY + 10);

      if (next) {
        next.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn('No further section to scroll to.');
      }
    });
  } else {
    console.warn('Scroll button or sections not found.');
  }
});

const projects = [
  {
    title: "Portfolio Website",
    description: "A clean and modern portfolio site built with HTML, CSS, and JS.",
    image: "portfolio.jpg",
    url: "https://yourportfolio.com",
  },
  {
    title: "E-commerce Store",
    description: "A full-stack store with React and Node.js backend.",
    image: "store.jpg",
    url: "https://yourstore.com",
  },
  {
    title: "E-commerce Store",
    description: "A full-stack store with React and Node.js backend.",
    image: "store.jpg",
    url: "https://yourstore.com",
  },
  // Add more projects here
];

const projectContainer = document.querySelector('.project-cards');
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
