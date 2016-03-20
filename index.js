var selectors = {
  navLink: '.nav-container a'
};

function showTab(tab) {
  $('.nav-container a[href="' + tab + '"]').addClass('selected');
  $('.text[data-tab="' + tab + '"]').removeClass('hide');

  $('.nav-container a[href!="' + tab + '"]').removeClass('selected');
  $('.text[data-tab!="' + tab + '"]').addClass('hide');
}

$(document).ready(function() {
  var validHashes = [];
  $(selectors.navLink).each(function(index, element) {
    validHashes.push($(element).attr('href'));
  });

  var hash = window.location.hash;
  if (hash && validHashes.indexOf(hash) !== -1) {
    showTab(hash);
  }

  $(selectors.navLink).click(function() {
    var tab = $(this).attr('href');
    showTab(tab);
  });
});
