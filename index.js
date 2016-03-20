$(document).ready(function() {
  $('a').click(function() {
    var tab = $(this).attr('href');
    $(this).addClass('selected');
    $('a[href!="' + tab + '"]').removeClass('selected');
    $('.text[data-tab="' + tab + '"]').removeClass('hide');
    $('.text[data-tab!="' + tab + '"]').addClass('hide');
  });
});
