document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevents page reload
            
            const btn = this.querySelector('.submit-btn');
            const originalText = btn.innerHTML;
            
            // 1. Show Loading State on Button
            btn.innerHTML = '<span class="loader"></span> Sending...';
            btn.style.pointerEvents = 'none';

            // 2. Simulate Success Delay
            setTimeout(() => {
                showToast("✅ Message sent! We'll get back to you shortly.");
                
                // Reset everything
                btn.innerHTML = originalText;
                btn.style.pointerEvents = 'all';
                contactForm.reset();
            }, 1500);
        });
    }

    // Function to handle the Toast display
    function showToast(message) {
        // Create toast element
        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.innerText = message;
        document.body.appendChild(toast);
        
        // Show with small delay
        setTimeout(() => toast.classList.add('show'), 100);

        // Hide and remove after 4 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 500);
        }, 4000);
    }
});
