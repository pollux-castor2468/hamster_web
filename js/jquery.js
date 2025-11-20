$(document).ready(function() {
    function setOpen(open) {
        $(".nav-item-toggle").closest(".has-dropdown").toggleClass("open", open);
        $(".nav-item-toggle").attr("aria-expanded", open);
    }

    $(".nav-item-toggle").mouseenter(function () {
        if (window.innerWidth > 768) setOpen(true);
    });

    $(".nav-item-toggle").closest(".has-dropdown").mouseleave(function () {
        if (window.innerWidth > 768) setOpen(false);
    });

    $(".nav-item-toggle").click(function (e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            $(".nav-item-toggle").closest(".has-dropdown").find(".nav-dropdown").toggleClass('show');
        }
    });

    $(".nav-item-toggle").closest(".has-dropdown").find(".nav-dropdown").on('click', 'a', function(e) {
         setTimeout(() => setOpen(false), 120);
    });

    $(document).click(function(e){
        if (!$(".nav-item-toggle").closest(".has-dropdown").is(e.target) && $(".nav-item-toggle").closest(".has-dropdown").has(e.target).length === 0) {
            setOpen(false);
        }
    });

    $(document).keydown(function(e){
        if (e.key === 'Escape') setOpen(false);
    });

    $("#hamburger").click(function(){
        $(this).toggleClass('active');
        $(".nav-link").toggleClass('show');
    });
});