$(function() {
    function setOpen(element, open) {
    element.closest(".has-dropdown").toggleClass("open", open);
    element.attr("aria-expanded", open);
}

    $(".nav-item-toggle").on("mouseenter", function () {
        if (window.innerWidth > 768) setOpen($(this), true);
    });

    $(".nav-item-toggle").closest(".has-dropdown").on("mouseleave", function () {
        if (window.innerWidth > 768) setOpen($(this).find(".nav-item-toggle"), false);
    });

    $(".nav-item-toggle").on("click", function (e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            $(this).closest(".has-dropdown").find(".nav-dropdown").toggleClass('show');
        }
    });

    $(".nav-item-toggle").closest(".has-dropdown").find(".nav-dropdown").on('click', 'a', function() {
         setTimeout(() => setOpen($(".nav-item-toggle"), false), 120);
    });

    $(document).on("click", function(e){
        if (!$(".nav-item-toggle").closest(".has-dropdown").is(e.target) && $(".nav-item-toggle").closest(".has-dropdown").has(e.target).length === 0) {
            setOpen($(".nav-item-toggle"), false);
        }
    });

    $(document).on("keydown", function(e){
        if (e.key === 'Escape') setOpen($(".nav-item-toggle"), false);
    });

    $("#hamburger").on("click", function(){
        $(this).toggleClass('active');
        $(".nav-link").toggleClass('show');
    });
});