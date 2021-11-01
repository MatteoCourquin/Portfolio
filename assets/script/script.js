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



// **** SHOW SKILLS ****
// ===================
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
