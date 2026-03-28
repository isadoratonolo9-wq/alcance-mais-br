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
                { label: "500 seguidores", price: 25.90, old: 38.85 },
                { label: "1k seguidores", price: 44.90, old: 67.35 },
                { label: "1.5k seguidores", price: 62.90, old: 94.35 },
                { label: "2k seguidores", price: 79.90, old: 119.85 }
            ],
            curtidas: [
                { label: "0 curtidas", price: 0.00, old: 0.00 },
                { label: "100 curtidas", price: 8.90, old: 13.35 },
                { label: "200 curtidas", price: 12.90, old: 19.35 },
                { label: "400 curtidas", price: 16.90, old: 25.35 },
                { label: "600 curtidas", price: 20.90, old: 31.35 },
                { label: "800 curtidas", price: 24.90, old: 37.35 }
            ],
            views: [
                { label: "0 views", price: 0.00, old: 0.00 },
                { label: "1k views", price: 8.90, old: 13.35 },
                { label: "2k views", price: 16.90, old: 25.35 },
                { label: "3k views", price: 24.90, old: 37.35 },
                { label: "4k views", price: 34.90, old: 52.35 },
                { label: "5k views", price: 44.90, old: 67.35 }
            ]
        },
        tiktok: {
            seguidores: [
                { label: "0 seguidores", price: 0.00, old: 0.00 },
                { label: "250 seguidores", price: 14.90, old: 22.35 },
                { label: "500 seguidores", price: 29.90, old: 44.85 },
                { label: "1k seguidores", price: 56.90, old: 85.35 },
                { label: "2k seguidores", price: 109.90, old: 164.85 },
                { label: "2.5k seguidores", price: 134.90, old: 202.35 }
            ],
            curtidas: [
                { label: "0 curtidas", price: 0.00, old: 0.00 },
                { label: "100 curtidas", price: 7.90, old: 11.85 },
                { label: "250 curtidas", price: 17.90, old: 26.85 },
                { label: "500 curtidas", price: 24.90, old: 37.35 },
                { label: "750 curtidas", price: 43.90, old: 65.85 },
                { label: "1k curtidas", price: 59.90, old: 89.85 }
            ],
            views: [
                { label: "0 views", price: 0.00, old: 0.00 },
                { label: "1k views", price: 9.90, old: 14.85 },
                { label: "2k views", price: 18.90, old: 28.35 },
                { label: "3k views", price: 27.90, old: 41.85 },
                { label: "4k views", price: 36.90, old: 55.35 },
                { label: "5k views", price: 45.90, old: 68.85 }
            ]
        }
    };

    let activePlatform = 'instagram'; // default

    const rSeg = document.getElementById('range-seguidores');
    const rCur = document.getElementById('range-curtidas');
    const rView = document.getElementById('range-views');

    function formatMoney(value) {
        return 'R$ ' + value.toFixed(2).replace('.', ',');
    }

    function updateCart() {
        if(!rSeg) return;
        
        const data = pricingData[activePlatform];
        
        const segItem = data.seguidores[rSeg.value];
        const curItem = data.curtidas[rCur.value];
        const viewItem = data.views[rView.value];

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
    }

    function updateRangeProgress(slider) {
        const val = (slider.value - slider.min) / (slider.max - slider.min) * 100;
        slider.style.setProperty('--value', val + '%');
    }

    if(rSeg) {
        rSeg.addEventListener('input', updateCart);
        rCur.addEventListener('input', updateCart);
        rView.addEventListener('input', updateCart);
        updateCart(); // Initialize
    }

    // Expose platform switcher to global scope
    window.changePlatform = function(platform) {
        activePlatform = platform;
        
        // Reset sliders to 0 or 1 depending on preference. Let's reset to 0 to be safe.
        rSeg.value = 0;
        rCur.value = 0;
        rView.value = 0;
        
        const topBarTitle = document.getElementById('top-bar-title');
        const topBarIcon = document.getElementById('top-bar-icon-container');
        
        if (platform === 'instagram') {
            topBarTitle.textContent = 'Serviços Instagram';
            topBarIcon.innerHTML = '<i data-feather="instagram" class="bar-icon"></i>';
            topBarIcon.style.background = 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)';
        } else {
            topBarTitle.textContent = 'Serviços TikTok';
            topBarIcon.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="bar-icon"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>';
            topBarIcon.style.background = '#000000';
        }
        
        if(window.feather) { feather.replace(); }
        
        updateCart();
        
        // Smooth scroll to section and focus input
        document.getElementById('custom-order').scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            document.getElementById('order-username').focus();
        }, 500);
    }
});
