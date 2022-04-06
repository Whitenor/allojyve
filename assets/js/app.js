// Header
createElement('header','header','main','','','')
createElement('h1','h1','header','none','','AlloJyvé')
createElement('nav','nav','header','','','')
createElement('img','logoNav','nav','','assets/img/allojyve_logo.png','')

createElement('p','upcoming', 'nav','navBtn','','Prochainement')
createElement('p','nowPlayings', 'nav','navBtn','','À l\'affiche')
createElement('p','popular', 'nav','navBtn','','Populaires')
createElement('div', 'mobileNav', 'main', '','','');
createElement('div', 'menuMobile', 'mobileNav', '','','');
createElement('div', 'upcoming', 'menuMobile', '','','Prochainement');
createElement('div', 'nowPlayings', 'menuMobile', '','','À l\'affiche');
createElement('div', 'popular', 'menuMobile', '','','Populaires');


// Contenu Principal

createElement('div','mainContent', 'main','','','')
createElement('div','leftCol', 'mainContent','','','')
createElement('div','allSlider', 'mainContent','','','')
createElement('div','rightCol', 'mainContent','','','')

getList('upcoming','Prochainement', 'upcomingTitle', 'upcomingSlide', 'cardUpcoming').then(res => {
    getList('now_playing','À l\'affiche','nowPlayingsTitle', 'nowPlayingSlide', 'cardNowPlaying');
    getList('popular', 'Populaires', 'popularTitle', 'popularSlide', 'cardPopular');
});

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

// Footer

document.getElementById('main').appendChild(document.createElement('footer'));
 
window.addEventListener('keypress', function(){
    var test = document.getElementById('nowPlayingsTitle').offsetTop - 150
    console.log(test);
    var test2 = document.getElementById('nowPlayingsTitle').offsetLeft
    console.log(test2);
    window.scrollTo(test2, test)
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