// **** PROGRESSION LINE TOP ****
// ==============================

window.onload = () => {
    window.addEventListener('scroll', () => {
        let hauteur = document.documentElement.scrollHeight - window.innerHeight;
        let position = window.scrollY;
        let largeur = document.documentElement.clientWidth;

        let barre = (position / hauteur) * largeur;

        document.getElementById('barre').style.width = barre + "px";
    });
};

// **** COLOR ****
// ===============
let root = document.documentElement;
let btnColorViolet= document.querySelector('.violet');
let btnColorPink = document.querySelector('.pink');
let btnColorBlue = document.querySelector('.blue');


function changeColor(color) {
    // console.log('change color !')
    root.style.setProperty('--mainColor', color)
   
};

btnColorViolet.addEventListener('click', function(){
    changeColor("#9984D4")
})
btnColorPink.addEventListener('click', function(){
    changeColor("#FF4D80")
});
btnColorBlue.addEventListener('click', function() {
    changeColor("#0075F2")
});



// **** SHOW SCROLL ****
// =====================
const ratio = .5;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const show_scroll = function (entries, observer) {
    entries.forEach(function(entry){
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('show_scroll')
            observer.unobserve(entry.target)
                console.log('visible');
        }
    })
}

const observer = new IntersectionObserver(show_scroll, options)
document.querySelectorAll('[class*="anim_scroll"]').forEach(function(r){
    observer.observe(r);
})


// **** SHOW SKILLS ****
// =====================
const logoDev = document.querySelectorAll('.skills_items')
let detailSkills = document.querySelectorAll('.details_skills')

function hello() {
    detailSkills.forEach(itemSkills => {
        itemSkills.classList.add('active')
    });
}
logoDev.forEach(item => {
    item.addEventListener('mouseenter', function () {
        detailSkills.forEach(itemSkills => {
            itemSkills.classList.add('active')
        });
    })
});



// **** COPYRIGHT ****
// ===================
var now = new Date()
var year = now.getFullYear() 
var copyright = document.querySelector('.copyright')
// year.toString();

copyright.textContent = (year);