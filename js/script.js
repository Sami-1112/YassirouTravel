// YassirouTravel/js/script.js

document.addEventListener('DOMContentLoaded', () => {

    const whatsappNumber = '201019351945'; // رقم الواتساب الموحد لجميع الاستفسارات

    // ------------------------------------
    // 1. Mobile Menu Functionality
    // ------------------------------------
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMenuButton = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    if (closeMenuButton) {
        closeMenuButton.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    }

    // Close mobile menu when a navigation link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // ------------------------------------
    // 2. WhatsApp Inquiry for Trip Packages (NO longer specific to Hajj & Umrah on index.html)
    // Removed specific section targeting as packages are now on separate pages.
    // This script only applies to the main page.
    // ------------------------------------
    const whatsappInquiryButtons = document.querySelectorAll('.whatsapp-inquiry-btn'); // This now only finds buttons if they are still on index.html.
                                                                                        // Since packages are moved, this part is largely for future use if
                                                                                        // other inquiry buttons are added to index.html
    whatsappInquiryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const packageName = button.dataset.package;
            // The message can be more generic or removed if no package inquiry on index.html
            const message = `أهلاً بك! أود الاستفسار عن: *${packageName || 'خدمة عامة'}* الذي وجدته على موقعكم. يرجى تزويدي بالمزيد من المزيد من التفاصيل.`;
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    });



    // ------------------------------------
    // 4. WhatsApp Inquiry for Visa Form
    // ------------------------------------
    const visaForm = document.getElementById('visa-form'); // Assumes you have a form with this ID
    if (visaForm) {
        visaForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const name = document.getElementById('visa-name').value;
            const phone = document.getElementById('visa-phone').value;
            const country = document.getElementById('visa-country').value;
            const visaType = document.getElementById('visa-type').value;

            // Create WhatsApp message
            const message = `طلب تأشيرة: الاسم: ${name}، الجوال: ${phone}، الدولة: ${country}، نوع التأشيرة: ${visaType}`;
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

            window.open(whatsappUrl, '_blank');
        });
    }

    // ------------------------------------
    // 5. Date Input Restrictions and Initialization
    // ------------------------------------
    const today = new Date().toISOString().split('T')[0];
    const departureDateInput = document.getElementById('departure-date');
    const returnDateInput = document.getElementById('return-date');
    const checkInInput = document.getElementById('check-in');
    const checkOutInput = document.getElementById('check-out');

    if (departureDateInput) departureDateInput.min = today;
    if (returnDateInput) returnDateInput.min = today;
    if (checkInInput) checkInInput.min = today;
    if (checkOutInput) checkOutInput.min = today;

    // Set default dates (today + 7 days for return)
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    const nextWeekFormatted = nextWeek.toISOString().split('T')[0];

    if (departureDateInput) departureDateInput.value = today;
    if (returnDateInput) returnDateInput.value = nextWeekFormatted;
    if (checkInInput) checkInInput.value = today;
    if (checkOutInput) checkOutInput.value = nextWeekFormatted;

}); // End of DOMContentLoaded