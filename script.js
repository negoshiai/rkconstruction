document.addEventListener('DOMContentLoaded', function () {

    // --- Header Logic ---
    const header = document.getElementById('header');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Handle header style on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('shadow-lg');
        } else {
            header.classList.remove('shadow-lg');
        }
    });
    
    // Toggle mobile menu
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    });

    // --- General Animations with Intersection Observer ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.masked-text, .animated-section, .hero-image-container, .animated-item').forEach(el => {
        observer.observe(el);
    });

    // --- Magnetic Button Logic ---
    document.querySelectorAll('.magnetic-button').forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = button.getBoundingClientRect();
            const middleX = clientX - (left + width / 2);
            const middleY = clientY - (top + height / 2);
            button.style.transform = `translate(${middleX * 0.1}px, ${middleY * 0.1}px)`;
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0)';
        });
    });

    // --- Data for Dynamic Sections ---
    const timelineEvents = [
        { year: "2005", title: "Foundation Laid", description: "RK Construction is founded in San Antonio with a single backhoe and a commitment to quality.", image: "https://placehold.co/600x800/0D2B45/F8F9FA?text=2005" },
        { year: "2012", title: "Expansion to Austin", description: "Responding to regional growth, we expand our services to the booming Austin market.", image: "https://placehold.co/600x800/007BFF/FFFFFF?text=2012" },
        { year: "2018", title: "Major Fleet Upgrade", description: "A significant investment in new heavy machinery enhances our capabilities for large-scale commercial projects.", image: "https://placehold.co/600x800/1D2D3E/F8F9FA?text=2018" },
        { year: "Today", title: "Central Texas Leader", description: "Serving developers, contractors, and homeowners across the region as a leader in site preparation.", image: "https://placehold.co/600x800/FF4136/FFFFFF?text=Today" },
    ];

    const services = [
        { icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-12 h-12"><path d="M2 17a2 2 0 104 0 2 2 0 10-4 0zM9 17a2 2 0 104 0 2 2 0 10-4 0zM16 17a2 2 0 104 0 2 2 0 10-4 0z" /><path d="M4.5 17h-3M11.5 17h-1M18.5 17h-1" /><path d="M18 17l-3-9 2-3h3l2 3-3 9" /><path d="M8 17l-3-9 2-3h3l2 3-3 9" /><path d="M11 5l-2-3" /><path d="M15 5l2-3" /><path d="M9 8h6" /></svg>`, title: "Excavation" },
        { icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-12 h-12"><path d="M20.5 15.5c.3-1 .5-2.2.5-3.5a8.5 8.5 0 00-17 0c0 1.3.2 2.5.5 3.5" /><path d="M4 14h16" /><path d="M12 12V2.5" /><path d="M12 2.5L10.5 4" /><path d="M12 2.5L13.5 4" /></svg>`, title: "Demolition" },
        { icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-12 h-12"><path d="M3 3l18 18-5-5" /><path d="M13.5 8.5l4-4" /><path d="M2 8l4-4" /><path d="M2 13l4-4" /><path d="M2 18l4-4" /></svg>`, title: "Site Grading" },
        { icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-12 h-12"><path d="M14 22v-4a2 2 0 00-2-2H7a2 2 0 00-2 2v4h9zM5 16V9a2 2 0 012-2h5l4 4v5h-2M9 7V2l4 4"/></svg>`, title: "Paving & Concrete" },
    ];

    const projects = [
        { title: "Commercial Site Prep, Austin", image: "https://placehold.co/800x600/0D2B45/FFFFFF?text=Project+1" },
        { title: "Residential Pool Excavation, San Antonio", image: "https://placehold.co/800x600/007BFF/FFFFFF?text=Project+2" },
        { title: "Utility Trenching, Corpus Christi", image: "https://placehold.co/800x600/1D2D3E/FFFFFF?text=Project+3" }
    ];

    // --- Populate Dynamic Sections ---
    const aboutImageContainer = document.getElementById('about-image-container');
    const aboutTextContainer = document.getElementById('about-text-container');
    timelineEvents.forEach(event => {
        aboutImageContainer.innerHTML += `<img src="${event.image}" alt="${event.title}" class="about-image absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl transition-opacity duration-500" style="opacity: 0;"/>`;
        aboutTextContainer.innerHTML += `<div class="about-text-item absolute inset-0 flex flex-col justify-center transition-all duration-500" style="opacity: 0; transform: translateY(20px);">
            <div class="p-8 bg-gray-50/80 backdrop-blur-sm rounded-lg border border-gray-200">
                <p class="text-2xl font-bold text-[#007BFF] font-poppins mb-2">${event.year}: ${event.title}</p>
                <p class="text-gray-600">${event.description}</p>
            </div>
        </div>`;
    });

    const servicesGrid = document.getElementById('services-grid');
    services.forEach((service, index) => {
        servicesGrid.innerHTML += `<div class="group relative bg-white p-8 rounded-lg text-center shadow-lg border border-gray-100 animated-section" style="transition-delay: ${index * 0.1}s">
            <div class="absolute inset-0 bg-[#0D2B45] rounded-lg transition-transform duration-500 ease-in-out translate-y-full group-hover:translate-y-0"></div>
            <div class="relative z-10 transition-all duration-300 group-hover:-translate-y-1">
                <div class="flex justify-center mb-5 text-[#007BFF] transition-colors duration-500 group-hover:text-white">${service.icon}</div>
                <h3 class="text-xl font-bold text-[#1D2D3E] mb-3 font-poppins transition-colors duration-500 group-hover:text-white">${service.title}</h3>
                <p class="text-gray-600 transition-colors duration-500 group-hover:text-gray-300">Precision work for projects of any scale.</p>
            </div>
        </div>`;
    });

    const projectsGrid = document.getElementById('projects-grid');
    projects.forEach((project, index) => {
        projectsGrid.innerHTML += `<div class="group relative h-96 rounded-lg overflow-hidden shadow-lg animated-section" style="transition-delay: ${index * 0.15}s">
            <div class="overflow-hidden h-full">
                <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-0 left-0 p-6">
                <h3 class="text-white text-xl font-bold font-poppins">${project.title}</h3>
            </div>
        </div>`;
    });

    // --- About Sticky Scroll Logic ---
    const aboutSection = document.getElementById('about');
    const aboutImages = document.querySelectorAll('.about-image');
    const aboutTextItems = document.querySelectorAll('.about-text-item');
    if (aboutSection) {
        window.addEventListener('scroll', () => {
            const { top, height } = aboutSection.getBoundingClientRect();
            const scrollableHeight = height - window.innerHeight;
            let progress = (-top) / scrollableHeight;
            progress = Math.max(0, Math.min(1, progress));

            const totalItems = timelineEvents.length;
            const itemIndex = Math.floor(progress * totalItems);

            aboutImages.forEach((img, index) => {
                img.style.opacity = index === itemIndex ? '1' : '0';
            });
            aboutTextItems.forEach((text, index) => {
                const itemProgress = (progress * totalItems) - index;
                const opacity = Math.max(0, 1 - Math.abs(itemProgress - 0.5) * 2);
                const y = (itemProgress - 0.5) * -40;
                text.style.opacity = opacity;
                text.style.transform = `translateY(${y}px)`;
            });
        });
    }
});
