/* ----- NAVBAR ----- */
// links
document.getElementById('navLinks').innerHTML = dataNavbar.map(item =>
    `<li class="${item.class} mx-3">
            <a class="nav-link px-0" href="#${item.route}">${item.name}</a>
        </li>`
).join('')

// active link
$('.navbar li').click(function () {
    $('.navbar li').removeClass("active");
    $(this).addClass("active");
});

// change color on scroll
function checkScroll() {
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if ($(window).scrollTop() > startY) {
        $('.navbar').addClass("scrolled");
    } else {
        $('.navbar').removeClass("scrolled");
    }
}
if ($('.navbar').length > 0) {
    $(window).on("scroll load resize", function () {
        checkScroll();
    });
}

// close dropdown after click
$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

$('body').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

// change active link on scroll
// Cache selectors
var topMenu = $(".navbar"),
    topMenuHeight = topMenu.outerHeight() + 15,
    // All list items
    menuItems = topMenu.find("a").slice(1),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

// Bind to scroll
$(window).scroll(function () {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop)
            return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";
    // Set/remove active class
    menuItems
        .parent().removeClass("active")
        .end().filter("[href='#" + id + "']").parent().addClass("active");
});






