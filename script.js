let cols = document.querySelectorAll('.col');
document.addEventListener('keydown', (event) => {
    event.preventDefault()
    if (event.code.toLowerCase() == 'space') {
        getColor()
    }
});

document.addEventListener('click', (event) => {
    const type = event.target.dataset.type
    if (type == 'lock') {
        const node =
            event.target.tagName.toLowerCase() == 'i'
                ? event.target
                : event.target.children[0]

        node.classList.toggle('fa-lock-open')
        node.classList.toggle('fa-lock')
    } else if (type == 'copy') {
        copyToClick(event.target.textContent)
    }
})


function copyToClick(text) {
    return navigator.clipboard.writeText(text)
}

function getColor() {

    cols.forEach((col) => {
        const check = col.querySelector('i').classList.contains('fa-lock')
        if (check) {
            return
        }
        ;
        const text = col.querySelector('h2');
        const color = chroma.random()
        text.textContent = color;
        col.style.background = color;
    });

};


getColor()