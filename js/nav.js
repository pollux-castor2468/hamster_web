// 导航栏下拉菜单功能
(function(){
    const toggle = document.querySelector('.nav-item-toggle');
    const parent = toggle && toggle.closest('.has-dropdown');
    const dropdown = parent && parent.querySelector('.nav-dropdown');
    if(!toggle || !parent || !dropdown) return;

    function setOpen(open){
        parent.classList.toggle('open', open);
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    // 点击链接直接跳转，下拉菜单通过 hover 展开
    toggle.addEventListener('click', function(e){
        // 允许修饰键点击在新标签页打开
        if(e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
        // 否则允许默认跳转行为
    });

    dropdown.addEventListener('click', function(e){
        const a = e.target.closest('a');
        if(!a) return;
        setTimeout(()=> setOpen(false), 120);
    });

    document.addEventListener('click', function(e){
        if(!parent.contains(e.target)) setOpen(false);
    });

    document.addEventListener('keydown', function(e){
        if(e.key === 'Escape') setOpen(false);
    });
})();

