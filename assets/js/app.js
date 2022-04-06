// Header
createElement('header','header','main','','','');
createElement('h1','h1','header','none','','AlloJyvé');

createElement('nav','nav','header','','','');
createElement('img','logoNav','nav','','assets/img/allojyve_logo.png','');
createElement('p','upcoming', 'nav','navBtn','','Prochainement');
createElement('p','nowPlayings', 'nav','navBtn','','À l\'affiche');
createElement('p','popular', 'nav','navBtn','','Populaires');

createElement('div', 'mobileNav', 'header', '','','');
createElement('div', 'topMobileNav', 'mobileNav', '','','');
createElement('img','','topMobileNav','logoMobileNav','assets/img/allojyve_logo.png','')
createElement('i', 'menuBurger', 'topMobileNav', 'fa-solid fa-bars fa-5x','','');
createElement('div', 'menuMobile', 'mobileNav', 'none','','');
createElement('div', 'firstRow', 'menuMobile', '','','');
createElement('img','','firstRow','logoMobileNav','assets/img/allojyve_logo.png','')
createElement('i', '', 'firstRow', 'fa-solid fa-xmark fa-5x','','');
createElement('div', 'upcoming', 'menuMobile', 'mobileNavBtn','','Prochainement');
createElement('div', 'nowPlayings', 'menuMobile', 'mobileNavBtn','','À l\'affiche');
createElement('div', 'popular', 'menuMobile', 'mobileNavBtn','','Populaires');


// Contenu Principal

createElement('div','mainContent', 'main','','','')
createElement('div','leftCol', 'mainContent','','','')
createElement('div','allSlider', 'mainContent','','','')
createElement('div','rightCol', 'mainContent','','','')

getList('upcoming','Prochainement', 'upcomingTitle', 'upcomingSlide', 'cardUpcoming').then(res => {
    getList('now_playing','À l\'affiche','nowPlayingsTitle', 'nowPlayingSlide', 'cardNowPlaying');
    getList('popular', 'Populaires', 'popularTitle', 'popularSlide', 'cardPopular');
});

// Footer

document.getElementById('main').appendChild(document.createElement('footer'));
 
document.getElementById('menuBurger').addEventListener('click', function(){
    document.getElementById('topMobileNav').classList.add('none')
    document.getElementById('menuMobile').classList.remove('none')
})

// test du click to move

var buttons = document.getElementsByClassName('navBtn');
for (let index = 0; index < buttons.length; index++) {
    const btn = buttons[index];
    btn.addEventListener('click', function (){
        var idBtn = document.getElementsByClassName('navBtn')[index].id;
        var offsetTop = document.getElementById(idBtn + 'Title').offsetTop - 180;
        var offsetLeft = document.getElementById(idBtn + 'Title').offsetLeft;
        window.scrollTo(offsetLeft, offsetTop);
    }) 
}
var mobileButtons = document.getElementsByClassName('mobileNavBtn');
for (let index = 0; index < mobileButtons.length; index++) {
    const btn = mobileButtons[index];
    btn.addEventListener('click', function (){
        var idBtn = document.getElementsByClassName('mobileNavBtn')[index].id;
        var offsetTop = document.getElementById(idBtn + 'Title').offsetTop - 180;
        var offsetLeft = document.getElementById(idBtn + 'Title').offsetLeft;
        window.scrollTo(offsetLeft, offsetTop);
    }) 
}
function getList(listName, titleContent, titleID, sliderID, cardClassSpec){
    return new Promise((resolve, reject) => {
        fetch('https://api.themoviedb.org/3/movie/'+listName+'?api_key=9e9d157f9d784170b706af996525a97c&language=fr-FR&page=1').then(res => {
            if (res.ok) {
                var titleSlider = document.createElement('h2')
                titleSlider.textContent = titleContent;
                titleSlider.id = titleID;
                titleSlider.classList ='sliderTitle';
                document.getElementById('allSlider').appendChild(titleSlider);
                var Slide = document.createElement('div');
                Slide.id = sliderID;
                Slide.classList = 'slider';
                document.getElementById('allSlider').appendChild(Slide)
                res.json().then(response => {
                    for (i = 0; i < 20; i++) {
                        var card = document.createElement('div');
                        card.classList = 'card '+cardClassSpec;
                        document.getElementById(sliderID).appendChild(card);
                        var img = document.createElement('img');
                        img.classList = 'imgSlider';
                        img.src = 'https://image.tmdb.org/t/p/original' + response.results[i].poster_path;
                        document.getElementsByClassName(cardClassSpec)[i].appendChild(img);
                        var title = document.createElement('div');
                        title.textContent = response.results[i].title;
                        document.getElementsByClassName(cardClassSpec)[i].appendChild(title);
                    }
                    resolve();
                })
            }
        })
    });
}

function createElement(typeElement, elementID, elementIDPosition, elementClass, elementSrc, elementTextContent){
    var createElement = document.createElement(typeElement);
    createElement.id = elementID;
    createElement.classList = elementClass;
    createElement.src = elementSrc;
    createElement.textContent = elementTextContent;
    document.getElementById(elementIDPosition).appendChild(createElement);
}