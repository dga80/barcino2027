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
    const productsCategories = document.getElementById('productsCategories');
    const productsGrid = document.getElementById('productsGrid');
    const productModal = document.getElementById('productModal');
    const productModalTitle = document.getElementById('productModalTitle');
    const productModalDesc = document.getElementById('productModalDesc');
    const sliderTrack = document.getElementById('sliderTrack');
    const sliderCounter = document.getElementById('sliderCounter');
    const sliderPrev = document.getElementById('sliderPrev');
    const sliderNext = document.getElementById('sliderNext');
    let currentSlide = 0;
    let totalSlides = 0;
    let activeCategory = 'pork';
    let lastFocusedTrigger = null;

    function renderCategoryFilters() {
        if (!productsCategories || typeof PRODUCT_CATEGORIES === 'undefined') return;

        productsCategories.innerHTML = PRODUCT_CATEGORIES.map(cat => {
            const isActive = cat.id === activeCategory;
            const count = typeof PRODUCTS !== 'undefined'
                ? PRODUCTS.filter(p => p.category === cat.id).length
                : 0;
            return `
                <button type="button" class="category-pill ${isActive ? 'active' : ''}" data-category="${cat.id}" aria-pressed="${isActive}">
                    <span class="category-pill-label">${cat.label}</span>
                    ${count > 0 ? `<span class="category-pill-count">${count}</span>` : ''}
                </button>
            `;
        }).join('');

        productsCategories.querySelectorAll('.category-pill').forEach(btn => {
            btn.addEventListener('click', () => {
                activeCategory = btn.getAttribute('data-category');
                renderCategoryFilters();
                renderProductsGrid();
            });
        });
    }

    function renderProductsGrid() {
        if (!productsGrid || typeof PRODUCTS === 'undefined') return;

        const filtered = PRODUCTS
            .map((prod, originalIndex) => ({ ...prod, originalIndex }))
            .filter(prod => prod.category === activeCategory);

        if (filtered.length === 0) {
            const catObj = (typeof PRODUCT_CATEGORIES !== 'undefined'
                ? PRODUCT_CATEGORIES.find(c => c.id === activeCategory)
                : null) || { label: activeCategory, description: '' };

            productsGrid.innerHTML = `
                <div class="product-category-empty">
                    <i class="las la-camera product-empty-icon" aria-hidden="true"></i>
                    <h3>${catObj.label}</h3>
                    <p class="product-empty-desc">${catObj.description}</p>
                    <p class="product-empty-note">Product gallery images for <strong>${catObj.label}</strong> will be available soon. Contact our team directly for full cut specifications, availability and wholesale pricing.</p>
                    <a href="#contact" class="btn-outline-gold">Request Specifications</a>
                </div>
            `;
            return;
        }

        productsGrid.innerHTML = filtered.map(prod => {
            const photoCount = prod.gallery ? prod.gallery.length : 1;
            return `
                <button type="button" class="product-item" data-index="${prod.originalIndex}">
                    <div class="product-thumb">
                        <img src="${prod.thumb}" alt="${prod.title}" loading="lazy">
                        <span class="product-photo-badge">
                            <i class="las la-search-plus" aria-hidden="true"></i>
                            ${photoCount} ${photoCount === 1 ? 'photo' : 'photos'}
                        </span>
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">${prod.title}</h3>
                        <p class="product-desc">${prod.description || 'Click to enlarge & view gallery'}</p>
                    </div>
                </button>
            `;
        }).join('');

        productsGrid.querySelectorAll('.product-item').forEach(item => {
            item.addEventListener('click', () => {
                lastFocusedTrigger = item;
                const index = parseInt(item.getAttribute('data-index'), 10);
                openProductModal(PRODUCTS[index]);
            });
        });
    }

    if (productsGrid && typeof PRODUCTS !== 'undefined') {
        renderCategoryFilters();
        renderProductsGrid();
    }

    function openProductModal(prod) {
        productModalTitle.textContent = prod.title;
        if (productModalDesc) {
            productModalDesc.textContent = prod.description || '';
        }
        currentSlide = 0;
        totalSlides = prod.gallery.length;

        sliderTrack.innerHTML = prod.gallery.map((imgSrc, idx) => `
            <div class="slider-slide">
                <img src="${imgSrc}" alt="${prod.title} - view ${idx + 1} of ${prod.gallery.length}">
            </div>
        `).join('');

        updateSlider();
        productModal.classList.add('active');
        document.body.style.overflow = 'hidden';

        const closeBtn = productModal.querySelector('.modal-close');
        if (closeBtn) closeBtn.focus();
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

    function closeAllModals() {
        document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
        document.body.style.overflow = '';
        if (lastFocusedTrigger) {
            lastFocusedTrigger.focus();
            lastFocusedTrigger = null;
        }
    }

    // Modal Close
    document.querySelectorAll('.modal-close, .modal-overlay').forEach(closer => {
        closer.addEventListener('click', (e) => {
            if (e.target === closer || closer.classList.contains('modal-close')) {
                closeAllModals();
            }
        });
    });

    // Keyboard navigation for Product Slider Modal
    document.addEventListener('keydown', (e) => {
        if (productModal && productModal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeAllModals();
            } else if (e.key === 'ArrowLeft' && totalSlides > 1) {
                currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                updateSlider();
            } else if (e.key === 'ArrowRight' && totalSlides > 1) {
                currentSlide = (currentSlide + 1) % totalSlides;
                updateSlider();
            }
        } else if (e.key === 'Escape') {
            closeAllModals();
        }
    });

    /* ==========================================================================
       4. NEWS SECTION (AUTOGESTIONABLE API + STATIC/GITHUB PAGES FALLBACK)
       ========================================================================== */
    const newsGrid = document.getElementById('newsGrid');
    const newsModal = document.getElementById('newsModal');
    const newsModalImg = document.getElementById('newsModalImg');
    const newsModalDate = document.getElementById('newsModalDate');
    const newsModalTitle = document.getElementById('newsModalTitle');
    const newsModalContent = document.getElementById('newsModalContent');

    const FALLBACK_NEWS = [
        {
            id: "654e2da93b06a6b55e877859a7f5570f",
            title: "A Great Honour and Privilege: Joining The Worshipful Company of Butchers",
            excerpt: "I am delighted and honoured to share that I have been accepted as a member of The Worshipful Company of Butchers in London.",
            content: "I am delighted and honoured to share that I have been accepted as a member of The Worshipful Company of Butchers in London.\n\nJoining such a historic institution, with centuries of tradition and a strong connection to the meat and food industry, is a great privilege for me both personally and professionally.\n\nI would like to express my sincere thanks to everyone who has supported and encouraged me throughout this process, especially Paul, Miles and Carla, for their kindness, guidance and assistance.\n\nI look forward to becoming part of this distinguished community, contributing to its traditions and values, and building new relationships with fellow members.\n\nA very special moment and a great honour.\n\nThank you, The Worshipful Company of Butchers, for this opportunity.",
            image: "noticias/noticia_06_09_2026/cabecera.png",
            date: "06 Sep 2026",
            timestamp: 1788696000
        }
    ];

    function renderNewsItems(newsItems) {
        if (!newsItems || newsItems.length === 0) {
            newsGrid.innerHTML = `
                <div style="text-align: center; color: var(--text-muted); padding: 2rem; width: 100%;">
                    <p>No recent news articles published yet. Upload your text and photo to the /noticias folder.</p>
                </div>
            `;
            return;
        }

        newsGrid.innerHTML = newsItems.map((article, index) => `
            <article class="news-card" data-animate>
                <div class="news-thumb">
                    <img src="${article.image}" alt="${article.title}" loading="lazy" onerror="this.onerror=null;this.src='assets/img/brand/banner-img10.png';">
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

        newsGrid.querySelectorAll('.btn-read-more, .news-thumb').forEach(el => {
            el.addEventListener('click', (e) => {
                const card = e.currentTarget.closest('.news-card');
                const btn = card ? card.querySelector('.btn-read-more') : e.currentTarget;
                const idx = parseInt(btn.getAttribute('data-index'), 10);
                const article = newsItems[idx];
                if (!article) return;
                newsModalImg.src = article.image;
                newsModalImg.alt = article.title;
                newsModalDate.textContent = article.date;
                newsModalTitle.textContent = article.title;
                newsModalContent.textContent = article.content;
                newsModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        observeAnimations();
    }

    async function loadNews() {
        if (!newsGrid) return;
        try {
            const res = await fetch('api/news.php');
            if (!res.ok) throw new Error('PHP API not available');
            const text = await res.text();
            if (text.trim().startsWith('<?php')) throw new Error('PHP not executed on static host');
            const newsItems = JSON.parse(text);
            renderNewsItems(newsItems);
        } catch (e) {
            try {
                const resJson = await fetch('noticias/news.json');
                if (!resJson.ok) throw new Error('Static JSON not available');
                const newsItems = await resJson.json();
                renderNewsItems(newsItems);
            } catch (e2) {
                renderNewsItems(FALLBACK_NEWS);
            }
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
