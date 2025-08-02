document.addEventListener('DOMContentLoaded', () => {

    // --- DATA ---
    const timelineEvents = [
        { year: "2005", title: "Foundation Laid", description: "RK Construction is founded in San Antonio with a single backhoe and a commitment to quality.", image: "https://placehold.co/600x800/0D2B45/F8F9FA?text=2005" },
        { year: "2012", title: "Expansion to Austin", description: "Responding to regional growth, we expand our services to the booming Austin market.", image: "https://placehold.co/600x800/007BFF/FFFFFF?text=2012" },
        { year: "2018", title: "Major Fleet Upgrade", description: "A significant investment in new heavy machinery enhances our capabilities for large-scale commercial projects.", image: "https://placehold.co/600x800/1D2D3E/F8F9FA?text=2018" },
        { year: "Today", title: "Central Texas Leader", description: "Serving developers, contractors, and homeowners across the region as a leader in site preparation.", image: "https://placehold.co/600x800/FF4136/FFFFFF?text=Today" },
    ];

    const services = [
        { icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-12 h-12"><path d="M2 22v-5l5-5 5 5-5 5z"></path><path d="M9.5 14.5 16 8l3 3-6.5 6.5z"></path><path d="m17 5 3 3"></path><path d="m2 2 5 5"></path></svg>`, title: "Excavation" },
        { icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-12 h-12"><path d="M20.5 15.5c.3-1 .5-2.2.5-3.5a8.5 8.5 0 00-17 0c0 1.3.2 2.5.5 3.5" /><path d="M4 14h16" /><path d="M12 12V2.5" /><path d="M12 2.5L10.5 4" /><path d="M12 2.5L13.5 4" /></svg>`, title: "Demolition" },
        { icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-12 h-12"><path d="M3 3l18 18-5-5" /><path d="M13.5 8.5l4-4" /><path d="M2 8l4-4" /><path d="M2 13l4-4" /><path d="M2 18l4-4" /></svg>`, title: "Site Grading" },
        { icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-12 h-12"><path d="M14 22v-4a2 2 0 00-2-2H7a2 2 0 00-2 2v4h9zM5 16V9a2 2 0 012-2h5l4 4v5h-2M9 7V2l4 4"/></svg>`, title: "Paving & Concrete" },
    ];
    
    const projects = [
        { title: "Commercial Site Prep, Austin", image: "https://placehold.co/800x600/0D2B45/FFFFFF?text=Project+1" },
        { title: "Residential Pool Excavation, San Antonio", image: "https://placehold.co/800x600/007BFF/FFFFFF?text=Project+2" },
        { title: "Utility Trenching, Corpus Christi", image: "https://placehold.co/800x600/1D2D3E/FFFFFF?text=Project+3" }
    ];

    // --- HEADER & NAVIGATION ---
    const header = document.getElementById('header');
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOpenIcon = document.getElementById('menu-open-icon');
    const menuCloseIcon = document.getElementById('menu-close-icon');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow-lg', window.scrollY > 10);
        header.classList.toggle('shadow-sm', window.scrollY <= 10);
    }, { passive: true });

    menuBtn.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('hidden');
        menuOpenIcon.classList.toggle('hidden', !isOpen);
        menuCloseIcon.classList.toggle('hidden', isOpen);
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                menuOpenIcon.classList.remove('hidden');
                menuCloseIcon.classList.add('hidden');
            }
        });
    });

    // --- DYNAMIC CONTENT INJECTION ---
    const timelineImageContainer = document.getElementById('timeline-image-container');
    const timelineTextContainer = document.getElementById('timeline-text-container');
    if (timelineImageContainer && timelineTextContainer) {
        timelineEvents.forEach((event, index) => {
            timelineImageContainer.innerHTML += `<img src="${event.image}" alt="${event.title}" class="timeline-image absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl transition-opacity duration-500" style="opacity: ${index === 0 ? 1 : 0};" />`;
            timelineTextContainer.innerHTML += `
                <div class="timeline-text absolute inset-0 flex flex-col justify-center transition-all duration-500" style="opacity: ${index === 0 ? 1 : 0}; transform: translateY(0px);">
                    <div class="p-8 bg-gray-50/80 backdrop-blur-sm rounded-lg border border-gray-200">
                        <p class="text-2xl font-bold text-[#007BFF] font-poppins mb-2">${event.year}: ${event.title}</p>
                        <p class="text-gray-600">${event.description}</p>
                    </div>
                </div>`;
        });
    }

    const servicesGrid = document.getElementById('services-grid');
    if (servicesGrid) {
        services.forEach(service => {
            servicesGrid.innerHTML += `
                <div class="group relative bg-white p-8 rounded-lg text-center shadow-lg border border-gray-100 overflow-hidden">
                    <div class="absolute inset-0 bg-[#0D2B45] rounded-lg transition-transform duration-500 ease-in-out translate-y-full group-hover:translate-y-0"></div>
                    <div class="relative z-10 transition-transform duration-300 group-hover:-translate-y-1">
                        <div class="flex justify-center mb-5 text-[#007BFF] transition-colors duration-500 group-hover:text-white">${service.icon}</div>
                        <h3 class="text-xl font-bold text-[#1D2D3E] mb-3 font-poppins transition-colors duration-500 group-hover:text-white">${service.title}</h3>
                        <p class="text-gray-600 transition-colors duration-500 group-hover:text-gray-300">Precision work for projects of any scale.</p>
                    </div>
                </div>`;
        });
    }
    
    const projectsGrid = document.getElementById('projects-grid');
    if(projectsGrid) {
        projects.forEach(project => {
            projectsGrid.innerHTML += `
                <div class="group relative h-96 rounded-lg overflow-hidden shadow-lg">
                    <div class="overflow-hidden h-full">
                        <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 p-6">
                        <h3 class="text-white text-xl font-bold font-poppins">${project.title}</h3>
                    </div>
                </div>`;
        });
    }

    // --- INTERSECTION OBSERVER FOR ANIMATIONS ---
    const animatedSections = document.querySelectorAll('.animated-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    animatedSections.forEach(section => observer.observe(section));

    // --- STICKY SCROLL TIMELINE LOGIC ---
    const aboutSection = document.getElementById('about');
    if(aboutSection) {
        const images = aboutSection.querySelectorAll('.timeline-image');
        const texts = aboutSection.querySelectorAll('.timeline-text');
        const numEvents = timelineEvents.length;
        
        window.addEventListener('scroll', () => {
            const { top, height } = aboutSection.getBoundingClientRect();
            const scrollableDist = height - window.innerHeight;
            
            if (top <= 0 && top >= -scrollableDist) {
                const progress = -top / scrollableDist;
                const currentIndex = Math.floor(progress * (numEvents - 0.001));

                images.forEach((img, index) => {
                    img.style.opacity = index === currentIndex ? '1' : '0';
                });

                texts.forEach((text, index) => {
                    const distance = index - (progress * (numEvents -1));
                    let opacity = 0;
                    let y = 0;

                    if (eventProgress >= -0.5 && eventProgress <= 0.5) {
                        opacity = 1 - (Math.abs(eventProgress) / 0.5);
                        y = eventProgress * 20;
                    }
                    
                    text.style.opacity = opacity;
                    text.style.transform = `translateY(${y}px)`;
                });
            }
        }, { passive: true });
    }
});
