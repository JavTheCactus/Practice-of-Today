'use strict';

$(function()
{
    var currSlide = 1;

    var $theSlider = $('#theSlider');
    var $slideContainer = $('.slides', $theSlider);
    var $slides = $('.slide', $theSlider);

    setInterval(function()
    {
        $slideContainer.animate({'margin-left': '-='+720}, 500, function()
        {
            if (++currSlide === $slides.length)
            {
                currSlide = 1;
                $slideContainer.css('margin-left', 0);
            }
        });
    }, 3000);

});