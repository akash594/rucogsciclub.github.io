window.onload = function (){
    TweenMax.set(`.polygons path`, { scale: 0, opacity: 0, transformOrigin: '50% 50%' })
    TweenMax.staggerTo(`.polygons path`, 0.25, {
        scale: 1, opacity: 1, ease: Back.easeOut.config(0.7)
    }, 0.03);
}

function generate_hex(){
        return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    }

function reanimate(){
    paths = document.querySelectorAll('path')
    for (var i=0; i < 41; i++){
        paths[i].setAttribute('style', 'fill:'+generate_hex());
    }
    TweenMax.set(`.polygons path`, { scale: 0, opacity: 0, transformOrigin: '50% 50%' })
    TweenMax.staggerTo(`.polygons path`, 0.25, {
        scale: 1, opacity: 1, ease: Back.easeOut.config(0.7)
    }, 0.03);
}

$('#header').scrollspy({
    offset: 10
  });

jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});