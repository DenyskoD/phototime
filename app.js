$(function() {
    // fixed header  --> future

    
    
    
    
    


    // smooth scroll

    $("[data-scroll]").on("click",function(event) {
        event.preventDefault();

        let elementID = $(this).data("scroll");
        let elementsOffset = $(elementID).offset().top;

        // nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementsOffset - 70
        }, 700);

    });



});