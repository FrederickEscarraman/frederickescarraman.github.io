let page = 1;

function pageChange(e) {
    const tempPage = page + e;

    if (tempPage !== 0 && tempPage !== 6) {
        for (let k = 1; k <= 5; k++) {
            const foundPage = document.getElementsByTagName(`part${k}`);

            if (k === tempPage) foundPage[0].setAttribute("show", "");
            else foundPage[0].removeAttribute("show");
        }

        page = tempPage;

        if (page === 5) generateRegister();
    }
}

function generateRegister() {
    const inputs = document.querySelectorAll("input");
    const html = document.getElementById("log");
    const data = {
        info: {[getSelect().id]: getSelect().value},
        family: {
            fam1: {},
            fam2: {},
            fam3: {},
            fam4: {},
            fam5: {},
        },
        health: {
            sickness1: {},
            sickness2: {},
            sickness3: {},
            sickness4: {},
        },
        register: {
            reg1: {},
            reg2: {},
            reg3: {},
            reg4: {},
        },
    };

    inputs.forEach((value, k) => {
        const name = value.id;
        const val = value.value;
        const n = name.charAt(name.length - 1);

        if (k < 5) {
            data.info[name] = val;
        }

        if (name.search("-fam-") !== -1 && val !== "") {
            data.family[`fam${n}`][name] = val;
        }

        if (name.search("sickness-") !== -1 && val !== "") {
            data.health[`sickness${n}`][name] = val;
        }

        if (name.search("register-") !== -1 && val !== "") {
            data.register[`reg${n}`][name] = val;
        }
    });

    const {info, family, health, register} = data;

    html.innerHTML = `
        Paciente ${info.name} nacido el ${info.birthday} con ${info.age} años de 
        ${info.sex !== "Seleccione..." ? `edad, de sexo ${info.sex === "m" ? "Masculino." : "Femenino."} ` : "edad."}
        <br>Reside en ${info.address} y responde al numero telefonico ${info.phone}

        <divider></divider>

        Posee parentescos familiares con:
        ${
            Object.keys(family.fam1).length === 3
                ? `<br>- ${family.fam1["name-fam-1"]} con ${family.fam1["age-fam-1"]} años de edad, ${family.fam1["parent-fam-1"]}.`
                : ""
        }

        ${
            Object.keys(family.fam2).length === 3
                ? `<br>- ${family.fam2["name-fam-2"]} con ${family.fam2["age-fam-2"]} años de edad, ${family.fam2["parent-fam-2"]}.`
                : ""
        }

        ${
            Object.keys(family.fam3).length === 3
                ? `<br>- ${family.fam3["name-fam-3"]} con ${family.fam3["age-fam-3"]} años de edad, ${family.fam3["parent-fam-3"]}.`
                : ""
        }

        ${
            Object.keys(family.fam4).length === 3
                ? `<br>- ${family.fam4["name-fam-4"]} con ${family.fam4["age-fam-4"]} años de edad, ${family.fam4["parent-fam-4"]}.`
                : ""
        }

        ${
            Object.keys(family.fam5).length === 3
                ? `<br>- ${family.fam5["name-fam-5"]} con ${family.fam5["age-fam-5"]} años de edad, ${family.fam5["parent-fam-5"]}.`
                : ""
        }
        
        <divider></divider>

        Condiciones Pre-existentes:
        ${
            Object.keys(health.sickness1).length === 3
                ? `<br>- Padece ${health.sickness1["sickness-1"]} desde hace ${health.sickness1["sickness-time-1"]} (${health.sickness1["sickness-details-1"]}).`
                : ""
        }

        ${
            Object.keys(health.sickness2).length === 3
                ? `<br>- Padece ${health.sickness2["sickness-2"]} desde hace ${health.sickness2["sickness-time-2"]} (${health.sickness2["sickness-details-2"]}).`
                : ""
        }

        ${
            Object.keys(health.sickness3).length === 3
                ? `<br>- Padece ${health.sickness3["sickness-3"]} desde hace ${health.sickness3["sickness-time-3"]} (${health.sickness3["sickness-details-3"]}).`
                : ""
        }

        ${
            Object.keys(health.sickness4).length === 3
                ? `<br>- Padece ${health.sickness4["sickness-4"]} desde hace ${health.sickness4["sickness-time-4"]} (${health.sickness4["sickness-details-4"]}).`
                : ""
        }

        <divider></divider>

        Registro de internamientos anteriores:
        ${
            Object.keys(register.reg1).length === 3
                ? `<br>- ${register.reg1["register-date-1"]}. Centro medico: ${register.reg1["register-medical-center-1"]} | ${register.reg1["register-diagnostic-1"]}.`
                : ""
        }
        
        ${
            Object.keys(register.reg2).length === 3
                ? `<br>- ${register.reg2["register-date-2"]}. Centro medico: ${register.reg2["register-medical-center-2"]} | ${register.reg2["register-diagnostic-2"]}.`
                : ""
        }
        
        ${
            Object.keys(register.reg3).length === 3
                ? `<br>- ${register.reg3["register-date-3"]}. Centro medico: ${register.reg3["register-medical-center-3"]} | ${register.reg3["register-diagnostic-3"]}.`
                : ""
        }
        
        ${
            Object.keys(register.reg4).length === 3
                ? `<br>- ${register.reg4["register-date-4"]}. Centro medico: ${register.reg4["register-medical-center-4"]} | ${register.reg4["register-diagnostic-4"]}.`
                : ""
        }

    `;
}

function getSelect() {
    return document.getElementsByTagName("select")[0];
}
