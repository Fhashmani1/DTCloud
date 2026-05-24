// ── SHARED NAV RENDERER ──
// renderNav(activePage, basePath)
// basePath: '' for root pages, '../' for pages in subfolders (services/, industries/)

function renderNav(activePage, basePath) {
  basePath = basePath || '';
  const nav = `
  <div class="topbar">
    <div class="location">📍 Serving Businesses Nationwide &amp; Globally</div>
    <div>
      <span>📞 <a href="tel:+18005550000">(800) 555-0000</a></span>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <span>✉ <a href="mailto:info@dtcloudon.com">info@dtcloudon.com</a></span>
    </div>
  </div>

  <nav>
    <div class="nav-inner">
      <a class="logo" href="${basePath}index.html">
        DT<span>Cloud</span><div class="logo-dot"></div>On
      </a>
      <ul class="nav-links">

        <li class="has-dropdown">
          <a href="#" class="${activePage==='services'?'active':''}">
            IT Services <span class="chevron">▾</span>
          </a>
          <div class="dropdown-bridge"></div>
          <div class="dropdown">
            <a href="${basePath}services/mdr.html">Managed Detection &amp; Response (MDR)</a>
            <a href="${basePath}services/cybersecurity.html">Cybersecurity</a>
            <a href="${basePath}services/it-support.html">IT Support</a>
            <a href="${basePath}services/managed-services.html">Managed Services</a>
            <a href="${basePath}services/productivity.html">Productivity Applications</a>
            <a href="${basePath}services/cloud.html">Cloud Services</a>
            <a href="${basePath}services/network.html">IT Network Support</a>
            <a href="${basePath}services/backup.html">Data Backup &amp; Recovery</a>
            <a href="${basePath}services/compliance.html">Compliance</a>
            <a href="${basePath}services/cmmc.html">CMMC Compliance</a>
            <a href="${basePath}services/unified-comms.html">Unified Communications</a>
            <a href="${basePath}services/it-guidance.html">IT Guidance</a>
            <a href="${basePath}services/procurement.html">IT Procurement</a>
            <a href="${basePath}services/packages.html">Packages</a>
          </div>
        </li>

        <li class="has-dropdown">
          <a href="${basePath}industries.html" class="${activePage==='industries'?'active':''}">
            Industries <span class="chevron">▾</span>
          </a>
          <div class="dropdown-bridge"></div>
          <div class="dropdown">
            <a href="${basePath}industries/accounting.html">Accounting</a>
            <a href="${basePath}industries/architects.html">Architects</a>
            <a href="${basePath}industries/construction.html">Construction</a>
            <a href="${basePath}industries/education.html">Education</a>
            <a href="${basePath}industries/engineering.html">Engineering</a>
            <a href="${basePath}industries/finance.html">Finance</a>
            <a href="${basePath}industries/franchises.html">Franchises</a>
            <a href="${basePath}industries/government.html">Government</a>
            <a href="${basePath}industries/healthcare.html">Healthcare</a>
            <a href="${basePath}industries/hospitality.html">Hospitality</a>
            <a href="${basePath}industries/insurance.html">Insurance</a>
            <a href="${basePath}industries/legal.html">Legal</a>
            <a href="${basePath}industries/logistics.html">Logistics</a>
            <a href="${basePath}industries/manufacturing.html">Manufacturing</a>
            <a href="${basePath}industries/nonprofit.html">Non-Profit</a>
            <a href="${basePath}industries/professional-services.html">Professional Services</a>
            <a href="${basePath}industries/real-estate.html">Real Estate</a>
            <a href="${basePath}industries/retail.html">Retail</a>
          </div>
        </li>

        <li><a href="${basePath}about.html" class="${activePage==='about'?'active':''}">About</a></li>
        <li><a href="${basePath}contact.html" class="nav-cta">Contact Us</a></li>
      </ul>

      <button class="mobile-menu-btn" onclick="toggleMobileMenu()" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobile-menu">
      <a href="${basePath}index.html">Home</a>
      <div class="mobile-section">IT Services</div>
      <a href="${basePath}services/mdr.html" class="mobile-sub">Managed Detection &amp; Response</a>
      <a href="${basePath}services/cybersecurity.html" class="mobile-sub">Cybersecurity</a>
      <a href="${basePath}services/cloud.html" class="mobile-sub">Cloud Services</a>
      <a href="${basePath}services/network.html" class="mobile-sub">IT Network Support</a>
      <a href="${basePath}services/backup.html" class="mobile-sub">Data Backup &amp; Recovery</a>
      <a href="${basePath}services/productivity.html" class="mobile-sub">Productivity Applications</a>
      <a href="${basePath}services/compliance.html" class="mobile-sub">Compliance / CMMC</a>
      <div class="mobile-section">Industries</div>
      <a href="${basePath}industries/healthcare.html" class="mobile-sub">Healthcare</a>
      <a href="${basePath}industries/legal.html" class="mobile-sub">Legal</a>
      <a href="${basePath}industries/finance.html" class="mobile-sub">Finance</a>
      <a href="${basePath}industries.html" class="mobile-sub">All Industries →</a>
      <a href="${basePath}about.html">About</a>
      <a href="${basePath}contact.html" style="color:var(--accent);font-weight:700;">Contact Us</a>
    </div>
  </nav>`;

  document.getElementById('nav-placeholder').innerHTML = nav;
}

function toggleMobileMenu() {
  const m = document.getElementById('mobile-menu');
  m.classList.toggle('open');
} 
