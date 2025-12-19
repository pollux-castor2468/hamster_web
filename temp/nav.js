(function () {
  const toggle = document.querySelector('.nav-item-toggle');
  const parent = toggle && toggle.closest('.has-dropdown');
  const dropdown = parent && parent.querySelector('.nav-dropdown');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-link');

  // 如果找不到這些元素就直接結束（避免報錯）
  if (!toggle || !parent || !dropdown || !hamburger || !navLinks) return;

  // --- 桌機模式：hover 下拉 ---
  function setOpen(open) {
    parent.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  toggle.addEventListener('mouseenter', () => {
    if (window.innerWidth > 768) setOpen(true);
  });
  parent.addEventListener('mouseleave', () => {
    if (window.innerWidth > 768) setOpen(false);
  });

  // --- 手機模式：點擊「首頁 ▾」展開 ---
  toggle.addEventListener('click', function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault(); // 在手機「首頁 ▾」不會跳轉連結
      dropdown.classList.toggle('show');
    }
  });

  // --- 點擊 dropdown 裡的連結後自動收起 ---
  dropdown.addEventListener('click', function (e) {
    const a = e.target.closest('a');
    if (!a) return;
    setTimeout(() => setOpen(false), 120);
  });

  // --- 按 Esc 或點空白區關閉 ---
  document.addEventListener('click', function (e) {
    if (!parent.contains(e.target)) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });

  // --- 漢堡選單：開關整個導覽列 ---
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('show');
  });
})();
