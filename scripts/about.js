/* ----- ABOUT ----- */
$('#about .container').html(
    `<div class="col-6 col-md-4 mx-auto mx-md-0">
        <img src="${dataAbout.image}" alt="Image" class="img-fluid rounded-circle"/>
    </div>
    <div class="col-12 col-md-8 col-lg-6 mt-5 mt-md-0">
        <h3 class="mb-3 mb-md-4">${dataAbout.title}</h1>
        <p>${dataAbout.paragraphs[0]}</p>
        <p>${dataAbout.paragraphs[1]}</p>
    </div>`
);