document.addEventListener('DOMContentLoaded', () => {

    // --- DATA ---
    const historyData = [
        { year: 1981, event: "Founded in Anchorage by Bill & Helga Watterson, built on a foundation of family values and Alaskan grit.", image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop" },
        { year: 2006, event: "Received the prestigious Commanders Award and USAF Landscape Architecture Honor Award, establishing a legacy of quality.", image: "https://images.unsplash.com/photo-1511055223314-63412a4b4f3a?q=80&w=800&auto=format&fit=crop" },
        { year: 2010, event: "Earned the Safety Innovation of the Year Award for the COF project at Fort Wainwright, pioneering new safety standards.", image: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=800&auto=format&fit=crop" },
        { year: 2019, event: "Leadership transitions to the next generation as Jim Watterson becomes President, ensuring continuity and a forward-looking vision.", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop" },
        { year: "Today", event: "Consistently ranked as a Top 49er, we continue to build Alaska's future with world-class precision and an unwavering commitment to our people.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" }
    ];

    const servicesData = [
        { icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-12 h-12 text-[#D4AF37]"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>`, title: "Design/Build", description: "A streamlined, single-source approach from concept to completion, maximizing efficiency and collaboration." },
        { icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-12 h-12 text-[#D4AF37]"><path d="M2 16A10 10 0 0 1 12 6a10 10 0 0 1 10 10"></path><path d="M12 2v4"></path><path d="M20 16h2"></path><path d="M2 16H0"></path></svg>`, title: "CM @ Risk", description: "We act as your trusted partner, managing project risk and ensuring cost and schedule certainty." },
        { icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-12 h-12 text-[#D4AF37]"><rect x="4" y="4" width="16" height="18" rx="2" ry="2"></rect><line x1="8" y1="9" x2="16" y2="9"></line><line x1="8" y1="13" x2="16" y2="13"></line><line x1="8" y1="17" x2="12" y2="17"></line></svg>`, title: "Design-Bid-Build", description: "Executing traditional projects with precision, quality, and an unwavering commitment to your design." },
    ];

    const projectsData = [
        { title: "Fort Wainwright Barracks", category: "Military", img: "https://images.unsplash.com/photo-1519974719765-e6559eac2575?q=80&w=2070&auto=format&fit=crop" },
        { title: "Chester Valley Elementary", category: "Education", img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1932&auto=format&fit=crop" },
        { title: "UAF West Ridge Research Bldg", category: "Education", img: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2070&auto=format&fit=crop" },
        { title: "Fred Meyer Retail Center", category: "Commercial", img: "https://images.unsplash.com/photo-1590152914996-62c6d1729b68?q=80&w=2070&auto=format&fit=crop" },
        { title: "Data Center Facility", category: "Industrial", img: "https://images.unsplash.com/photo-1581094376363-45533c1767a1?q=80&w=2070&auto=format&fit=crop" },
    ];

    // --- HEADER & NAVIGATION ---
    const header = document.getElementById('header');
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOpenIcon = document.getElementById('menu-open-icon');
    const menuCloseIcon = document.getElementById('menu-close-icon');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        const isScrolled = window.scrollY > 50;
        header.classList.toggle('bg-white', isScrolled);
        header.classList.toggle('shadow-lg', isScrolled);
        header.classList.toggle('bg-transparent', !isScrolled);
        header.querySelector('a.font-poppins').classList.toggle('text-[#0A2342]', isScrolled);
        header.querySelector('a.font-poppins').classList.toggle('text-white', !isScrolled);
        header.querySelectorAll('nav a').forEach(link => {
            link.classList.toggle('text-gray-700', isScrolled);
            link.classList.toggle('hover:text-[#D4AF37]', isScrolled);
            link.classList.toggle('text-gray-200', !isScrolled);
            link.classList.toggle('hover:text-white', !isScrolled);
        });
        menuBtn.classList.toggle('text-[#0A2342]', isScrolled);
        menuBtn.classList.toggle('text-white', !isScrolled);
    }, { passive: true });

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        menuOpenIcon.classList.toggle('hidden');
        menuCloseIcon.classList.toggle('hidden');
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
        historyData.forEach((item, index) => {
            timelineImageContainer.innerHTML += `<img src="${item.image}" alt="${item.title}" class="timeline-image absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl transition-opacity duration-500" style="opacity: ${index === 0 ? 1 : 0};" />`;
            timelineTextContainer.innerHTML += `
                <div class="timeline-text absolute inset-0 flex flex-col justify-center transition-all duration-500" style="opacity: ${index === 0 ? 1 : 0}; transform: translateY(0px);">
                    <div class="p-8 bg-gray-50/80 backdrop-blur-sm rounded-lg border border-gray-200">
                        <p class="text-2xl font-bold text-[#D4AF37] font-poppins mb-2">${item.year}</p>
                        <p class="text-gray-600">${item.event}</p>
                    </div>
                </div>`;
        });
    }

    const servicesGrid = document.getElementById('services-grid');
    if(servicesGrid) {
        servicesData.forEach(service => {
            servicesGrid.innerHTML += `
                <div class="text-center p-8 rounded-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100">
                    <div class="flex justify-center mb-4">${service.icon}</div>
                    <h3 class="text-xl font-bold text-[#0A2342] mb-3 font-poppins">${service.title}</h3>
                    <p class="text-gray-600">${service.description}</p>
                </div>`;
        });
    }
    
    const carouselTrack = document.getElementById('carousel-track');
    if(carouselTrack) {
        projectsData.forEach(project => {
            carouselTrack.innerHTML += `
                <div class="w-full flex-shrink-0 px-4">
                    <div class="group relative overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
                        <img src="${project.img}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div class="absolute bottom-0 left-0 p-6 text-white">
                            <p class="text-sm font-semibold text-[#D4AF37]">${project.category}</p>
                            <h3 class="text-xl font-bold font-poppins">${project.title}</h3>
                        </div>
                    </div>
                </div>`;
        });

        let currentIndex = 0;
        const totalSlides = projectsData.length;
        const nextBtn = document.getElementById('next-btn');
        const prevBtn = document.getElementById('prev-btn');

        const updateCarousel = () => {
            carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
        };

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateCarousel();
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
    if (aboutSection) {
        const images = aboutSection.querySelectorAll('.timeline-image');
        const texts = aboutSection.querySelectorAll('.timeline-text');
        const numEvents = historyData.length;

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
                    const eventProgress = (progress * (numEvents - 1)) - index;
                    let opacity = 0;
                    let y = 0;

                    if (eventProgress >= -0.5 && eventProgress <= 0.5) {
                        opacity = 1 - (Math.abs(eventProgress) / 0.5);
                        y = eventProgress * 40;
                    }
                    
                    text.style.opacity = opacity;
                    text.style.transform = `translateY(${y}px)`;
                });
            }
        }, { passive: true });
    }
});
