document.addEventListener('DOMContentLoaded', () => {

    /* FAQ Accordion Logic */
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const body = header.nextElementSibling;
            header.classList.toggle('active');
            if (header.classList.contains('active')) {
                body.style.maxHeight = body.scrollHeight + 'px';
            } else {
                body.style.maxHeight = 0;
            }
        });
    });

    /* Pricing Calculator Data */
    const pricingData = {
        instagram: {
            seguidores: [
                { label: "0 seguidores", price: 0.00, old: 0.00 },
                { label: "100 seguidores", price: 5.90, old: 8.85 },
                { label: "500 seguidores", price: 19.90, old: 29.85 },
                { label: "1.000 seguidores", price: 39.90, old: 59.85 },
                { label: "1.500 seguidores", price: 59.90, old: 89.85 },
                { label: "2.000 seguidores", price: 79.90, old: 119.85 },
                { label: "3.000 seguidores", price: 99.90, old: 149.85, confetti: true },
                { label: "4.000 seguidores", price: 139.90, old: 209.85 },
                { label: "5.000 seguidores", price: 179.90, old: 269.85 },
                { label: "10.000 seguidores", price: 299.90, old: 449.85, confetti: true },
                { label: "20.000 seguidores", price: 599.90, old: 899.85 },
                { label: "30.000 seguidores", price: 899.90, old: 1349.85, confetti: true }
            ],
            curtidas: [
                { label: "0 curtidas", price: 0.00, old: 0.00 },
                { label: "100 curtidas", price: 8.90, old: 13.35 },
                { label: "500 curtidas", price: 19.90, old: 29.85 },
                { label: "1.000 curtidas", price: 29.90, old: 44.85, confetti: true },
                { label: "2.000 curtidas", price: 54.90, old: 82.35 },
                { label: "3.000 curtidas", price: 85.90, old: 128.85 },
                { label: "5.000 curtidas", price: 142.90, old: 214.35, confetti: true },
                { label: "10.000 curtidas", price: 279.90, old: 419.85, confetti: true },
                { label: "20.000 curtidas", price: 549.90, old: 824.85 }
            ],
            views: [
                { label: "0 views", price: 0.00, old: 0.00 },
                { label: "1.000 views", price: 8.90, old: 13.35 },
                { label: "5.000 views", price: 44.90, old: 67.35, confetti: true },
                { label: "10.000 views", price: 89.90, old: 134.85, confetti: true },
                { label: "50.000 views", price: 259.90, old: 389.85, confetti: true }
            ]
        },
        tiktok: {
            seguidores: [
                { label: "0 seguidores", price: 0.00, old: 0.00 },
                { label: "500 seguidores", price: 29.90, old: 44.85 },
                { label: "1.000 seguidores", price: 57.90, old: 86.85 },
                { label: "3.000 seguidores", price: 149.90, old: 224.85 },
                { label: "5.000 seguidores", price: 239.90, old: 359.85, confetti: true },
                { label: "10.000 seguidores", price: 439.90, old: 659.85, confetti: true }
            ],
            curtidas: [
                { label: "500 curtidas", price: 34.90, old: 52.35 },
                { label: "1.000 curtidas", price: 59.90, old: 89.85, confetti: true },
                { label: "3.000 curtidas", price: 159.90, old: 239.85 },
                { label: "5.000 curtidas", price: 249.90, old: 374.85 },
                { label: "10.000 curtidas", price: 479.90, old: 719.85 }
            ],
            views: [
                { label: "1.000 views", price: 9.90, old: 14.85 },
                { label: "5.000 views", price: 47.90, old: 71.85 },
                { label: "10.000 views", price: 89.90, old: 134.85, confetti: true },
                { label: "50.000 views", price: 269.90, old: 404.85 }
            ]
        }
    };

    let activePlatform = 'instagram';
    let activeService = null;
    let initialLoad = true;

    function formatMoney(value) {
        return 'R$ ' + value.toFixed(2).replace('.', ',');
    }

    function fireConfetti() {
        if (window.confetti && !initialLoad) {
            confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 }, zIndex: 9999 });
        }
    }

    window.changePlatform = function(platform) {
        activePlatform = platform;
        document.documentElement.setAttribute('data-platform', platform);
        renderServiceButtons();
        initialLoad = false;
        
        const container = document.getElementById('service-selection-container');
        if (container) {
            setTimeout(() => {
                container.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        }
    }

    function renderServiceButtons() {
        const container = document.getElementById('service-selection-container');
        if (container) container.style.display = 'block';
        const grid = document.getElementById('service-buttons-grid');
        if (!grid) return;
        grid.innerHTML = '';

        const services = [
            { id: 'seguidores', label: 'Seguidores', icon: '🚀' },
            { id: 'curtidas', label: 'Curtidas', icon: '❤️' }
        ];
        if (activePlatform === 'tiktok') services.push({ id: 'views', label: 'Views', icon: '👀' });

        services.forEach(s => {
            const card = document.createElement('div');
            card.className = `service-card serv-${s.id}`;
            card.onclick = () => selectService(s.id);
            card.innerHTML = `<h4>${s.icon} ${s.label}</h4>`;
            grid.appendChild(card);
        });
    }

    window.selectService = function(serviceId) {
        activeService = serviceId;
        const container = document.getElementById('package-selection-container');
        if (container) container.style.display = 'block';
        renderPackages();
        container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function renderPackages() {
        const heroContainer = document.getElementById('package-hero');
        const gridContainer = document.getElementById('package-grid');
        const othersContainer = document.getElementById('package-others');

        if (!heroContainer || !gridContainer) return;

        heroContainer.innerHTML = '';
        gridContainer.innerHTML = '';
        if (othersContainer) othersContainer.innerHTML = '';

        // Garantir espaco para o badge nao ser cortado (nao usar cssText - sobrescreve overflow)
        heroContainer.style.paddingTop = '34px';
        heroContainer.style.marginBottom = '2.5rem';
        heroContainer.style.overflow = 'visible';

        const allData = pricingData[activePlatform][activeService];
        const parseQty = (label) => parseInt(label.replace(/\D/g, ''));



        // --- 2. HERO OFFER (1.300 pelo preço de 1.000) ---
        const price1kItem = allData.find(p => parseQty(p.label) === 1000);
        if (price1kItem) {
            heroContainer.appendChild(createPackageCard({
                label: "1.300",
                serviceText: activeService,
                price: price1kItem.price,
                old: price1kItem.old,
                tag: "Oferta Primeira Compra",
                subtitle: `Pelo preço de 1.000`,
                hero: true
            }));
        }

        // --- 3. MAIN GRID (Starter, Boost, Pro, Premium) ---
        let mainGridItems = [];
        if (activeService === 'curtidas') {
            mainGridItems = [
                { qty: 1000, desc: 'Entrega rápida e segura', featured: false },
                { qty: 3000, desc: 'Entrega rápida e segura', featured: true, badge: 'MAIS ESCOLHIDO' },
                { qty: 5000, desc: 'Entrega rápida e segura', featured: false },
                { qty: 10000, desc: 'Entrega rápida e segura', featured: false }
            ];
        } else {
            mainGridItems = [
                { qty: 1000, desc: 'Entrega rápida e segura', featured: false },
                { qty: 3000, desc: 'Entrega rápida e segura', featured: true, badge: 'MAIS ESCOLHIDO' },
                { qty: 5000, desc: 'Entrega rápida e segura', featured: false },
                { qty: 10000, desc: 'Entrega rápida e segura', featured: false }
            ];
        }

        mainGridItems.forEach(item => {
            const pkgData = allData.find(p => parseQty(p.label) === item.qty);
            if (pkgData) {
                gridContainer.appendChild(createPackageCard({
                    label: pkgData.label.split(' ')[0],
                    serviceText: activeService,
                    price: pkgData.price,
                    old: pkgData.old,
                    featured: item.featured,
                    tag: item.badge,
                    subtitle: item.desc
                }));
            }
        });
    }

    function createPackageCard(pkg) {
        const isHero = !!pkg.hero;
        const isFeatured = !!pkg.featured;
        const neonColor = activePlatform === 'instagram' ? '#00ff88' : '#00f2ea';
        const borderColor = isHero ? '#f9ce34' : neonColor;
        const glowColor = isHero ? 'rgba(249,206,52,0.3)' : (activePlatform === 'instagram' ? 'rgba(0,255,136,0.25)' : 'rgba(0,242,234,0.25)');

        const viewsCount = Math.floor(Math.random() * (5000 - 3000) + 3000);
        const salesCount = Math.floor(Math.random() * (450 - 350) + 350);

        // Logo inline
        const logoHtml = activePlatform === 'instagram'
            ? `<div style="width:90px;height:90px;border-radius:22px;background:radial-gradient(circle at 30% 107%,#fdf497 0%,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285AEB 90%);display:flex;align-items:center;justify-content:center;margin:0 auto 1.25rem;box-shadow:0 8px 20px rgba(0,0,0,0.5);">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" width="46" height="46"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </div>`
            : `<div style="width:90px;height:90px;border-radius:22px;background:#111;border:2px solid rgba(0,242,234,0.4);display:flex;align-items:center;justify-content:center;margin:0 auto 1.25rem;box-shadow:0 8px 20px rgba(0,0,0,0.5);">
                <svg viewBox="0 0 24 24" fill="white" width="46" height="46"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9a8.2 8.2 0 0 0 4.79 1.52V7.07a4.85 4.85 0 0 1-1.02-.38z"/></svg>
              </div>`;

        // WRAPPER: tem overflow:visible e padding-top para o badge flutuar acima sem ser cortado
        const wrapper = document.createElement('div');
        wrapper.style.cssText = `
            position:relative;
            padding-top:${(isHero || isFeatured) ? '22px' : '0'};
            max-width:${isHero ? '480px' : '290px'};
            margin:${isHero ? '0 auto' : '0 auto'};
            width:100%;
            overflow:visible;
        `;

        // Badge: fica no wrapper, nao no card — escapa de qualquer overflow do card
        if (isHero || isFeatured) {
            const badge = document.createElement('div');
            badge.style.cssText = `
                position:absolute;
                top:0;
                left:50%;
                transform:translateX(-50%);
                background:linear-gradient(90deg,#f9ce34,#ee9617);
                color:#000;
                padding:0.55rem 2rem;
                border-radius:99px;
                font-size:0.85rem;
                font-weight:900;
                text-transform:uppercase;
                letter-spacing:1px;
                white-space:nowrap;
                z-index:100;
                box-shadow:0 5px 15px rgba(249,206,52,0.4);
                font-family:inherit;
            `;
            badge.textContent = `⚡ ${pkg.tag || 'OFERTA RELÂMPAGO'} ⚡`;
            wrapper.appendChild(badge);
        }

        // Card
        const card = document.createElement('div');
        card.style.cssText = `
            position:relative;
            background:#0d0d0d;
            border-radius:28px;
            border:2.5px solid ${borderColor};
            box-shadow:0 0 35px ${glowColor}, 0 15px 40px rgba(0,0,0,0.4);
            padding:${isHero ? '3rem 2.5rem 2.5rem' : '2.5rem 1.75rem 2rem'};
            text-align:center;
            color:#fff;
            width:100%;
            box-sizing:border-box;
            transition:transform 0.3s ease, box-shadow 0.3s ease;
        `;

        card.onmouseenter = () => {
            card.style.transform = 'translateY(-6px)';
            card.style.boxShadow = `0 0 50px ${glowColor}, 0 20px 50px rgba(0,0,0,0.5)`;
        };
        card.onmouseleave = () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = `0 0 35px ${glowColor}, 0 15px 40px rgba(0,0,0,0.4)`;
        };

        card.innerHTML = `
            <div style="display:flex;flex-direction:column;align-items:center;">
                ${logoHtml}
                <h2 style="font-size:${isHero ? '2.8rem' : '2.2rem'};font-weight:900;color:#fff;margin:0 0 0.4rem;letter-spacing:-1px;line-height:1;font-family:inherit;">${pkg.label} <span style="font-size:${isHero ? '1.4rem' : '1.1rem'};font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:2px;">${pkg.serviceText}</span></h2>
                <div style="font-size:0.95rem;color:#94a3b8;font-weight:600;margin-bottom:1.25rem;font-family:inherit;">⚡ ${pkg.subtitle}</div>

                <div style="display:inline-flex;align-items:center;gap:0.5rem;background:rgba(239,68,68,0.12);color:#ef4444;padding:0.4rem 1.1rem;border-radius:99px;font-size:0.82rem;font-weight:800;margin-bottom:1.5rem;border:1px solid rgba(239,68,68,0.2);font-family:inherit;">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    ${viewsCount} visualizações
                </div>

                <div style="font-size:${isHero ? '4.5rem' : '3.5rem'};font-weight:950;color:#fff;line-height:1;letter-spacing:-3px;margin-bottom:0.4rem;font-family:inherit;">R$ ${pkg.price.toFixed(2).replace('.', ',')}</div>
                <div style="font-size:0.88rem;color:#64748b;margin-bottom:2rem;font-family:inherit;">de <span style="text-decoration:line-through;color:#f59e0b;">R$ ${pkg.old.toFixed(2).replace('.', ',')}</span> por <span style="color:#10b981;font-weight:800;">R$ ${pkg.price.toFixed(2).replace('.', ',')}</span> - Oferta exclusiva</div>

                <button onclick="openCheckoutWithPackage('${pkg.label} ${pkg.serviceText}', ${pkg.price})" style="display:block;width:100%;background:#f9ce34;color:#000;padding:1.2rem;border-radius:14px;font-size:1.2rem;font-weight:900;border:none;cursor:pointer;box-shadow:0 8px 22px rgba(249,206,52,0.45);letter-spacing:0.5px;font-family:inherit;text-transform:uppercase;margin-bottom:1.25rem;">
                    COMPRAR AGORA
                </button>

                <div style="display:flex;align-items:center;justify-content:center;gap:0.5rem;font-size:0.88rem;font-weight:700;color:#64748b;font-family:inherit;">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                    ${salesCount} vendas realizadas
                </div>
            </div>
        `;

        wrapper.appendChild(card);
        return wrapper; // Retorna o wrapper, nao o card diretamente
    }

    document.addEventListener('change', (e) => {
        if (e.target.id === 'chk-order-bump') {
            const card = document.getElementById('order-bump-card');
            if (e.target.checked) {
                card.classList.add('active');
                fireConfetti();
            } else {
                card.classList.remove('active');
            }
            updateCheckoutTotal();
        }
    });
    let selectedPackage = { label: '', price: 0 };

    window.updateCheckoutTotal = function() {
        const isBump = document.getElementById('chk-order-bump').checked;
        const finalPrice = isBump ? (selectedPackage.price * 1.8) : selectedPackage.price;
        document.getElementById('txt-price-header').textContent = formatMoney(finalPrice);
    };

    window.openCheckoutWithPackage = function(label, price) {
        selectedPackage = { label, price };
        
        // Populate Header
        document.getElementById('txt-qty-header').textContent = label;
        
        // Reset checkbox & trigger total update logic
        const bumpCheck = document.getElementById('chk-order-bump');
        bumpCheck.checked = false;
        document.getElementById('order-bump-card').classList.remove('active');
        
        // Populate Bump Fields (+x por apenas y)
        const discountPrice = price * 0.8; // 20% discount on the duplicate bump item
        document.getElementById('bump-title-text').textContent = `Adicione +${label.toLowerCase()} por apenas`;
        document.getElementById('bump-price-current').textContent = formatMoney(discountPrice);
        document.getElementById('bump-price-old').textContent = `De ${formatMoney(price)}`;
        document.getElementById('bump-discount-percent').textContent = `ECONOMIZE 20%`;

        updateCheckoutTotal();

        // Reveal the Modal
        document.getElementById('checkout-modal-overlay').classList.add('show');
        document.body.style.overflow = 'hidden';
        
        // Trigger visual engagement
        if(window.randomizeScarcity) window.randomizeScarcity();
        if(window.startBumpCountdown) window.startBumpCountdown();
    };

    window.resetCheckout = function() {
        document.getElementById('checkout-modal-overlay').classList.remove('show');
        document.body.style.overflow = '';
    }

    window.randomizeScarcity = function() {
        const count = document.getElementById('txt-fomo-count');
        if (count) count.textContent = Math.floor(Math.random() * 200 + 300);
    }

    let bumpTimerInterval;
    window.startBumpCountdown = function() {
        if (bumpTimerInterval) clearInterval(bumpTimerInterval);
        let timeLeft = 300;
        const display = document.getElementById('bump-countdown');
        bumpTimerInterval = setInterval(() => {
            let mins = Math.floor(timeLeft / 60);
            let secs = timeLeft % 60;
            if (display) display.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
            if (timeLeft-- <= 0) clearInterval(bumpTimerInterval);
        }, 1000);
    }

    const btnFechar = document.getElementById('btn-fechar-pedido');
    if (btnFechar) {
        btnFechar.addEventListener('click', () => {
            const user = document.getElementById('chk-username').value;
            if (!user) { alert('Insira seu perfil!'); return; }
            
            const isBump = document.getElementById('chk-order-bump').checked;
            const total = selectedPackage.price * (isBump ? 1.8 : 1);

            let msg = `🚀 *NOVO PEDIDO*\n\nPerfil: ${user}\nPacote: ${selectedPackage.label}\nOrder Bump: ${isBump ? 'Sim' : 'Não'}\nTotal: ${formatMoney(total)}`;
            window.location.href = `https://wa.me/5544997162210?text=${encodeURIComponent(msg)}`;
        });
    }

    /* --- Hero Particles System --- */
    const canvas = document.getElementById('hero-particles');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = document.querySelector('.hero').offsetHeight;

        let particles = [];
        const mouse = { x: null, y: null, radius: 150 };

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            const heroEl = document.querySelector('.hero');
            if(heroEl) height = canvas.height = heroEl.offsetHeight;
            initParticles();
        });

        const heroSection = document.querySelector('.hero');
        if(heroSection) {
            heroSection.addEventListener('mousemove', (e) => {
                const rect = canvas.getBoundingClientRect();
                mouse.x = e.clientX - rect.left;
                mouse.y = e.clientY - rect.top;
            });
            heroSection.addEventListener('mouseleave', () => {
                mouse.x = null;
                mouse.y = null;
            });
        }

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 2 + 1;
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = (Math.random() * 30) + 1;
                this.vx = (Math.random() - 0.5) * 1.2;
                this.vy = (Math.random() - 0.5) * 1.2;
            }
            draw() {
                ctx.fillStyle = activePlatform === 'instagram' ? 'rgba(221, 36, 118, 0.4)' : 'rgba(0, 242, 234, 0.4)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx = -this.vx;
                if (this.y < 0 || this.y > height) this.vy = -this.vy;

                if (mouse.x != null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouse.radius) {
                        let force = (mouse.radius - distance) / mouse.radius;
                        let directionX = (dx / distance) * force * this.density;
                        let directionY = (dy / distance) * force * this.density;
                        this.x -= directionX;
                        this.y -= directionY;
                    }
                }
            }
        }

        function initParticles() {
            particles = [];
            let numberOfParticles = (canvas.width * canvas.height) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
                // Connect particles
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 100) {
                        ctx.strokeStyle = activePlatform === 'instagram' ? 
                            `rgba(221, 36, 118, ${(1 - distance/100) * 0.15})` : 
                            `rgba(0, 242, 234, ${(1 - distance/100) * 0.15})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(animate);
        }

        initParticles();
        animate();
    }

    // Scroll Reveal Initializer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

});
