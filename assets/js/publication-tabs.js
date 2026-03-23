(function($){
  $(function(){
    var tabList = $(".publication-tabs");
    if (!tabList.length) {
      return;
    }

    var tabs = tabList.find(".publication-tabs__tab");
    var sections = $(".publication-category");

    var showTag = function(tag) {
      sections.each(function() {
        var sectionTag = ($(this).data("publicationTag") || "").toString();
        $(this).toggle(sectionTag === tag);
      });
    };

    var activateTab = function(tag) {
      var $target = tabs.filter('[data-publication-tag="' + tag + '"]');
      if (!$target.length) {
        $target = tabs.filter('[data-publication-tag="all"]');
        tag = "all";
      }
      tabs.removeClass("is-active").attr("aria-selected", "false");
      $target.addClass("is-active").attr("aria-selected", "true");
      return tag;
    };

    tabs.on("click", function() {
      var tag = $(this).data("publicationTag") || "all";
      tag = activateTab(tag);
      showTag(tag);
    });

    var initialTag = (window.location.hash || "").replace("#", "") || "all";
    initialTag = activateTab(initialTag);
    showTag(initialTag);
  });
})(jQuery);
