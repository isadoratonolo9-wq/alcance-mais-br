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
                { label: "3.000 curtidas", price: 85.90, old: 128.85 },
                { label: "5.000 curtidas", price: 142.90, old: 214.35, confetti: true }
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
                { label: "5.000 seguidores", price: 239.90, old: 359.85, confetti: true },
                { label: "10.000 seguidores", price: 439.90, old: 659.85, confetti: true }
            ],
            curtidas: [
                { label: "1.000 curtidas", price: 59.90, old: 89.85, confetti: true }
            ],
            views: [
                { label: "10.000 views", price: 89.90, old: 134.85, confetti: true }
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
            card.innerHTML = `<h3>${s.icon} ${s.label}</h3>`;
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
        const grid = document.getElementById('package-grid');
        if (!grid) return;
        grid.innerHTML = '';
        const data = pricingData[activePlatform][activeService];

        data.forEach(pkg => {
            if (pkg.price === 0) return;
            const card = document.createElement('div');
            card.className = 'package-card reveal active';
            card.innerHTML = `
                <div class="package-qty">${pkg.label}</div>
                <div class="package-price">R$ ${pkg.price.toFixed(2).replace('.', ',')}</div>
                <button class="btn-package" onclick="openCheckoutWithPackage('${pkg.label}', ${pkg.price})">Escolher</button>
            `;
            grid.appendChild(card);
        });
    }

    let selectedPackage = { label: '', price: 0 };

    window.openCheckoutWithPackage = function(label, price) {
        selectedPackage = { label, price };
        openCheckoutModal();
    }

    window.openCheckoutModal = function() {
        const overlay = document.getElementById('checkout-modal-overlay');
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
        
        updateCheckoutTotal();
        startBumpCountdown();
        randomizeScarcity();
        
        setTimeout(() => {
            const fill = document.querySelector('.stock-fill');
            if (fill) fill.style.width = '95%';
        }, 300);

        if(window.feather) feather.replace();
    }

    window.updateCheckoutTotal = function() {
        const txtQty = document.getElementById('txt-qty-header');
        const txtPriceHeader = document.getElementById('txt-price-header');
        if (txtQty) txtQty.textContent = selectedPackage.label;
        if (txtPriceHeader) txtPriceHeader.textContent = formatMoney(selectedPackage.price);

        const bumpPriceValue = selectedPackage.price * 0.8;
        const bumpTitleTxt = document.getElementById('bump-title-text');
        const bumpPriceCurrent = document.getElementById('bump-price-current');
        
        if (bumpTitleTxt) bumpTitleTxt.textContent = `Adicione +${selectedPackage.label} por apenas`;
        if (bumpPriceCurrent) bumpPriceCurrent.textContent = formatMoney(bumpPriceValue);

        const chk = document.getElementById('chk-order-bump');
        const finalPrice = selectedPackage.price + (chk && chk.checked ? bumpPriceValue : 0);
        
        const btnFech = document.getElementById('btn-fechar-pedido');
        if (btnFech) btnFech.textContent = chk && chk.checked ? `Continuar - ${formatMoney(finalPrice)}` : `Continuar`;
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
