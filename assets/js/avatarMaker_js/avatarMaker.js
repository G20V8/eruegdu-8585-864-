let canvas, ctx, w, h;
const size = 256;
const colors = ["#003F63", "#F2B138", "#A6BF4B", "#D94C1A"];
const font = 100;


const draw = () => {
    // set background
    let bg = document.querySelector("#profilePic");
    bg.style.background = colors[ran(0, colors.length - 1)];

    // getting name
    let name = document.querySelector("#name").value;
    name = name.split(" ");
    let firstNameInitial = "", lastNameInitial = "";
    if (name.length >= 1) {
        firstNameInitial = name[0][0];
        if (name.length >= 2) {
            lastNameInitial = name[1][0];
        }
    }
    let printText = firstNameInitial + lastNameInitial;
    // console.log(printText);

    // printing name
    let txt = document.querySelector("#text");
    txt.innerText = printText;

}

const ran = (min = 0, max = 1) => {
    return Math.floor(Math.random() * (max - min) + min);
}

let download = () => {

    let profilePic = document.querySelector("#profilePic");
    let name = document.querySelector("#name").value;
    name = name.split(" ").join("_") + "_profilePic";
    profilePic.style.borderRadius = "0px";
    html2canvas(profilePic).then((canvas) => {
        // Convert the canvas to blob
        canvas.toBlob((blob) => {
            let link = document.createElement("a");
            link.download = `${name}.png`;
            link.href = URL.createObjectURL(blob);
            link.click();
            profilePic.style.borderRadius = "50%";

        }, 'image/png');
    });
}

//event listeners for onload & resize
window.addEventListener("load", draw);
document.querySelector("#btn").addEventListener("click", () => {
    draw();
})
document.querySelector("#download").addEventListener("click", () => {
    download();
})
