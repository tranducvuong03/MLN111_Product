// Detect dark mode preference
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
});

// Dark mode toggle
document.getElementById('modeToggle').addEventListener('click', function () {
    document.documentElement.classList.toggle('dark');
});

// Wait for DOM content to be loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Progress bar
    window.addEventListener('scroll', function () {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        document.getElementById("progressBar").style.width = scrolled + "%";
    });

    // Navigation dots click handler
    const navDots = document.querySelectorAll('.nav-dot');
    navDots.forEach(dot => {
        dot.addEventListener('click', function () {
            const targetSlide = document.getElementById(this.dataset.slide);
            window.scrollTo({
                top: targetSlide.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Update active nav dot on scroll
    function updateActiveNavDot() {
        const sections = document.querySelectorAll('.slide');
        const navDots = document.querySelectorAll('.nav-dot');

        let currentSectionId = '';
        let currentSectionOffset = Number.MAX_VALUE;

        const scrollPosition = window.scrollY + window.innerHeight / 3;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const offset = Math.abs(scrollPosition - sectionTop);
                if (offset < currentSectionOffset) {
                    currentSectionOffset = offset;
                    currentSectionId = section.id;
                }
            }
        });

        navDots.forEach(dot => {
            dot.classList.remove('active');
            if (dot.dataset.slide === currentSectionId) {
                dot.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavDot);
    updateActiveNavDot(); // Initialize

    // Animate slide content when it comes into view
    const slideContents = document.querySelectorAll('.slide-content');
    slideContents.forEach(content => {
        gsap.fromTo(content,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: content,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );
    });

    // Animate slide-from-left elements
    const fromLeftElements = document.querySelectorAll('.slide-from-left');
    fromLeftElements.forEach(element => {
        gsap.fromTo(element,
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );
    });

    // Animate slide-from-right elements
    const fromRightElements = document.querySelectorAll('.slide-from-right');
    fromRightElements.forEach(element => {
        gsap.fromTo(element,
            { opacity: 0, x: 50 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );
    });

    // Animate scale-in elements
    const scaleInElements = document.querySelectorAll('.scale-in');
    scaleInElements.forEach(element => {
        gsap.fromTo(element,
            { opacity: 0, scale: 0.8 },
            {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );
    });

    // Animate fade-up elements
    const fadeUpElements = document.querySelectorAll('.fade-up');
    fadeUpElements.forEach((element, index) => {
        gsap.fromTo(element,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: index * 0.1,
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            }
        );
    });

    // Animate appear-after elements (with delay)
    const appearElements = document.querySelectorAll('.appear-after');
    appearElements.forEach(element => {
        gsap.fromTo(element,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                delay: 0.6,
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );
    });

    // Animate fade-in-slow elements
    const fadeInSlowElements = document.querySelectorAll('.fade-in-slow');
    fadeInSlowElements.forEach(element => {
        gsap.fromTo(element,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1.5,
                delay: 1,
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            }
        );
    });

    // Animate SVG circle
    const circles = document.querySelectorAll('.icon-circle');
    circles.forEach(circle => {
        gsap.fromTo(circle,
            { strokeDashoffset: 100 },
            {
                strokeDashoffset: 0,
                duration: 1.5,
                delay: 0.5,
                scrollTrigger: {
                    trigger: circle,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );
    });

    // Animate SVG paths
    const paths = document.querySelectorAll('.icon-path');
    paths.forEach(path => {
        gsap.fromTo(path,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 0.5,
                delay: 1.5,
                scrollTrigger: {
                    trigger: path,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );
    });

    // Animate highlight boxes
    const highlightBoxes = document.querySelectorAll('.highlight-box');
    highlightBoxes.forEach(box => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: box,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });

        timeline.fromTo(box,
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0, duration: 0.6 }
        ).to(box, {
            className: "+=highlighted",
            duration: 0.4
        }, "+=0.3").to(box, {
            className: "-=highlighted",
            duration: 0.4
        }, "+=1");
    });

    // Split text animation
    const splitTextElements = document.querySelectorAll('.split-text');
    splitTextElements.forEach(element => {
        // Get the original text
        const text = element.textContent;
        // Clear the element
        element.textContent = '';

        // Create spans for each letter
        for (let i = 0; i < text.length; i++) {
            const span = document.createElement('span');
            span.textContent = text[i];
            element.appendChild(span);
        }

        // Animate each letter
        gsap.fromTo(element.querySelectorAll('span'),
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.05,
                stagger: 0.03,
                delay: 0.3,
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );
    });

    // Timeline dots animation
    const timelineDots = document.querySelectorAll('.timeline-dot');
    timelineDots.forEach(dot => {
        gsap.fromTo(dot,
            { scale: 0 },
            {
                scale: 1,
                duration: 0.4,
                scrollTrigger: {
                    trigger: dot,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            }
        );
    });

    // Orbit animation
    const orbitals = document.querySelectorAll('.orbital');
    orbitals.forEach((orbital, index) => {
        gsap.fromTo(orbital,
            { opacity: 0, scale: 0 },
            {
                opacity: 1,
                scale: 1,
                duration: 0.6,
                delay: 0.2 * index,
                scrollTrigger: {
                    trigger: orbital,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );

        // Create continuous rotation animation
        gsap.to(orbital, {
            rotation: 360,
            transformOrigin: "center center",
            duration: 20 + index * 3,
            repeat: -1,
            ease: "none",
            scrollTrigger: {
                trigger: orbital,
                start: "top 80%"
            }
        });
    });

    // Images hover animation
    const imgFrames = document.querySelectorAll('.img-frame');
    imgFrames.forEach(frame => {
        gsap.fromTo(frame,
            { opacity: 0, scale: 0.9, rotation: -3 },
            {
                opacity: 1,
                scale: 1,
                rotation: -1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: frame,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            }
        );
    });
});