// **** LOADER ****
// ================
const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
    loader.classList.add("remove");
});

// **** CURSOR ****
// ================

const cursor = document.querySelector(".new-cursor");

document.addEventListener("mousemove", (e) => {
    cursor.setAttribute(
        "style",
        "top:" + (e.pageY - 20) + "px; left:" + (e.pageX - 20) + "px;"
    );
});

document.addEventListener("click", () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});

// **** PROGRESSION LINE TOP ****
// ==============================
window.onload = () => {
    window.addEventListener("scroll", () => {
        let hauteur =
            document.documentElement.scrollHeight - window.innerHeight;
        let position = window.scrollY;
        let largeur = document.documentElement.clientWidth;

        let barre = (position / hauteur) * largeur;

        document.getElementById("barre").style.width = barre + "px";
    });
};

// **** COLOR ****
// ===============
let root = document.documentElement;
let btnColorViolet = document.querySelector(".violet");
let btnColorPink = document.querySelector(".pink");
let btnColorBlue = document.querySelector(".blue");

function changeColor(color) {
    // console.log('change color !')
    root.style.setProperty("--mainColor", color);
}

btnColorViolet.addEventListener("click", function () {
    changeColor("#9984D4");
});
btnColorPink.addEventListener("click", function () {
    changeColor("#FF4D80");
});
btnColorBlue.addEventListener("click", function () {
    changeColor("#0075F2");
});

// **** SHOW SCROLL ****
// =====================
const ratio = 0.2;
const options = {
    root: null,
    rootMargin: "0px",
    threshold: ratio,
};

const show_scroll = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add("show_scroll");
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(show_scroll, options);
document.querySelectorAll('[class*="anim_scroll"]').forEach(function (r) {
    observer.observe(r);
});

// // **** ANIM TXT WRITTER ****
// // ==========================
// const txtReplace = document.querySelector('.anim-txt-writter');

// new Typewriter(txtReplace, {

// })
// .typeString('<strong>HTML</strong>')
// .pauseFor(300)
// .typeString('JavaScript')
// .start()

// **** HowManyTimeToCode ****
// ===========================
// let HowManyTimeToCode = document.querySelector('.howManyTimeToCode');
// var date1 = new Date("01/01/2020");
// var date2 = new Date("07/04/2020");
// var Diff_temps = date2.getTime() - date1.getTime();
// var Diff_jours = Diff_temps / (1000 * 3600 * 24);
// alert("Le nombre de jours entre les deux dates est de " + Math.round(Diff_jours) + " jours");

// **** COPYRIGHT ****
// ===================
var now = new Date();
var year = now.getFullYear();
var copyright = document.querySelector(".copyright");
// year.toString();

copyright.textContent = year;





// // **** Gestion 404 ****

// function checkValidURL(url) {
//     var xmlhttp;
//     if (window.XMLHttpRequest) {
//         xmlhttp = new XMLHttpRequest();
//     } else {
//         // code for older browsers
//         xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//     }

//     // Callback
//     xmlhttp.onreadystatechange = function () {
//         if (this.status == 200) {
//             return true; // OK
//         } else {
//             // or -> } else if (this.status == 404) {
//             return false; // Ops, something happen..
//         }
//     };

//     xmlhttp.open("GET", url, false);
//     xmlhttp.send();
// }

// if (checkValidURL(window.location.href)) {
//     console.log("invalid URL");
//     // window.location = "http://google.ca";
// } else {
//     console.log("valid URL"); 
// }
