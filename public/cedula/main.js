function check() {
    const value = document.getElementById("value").value;
    const output = document.getElementById("result");

    if (ccTest(value)) {
        output.innerText = "La cedula es correcta.";
        output.setAttribute("ok", "true");
    } else {
        output.innerText = "La cedula es incorrecta.";
        output.setAttribute("ok", "false");
    }
}
