// Demo-only form handler (so it "works" without a backend)
    const form = document.getElementById('leadForm');
    const msg = document.getElementById('formMsg');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      msg.style.display = 'block';
      msg.textContent = "✅ Request received (demo). In production, this sends to email/CRM and triggers a follow-up text.";
      form.reset();
      // Optional: scroll message into view
      msg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
