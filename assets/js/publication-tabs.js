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

    tabs.on("click", function() {
      var $tab = $(this);
      var tag = $tab.data("publicationTag") || "all";
      tabs.removeClass("is-active").attr("aria-selected", "false");
      $tab.addClass("is-active").attr("aria-selected", "true");
      showTag(tag);
    });

    showTag("all");
  });
})(jQuery);
