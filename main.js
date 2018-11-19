var isAnimating = false;

$(function() {
    $(".small-image-wrapper").on({
        'mouseenter': function() {
            //Check if it's desktop
            if(window.innerWidth < 768) return;
            //Restore the englarged image
            animateImage($(this));
        },
        'click': function() {
            //Check if it's tablet
            if(window.innerWidth > 768 || window.innerWidth < 600) return;
            //Restore the englarged image
            animateImage($(this));
        }
    });
});

function animateImage(JqObj) {
    console.log(JqObj);
    if(!isAnimating) {
        isAnimating = true;
        JqObj.parent().find('.small-image-animate')
        .removeClass('small-image-animate')
        .removeAttr("style");

    //Enlarge the
    JqObj.children('img')
    .addClass('small-image-animate')
    .css({
        'position': 'absolute',
        'width': '16.66%'
    })
    .animate({
        left:'50%',
        top:'0px',
        width: '49%',
        height: 'auto'}, 200, function() {
            isAnimating = false;
            JqObj.addClass('small-image-animate')
        }); 
    }
}