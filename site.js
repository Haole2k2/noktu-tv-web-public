(() => {
  "use strict";
  const tabs=[...document.querySelectorAll('[role="tab"][data-target]')];
  const panels=[...document.querySelectorAll('[role="tabpanel"][data-panel]')];
  const navIcons=[...document.querySelectorAll('.tv-nav-icon')];
  function activate(tab, moveFocus=false){
    if(!tab)return;
    const target=tab.dataset.target;
    tabs.forEach(t=>{
      const selected=t===tab;
      t.classList.toggle('is-active',selected);
      t.setAttribute('aria-selected',String(selected));
      t.tabIndex=selected?0:-1;
    });
    panels.forEach(p=>{p.hidden=p.dataset.panel!==target;});
    navIcons.forEach((item,index)=>{item.classList.toggle('current',index===(target==='live'?1:0));});
    if(moveFocus)tab.focus();
  }
  tabs.forEach((tab,index)=>{
    tab.addEventListener('click',()=>activate(tab));
    tab.addEventListener('keydown',event=>{
      let next=index;
      if(event.key==='ArrowRight')next=(index+1)%tabs.length;
      else if(event.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;
      else if(event.key==='Home')next=0;
      else if(event.key==='End')next=tabs.length-1;
      else return;
      event.preventDefault();
      activate(tabs[next],true);
    });
  });
})();