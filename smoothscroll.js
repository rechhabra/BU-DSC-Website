$(document).ready(function(){
        $("li about a").on('click', function(event) {
          if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
              scrollTop: $(hash).offset().top - 55
            }, 600, function(){
              window.location.hash = hash;
            });
          }
    });
});