let QR = {};
document.addEventListener("DOMContentLoaded", () => {
    QR = new QRCode("qr", {
        width: 256,
        height: 256,
    });
});

function generateQR() {
    const inputs = {};

    document.querySelectorAll("#form input").forEach((value) => {
        inputs[value.name] = value.value;
    });

    console.log(inputs);
    let txt = "BEGIN:VCARD\r\n";
    txt += "VERSION:3.0\r\n";
    txt += "N:" + inputs.name + " " + inputs.lastname + "\r\n";
    txt += "TEL:" + inputs.phone + "\r\n";
    txt += "EMAIL:" + inputs.email + "\r\n";
    txt += "END:VCARD";

    QR.makeCode(txt);

    document.getElementById("qr").style.display = "block";
}
