import Ember from 'ember';

export default Ember.View.extend({
    didInsertElement: function() {
        var $gallery = this.$("#gallery");
    
        if ($gallery.children().length > 1) {
            $gallery.nivoSlider({
                slideSelector: "img"
            });
        }
    }
});