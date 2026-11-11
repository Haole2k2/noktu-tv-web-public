(() => {
  'use strict';
  const tabs = [...document.querySelectorAll('.preview-tab[role="tab"]')];
  const panels = [...document.querySelectorAll('.screen-panel[role="tabpanel"]')];
  const sidebarItems = [...document.querySelectorAll('.preview-sidebar i')];

  function select(tab, focus = false) {
    if (!tab) return;
    const target = tab.dataset.target;
    tabs.forEach(item => {
      const selected = item === tab;
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
    });
    panels.forEach(panel => {
      panel.hidden = panel.dataset.panel !== target;
    });
    sidebarItems.forEach((item, index) => {
      item.classList.toggle('current', index === (target === 'live' ? 1 : 0));
    });
    if (focus) tab.focus();
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => select(tab));
    tab.addEventListener('keydown', event => {
      const keys = ['ArrowLeft', 'ArrowRight', 'Home', 'End'];
      if (!keys.includes(event.key)) return;
      event.preventDefault();
      let next = index;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      select(tabs[next], true);
    });
  });
  select(tabs.find(tab => tab.getAttribute('aria-selected') === 'true'));
})();