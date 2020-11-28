/* ----- HEADER ----- */
// social icons
$('#home .social-icons').html(dataHeader.social.map(item =>
    `<li>
        <a target="_blank" href="${item.link}">${item.icon}</a>
    </li>`
).join(''));

// typing simulation
var typed = new Typed(".typing", {
    strings: ["Riste Spasov.", "developer.", "creative.", "collaborative."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});