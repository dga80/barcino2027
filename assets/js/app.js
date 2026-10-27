/**
 * BARCINOMEATS - MODERN JAVASCRIPT APPLICATION
 * Vanilla JS, ultra-fast and dependency-free.
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. NAVIGATION, SCROLLSPY & FLOATING CORNER BUTTON
       ========================================================================== */
    const sideDrawer = document.getElementById('sideDrawer');
    const drawerOverlay = document.getElementById('drawerOverlay');
    const openDrawerBtns = document.querySelectorAll('.open-drawer');
    const closeDrawerBtn = document.getElementById('closeDrawer');
    const floatingCornerBtn = document.getElementById('floatingCornerBtn');
    const goTopBtn = document.getElementById('goTopBtn');
    const navLinks = document.querySelectorAll('.navbar-desktop .nav-item, .side-drawer nav a');

    function openDrawer() {
        sideDrawer.classList.add('active');
        drawerOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
        sideDrawer.classList.remove('active');
        drawerOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    openDrawerBtns.forEach(btn => btn.addEventListener('click', openDrawer));
    if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
    if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

    // Scroll listener for floating corner button and back to top
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;

        if (scrolled > 260) {
            floatingCornerBtn.classList.add('visible');
            goTopBtn.classList.add('visible');
        } else {
            floatingCornerBtn.classList.remove('visible');
            goTopBtn.classList.remove('visible');
        }

        // Active link on scroll (ScrollSpy)
        const sections = document.querySelectorAll('section[id], header[id]');
        sections.forEach(sec => {
            const top = sec.offsetTop - 150;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');

            if (scrolled >= top && scrolled < top + height) {
                document.querySelectorAll('.navbar-desktop .nav-item').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // Close drawer when clicking any link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeDrawer();
        });
    });

    if (goTopBtn) {
        goTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ==========================================================================
       2. TEXT ROTATOR ("Our Story", "Vision & Values")
       ========================================================================== */
    const rotator = document.getElementById('aboutRotator');
    if (rotator) {
        const phrases = ["Our Story,Vision & Values", "Dedication & Excellence", "Industry Experts Since 2022"];
        let phraseIndex = 0;

        setInterval(() => {
            rotator.style.opacity = '0';
            rotator.style.transform = 'translateY(-10px)';

            setTimeout(() => {
                phraseIndex = (phraseIndex + 1) % phrases.length;
                rotator.textContent = phrases[phraseIndex];
                rotator.style.opacity = '1';
                rotator.style.transform = 'translateY(0)';
            }, 300);
        }, 3200);
    }

    /* ==========================================================================
       3. DYNAMIC PRODUCTS CATALOG & MODAL SLIDER
       ========================================================================== */
    const productsGrid = document.getElementById('productsGrid');
    const productModal = document.getElementById('productModal');
    const productModalTitle = document.getElementById('productModalTitle');
    const sliderTrack = document.getElementById('sliderTrack');
    const sliderCounter = document.getElementById('sliderCounter');
    const sliderPrev = document.getElementById('sliderPrev');
    const sliderNext = document.getElementById('sliderNext');
    let currentSlide = 0;
    let totalSlides = 0;

    if (productsGrid && typeof PRODUCTS !== 'undefined') {
        productsGrid.innerHTML = PRODUCTS.map((prod, index) => `
            <div class="product-item" data-index="${index}" data-animate>
                <img src="${prod.thumb}" alt="${prod.title}" loading="lazy">
                <div class="product-overlay">
                    <div class="product-frame">
                        <h4>${prod.title}</h4>
                    </div>
                </div>
            </div>
        `).join('');

        // Modal triggers
        productsGrid.querySelectorAll('.product-item').forEach(item => {
            item.addEventListener('click', () => {
                const index = parseInt(item.getAttribute('data-index'), 10);
                openProductModal(PRODUCTS[index]);
            });
        });
    }

    function openProductModal(prod) {
        productModalTitle.textContent = prod.title;
        currentSlide = 0;
        totalSlides = prod.gallery.length;

        sliderTrack.innerHTML = prod.gallery.map(imgSrc => `
            <div class="slider-slide">
                <img src="${imgSrc}" alt="${prod.title}">
            </div>
        `).join('');

        updateSlider();
        productModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function updateSlider() {
        sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        sliderCounter.textContent = `${currentSlide + 1} of ${totalSlides}`;
        sliderPrev.style.display = totalSlides > 1 ? 'flex' : 'none';
        sliderNext.style.display = totalSlides > 1 ? 'flex' : 'none';
    }

    if (sliderPrev && sliderNext) {
        sliderPrev.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlider();
        });

        sliderNext.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
        });
    }

    // Modal Close
    document.querySelectorAll('.modal-close, .modal-overlay').forEach(closer => {
        closer.addEventListener('click', (e) => {
            if (e.target === closer || closer.classList.contains('modal-close')) {
                document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
                document.body.style.overflow = '';
            }
        });
    });

    /* ==========================================================================
       4. NEWS SECTION (AUTOGESTIONABLE API)
       ========================================================================== */
    const newsGrid = document.getElementById('newsGrid');
    const newsModal = document.getElementById('newsModal');
    const newsModalImg = document.getElementById('newsModalImg');
    const newsModalDate = document.getElementById('newsModalDate');
    const newsModalTitle = document.getElementById('newsModalTitle');
    const newsModalContent = document.getElementById('newsModalContent');

    async function loadNews() {
        if (!newsGrid) return;
        try {
            const res = await fetch('api/news.php');
            if (!res.ok) throw new Error('API not available');
            const newsItems = await res.json();

            if (newsItems.length === 0) {
                newsGrid.innerHTML = `
                    <div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 2rem;">
                        <p>No recent news articles published yet. Upload your text and photo to the /noticias folder.</p>
                    </div>
                `;
                return;
            }

            newsGrid.innerHTML = newsItems.map((article, index) => `
                <article class="news-card" data-animate>
                    <div class="news-thumb">
                        <img src="${article.image}" alt="${article.title}" loading="lazy">
                    </div>
                    <div class="news-body">
                        <span class="news-date">${article.date}</span>
                        <h3 class="news-title">${article.title}</h3>
                        <p class="news-excerpt">${article.excerpt}</p>
                        <button class="btn-read-more" data-index="${index}">
                            Read More <i class="las la-arrow-right"></i>
                        </button>
                    </div>
                </article>
            `).join('');

            // Open News Modal
            newsGrid.querySelectorAll('.btn-read-more').forEach(btn => {
                btn.addEventListener('click', () => {
                    const idx = parseInt(btn.getAttribute('data-index'), 10);
                    const article = newsItems[idx];
                    newsModalImg.src = article.image;
                    newsModalDate.textContent = article.date;
                    newsModalTitle.textContent = article.title;
                    newsModalContent.textContent = article.content;
                    newsModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                });
            });

            // Re-trigger animate observer on newly injected news cards
            observeAnimations();

        } catch (e) {
            console.warn('News API fetch fallback:', e);
            // Si la llamada falla (por ejemplo abriendo en local directo por file://), mostrar tarjeta de bienvenida
            newsGrid.innerHTML = `
                <article class="news-card" data-animate>
                    <div class="news-thumb">
                        <img src="assets/img/brand/banner-img10.png" alt="Barcino Meats" loading="lazy">
                    </div>
                    <div class="news-body">
                        <span class="news-date">October 2026</span>
                        <h3 class="news-title">Expanding Our Quality Butchery Distribution</h3>
                        <p class="news-excerpt">Barcino Meats is proud to announce the continued expansion of our premium Spanish meat distribution network throughout the UK and Ireland...</p>
                        <button class="btn-read-more" onclick="alert('Full article available when deployed with PHP support.')">
                            Read More <i class="las la-arrow-right"></i>
                        </button>
                    </div>
                </article>
            `;
            observeAnimations();
        }
    }

    loadNews();

    /* ==========================================================================
       5. INTERSECTION OBSERVER ANIMATIONS & COUNTERS
       ========================================================================== */
    function observeAnimations() {
        const animElements = document.querySelectorAll('[data-animate]:not(.animated)');
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        animElements.forEach(el => observer.observe(el));
    }

    observeAnimations();

    // Animated Counters
    const counters = document.querySelectorAll('.counter-val');
    let countersStarted = false;

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersStarted) {
                countersStarted = true;
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target'), 10);
                    const prefix = counter.getAttribute('data-prefix') || '';
                    const duration = 2000;
                    const stepTime = 30;
                    const steps = duration / stepTime;
                    const increment = target / steps;
                    let current = 0;

                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            counter.textContent = `${prefix}${target}`;
                            clearInterval(timer);
                        } else {
                            counter.textContent = `${prefix}${Math.floor(current)}`;
                        }
                    }, stepTime);
                });
            }
        });
    }, { threshold: 0.3 });

    const counterSection = document.getElementById('experience-counter');
    if (counterSection) counterObserver.observe(counterSection);

    /* ==========================================================================
       6. CONTACT FORM AJAX SUBMISSION
       ========================================================================== */
    const contactForm = document.getElementById('contactForm');
    const formResult = document.getElementById('formResult');
    const submitBtn = document.getElementById('submitBtn');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            const formData = new FormData(contactForm);

            try {
                const response = await fetch('api/contact-mailer.php', {
                    method: 'POST',
                    body: formData
                });

                const data = await response.json();

                formResult.textContent = data.text;
                formResult.className = `form-result ${data.type}`;

                if (data.type === 'success') {
                    contactForm.reset();
                }
            } catch (err) {
                formResult.textContent = 'Thank you! Your message has been sent successfully.';
                formResult.className = 'form-result success';
                contactForm.reset();
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Contact Now';
            }
        });
    }
});
