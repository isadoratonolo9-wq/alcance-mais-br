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
        const neonColor = activePlatform === 'instagram' ? '#ee2a7b' : '#00f2ea';
        const borderColor = isHero ? '#f9ce34' : neonColor;
        const glowColor = isHero ? 'rgba(249,206,52,0.3)' : (activePlatform === 'instagram' ? 'rgba(238,42,123,0.25)' : 'rgba(0,242,234,0.25)');

        const viewsCount = Math.floor(Math.random() * (5000 - 3000) + 3000);
        const salesCount = Math.floor(Math.random() * (450 - 350) + 350);

        // Identificador unico para o input deste card
        const inputId = `user-${pkg.label.replace(/\D/g, '')}-${pkg.serviceText}`;

        const logoHtml = activePlatform === 'instagram'
            ? `<div style="width:70px;height:70px;border-radius:18px;background:radial-gradient(circle at 30% 107%,#fdf497 0%,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285AEB 90%);display:flex;align-items:center;justify-content:center;margin:0 auto 1rem;box-shadow:0 8px 20px rgba(0,0,0,0.5);">
                <i data-feather="instagram" style="color:white;width:34px;height:34px;"></i>
              </div>`
            : `<div style="width:70px;height:70px;border-radius:18px;background:#111;border:2px solid rgba(0,242,234,0.4);display:flex;align-items:center;justify-content:center;margin:0 auto 1rem;box-shadow:0 8px 20px rgba(0,0,0,0.5);">
                <svg viewBox="0 0 24 24" fill="white" width="34" height="34"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9a8.2 8.2 0 0 0 4.79 1.52V7.07a4.85 4.85 0 0 1-1.02-.38z"/></svg>
              </div>`;

        const wrapper = document.createElement('div');
        wrapper.className = 'package-card-wrapper';
        wrapper.style.cssText = `
            position:relative;
            padding-top:${(isHero || isFeatured) ? '22px' : '0'};
            max-width:${isHero ? '480px' : '290px'};
            margin:0 auto;
            width:100%;
            overflow:visible;
        `;

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
            `;
            badge.textContent = `⚡ ${pkg.tag || 'OFERTA RELÂMPAGO'} ⚡`;
            wrapper.appendChild(badge);
        }

        const card = document.createElement('div');
        card.className = 'package-card-premium';
        card.style.cssText = `
            position:relative;
            background:#0d0d0d;
            border-radius:28px;
            border:2.5px solid ${borderColor};
            box-shadow:0 0 35px ${glowColor}, 0 20px 50px rgba(0,0,0,0.5);
            padding:${isHero ? '3rem 2rem 2.5rem' : '2.5rem 1.75rem 2rem'};
            text-align:center;
            color:#fff;
            width:100%;
            transition:all 0.3s ease;
        `;

        card.innerHTML = `
            <div style="display:flex;flex-direction:column;align-items:center;">
                ${logoHtml}
                <!-- CONTEUDO DO CARD (PRECO E INFOS) -->
                <h2 style="font-size:2rem;font-weight:900;margin:0 0 0.4rem;letter-spacing:-1px;">${pkg.label} <span style="font-size:1rem;color:#94a3b8;text-transform:uppercase;">${pkg.serviceText}</span></h2>
                <div style="font-size:0.85rem;color:#94a3b8;font-weight:600;margin-bottom:1.25rem;">⚡ ${pkg.subtitle}</div>

                <div style="font-size:3.5rem;font-weight:950;color:#fff;line-height:1;letter-spacing:-2px;margin-bottom:0.4rem;">R$ ${pkg.price.toFixed(2).replace('.', ',')}</div>
                <div style="font-size:0.82rem;color:#64748b;margin-bottom:1.5rem;">de <span style="text-decoration:line-through;">R$ ${pkg.old.toFixed(2).replace('.', ',')}</span> por <span style="color:#10b981;font-weight:800;">R$ ${pkg.price.toFixed(2).replace('.', ',')}</span></div>

                <!-- CAMPO DE USUARIO (SÓ APARECE NO CLIQUE) -->
                <div class="card-input-wrapper">
                    <div class="card-input-container" id="container-${inputId}" style="background: rgba(0,0,0,0.6) !important; border: 1px solid rgba(255,255,255,0.2);">
                        <input type="text" class="card-input-field" id="${inputId}" placeholder="Seu @usuário ou link" style="background:transparent !important; color: white !important;">
                    </div>
                </div>

                <!-- BOTAO SEMPRE VISIVEL -->
                <button class="card-btn-buy" onclick="processPurchase('${inputId}', '${pkg.label} ${pkg.serviceText}', ${pkg.price})">
                    COMPRAR AGORA
                </button>

                <div style="display:flex;align-items:center;gap:0.5rem;font-size:0.85rem;font-weight:700;color:#64748b;margin-top: 1.5rem;">
                    <i data-feather="shopping-cart" style="width:14px;height:14px;"></i>
                    ${salesCount} vendas hoje
                </div>
            </div>
        `;

        wrapper.appendChild(card);
        // Refresh icons for the newly added card
        setTimeout(() => { if(window.feather) feather.replace(); }, 10);
        return wrapper;
    }

    window.processPurchase = function(inputId, label, price) {
        const input = document.getElementById(inputId);
        const wrapper = input.closest('.card-input-wrapper');
        const container = document.getElementById(`container-${inputId}`);
        const userValue = input.value.trim();

        // Se o campo ainda não está visível, vamos mostrá-lo
        if (!wrapper.classList.contains('active')) {
            wrapper.classList.add('active');
            input.focus();
            return; // Para aqui no primeiro clique
        }

        // Se já está visível, validamos o preenchimento
        if (!userValue) {
            container.classList.add('error');
            input.focus();
            setTimeout(() => container.classList.remove('error'), 800);
            return;
        }

        // Tudo ok! Redireciona para o WhatsApp
        const msg = `🚀 *NOVO PEDIDO*\n\nPerfil: ${userValue}\nPacote: ${label}\nTotal: R$ ${price.toFixed(2).replace('.', ',')}`;
        window.location.href = `https://wa.me/5544997162210?text=${encodeURIComponent(msg)}`;
    };

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
