/* ----- SERVICES ----- */
$('#srv').html(dataServices.map(item =>
    `<div class="service text-center my-3">
        <img class="my-3" src="${item.image}" />
        <h4>${item.title}</h4>
        <p>${item.description}</p>
    </div>`
).join(''));