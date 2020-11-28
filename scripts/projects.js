/* ----- PROJECTS ----- */
$('#projects .container').html(dataProjects.map(item =>
    `<div class="project d-lg-flex mb-5">
        <div class="col-lg-6">
            <img class="img-fluid" src="${item.image}" />
        </div>
        <div class="col-lg-6">
            <div class="d-md-flex my-4 my-lg-0 mb-lg-4">
                <h4>${item.name}</h4>
                <a class="ml-auto" target="_blank" href="${item.ghLink}">Github</a>
                <a class="ml-1" target="_blank" href="${item.liveLink}">Live</a>
            </div>
            <p>${item.description}</p>
            <p>Developed with: ${item.technologies}</p>
        </div>
    </div>`
).join(''));