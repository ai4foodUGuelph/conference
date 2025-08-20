// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu');
    const menuSec = document.querySelector('.menu-sec');
    const cancelIcon = document.querySelector('.cancel');
    
    if (menuIcon && menuSec) {
        menuIcon.addEventListener('click', function() {
            menuSec.style.display = 'flex';
        });
    }
    
    if (cancelIcon && menuSec) {
        cancelIcon.addEventListener('click', function() {
            menuSec.style.display = 'none';
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation to stats numbers on scroll
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(number => {
                    const target = parseInt(number.getAttribute('data-target'));
                    animateCounter(number, target);
                });
            }
        });
    }, observerOptions);
    
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        observer.observe(statsSection);
    }
    
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 30);
    }
    
    // Legacy speaker functionality for compatibility
    const allSpeakers = document.querySelector('.speakers');
    if (allSpeakers) {
        // Speaker code here if needed
    }
});

const guests = [
  {
    Name: 'RENATA QUINTINI',
    Title: 'FOUNDER AT RENEGADE PARTNERS',
    Description: 'Renata is a co-founder of Renegade Partners. Renata was a partner at early-stage deep tech investment firm Lux Capital.',
    Img: './SPEAKERS/speaker1.avif',
    Alt: 'speaker1',
  },

  {
    Name: 'HANS TUNG',
    Title: 'MANAGING PARTNER AT GGV CAPITAL',
    Description: 'Hans is consistently recognized among the top VC investors in the world, and has been named to the Forbes Midas list every year, most recently ranking #3.',
    Img: './SPEAKERS/speaker2.avif',
    Alt: 'speaker2',
  },

  {
    Name: 'THOMAS DOHMKE',
    Title: 'CEO AT GITHUB',
    Description: 'Thomas holds a PhD in mechanical engineering, and enjoys coding and making GitHub contribution graphs green.',
    Img: './SPEAKERS/extra.avif',
    Alt: 'speaker3',
  },

  {
    Name: 'JEFF SHINER',
    Title: 'CEO AT 1PASSWORD',
    Description: 'Jeff is the CEO of 1Password, a leader in human-centric security and privacy.',
    Img: './SPEAKERS/speaker4e.avif',
    Alt: 'speaker4',
  },

  {
    Name: 'CATHERINE POWELL',
    Title: 'GLOBAL HEAD OF HOSTING AT AIRBNB',
    Description: 'Catherine is the global head of hosting at Airbnb, where she leads the team that supports hosts around the world.',
    Img: './SPEAKERS/speak5.avif',
    Alt: 'speaker5',
  },

  {
    Name: 'ERIC SCHMIDT',
    Title: 'CO-FOUNDER AT SCHMIDT FUTURES',
    Description: 'Eric is an accomplished technologist, entrepreneur, author and philanthropist. He served as Google’s chairman and CEO',
    Img: './SPEAKERS/speaker6.avif',
    Alt: 'speaker6',
  },
];

function guestSpeakers() {
  let speakerOut = '';
  for (let i = 0; i < guests.length; i += 1) {
    speakerOut += `
        <li class="guest">
        <img src="${guests[i].Img}" alt="${guests[i].Alt}">
        <section>
        <h3>
        ${guests[i].Name}
        </h3>
        <p class="p1">
        ${guests[i].Title}
        </p>
        <p class="p2">
        ${guests[i].Description}
        </p>
        </section>
        </li>`;
  }

  allSpeakers.innerHTML = speakerOut;
}

guestSpeakers();

const loadMoreBtn = document.querySelector('#load-more');
let currentItem = 2;

loadMoreBtn.onclick = () => {
  const boxes = [...document.querySelectorAll('.sec3 .speakers .guest')];
  for (let i = currentItem; i < currentItem + 2; i += 1) {
    boxes[i].style.display = 'inline-block';
  }
  currentItem += 2;

  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = 'none';
  }
};
