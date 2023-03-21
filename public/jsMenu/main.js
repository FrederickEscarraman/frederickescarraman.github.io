const jsonMenu = [
    {
        name: "CUENTAS",
        children: [
            {
                name: "AHORRO",
                children: [
                    "Cuenta de Ahorro en Pesos",
                    "Cuenta Ahorro Más",
                    "Cuenta de Ahorro Infantil",
                    "Cuenta de Ahorro Infantil en Dólares",
                    "Cuenta de Ahorro Preserva",
                    "Cuenta de Ahorro en Dólares",
                    "Cuenta de Ahorro en Euros",
                    "",
                ],
            },
            {
                name: "CORRIENTES",
                children: [
                    "Cuenta Corriente Personal",
                    "Cuenta Corriente Más Personal",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                ],
            },
            {
                name: "SOLUCIONES DIGITALES",
                children: [
                    "Cuenta MIO Banreservas",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                ],
            },
        ],
    },
    {
        name: "INVERSIONES",
        children: [
            {
                name: "CERTIFICADOS",
                children: [
                    "Certificado Financiero en Pesos",
                    "Depósito a Plazo en dólares y euros",
                    "",
                ],
            },
            {
                name: "MERCADO DE VALORES",
                children: [
                    "Inversiones en Títulos-Valores",
                    "Fondos de Inversión",
                    "",
                ],
            },
        ],
    },
    {
        name: "TARJETAS",
        children: [
            {
                name: "DÉBITO",
                children: [
                    "Mastercard Débito Dólares",
                    "Mastercard Débito Gold",
                    "Mastercard Débito Platinum",
                    "Mastercard Débito Standard",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                ],
            },
            {
                name: "CRÉDITO",
                children: [
                    "Tarjeta de crédito Visa Ser",
                    "Credimás Banreservas",
                    "Mastercard Black",
                    "Visa Flotilla Personal",
                    "Visa Infinite",
                    "Visa Platinum Universe",
                    "Visa y Mastercard Clásica",
                    "Visa y Mastercard Gold",
                    "Visa y Mastercard Platinum",
                    "Tarjeta de crédito Preserva",
                    "",
                ],
            },
        ],
    },
    {
        name: "PRESTAMOS",
        children: [
            {
                name: "PERSONALES",
                children: [
                    "Préstamos de Consumo",
                    "Vacaciones Felices",
                    "Educación y Cultura",
                    "Empleado Feliz",
                    "Sueldo Más",
                    "Pensionado Feliz",
                    "Préstamos en Dólares",
                    "",
                ],
            },
            {
                name: "HIPOTECARIOS",
                children: [
                    "Préstamos Hipotecarios",
                    "Préstamos Hipotecarios para residentes en el extranjero",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                ],
            },
            {
                name: "VEHICULOS",
                children: [
                    "Préstamos Vehículos Nuevos",
                    "Préstamos Vehículos Usados",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                ],
            },
        ],
    },
    {
        name: "SEGUROS",
        children: [
            {
                name: "SEGUROS DE PERSONAS",
                children: [
                    "Accidentes Personales",
                    "Asistencia Funeraria",
                    "Seguro Médico Internacional Just",
                    "Viajes Reservas",
                    "Vida Individual en Pesos y Dólares",
                    "Vida Reservas",
                    "",
                ],
            },
            {
                name: "RIEGOS GENERALES",
                children: [
                    "Rescate De Prisa",
                    "Vehículos de Motor",
                    "Vivienda Segura",
                    "",
                    "",
                    "",
                    "",
                ],
            },
        ],
    },
    {
        name: "REMESAS, IMPUESTOS Y SERVICIOS",
        children: [],
    },
];

setTimeout(() => {
    main();
}, 50);

function main() {
    const buttonsContainer = document.getElementById("buttons-container");

    jsonMenu.map((value, key) => {
        let html = "";
        html += "<div ";
        html += `id=opc${key + 1} `;
        html += 'class="button-position"> ';
        html += `<div class="options">${value.name}</div>`;

        if (value.children.length !== 0) {
            html += `<div id="opc${key + 1}-content" class="hover-content">`;

            value.children.map((valua, kay) => {
                if (kay === 0)
                    html += '<div class="opc-content-secs opc-content-secdiv">';

                if (kay === 1 && value.children.length === 2)
                    html += '<div class="opc-content-secs">';

                if (kay === 1 && value.children.length === 3)
                    html += '<div class="opc-content-secs opc-content-secdiv">';

                if (kay === 2) html += '<div class="opc-content-secs">';

                html += `<h4>${valua.name}</h4>`;

                valua.children.forEach((valui) => {
                    if (valui !== "") html += `<li>${valui}</li>`;
                    else html += "<br />";
                });

                html += "<button>Ver Todos</button>";
                html += "</div>";

                if (kay === 1 && value.children.length === 2)
                    html += '<div class="opc-content-secs"></div>';
            });
        }
        html += "</div>";

        buttonsContainer.innerHTML += html;
    });
}
