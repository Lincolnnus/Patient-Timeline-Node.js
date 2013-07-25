(function () {
  $('#detailPanel').hide();
  $('#close').click(function(){
    $('#detailPanel').hide();
  });
  $('#nav').localScroll(800);
  var $sidebar = $('.sidenav'),
    top = $sidebar.offset().top,
    $links = $sidebar.find('a');
  $(window).on('scroll', function (e) {
    var scrollY = this.scrollY;
    if (scrollY > top){
      $sidebar.addClass('fixed');
    } else if (scrollY < top) {
      $sidebar.removeClass('fixed');
    }
    $sidebar.find('.current').removeClass('current');
    $links.each(function () {
      var $this = $(this),
        $section = $($this.attr('href'));
      if ($section.offset().top < (scrollY+2)) {
        $sidebar.find('.current').removeClass('current');
        $this.addClass('current');
      } else {
        $this.removeClass('current');
      }
    });
    $sidebar.find('.current').parents('li').addClass('current');
  });
}());

function showDetail(url){
  $('#detailPanel').show();
  $('#detail').attr('src', url);
}
