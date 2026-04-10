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

    // Mapeamento de Links Yampi
    const yampiLinks = {
        instagram: {
            seguidores: {
                "100": "https://alcance-group.pay.yampi.com.br/r/2YOTBLF27P",
                "200": "https://alcance-group.pay.yampi.com.br/r/44UPK629XH",
                "400": "https://alcance-group.pay.yampi.com.br/r/93M99ZWLEM",
                "500": "https://alcance-group.pay.yampi.com.br/r/CS4L1ZR7JR",
                "1000": "https://alcance-group.pay.yampi.com.br/r/3S2U9REL84",
                "2000": "https://alcance-group.pay.yampi.com.br/r/BFTR1O5GK7",
                "3000": "https://alcance-group.pay.yampi.com.br/r/604Z75NZZ8",
                "5000": "https://alcance-group.pay.yampi.com.br/r/6DX0JHFKT1"
            },
            curtidas: {
                "100": "https://alcance-group.pay.yampi.com.br/r/AGHO5X1FHX",
                "500": "https://alcance-group.pay.yampi.com.br/r/TT5N3ZEDQ3",
                "1000": "https://alcance-group.pay.yampi.com.br/r/134VNC11X2",
                "5000": "https://alcance-group.pay.yampi.com.br/r/4LZ4B9DQFR",
                "10000": "https://alcance-group.pay.yampi.com.br/r/GXNI3P0YIA",
                "20000": "https://alcance-group.pay.yampi.com.br/r/FH02O784TZ"
            }
        },
        tiktok: {
            seguidores: {
                "100": "https://alcance-group.pay.yampi.com.br/r/54Z03BTI1F",
                "200": "https://alcance-group.pay.yampi.com.br/r/35HRREGQ51",
                "500": "https://alcance-group.pay.yampi.com.br/r/43HWUJ2ABT",
                "1000": "https://alcance-group.pay.yampi.com.br/r/MY1ZR5OOU4",
                "2000": "https://alcance-group.pay.yampi.com.br/r/KMJPWI1CA8",
                "5000": "https://alcance-group.pay.yampi.com.br/r/LFZKL2KA16",
                "10000": "https://alcance-group.pay.yampi.com.br/r/DCG4JS74C6"
            },
            curtidas: {
                "100": "https://alcance-group.pay.yampi.com.br/r/1NM16Q2SA5",
                "200": "https://alcance-group.pay.yampi.com.br/r/TB2PXYK5YI",
                "500": "https://alcance-group.pay.yampi.com.br/r/8FXFPRP4DK",
                "1000": "https://alcance-group.pay.yampi.com.br/r/1G0LVQIO7X",
                "2000": "https://alcance-group.pay.yampi.com.br/r/ERJ8A2W697",
                "5000": "https://alcance-group.pay.yampi.com.br/r/1VCBXZZ35V",
                "10000": "https://alcance-group.pay.yampi.com.br/r/N1T5VISCDR",
                "20000": "https://alcance-group.pay.yampi.com.br/r/PKWBHLX59Z",
                "50000": "https://alcance-group.pay.yampi.com.br/r/IHS04BCIPP"
            },
            views: {
                "1000": "https://alcance-group.pay.yampi.com.br/r/J5VZ1NZ943",
                "1300": "https://alcance-group.pay.yampi.com.br/r/KSQ8VY4ZLQ",
                "5000": "https://alcance-group.pay.yampi.com.br/r/J5VZ1NZ943",
                "10000": "https://alcance-group.pay.yampi.com.br/r/CBKK1R5DQ8"
            }
        }
    };

    /* Pricing Calculator Data */
    const pricingData = {
        instagram: {
            seguidores: [
                { label: "100 seguidores", price: 4.90, old: 0.00, tag: "Baratinho pra testar", tagColor: "#ec4899", subText: "" },
                { label: "200 seguidores", price: 6.90, old: 0.00, subText: "⚡ 30% off — aproveite agora!" },
                { label: "400 seguidores", price: 9.90, old: 0.00, subText: "⚡ 49% off — aproveite agora!" },
                { label: "500 seguidores", price: 10.90, old: 0.00, subText: "⚡ 56% off — aproveite agora!" },
                { label: "1.000 seguidores", price: 14.90, old: 0.00, tag: "Mais vendido", tagColor: "#f59e0b", subText: "⚡ 70% off — aproveite agora!" },
                { label: "2.000 seguidores", price: 29.90, old: 0.00, subText: "⚡ 69% off — aproveite agora!" },
                { label: "3.000 seguidores", price: 44.90, old: 0.00, subText: "⚡ 69% off — aproveite agora!" },
                { label: "5.000 seguidores", price: 72.90, old: 0.00, tag: "Melhor custo-benefício", tagColor: "#10b981", subText: "⚡ 70% off — aproveite agora!" }
            ],
            curtidas: [
                { label: "100 curtidas", price: 3.90, old: 0.00, tag: "Baratinho pra testar", tagColor: "#ec4899", subText: "" },
                { label: "500 curtidas", price: 9.90, old: 0.00, subText: "⚡ 49% off — aproveite agora!" },
                { label: "1.000 curtidas", price: 14.90, old: 0.00, subText: "⚡ 62% off — aproveite agora!" },
                { label: "5.000 curtidas", price: 49.90, old: 0.00, subText: "⚡ 74% off — aproveite agora!" },
                { label: "10.000 curtidas", price: 89.90, old: 0.00, subText: "⚡ 77% off — aproveite agora!" },
                { label: "20.000 curtidas", price: 169.90, old: 0.00, subText: "⚡ 78% off — aproveite agora!" }
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
                { label: "100 seguidores", price: 5.90, old: 0.00, tag: "Baratinho pra testar", tagColor: "#ec4899", subText: "" },
                { label: "200 seguidores", price: 9.90, old: 0.00, subText: "⚡ 16% off — aproveite agora!" },
                { label: "500 seguidores", price: 16.90, old: 0.00, subText: "⚡ 43% off — aproveite agora!" },
                { label: "1.000 seguidores", price: 29.90, old: 0.00, tag: "Mais vendido", tagColor: "#f59e0b", subText: "⚡ 49% off — aproveite agora!" },
                { label: "2.000 seguidores", price: 49.90, old: 0.00, subText: "⚡ 58% off — aproveite agora!" },
                { label: "5.000 seguidores", price: 99.90, old: 0.00, tag: "Melhor custo-benefício", tagColor: "#10b981", subText: "⚡ 66% off — aproveite agora!" },
                { label: "10.000 seguidores", price: 189.90, old: 0.00, tag: "Atrai seguidores reais!", tagColor: "#3b82f6", subText: "⚡ 68% off — aproveite agora!" }
            ],
            curtidas: [
                { label: "100 curtidas", price: 4.90, old: 0.00, tag: "Baratinho pra testar", tagColor: "#ec4899", subText: "" },
                { label: "200 curtidas", price: 6.90, old: 0.00, subText: "⚡ 30% off — aproveite agora!" },
                { label: "500 curtidas", price: 9.90, old: 0.00, subText: "⚡ 60% off — aproveite agora!" },
                { label: "1.000 curtidas", price: 14.90, old: 0.00, subText: "⚡ 70% off — aproveite agora!" },
                { label: "2.000 curtidas", price: 19.90, old: 0.00, subText: "⚡ 80% off — aproveite agora!" },
                { label: "5.000 curtidas", price: 29.90, old: 0.00, subText: "⚡ 88% off — aproveite agora!" },
                { label: "10.000 curtidas", price: 49.90, old: 0.00, subText: "⚡ 90% off — aproveite agora!" },
                { label: "20.000 curtidas", price: 69.90, old: 0.00, subText: "⚡ 93% off — aproveite agora!" },
                { label: "50.000 curtidas", price: 99.90, old: 0.00, subText: "⚡ 96% off — aproveite agora!" }
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

        const useListLayout = (activePlatform === 'instagram' && (activeService === 'seguidores' || activeService === 'curtidas')) || (activePlatform === 'tiktok' && (activeService === 'seguidores' || activeService === 'curtidas'));

        if (useListLayout) {
            gridContainer.style.cssText = 'display:flex; flex-direction:column; gap:1.25rem; width:100%; max-width:600px; margin:0 auto;';
            allData.forEach(pkg => {
                gridContainer.appendChild(createListPackageCard(pkg));
            });
            return;
        }

        gridContainer.style.cssText = '';

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

    function createListPackageCard(pkg) {
        const inputId = `user-${pkg.label.replace(/\D/g, '')}-${activeService}`;
        const neonColor = activePlatform === 'instagram' ? '#ee2a7b' : '#00f2ea';
        const shadowColor = activePlatform === 'instagram' ? '238,42,123' : '0,242,234';
        const wrapper = document.createElement('div');
        wrapper.className = 'package-list-item';
        wrapper.style.cssText = `
            background: #0d0d0d;
            border: 1.5px solid ${neonColor};
            border-radius: 16px;
            padding: 1.25rem 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            box-shadow: 0 10px 20px rgba(${shadowColor},0.15);
            transition: transform 0.3s ease, border-color 0.3s ease;
        `;

        const topSection = document.createElement('div');
        topSection.style.cssText = 'display:flex; justify-content:space-between; align-items:center;';
        
        let subTextHtml = pkg.subText ? `<div style="font-size:0.85rem; color:#10b981; font-weight:700; margin-top:0.25rem;">${pkg.subText}</div>` : '';
        let tagHtml = pkg.tag ? `<div style="display:inline-block; font-size:0.75rem; font-weight:800; color:${pkg.tagColor}; background:${pkg.tagColor}20; padding:0.25rem 0.75rem; border-radius:99px; margin-top:0.25rem;">⚡ ${pkg.tag}</div>` : '';

        topSection.innerHTML = `
            <div style="text-align:left;">
                <h3 style="font-size:1.3rem; font-weight:800; color:#fff; margin:0;">${pkg.label}</h3>
                ${subTextHtml}
            </div>
            <div style="text-align:right;">
                <div style="font-size:1.5rem; font-weight:900; color:#fff; line-height:1;">R$ ${pkg.price.toFixed(2).replace('.', ',')}</div>
                ${tagHtml}
            </div>
        `;

        const actionSection = document.createElement('div');
        actionSection.style.cssText = 'display:flex; flex-direction:column; gap:0.75rem; margin-top:0.5rem;';
        
        actionSection.innerHTML = `
            <div class="card-input-wrapper" style="display:none; transition:opacity 0.3s;">
                <div class="card-input-container" id="container-${inputId}" style="background:rgba(40,40,40,0.9); border:2px solid #f9ce34; border-radius:10px; padding:10px;">
                    <input type="text" class="card-input-field" id="${inputId}" placeholder="Seu @usuário ou link" style="background:transparent; border:none; outline:none; color:white; width:100%; text-align:center; font-weight:700; font-size:1rem;">
                </div>
            </div>
            <button class="card-btn-buy" 
                onclick="processPurchase('${inputId}', '${pkg.label}', ${pkg.price})"
                style="width:100%; background:#f9ce34; color:#000; padding:1.2rem; border-radius:12px; font-weight:900; font-size:1.1rem; border:none; cursor:pointer; text-transform:uppercase; box-shadow:0 5px 0 #b47d0b; display:block !important;">
                COMPRAR AGORA
            </button>
        `;

        wrapper.appendChild(topSection);
        wrapper.appendChild(actionSection);

        return wrapper;
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

        // Lógica de Selos (Premium e Pró)
        let badgeHtml = '';
        if (pkg.label.includes('5.000') || pkg.label.includes('5k')) {
            badgeHtml = `<div style="position:absolute;top:-18px;left:50%;transform:translateX(-50%);background:linear-gradient(90deg, #f09433, #e6683c);color:#fff;padding:6px 20px;border-radius:20px;font-weight:900;font-size:0.8rem;white-space:nowrap;box-shadow:0 10px 20px rgba(230,104,60,0.4);z-index:100;letter-spacing:1px;text-transform:uppercase;">🔥 PREMIUM 🔥</div>`;
        } else if (pkg.label.includes('10.000') || pkg.label.includes('10k')) {
            badgeHtml = `<div style="position:absolute;top:-18px;left:50%;transform:translateX(-50%);background:linear-gradient(90deg, #5a2cc9, #3b82f6);color:#fff;padding:6px 20px;border-radius:20px;font-weight:900;font-size:0.8rem;white-space:nowrap;box-shadow:0 10px 20px rgba(90,44,201,0.3);z-index:100;letter-spacing:1px;text-transform:uppercase;">PLANO PRÓ</div>`;
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
            ${badgeHtml}
            <div style="display:flex;flex-direction:column;align-items:center;">
                ${logoHtml}
                <!-- CONTEUDO DO CARD (PRECO E INFOS) -->
                <h2 style="font-size:2rem;font-weight:900;margin:0 0 0.4rem;letter-spacing:-1px;">${pkg.label} <span style="font-size:1rem;color:#94a3b8;text-transform:uppercase;">${pkg.serviceText}</span></h2>
                <div style="font-size:0.85rem;color:#94a3b8;font-weight:600;margin-bottom:1.25rem;">⚡ ${pkg.subtitle}</div>

                <div style="font-size:3.5rem;font-weight:950;color:#fff;line-height:1;letter-spacing:-2px;margin-bottom:0.4rem;">R$ ${pkg.price.toFixed(2).replace('.', ',')}</div>
                <div style="font-size:0.82rem;color:#64748b;margin-bottom:1.5rem;">de <span style="text-decoration:line-through;">R$ ${pkg.old.toFixed(2).replace('.', ',')}</span> por <span style="color:#10b981;font-weight:800;">R$ ${pkg.price.toFixed(2).replace('.', ',')}</span></div>

                <!-- CAMPO DE USUARIO (SÓ APARECE NO CLIQUE) -->
                <div class="card-input-wrapper" style="display:none; opacity:0; margin:1rem 0;">
                    <div class="card-input-container" id="container-${inputId}" style="background:rgba(40,40,40,0.9); border:2px solid #f9ce34; border-radius:12px; padding:10px;">
                        <input type="text" class="card-input-field" id="${inputId}" placeholder="Seu @usuário ou link" style="background:transparent; border:none; outline:none; color:white; width:100%; text-align:center; font-weight:700;">
                    </div>
                </div>

                <!-- BOTAO SEMPRE VISIVEL (AMARELO OURO) -->
                <button class="card-btn-buy" 
                    onclick="processPurchase('${inputId}', '${pkg.label} ${pkg.serviceText}', ${pkg.price})"
                    style="width:100%; background:#f9ce34; color:#000; padding:1.2rem; border-radius:16px; font-weight:900; font-size:1.2rem; border:none; cursor:pointer; box-shadow:0 6px 0 #b47d0b; text-transform:uppercase; display:block !important;">
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

    // URL de Integração Google Sheets
    const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbySoGW8LeVG7iaFGtBRUJt1YiKf7sbPHTtGcuP_8KWJUEG6ElXH1TaUBH3Lf1J13kFl3w/exec";

    async function saveOrderToSheet(data) {
        try {
            // Usamos mode: 'no-cors' para garantir que o envio funcione 
            // mesmo que o Google Apps Script não retorne um cabeçalho CORS explícito para POST.
            await fetch(GOOGLE_SHEETS_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        } catch (error) {
            console.error("Erro ao salvar na planilha:", error);
        }
    }

    window.processPurchase = async function(inputId, label, price) {
        const input = document.getElementById(inputId);
        const wrapper = input.closest('.card-input-wrapper');
        const container = document.getElementById(`container-${inputId}`);
        const userValue = input.value.trim();

        // Se o campo está escondido (estilo inline), vamos mostrá-lo
        if (wrapper.style.display === 'none') {
            wrapper.style.display = 'block';
            setTimeout(() => wrapper.style.opacity = '1', 50);
            input.focus();
            return; 
        }

        // Se já está visível, validamos
        if (!userValue) {
            container.classList.add('error');
            input.focus();
            setTimeout(() => container.classList.remove('error'), 800);
            return;
        }

        // Feedback visual rápido no botão
        const btn = container.closest('.package-card-premium').querySelector('.card-btn-buy');
        const originalText = btn.textContent;
        btn.textContent = "PROCESSANDO...";
        btn.style.opacity = "0.7";
        btn.disabled = true;

        // Salvar na Planilha Google (silenciosamente)
        await saveOrderToSheet({
            userValue: userValue,
            label: label,
            price: price,
            platform: activePlatform
        });

        // Redirecionamento Final (Yampi com Rastro ou WhatsApp Backup)
        const qtyKey = label.split(' ')[0].replace(/\D/g, ''); // Extrai o número do label
        const yampiUrl = yampiLinks[activePlatform][activeService] ? yampiLinks[activePlatform][activeService][qtyKey] : null;

        if (yampiUrl) {
            // Ir para a Yampi com o rastro do perfil
            const finalUrl = `${yampiUrl}${yampiUrl.includes('?') ? '&' : '?'}utm_content=${encodeURIComponent(userValue)}`;
            window.location.href = finalUrl;
        } else {
            // Backup para WhatsApp se não houver link direto
            const msg = `🚀 *NOVO PEDIDO*\n\nPerfil: ${userValue}\nPacote: ${label}\nTotal: R$ ${price.toFixed(2).replace('.', ',')}`;
            window.location.href = `https://wa.me/5544997162210?text=${encodeURIComponent(msg)}`;
        }
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

    /* --- SALES NOTIFICATION LOGIC --- */
    const snNames = ['Gabriel S.', 'Maria L.', 'Lucas S.', 'Ana P.', 'Felipe R.', 'Juliana M.', 'Bruno C.', 'Carla O.', 'Marcos V.', 'Paula T.', 'Ricardo F.', 'Fernanda G.', 'Thiago M.', 'Beatriz S.', 'Rodrigo A.', 'Amanda K.'];
    const snActions = ['acabou de comprar', 'garantiu agora', 'acaba de adquirir', 'comprou'];
    const snProducts = [
        '1.000 seguidores', '3.000 seguidores', '5.000 seguidores', '10.000 seguidores',
        '1.000 curtidas', '3.000 curtidas', '5.000 curtidas',
        '5.000 views', '10.000 views'
    ];
    const snTimes = ['agora mesmo', 'há 1 min', 'há 2 min', 'há 3 min', 'há 30 seg', 'há 45 seg'];

    const snElement = document.getElementById('sales-notification');
    const snNameEl = document.getElementById('sn-name');
    const snProductEl = document.getElementById('sn-product');
    const snTimeEl = document.getElementById('sn-time');

    function showRandomNotification() {
        if (!snElement) return;

        // Pick random data
        const name = snNames[Math.floor(Math.random() * snNames.length)];
        const product = snProducts[Math.floor(Math.random() * snProducts.length)];
        const time = snTimes[Math.floor(Math.random() * snTimes.length)];

        // Update content
        snNameEl.textContent = name;
        snProductEl.textContent = product;
        snTimeEl.textContent = time;

        // Show
        snElement.classList.add('active');

        // Hide after 6 seconds
        setTimeout(() => {
            snElement.classList.remove('active');
        }, 6000);
    }

    // Start loop (first one after 8 seconds, then every 25 seconds)
    setTimeout(() => {
        showRandomNotification();
        setInterval(showRandomNotification, 25000);
    }, 8000);

});
