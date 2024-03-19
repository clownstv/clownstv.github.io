let clowns = [
    {
        name:"Stalker و دوستان",
        pic:"./images/enemy.png",
        movie:"../movies/r99.mp4",
        page:"./pages/r99.html"
    },

]
let a = document.getElementById("main-center")
clowns.forEach(e => {
    a.innerHTML += `<div class='clowns'> <img width='250px' height='250px' src='${e.pic}' alt='Dalghak1'></img><br><span><a href='${e.page}'>${e.name}</a></span></div>`;
});
