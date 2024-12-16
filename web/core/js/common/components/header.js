const appName = "AI Diamond Artist";
const headerHTML = `
  <a href="/flow">
    <div id="logo">
      <div id="img-logo">
        <img src="/core/media/ui/flow_logo.png" alt="N/A">
      </div>
      <div class="logo-text">
        <span class="left">{</span>
        <span class="right">}</span>
        <span class="text"><strong>${appName}</strong></span>
      </div>
    </div>
  </a>
  <div class="appName"><h2>${appName}s</h2></div>
  </div>
`;

export function insertElement() {
  const header = document.querySelector('header');
  if (header) {
    header.innerHTML = headerHTML;
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', insertElement);
} else {
  insertElement();
}
