

$(function() {
    gallery();
});

function gallery() {
    $gallery = $("#gallery");
    
    if ($gallery.children().length > 1) {
        $gallery.nivoSlider({
            //controlNav: false
        });
    }
}
