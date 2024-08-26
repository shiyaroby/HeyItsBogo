document.addEventListener('DOMContentLoaded', function() {
    const offerRadios = document.querySelectorAll('input[name="offer"]');

    offerRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            document.querySelectorAll('.offer').forEach(offer => {
                const discountBox = offer.querySelector('.discount-box');
                const sizeColorOptions = offer.querySelector('.size-color-options');
                const offerBox = offer.querySelector('.offer-box');
                offerBox.style.display ='flex';
                offer.classList.remove('expanded');
                if (discountBox) discountBox.classList.remove('hidden');
                if (sizeColorOptions) sizeColorOptions.style.display = 'none';

                offerBox.style.height = '74px';
            });

            if (this.checked) {
                const offer = this.closest('.offer');
                const discountBox = offer.querySelector('.discount-box');
                const sizeColorOptions = offer.querySelector('.size-color-options');
                const offerBox = offer.querySelector('.offer-box');
                offerBox.style.display ='block';
                offer.classList.add('expanded');
                if (discountBox) discountBox.classList.add('hidden');
                if (sizeColorOptions) sizeColorOptions.style.display = 'block';
                offerBox.style.height = '172px';
            }
        });
    });

    const checkedRadio = document.querySelector('input[name="offer"]:checked');
    if (checkedRadio) checkedRadio.dispatchEvent(new Event('change'));
});

