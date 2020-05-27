$(function () {
    $('.toggle').click(function (e) { 
        e.preventDefault();
        $('.den').addClass('len');
        $('.hmm').addClass('len2');

        
    });
    $('.den').click(function (e) { 
        e.preventDefault();
        $('.den').removeClass('len');
        $('.hmm').removeClass('len2');
    });
});