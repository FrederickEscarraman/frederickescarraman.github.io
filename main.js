const iframe = document.getElementById("current-page");

// JSON con elementos del menu
const menu = [
    {id: 0, name: "Portada", link: "/public/index/index.html"},
    {id: 1, name: "Biografia", link: "/public/bio/index.html"},
    {id: 2, name: "Etiquetas", link: "/public/tags/index.html"},
    {id: 3, name: "Menu", link: "/public/menu/index.html"},
    {id: 4, name: "Cedula", link: "/public/cedula/index.html"},
    {id: 5, name: "JSON Menu", link: "/public/jsMenu/index.html"},
    {id: 6, name: "Formulario", link: "/public/form/index.html"},
    {id: 7, name: "Contacto QR", link: "/public/contact QR/index.html"},
];

let prev = {removeAttribute: () => null};

// Introducir elementos en el menu
menu.forEach((value) => {
    const button = document.createElement("button");

    button.innerHTML = value.name;
    button.setAttribute("n", value.id);
    button.setAttribute("style", `width: ${95 / menu.length}%`);
    button.addEventListener("click", (e) => {
        handleClick(e);
    });

    document.getElementById("nav-menu").append(button);
});

// Seleccionar la Portada
document.querySelector('#nav-menu button[n="0"]').click();

// Funcion de navegacion
function handleClick(e) {
    const html = e.target;
    const n = html.getAttribute("n");

    html.setAttribute("current", "");
    prev.removeAttribute("current");

    prev = html;

    iframe.src = menu[n].link;
}
