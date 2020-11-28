/* ----- FOOTER ----- */
$('#footer .social-icons').html(dataHeader.social.map(item =>
    `<li class="text-center">
        <a href="#${item.link}">${item.icon}</a>
    </li>`
).join(''));

var year = new Date().getFullYear();

$('#footer .container').append(
    `<div class="text-center">&copy; RISTE SPASOV ${year}</div>`
);

