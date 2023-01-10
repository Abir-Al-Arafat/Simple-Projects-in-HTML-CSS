
// For smooth scrolling
$('.btn').on('click', function(event){
    // checking if id exists
    if(this.hash!==''){
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top
            },
            900
        );
    }
});