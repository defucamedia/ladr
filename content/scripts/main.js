(function(window) {

    var History = window.History;
    
    if (!History.enabled)
        return false;

    // Bind to StateChange Event
    History.Adapter.bind(window,'statechange',function() {
        var url = History.getState().url;
	    var $content = $("#main > div");
        var $footer = $("footer");
        var transitionTime = 300;
        
        $footer.fadeOut(transitionTime);
        $content.fadeOut(transitionTime, function() {
            $.get(url, function(html) {
                var $html = $(html);
                var title = $html.filter("title").text()
                var content = $html.find("#main > div").html();

                $content.html(content);
                document.title = title;

                $content.fadeIn(transitionTime);
                $footer.fadeIn(transitionTime);
                
                gallery();
                setSelected();
            });
        });
        
    });
})(window);

$(function() {
    ajaxy();
    gallery();
});

function ajaxy() {
    if (!History.enabled)
        return false;

    $("#loading").ajaxStart(function() {
		$(this).stop().fadeIn();
	}).ajaxStop(function() {
		$(this).stop().fadeOut();
	});

    $("a[data-role!='external']").live("click", function() {
        var url = this.href;
        History.pushState(null, "", url);
        
        return false;
    });
}

function gallery() {
    $gallery = $("#gallery");
    
    if ($gallery.children().length > 1) {
        $gallery.nivoSlider({
            //controlNav: false
        });
    }
}

function setSelected() {
    var path = window.location.pathname;
    $("nav a[href$='" + path + "']").parent().addClass("selected").siblings().removeClass("selected");
}