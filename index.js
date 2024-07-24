const genrate = document.getElementById("genrate");
const img = document.getElementById("qrImg");

let createUrl = async function () {

    let urltext = document.getElementById("urltext");
    let response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${urltext.value}`);
    let Qrcode = await response.blob();

    img.src = URL.createObjectURL(Qrcode);
}

genrate.addEventListener('click', createUrl);