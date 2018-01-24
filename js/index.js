function ativaScroll(selector) {
    
    $(selector).click(function(event) {
        
        event.preventDefault();
        var target = $(this).attr('href');
        
        
        $('html, body').animate({
            
            scrollTop: $(target).offset().top 
            
        }, 700);
        
    });
    
}

// elementos 'a' cujo valor do atributo "href" contém o caminho 'panel-about', como nesse primeiro caso.
ativaScroll('a[href*=panel-about]'); 
ativaScroll('a[href*=panel-speakers]');
ativaScroll('a[href*=panel-form]');