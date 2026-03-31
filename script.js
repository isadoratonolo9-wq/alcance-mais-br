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
                { label: "6.000 seguidores", price: 209.90, old: 314.85 },
                { label: "7.000 seguidores", price: 249.90, old: 374.85 },
                { label: "8.000 seguidores", price: 279.90, old: 419.85 },
                { label: "10.000 seguidores", price: 299.90, old: 449.85, confetti: true },
                { label: "20.000 seguidores", price: 599.90, old: 899.85 },
                { label: "30.000 seguidores", price: 899.90, old: 1349.85, confetti: true }
            ],
            curtidas: [
                { label: "0 curtidas", price: 0.00, old: 0.00 },
                { label: "100 curtidas", price: 8.90, old: 13.35 },
                { label: "200 curtidas", price: 12.90, old: 19.35 },
                { label: "400 curtidas", price: 15.90, old: 23.85 },
                { label: "600 curtidas", price: 19.90, old: 29.85 },
                { label: "800 curtidas", price: 24.90, old: 37.35 },
                { label: "1.000 curtidas", price: 29.90, old: 44.85, confetti: true },
                { label: "1.200 curtidas", price: 36.90, old: 55.35 },
                { label: "1.400 curtidas", price: 41.90, old: 62.85 },
                { label: "1.600 curtidas", price: 46.90, old: 70.35 },
                { label: "1.800 curtidas", price: 50.90, old: 76.35 },
                { label: "2.200 curtidas", price: 61.90, old: 92.85 },
                { label: "2.400 curtidas", price: 67.90, old: 101.85 },
                { label: "2.600 curtidas", price: 71.90, old: 107.85 },
                { label: "2.800 curtidas", price: 78.90, old: 118.35 },
                { label: "3.000 curtidas", price: 85.90, old: 128.85 },
                { label: "4.000 curtidas", price: 113.90, old: 170.85 },
                { label: "5.000 curtidas", price: 142.90, old: 214.35, confetti: true },
                { label: "8.000 curtidas", price: 227.90, old: 341.85 },
                { label: "10.000 curtidas", price: 287.90, old: 431.85, confetti: true }
            ],
            views: [
                { label: "0 views", price: 0.00, old: 0.00 },
                { label: "1.000 views", price: 8.90, old: 13.35 },
                { label: "2.000 views", price: 17.90, old: 26.85 },
                { label: "3.000 views", price: 26.90, old: 40.35 },
                { label: "4.000 views", price: 35.90, old: 53.85 },
                { label: "5.000 views", price: 44.90, old: 67.35, confetti: true },
                { label: "6.000 views", price: 53.90, old: 80.85 },
                { label: "7.000 views", price: 62.90, old: 94.35 },
                { label: "8.000 views", price: 71.90, old: 107.85 },
                { label: "10.000 views", price: 89.90, old: 134.85, confetti: true },
                { label: "12.000 views", price: 105.90, old: 158.85 },
                { label: "13.000 views", price: 113.90, old: 170.85 },
                { label: "14.000 views", price: 121.90, old: 182.85 },
                { label: "18.000 views", price: 153.90, old: 230.85 },
                { label: "20.000 views", price: 169.90, old: 254.85 },
                { label: "30.000 views", price: 199.90, old: 299.85, confetti: true },
                { label: "50.000 views", price: 259.90, old: 389.85, confetti: true }
            ]
        },
        tiktok: {
            seguidores: [
                { label: "0 seguidores", price: 0.00, old: 0.00 },
                { label: "500 seguidores", price: 29.90, old: 44.85 },
                { label: "1.000 seguidores", price: 57.90, old: 86.85 },
                { label: "1.500 seguidores", price: 87.90, old: 131.85 },
                { label: "2.000 seguidores", price: 109.90, old: 164.85 },
                { label: "2.500 seguidores", price: 134.90, old: 202.35 },
                { label: "3.000 seguidores", price: 157.90, old: 236.85, confetti: true },
                { label: "3.500 seguidores", price: 179.90, old: 269.85 },
                { label: "4.000 seguidores", price: 199.90, old: 299.85 },
                { label: "4.500 seguidores", price: 219.90, old: 329.85 },
                { label: "5.000 seguidores", price: 239.90, old: 359.85, confetti: true },
                { label: "5.500 seguidores", price: 259.90, old: 389.85 },
                { label: "6.000 seguidores", price: 279.90, old: 419.85 },
                { label: "7.000 seguidores", price: 319.90, old: 479.85 },
                { label: "8.000 seguidores", price: 359.90, old: 539.85 },
                { label: "9.000 seguidores", price: 399.90, old: 599.85 },
                { label: "10.000 seguidores", price: 439.90, old: 659.85, confetti: true }
            ],
            curtidas: [
                { label: "0 curtidas", price: 0.00, old: 0.00 },
                { label: "200 curtidas", price: 14.90, old: 22.35 },
                { label: "400 curtidas", price: 27.90, old: 41.85 },
                { label: "600 curtidas", price: 39.90, old: 59.85 },
                { label: "800 curtidas", price: 49.90, old: 74.85 },
                { label: "1.000 curtidas", price: 59.90, old: 89.85, confetti: true },
                { label: "1.400 curtidas", price: 79.90, old: 119.85 },
                { label: "1.800 curtidas", price: 99.90, old: 149.85 },
                { label: "2.200 curtidas", price: 119.90, old: 179.85 },
                { label: "2.600 curtidas", price: 139.90, old: 209.85 },
                { label: "3.200 curtidas", price: 169.90, old: 254.85 },
                { label: "3.600 curtidas", price: 189.90, old: 284.85 },
                { label: "4.000 curtidas", price: 209.90, old: 314.85 },
                { label: "5.000 curtidas", price: 259.90, old: 389.85, confetti: true }
            ],
            views: [
                { label: "0 views", price: 0.00, old: 0.00 },
                { label: "1.000 views", price: 9.90, old: 14.85 },
                { label: "2.000 views", price: 18.90, old: 28.35 },
                { label: "3.000 views", price: 27.90, old: 41.85 },
                { label: "4.000 views", price: 36.90, old: 55.35 },
                { label: "5.000 views", price: 45.90, old: 68.85, confetti: true },
                { label: "6.000 views", price: 54.90, old: 82.35 },
                { label: "7.000 views", price: 63.90, old: 95.85 },
                { label: "8.000 views", price: 72.90, old: 109.35 },
                { label: "9.000 views", price: 81.90, old: 122.85 },
                { label: "10.000 views", price: 89.90, old: 134.85, confetti: true },
                { label: "11.000 views", price: 97.90, old: 146.85 },
                { label: "12.000 views", price: 105.90, old: 158.85 },
                { label: "13.000 views", price: 113.90, old: 170.85 },
                { label: "14.000 views", price: 121.90, old: 182.85 },
                { label: "15.000 views", price: 129.90, old: 194.85, confetti: true },
                { label: "16.000 views", price: 137.90, old: 206.85 },
                { label: "17.000 views", price: 145.90, old: 218.85 },
                { label: "18.000 views", price: 153.90, old: 230.85 },
                { label: "19.000 views", price: 161.90, old: 242.85 },
                { label: "20.000 views", price: 169.90, old: 254.85, confetti: true }
            ]
        }
    };

    let activePlatform = 'instagram'; // default
    let isPromoPath = false; // Flag para saber se veio pela oferta de 1000+300

    const rSeg = document.getElementById('range-seguidores');
    const rCur = document.getElementById('range-curtidas');
    const rView = document.getElementById('range-views');

    function formatMoney(value) {
        return 'R$ ' + value.toFixed(2).replace('.', ',');
    }

    let lastConfettiStates = { seg: -1, cur: -1, view: -1 };
    let initialLoad = true;
    function fireConfetti() {
        if (window.confetti && !initialLoad) {
            confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 }, zIndex: 9999 });
        }
    }

    function initSlidersRanges() {
        if(!rSeg) return;
        const data = pricingData[activePlatform];
        rSeg.max = data.seguidores.length - 1;
        rCur.max = data.curtidas.length - 1;
        rView.max = data.views.length - 1;
    }

    function updateCart() {
        if(!rSeg) return;
        const data = pricingData[activePlatform];
        
        // Ensure max is correct
        if(rSeg.max != data.seguidores.length - 1) initSlidersRanges();

        // Safe bounds
        let sVal = Math.min(rSeg.value, data.seguidores.length - 1);
        let cVal = Math.min(rCur.value, data.curtidas.length - 1);
        let vVal = Math.min(rView.value, data.views.length - 1);

        const segItem = data.seguidores[sVal];
        const curItem = data.curtidas[cVal];
        const viewItem = data.views[vVal];

        // Confetti logic
        if (segItem.confetti && lastConfettiStates.seg !== sVal) { fireConfetti(); }
        lastConfettiStates.seg = sVal;
        
        if (curItem.confetti && lastConfettiStates.cur !== cVal) { fireConfetti(); }
        lastConfettiStates.cur = cVal;
        
        if (viewItem.confetti && lastConfettiStates.view !== vVal) { fireConfetti(); }
        lastConfettiStates.view = vVal;

        // Update Labels
        document.getElementById('label-seguidores').textContent = segItem.label;
        document.getElementById('label-curtidas').textContent = curItem.label;
        document.getElementById('label-views').textContent = viewItem.label;

        // Update Individual Prices
        document.getElementById('price-seguidores').textContent = formatMoney(segItem.price);
        document.getElementById('price-curtidas').textContent = formatMoney(curItem.price);
        document.getElementById('price-views').textContent = formatMoney(viewItem.price);

        // Calculate Totals
        const currentTotal = segItem.price + curItem.price + viewItem.price;
        const oldTotal = segItem.old + curItem.old + viewItem.old;

        // Apply Totals
        const currentElements = document.querySelectorAll('.current-price, .total-current');
        const oldElements = document.querySelectorAll('.old-price, .total-old');

        currentElements.forEach(el => el.textContent = formatMoney(currentTotal));
        
        oldElements.forEach(el => {
            if(oldTotal > 0) {
                el.style.display = 'inline-block';
                el.textContent = formatMoney(oldTotal);
            } else {
                el.style.display = 'none';
            }
        });

        // Update ranges CSS variable for background progress
        updateRangeProgress(rSeg);
        updateRangeProgress(rCur);
        updateRangeProgress(rView);
        
        initialLoad = false;
    }

    function updateRangeProgress(slider) {
        let max = slider.max || 1;
        const val = (slider.value - slider.min) / (max - slider.min) * 100;
        slider.style.setProperty('--value', val + '%');
    }

    if(rSeg) {
        rSeg.addEventListener('input', updateCart);
        rCur.addEventListener('input', updateCart);
        rView.addEventListener('input', updateCart);
        initSlidersRanges();
        updateCart(); // Initialize
    }

    // Expose platform switcher to global scope
    window.changePlatform = function(platform) {
        activePlatform = platform;
        
        // Reset sliders
        rSeg.value = 0;
        rCur.value = 0;
        rView.value = 0;
        
        const promoInsta  = document.getElementById('promo-instagram');
        const promoTiktok = document.getElementById('promo-tiktok');

        if (platform === 'instagram') {
            if(promoInsta)  promoInsta.style.display  = 'block';
            if(promoTiktok) promoTiktok.style.display = 'none';
            // Rola direto para a oferta de primeira compra do Instagram
            setTimeout(() => promoInsta && promoInsta.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
        } else {
            if(promoInsta)  promoInsta.style.display  = 'none';
            if(promoTiktok) promoTiktok.style.display = 'block';
            // Rola direto para a oferta de primeira compra do TikTok
            setTimeout(() => promoTiktok && promoTiktok.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
        }
        
        if(window.feather) { feather.replace(); }
        updateCart();
    }

    /* --- Scroll Reveal Logic --- */
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px 0px -50px 0px', threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

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
            height = canvas.height = document.querySelector('.hero').offsetHeight;
            initParticles();
        });

        document.querySelector('.hero').addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        });
        document.querySelector('.hero').addEventListener('mouseleave', () => {
            mouse.x = null;
            mouse.y = null;
        });

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 2 + 1.5;
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = (Math.random() * 20) + 1;
                this.vx = (Math.random() - 0.5) * 1.5;
                this.vy = (Math.random() - 0.5) * 1.5;
            }
            draw() {
                ctx.fillStyle = 'rgba(90, 44, 201, 0.7)';
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

                // Mouse interactivity
                if (mouse.x != null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    let forceDirectionX = dx / distance;
                    let forceDirectionY = dy / distance;
                    let maxDistance = mouse.radius;
                    let force = (maxDistance - distance) / maxDistance;
                    let directionX = forceDirectionX * force * this.density;
                    let directionY = forceDirectionY * force * this.density;

                    if (distance < mouse.radius) {
                        this.x -= directionX;
                        this.y -= directionY;
                    }
                }
            }
        }

        function initParticles() {
            particles = [];
            for (let i = 0; i < 80; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 100) {
                        ctx.strokeStyle = 'rgba(90, 44, 201,' + (1 - distance / 100) * 0.2 + ')';
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

    /* =========================================
       CHECKOUT & UPSELL LOGIC
    ========================================= */
    const btnAvancar = document.getElementById('btn-avancar');
    const checkoutPanel = document.getElementById('checkout-panel');
    const calculatorSetup = document.getElementById('calculator-setup');
    const promoContainer = document.getElementById('promo-container');
    const dynamicInputs = document.getElementById('checkout-dynamic-inputs');
    const usernameInput = document.getElementById('order-username');
    
    let promoSelections = { seguidores: false, curtidas: false, views: false };

    if (btnAvancar) {
        btnAvancar.addEventListener('click', () => {
            isPromoPath = false; // Se clicou em avançar pela régua, não é o caminho da promo fixa
            const data = pricingData[activePlatform];
            const sVal = parseInt(rSeg.value);
            const cVal = parseInt(rCur.value);
            const vVal = parseInt(rView.value);
            const username = document.getElementById('order-username').value;

            // 1. Validação do Username (@)
            if (sVal > 0 && (!username || username.trim() === "")) {
                const wrap = document.querySelector('.card-profile-input .input-wrap');
                wrap.classList.add('shake', 'shake-input');
                document.getElementById('order-username').focus();
                setTimeout(() => wrap.classList.remove('shake', 'shake-input'), 400);
                return;
            }

            // Sync with checkout username
            document.getElementById('chk-username').value = username;

            // 2. Preparar Checkout
            openCheckoutPanel();
        });
    }

    function openCheckoutPanel() {
        const data = pricingData[activePlatform];
        const sVal = parseInt(rSeg.value);
        const cVal = parseInt(rCur.value);
        const vVal = parseInt(rView.value);

        const dynamicContainer = document.getElementById('dynamic-bumps-container');
        const linkContainer = document.getElementById('checkout-link-inputs'); // Container for URLs

        dynamicContainer.innerHTML = '';
        linkContainer.innerHTML = '';
        promoSelections = { seguidores: false, curtidas: false, views: false };

        // Determine if we are on the "Promo Path" (1000 Followers Package)
        const isPromoPath = (activePlatform === 'instagram' && rSeg.value == 3);

        // 1. Gerar Inputs Dinâmicos (Links) PRIMEIRO
        if (cVal > 0) {
            linkContainer.innerHTML += `
                <div class="input-wrap" style="margin-bottom:0.75rem;">
                    <i data-feather="link"></i>
                    <input type="text" id="link-curtidas" placeholder="Link do post para Curtidas">
                </div>
            `;
        }
        if (vVal > 0) {
            linkContainer.innerHTML += `
                <div class="input-wrap" style="margin-bottom:2rem;">
                    <i data-feather="link"></i>
                    <input type="text" id="link-views" placeholder="Link do post para Views">
                </div>
            `;
        }

        // 2. Gerar Promos (Upsells) em estilo Order Bump DEPOIS
        if (sVal > 0 && !isPromoPath) createPromoCard('seguidores', data.seguidores[sVal]);
        if (cVal > 0) createPromoCard('curtidas', data.curtidas[cVal]);
        if (vVal > 0) createPromoCard('views', data.views[vVal]);

        feather.replace();

        // Alternar Telas
        document.getElementById('checkout-modal-overlay').classList.add('show');
        document.body.style.overflow = 'hidden'; // Evita rolagem do fundo
        updateCheckoutTotal();
    }

    window.closeCheckoutModal = function() {
        document.getElementById('checkout-modal-overlay').classList.remove('show');
        document.body.style.overflow = ''; 
    };

    const modalOverlay = document.getElementById('checkout-modal-overlay');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if(e.target.id === 'checkout-modal-overlay') {
                closeCheckoutModal();
            }
        });
    }

    function createPromoCard(type, originalItem) {
        const promoPrice = originalItem.price * 0.8; // 20% OFF
        const card = document.createElement('div');
        card.className = 'order-bump-box dynamic-upsell-bump';
        card.dataset.type = type;
        
        let icon = type === 'seguidores' ? 'user-plus' : (type === 'curtidas' ? 'heart' : 'eye');
        let label = originalItem.label.split(' ')[0]; // Pega o número (ex: 500)

        card.innerHTML = `
            <input type="checkbox" class="bump-checkbox">
            <div class="bump-badge-discount">🔥 20% OFF EXTRA</div>
            <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom: 0.25rem;">
                <i data-feather="${icon}" style="color:#6366f1; width:20px;"></i>
                <strong style="color:#4338ca; font-size:1rem;">OFERTA: +${label} ${type}</strong>
            </div>
            <p style="font-size:0.875rem; color:#6b7280; font-weight:600; margin: 0;">Dobre seu pedido agora por apenas <strong>${formatMoney(promoPrice)}</strong>.</p>
        `;

        card.addEventListener('click', (e) => {
            if (e.target.type === 'checkbox') return;
            const chk = card.querySelector('input[type="checkbox"]');
            chk.checked = !chk.checked;
            chk.dispatchEvent(new Event('change', { bubbles: true }));
        });

        const chk = card.querySelector('input[type="checkbox"]');
        chk.addEventListener('change', () => {
            card.classList.toggle('active', chk.checked);
            promoSelections[type] = chk.checked;
            if (chk.checked) fireConfetti();
            updateCheckoutTotal();
        });

        document.getElementById('dynamic-bumps-container').appendChild(card);
    }

    function updateCheckoutTotal() {
        const data = pricingData[activePlatform];
        let baseTotal = data.seguidores[rSeg.value].price + data.curtidas[rCur.value].price + data.views[rView.value].price;
        let baseOld = data.seguidores[rSeg.value].old + data.curtidas[rCur.value].old + data.views[rView.value].old;
        
        let promoTotal = 0;
        if (promoSelections.seguidores) promoTotal += (data.seguidores[rSeg.value].price * 0.8);
        if (promoSelections.curtidas) promoTotal += (data.curtidas[rCur.value].price * 0.8);
        if (promoSelections.views) promoTotal += (data.views[rView.value].price * 0.8);

        // Order Bump Logic
        const bumpCheck = document.getElementById('chk-order-bump');
        const bumpActive = bumpCheck ? bumpCheck.checked : false;
        const bumpPrice = 31.92; // +1300 seguidores (promo price)
        const bumpOld = 39.90; // base price for followers is 39.90 for 1000, 1300 refined

        const finalPrice = baseTotal + promoTotal + (bumpActive ? bumpPrice : 0);
        const finalOld = baseOld + (promoTotal / 0.8) + (bumpActive ? bumpOld : 0);

        // Atualiza todos os IDs de preço no modal
        const priceMain = document.getElementById('checkout-final-price-main');
        const priceSummary = document.getElementById('checkout-final-price-summary');
        const oldEl = document.getElementById('checkout-old-price');

        if (priceMain) priceMain.textContent = formatMoney(finalPrice);
        if (priceSummary) priceSummary.textContent = formatMoney(finalPrice);

        if (finalOld > finalPrice && oldEl) {
            oldEl.textContent = formatMoney(finalOld);
            oldEl.style.display = 'inline-block';
        } else if (oldEl) {
            oldEl.style.display = 'none';
        }
    }

    // Listener for Order Bump
    document.addEventListener('change', (e) => {
        if (e.target.id === 'chk-order-bump') {
            updateCheckoutTotal();
            const card = document.getElementById('order-bump-card');
            if (e.target.checked) {
                card.classList.add('active'); // Use standard green style
                fireConfetti();
            } else {
                card.classList.remove('active');
            }
        }
    });

    document.addEventListener('click', (e) => {
        const card = e.target.closest('#order-bump-card');
        if (card && e.target.id !== 'chk-order-bump') {
            const chk = document.getElementById('chk-order-bump');
            chk.checked = !chk.checked;
            chk.dispatchEvent(new Event('change', { bubbles: true }));
        }
    });

    // Botão Finalizar
    const btnFechar = document.getElementById('btn-fechar-pedido');
    if (btnFechar) {
        btnFechar.addEventListener('click', async () => {
            const nome = document.getElementById('chk-nome').value;
            const tel = document.getElementById('chk-telefone').value;
            const email = document.getElementById('chk-email').value;
            const username = document.getElementById('chk-username').value;
            const bumpActive = document.getElementById('chk-order-bump').checked;
            
            let formValid = true;
            
            // Helper to validate and highlight empty fields
            const validateField = (id) => {
                const el = document.getElementById(id);
                if (!el.value.trim()) {
                    el.classList.add('shake', 'shake-input');
                    setTimeout(() => el.classList.remove('shake'), 500);
                    formValid = false;
                } else {
                    el.classList.remove('shake-input');
                }
            };

            validateField('chk-nome');
            validateField('chk-telefone');
            validateField('chk-email');
            validateField('chk-username');

            if (!formValid) {
                alert('Oops! Parece que faltam algumas informações. Preencha os campos destacados em vermelho para continuarmos.');
                return;
            }

            btnFechar.innerText = "Processando...";
            btnFechar.disabled = true;

            // Coletar dados do pedido e CALCULAR valor numérico REAL
            const data = pricingData[activePlatform];
            const sVal = parseInt(rSeg.value);
            const cVal = parseInt(rCur.value);
            const vVal = parseInt(rView.value);
            
            const seg = data.seguidores[sVal];
            const cur = data.curtidas[cVal];
            const view = data.views[vVal];

            let promoTotal = 0;
            if (promoSelections.seguidores) promoTotal += (seg.price * 0.8);
            if (promoSelections.curtidas) promoTotal += (cur.price * 0.8);
            if (promoSelections.views) promoTotal += (view.price * 0.8);
            
            const bumpActiveFinal = document.getElementById('chk-order-bump').checked;
            const finalNumericValue = seg.price + cur.price + view.price + promoTotal + (bumpActiveFinal ? 31.92 : 0);
            const finalFormattedPrice = formatMoney(finalNumericValue);

            // --- GERAR MENSAGEM WHATSAPP ---
            let message = `🚀 *NOVO PEDIDO - ALCANCE MAIS BR*\n\n`;
            message += `👤 *Cliente:* ${nome}\n`;
            message += `📱 *WhatsApp:* ${tel}\n`;
            message += `📧 *E-mail:* ${email}\n`;
            message += `🔑 *Perfil/Username:* @${username.replace('@', '')}\n\n`;
            message += `🛒 *ÍTENS ESCOLHIDOS:* \n`;
            
            if (seg.price > 0) {
                const label = isPromoPath ? 'PROMO: 1.000 + 300 Bônus (1.300 total)' : seg.label;
                message += `- ${label} (${activePlatform})\n`;
            }
            if (bumpActiveFinal) message += `- *ORDER BUMP EXCLUSIVO:* +1.300 seguidores reais\n`;
            if (cur.price > 0) {
                const link = document.getElementById('link-curtidas')?.value || 'Não informado';
                message += `- ${cur.label} (${activePlatform}) / Link: ${link}\n`;
            }
            if (view.price > 0) {
                const link = document.getElementById('link-views')?.value || 'Não informado';
                message += `- ${view.label} (${activePlatform}) / Link: ${link}\n`;
            }

            if (promoSelections.seguidores || promoSelections.curtidas || promoSelections.views) {
                message += `\n🎁 *PROMOÇÕES ADICIONAIS:* \n`;
                if (promoSelections.seguidores) message += `- + ${seg.label} (Upsell 20% OFF)\n`;
                if (promoSelections.curtidas) message += `- + ${cur.label} (Upsell 20% OFF)\n`;
                if (promoSelections.views) message += `- + ${view.label} (Upsell 20% OFF)\n`;
            }

            message += `\n💰 *VALOR TOTAL:* ${finalFormattedPrice}\n`;
            message += `💳 *FORMA DE PAGAMENTO:* PIX (Aguardando comprovante no Zap)`;

            const whatsappURL = `https://wa.me/5544997162210?text=${encodeURIComponent(message)}`;
            
            // REDIRECIONAR IMEDIATAMENTE
            window.open(whatsappURL, '_blank');
            
            btnFechar.innerText = "Fechar pedido →";
            btnFechar.disabled = false;
            closeCheckoutModal();

            // Enviar Planilha em background
            const SHEET_URL = "https://script.google.com/macros/s/AKfycbxYEksMsCLJ4HufxC1NRjCB_7VHARrCJvSHkbtqJmZ7rJPd7ClTuLdLAKXV8Qr7wMTL/exec";
            fetch(SHEET_URL + "?" + new URLSearchParams({
                nome, whatsapp: tel, email, perfil: username,
                pedido: `${seg.label}, ${cur.label}, ${view.label}${bumpActiveFinal ? ' + BUMP' : ''}`, total: finalFormattedPrice
            }).toString(), { method: 'POST', mode: 'no-cors' }).catch(e => {});
        });
    }

    /* --- RESET CHECKOUT LOGIC --- */
    window.resetCheckout = function() {
        // Limpar Campos
        ['chk-nome', 'chk-telefone', 'chk-email', 'chk-username'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.value = '';
        });
        
        // Resetar Order Bump
        const bump = document.getElementById('chk-order-bump');
        if (bump) {
            bump.checked = false;
            document.getElementById('order-bump-card')?.classList.remove('active');
        }

        // Parar Timer
        if(window.pixInterval) clearInterval(window.pixInterval);

        // Resetar UI do Modal
        const defaultHeader = document.getElementById('modal-default-header');
        if (defaultHeader) defaultHeader.style.display = 'flex';
        
        document.getElementById('checkout-dynamic-inputs').style.display = 'block';
        document.querySelector('.checkout-summary').style.display = 'block';
        document.getElementById('btn-fechar-pedido').style.display = 'flex';
        
        document.getElementById('checkout-panel').classList.remove('modal-expanded');
        document.getElementById('checkout-pix-screen').style.display = 'none';

        // Fechar Modal
        closeCheckoutModal();
        
        // Forçar scroll para o início do modal
        document.getElementById('checkout-panel').scrollTop = 0;
    }

    // Persistência de Dados (Local Storage)
    const formFields = ['order-username', 'chk-nome', 'chk-telefone', 'chk-email'];
    
    function saveProgress() {
        const formData = {};
        formFields.forEach(id => {
            const el = document.getElementById(id);
            if (el) formData[id] = el.value;
        });
        localStorage.setItem('alcance_mais_form', JSON.stringify(formData));
    }

    function loadProgress() {
        const saved = localStorage.getItem('alcance_mais_form');
        if (saved) {
            const formData = JSON.parse(saved);
            formFields.forEach(id => {
                const el = document.getElementById(id);
                if (el && formData[id]) el.value = formData[id];
            });
        }
    }

    formFields.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', saveProgress);
    });

    loadProgress();

    /* =========================================
       SOCIAL PROOF NOTIFICATIONS (FOMO)
    ========================================= */
    const socialProofData = {
        names: ["Lucas P.", "Mariana S.", "Gabriel R.", "Beatriz F.", "Rodrigo T.", "Ana C.", "Felipe M.", "Camila L.", "Thiago A.", "Larissa B.", "Carlos E.", "Juliana N.", "Diego F.", "Rafaela O.", "Bruno H."],
        services: [
            { platform: "Instagram", amounts: ["500", "1.000", "1.300", "2.000", "3.000", "5.000", "10.000"] },
            { platform: "TikTok",    amounts: ["500", "1.000", "1.300", "2.000", "2.500", "3.000", "5.000"] }
        ]
    };

    function createSocialProofContainer() {
        const container = document.createElement('div');
        container.id = 'social-proof-container';
        document.body.appendChild(container);
        return container;
    }

    function showNotification() {
        const container = document.getElementById('social-proof-container') || createSocialProofContainer();
        
        const name    = socialProofData.names[Math.floor(Math.random() * socialProofData.names.length)];
        const service = socialProofData.services[Math.floor(Math.random() * socialProofData.services.length)];
        const amount  = service.amounts[Math.floor(Math.random() * service.amounts.length)];
        const time    = Math.floor(Math.random() * 55) + 2; // 2 a 57 minutos

        const html = `
            <div class="social-notification">
                <div class="social-avatar">${name[0]}</div>
                <div class="social-content">
                    <strong>${name}</strong> comprou<br>
                    <strong>${amount} seguidores no ${service.platform}</strong>
                    <span class="social-time">${time} min atrás</span>
                </div>
            </div>
        `;

        container.innerHTML = html;
        const notification = container.querySelector('.social-notification');

        // Trigger animation
        setTimeout(() => notification.classList.add('show'), 100);

        // Hide after 6 seconds
        setTimeout(() => {
            notification.classList.remove('show');
        }, 6000);
    }


    // Start cycling every 25 seconds
    setInterval(showNotification, 25000);
    
    // Show the first one after 5 seconds of page load
    setTimeout(showNotification, 5000);

    /* --- Promo Timer Logic --- */
    function startPromoTimer() {
        const timers = document.querySelectorAll('.promo-timer');
        if(!timers || timers.length === 0) return;
        
        let timeLeft = sessionStorage.getItem('promoTimer');
        if (!timeLeft) {
            timeLeft = 15 * 60;
        } else {
            timeLeft = parseInt(timeLeft, 10);
        }

        const interval = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(interval);
                timers.forEach(t => t.innerText = "00:00");
                return;
            }
            timeLeft--;
            sessionStorage.setItem('promoTimer', timeLeft);
            
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            const displayStr = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            timers.forEach(t => t.innerText = displayStr);
        }, 1000);
    }
    startPromoTimer();

    /* --- Auto-select Promo Package --- */
    window.selectPromoPackage = function() {
        // 1. Ensure we are on Instagram platform (as the promo specifies followers)
        if (activePlatform !== 'instagram') {
            window.changePlatform('instagram');
        }

        // 2. Set sliders: 1.000 followers is index 3 in pricingData.instagram.seguidores
        if (rSeg) {
            rSeg.value = 3; 
            rCur.value = 0;
            rView.value = 0;
            
            // 3. Update the cart status BEFORE opening checkout to fix the "bug"
            updateCart();
            
            // 4. Marcar como caminho Promo
            isPromoPath = true;
            
            // 5. Skip sliders and go directly to checkout
            openCheckoutPanel();

            // Optional: Fire some confetti!
            fireConfetti();
        }
    };
});
