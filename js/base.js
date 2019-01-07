

$('body').scrollspy({
    offset: offsetHeight
 });

function triggerAnimation(){
    new Vue({
    el: "#app",
        mounted() {
            TweenMax.set(`.polygons path`, { scale: 0, opacity: 0, transformOrigin: '50% 50%' })
            TweenMax.staggerTo(`.polygons path`, 0.25, {
                scale: 1, opacity: 1, ease: Back.easeOut.config(0.7)
            }, 0.03);
        },
    });
}