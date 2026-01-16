export default renderNav;

function getRelativePath(path) {
    // If already absolute (starts with http or /), return as is
    if (/^(https?:\/\/|\/)/.test(path)) return path;
    // If running from a subfolder, adjust path accordingly
    const current = window.location.pathname;
    let depth = current.split('/').length - 2; // -2: one for leading slash, one for file
    let prefix = '';
    if (depth > 0) prefix = '../'.repeat(depth);
    return prefix + path;
}

function renderNav(container) {
  container.innerHTML = `
    <div class="logo_section">
      <img src="${getRelativePath('assets/pageLogo.ico')}" alt="Premier Hub Logo" class="nav-logo">
      <p class="logo-text">Premier Hub</p>
    </div>
    <div class="links_section">
      <ul>
        <li><a href="${getRelativePath('index.html')}"><i class="fas fa-home"></i></a></li>
        <li><a href="${getRelativePath('teams.html')}"><i class="fas fa-users"></i></a></li>
        <li><a href="${getRelativePath('nations.html')}"><i class="fa-solid fa-flag"></i></a></li>
        <li><a href="${getRelativePath('positions.html')}"><i class="fa-solid fa-map-pin"></i></a></li>
      </ul>
    </div>
  `;
}

