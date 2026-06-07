// ── SHARED FOOTER RENDERER ──
function renderFooter(depth) {
  const p = depth === 1 ? '../' : depth === 2 ? '../' : '';
  document.getElementById('footer-placeholder').innerHTML = `
  <footer>
    <div class="footer-grid">
      <div class="footer-brand">
        <a class="logo" href="${p}index.html" style="font-size:1.2rem;">DT<span>Cloud</span><div class="logo-dot"></div>On</a>
        <p>Enterprise-grade network engineering, cybersecurity, and managed IT services — delivered with clarity, speed, and accountability.</p>
      </div>
      <div class="footer-col">
        <h4>IT Services</h4>
        <ul>
          <li><a href="${p}services/mdr.html">Managed Detection &amp; Response</a></li>
          <li><a href="${p}services/cybersecurity.html">Cybersecurity</a></li>
          <li><a href="${p}services/cloud.html">Cloud Services</a></li>
          <li><a href="${p}services/backup.html">Data Backup &amp; Recovery</a></li>
          <li><a href="${p}services/network.html">IT Network Support</a></li>
          <li><a href="${p}services/productivity.html">Productivity Apps</a></li>
          <li><a href="${p}services/compliance.html">Compliance &amp; CMMC</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Industries</h4>
        <ul>
          <li><a href="${p}industries/healthcare.html">Healthcare</a></li>
          <li><a href="${p}industries/legal.html">Legal</a></li>
          <li><a href="${p}industries/finance.html">Finance</a></li>
          <li><a href="${p}industries/government.html">Government</a></li>
          <li><a href="${p}industries/education.html">Education</a></li>
          <li><a href="${p}industries.html">All Industries →</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="${p}about.html">About Us</a></li>
          <li><a href="${p}contact.html">Contact Us</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 DTCloudOn. All rights reserved.</span>
      <span>Sugar Land, TX | Serving Businesses Nationwide</span>
    </div>
  </footer>`;
}

// ── SCROLL REVEAL ──
function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  reveals.forEach(r => observer.observe(r));
}
document.addEventListener('DOMContentLoaded', initReveal);

// ── CONTACT FORM ──
function submitForm() {
  const fname = document.getElementById('fname')?.value.trim();
  const email = document.getElementById('email')?.value.trim();
  const company = document.getElementById('company')?.value.trim();
  const requirements = document.getElementById('requirements')?.value.trim();
  if (!fname || !email || !company || !requirements) {
    alert('Please fill in all required fields (marked with *).'); return;
  }
  if (!email.includes('@') || !email.includes('.')) {
    alert('Please enter a valid email address.'); return;
  }
  document.getElementById('contact-form-body').style.display = 'none';
  document.getElementById('success-msg').style.display = 'block';
}
function resetForm() {
  document.getElementById('contact-form-body').style.display = 'block';
  document.getElementById('success-msg').style.display = 'none';
  document.querySelectorAll('#contact-form-body input, #contact-form-body select, #contact-form-body textarea').forEach(el => {
    if (el.type === 'checkbox') el.checked = false; else el.value = '';
  });
}
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.checkbox-item').forEach(item => {
    const cb = item.querySelector('input[type=checkbox]');
    if (cb) cb.addEventListener('change', () => item.classList.toggle('checked', cb.checked));
  });
});
