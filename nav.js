$(document).ready(function() {
    $("#mobile-nav-btn").click(function() {
        $(".mobile-menu").fadeToggle();
        document.body.style.top = `-${window.scrollY}px`;
        document.body.style.position = 'fixed';
    });

    $("#mobile-menu-close").click(function() {
        $(".mobile-menu").fadeToggle();
        const scrollY = document.body.style.top;
        $("body").css("position", "");
        $("body").css("top", "");
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    });
});