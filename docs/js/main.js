main();

function main() {
  loadStuff();
  watchStuff();
}

function loadStuff() {
  $("nav").load("/docs/html/nav.html")
}

function watchStuff() {

}

// Click functions
function toggleNav() {
  if ($("nav #top-nav li:nth-child(2)").hasClass("hidden") || $("nav #top-nav li:nth-child(2)").hasClass("hid")) {
    $("nav #top-nav img").addClass("nav-show");
    for (var i = 1; i < $("nav #top-nav li").length; i++) {
      $("nav #top-nav li:nth-child(" + (i + 1) + ")").attr("class", "show");
    }
  } else {
    $("nav #top-nav img").removeClass("nav-show");
    for (var i = 1; i < $("nav #top-nav li").length; i++) {
      $("nav #top-nav li:nth-child(" + (i + 1) + ")").attr("class", "hidden");
    }
  }
}
