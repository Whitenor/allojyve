var lastVisitUpcomingID = JSON.parse(localStorage.getItem('upcoming'));
var lastVisitNowPlayingID = JSON.parse(localStorage.getItem('now_playing'));
var lastVisitPopularID = JSON.parse(localStorage.getItem('popular'));
// console.log(lastVisitUpcomingID);
// console.log(lastVisitNowPlayingID);
// console.log(lastVisitPopularID);

const schema = [
    {'type':'header','id':'header','position':'main','classes':'','src':'','textContent':''},
    {'type':'h1','id':'h1','position':'header','classes':'none','src':'','textContent':'Allojyvé'},
    {'type':'nav','id':'nav','position':'header','classes':'','src':'','textContent':''},
    {'type':'img','id':'logoNav','position':'nav','classes':'','src':'assets/img/allojyve_logo.png','textContent':''},
    {'type':'p','id':'upcoming','position':'nav','classes':'navBtn','src':'','textContent':'Prochainement'},
    {'type':'p','id':'nowPlayings','position':'nav','classes':'navBtn','src':'','textContent':'À l\'affiche'},
    {'type':'p','id':'popular','position':'nav','classes':'navBtn','src':'','textContent':'Populaires'},
    {'type':'div','id':'mobileNav','position':'header','classes':'heightMobileNav','src':'','textContent':''},
    {'type':'div','id':'topMobileNav','position':'mobileNav','classes':'','src':'','textContent':''},
    {'type':'img','id':'','position':'topMobileNav','classes':'logoMobileNav','src':'assets/img/allojyve_logo.png','textContent':''},
    {'type':'i','id':'menuBurger','position':'topMobileNav','classes':'fa-solid fa-bars fa-5x','src':'','textContent':''},
    {'type':'div','id':'menuMobile','position':'mobileNav','classes':'','src':'','textContent':''},
    {'type':'div','id':'firstRow','position':'menuMobile','classes':'','src':'','textContent':''},
    {'type':'img','id':'','position':'firstRow','classes':'logoMobileNav','src':'assets/img/allojyve_logo.png','textContent':''},
    {'type':'i','id':'closeMenu','position':'firstRow','classes':'fa-solid fa-xmark fa-5x','src':'','textContent':''},
    {'type':'div','id':'linkTo','position':'menuMobile','classes':'','src':'','textContent':''},
    {'type':'div','id':'upcoming','position':'linkTo','classes':'mobileNavBtn','src':'','textContent':'Prochainement'},
    {'type':'div','id':'nowPlayings','position':'linkTo','classes':'mobileNavBtn','src':'','textContent':'À l\'affiche'},
    {'type':'div','id':'popular','position':'linkTo','classes':'mobileNavBtn','src':'','textContent':'Populaires'},
    {'type':'div','id':'socialsNavTop','position':'menuMobile','classes':'','src':'','textContent':''},
    {'type':'h3','id':'titleSocialsTop','position':'socialsNavTop','classes':'','src':'','textContent':'Suivez-nous!'},
    {'type':'div','id':'socialsLinkTop','position':'socialsNavTop','classes':'','src':'','textContent':''},
    {'type':'i','id':'facebookNavTop','position':'socialsLinkTop','classes':'fa-brands fa-facebook-square fa-3x','src':'fa-facebook-square fa-3x','textContent':''},
    {'type':'i','id':'twitterNavTop','position':'socialsLinkTop','classes':'fa-brands fa-twitter fa-3x','src':'','textContent':''},
    {'type':'i','id':'instagramNavTop','position':'socialsLinkTop','classes':'fa-brands fa-instagram fa-3x','src':'','textContent':''},
    {'type':'div','id':'mainContent','position':'main','classes':'','src':'','textContent':''},    
    {'type':'div','id':'leftCol','position':'mainContent','classes':'','src':'','textContent':''},
    {'type':'div','id':'allSlider','position':'mainContent','classes':'','src':'','textContent':''},
    {'type':'div','id':'rightCol','position':'mainContent','classes':'','src':'','textContent':''},
    {'type':'footer','id':'footer','position':'main','classes':'','src':'','textContent':''},
    {'type':'div','id':'socialsFooter','position':'footer','classes':'','src':'','textContent':''},
    {'type':'div','id':'logoCopy','position':'footer','classes':'','src':'','textContent':''},
    {'type':'div','id':'legals','position':'footer','classes':'','src':'','textContent':''},
    {'type':'h3','id':'titleSocialsFooter','position':'socialsFooter','classes':'','src':'','textContent':'Suivez-nous !'},
    {'type':'div','id':'socialsLinkFooter','position':'socialsFooter','classes':'','src':'','textContent':''},
    {'type':'i','id':'facebookFooter','position':'socialsLinkFooter','classes':'fa-brands fa-facebook-square fa-3x','src':'','textContent':''},
    {'type':'i','id':'twitterFooter','position':'socialsLinkFooter','classes':'fa-brands fa-twitter fa-3x','src':'','textContent':''},
    {'type':'i','id':'instagramFooter','position':'socialsLinkFooter','classes':'fa-brands fa-instagram fa-3x','src':'','textContent':''},
    {'type':'img','id':'logoFooter','position':'logoCopy','classes':'','src':'assets/img/allojyve_logo_white.png','textContent':''},
    {'type':'p','id':'copyright','position':'logoCopy','classes':'','src':'','textContent':'Copyright \u00a9 - Allojyvé 2022'},
    {'type':'h3','id':'mentionsLegals','position':'legals','classes':'','src':'','textContent':'Mentions Légales'},
    {'type':'p','id':'cgu','position':'legals','classes':'','src':'','textContent':'CGU'},
    {'type':'p','id':'cookiePolicy','position':'legals','classes':'','src':'','textContent':'Politiques de cookies'},
    {'type':'p','id':'rgpd','position':'legals','classes':'','src':'','textContent':'Réglement RGPD'}
]
for (let i = 0; i < schema.length; i++) {
    createElement(schema[i].type, schema[i].id, schema[i].position, schema[i].classes, schema[i].src, schema[i].textContent)
}

// Contenu Principal

getList('upcoming','Prochainement', 'upcomingTitle', 'upcomingSlide', 'cardUpcoming').then(res => {
    getList('now_playing','À l\'affiche','nowPlayingsTitle', 'nowPlayingSlide', 'cardNowPlaying');
    getList('popular', 'Populaires', 'popularTitle', 'popularSlide', 'cardPopular');
});

document.getElementById('menuBurger').addEventListener('click', function(){
    document.getElementById('mobileNav').classList.remove('heightMobileNav');
    document.getElementById('menuMobile').classList.add('open');
    document.getElementById('menuBurger').classList.add('transparent');
    setTimeout(() => {
        document.getElementById('topMobileNav').classList.add('close');
        
    }, 500);
})

document.getElementById('closeMenu').addEventListener('click', function(){
    document.getElementById('mobileNav').classList.add('heightMobileNav');
    setTimeout(() => {
        document.getElementById('menuBurger').classList.remove('transparent');
    }, 200);
    document.getElementById('topMobileNav').classList.remove('close');
    document.getElementById('menuMobile').classList.remove('open');
})

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

        document.getElementById('mobileNav').classList.add('heightMobileNav')
        setTimeout(() => {
            document.getElementById('menuBurger').classList.remove('transparent')
        }, 200);
        document.getElementById('topMobileNav').classList.remove('close')
        document.getElementById('menuMobile').classList.remove('open')
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
                var listArray = []
                res.json().then(response => {
                    console.log(response);
                    for (i = 0; i < 20; i++) {
                        var card = document.createElement('div');
                        card.classList = 'card '+cardClassSpec;
                        card.id = listName+response.results[i].id
                        card.value = response.results[i].id
                        document.getElementById(sliderID).appendChild(card);
                        var img = document.createElement('img');
                        img.classList = 'imgSlider';
                        img.src = 'https://image.tmdb.org/t/p/original' + response.results[i].poster_path;
                        document.getElementsByClassName(cardClassSpec)[i].appendChild(img);
                        var title = document.createElement('div');
                        title.textContent = response.results[i].title;
                        document.getElementsByClassName(cardClassSpec)[i].appendChild(title);
                        listArray[i] = response.results[i].id;
                        localStorage.setItem( listName, JSON.stringify(listArray));
                        var test2 = listName+response.results[i].id;
                        document.getElementById(test2).addEventListener('click', function(){
                            var id = this.value; 
                            fetch('https://api.themoviedb.org/3/movie/'+id+'?api_key=9e9d157f9d784170b706af996525a97c&language=en-US').then(res => {
                                if (res.ok) {
                                    res.json().then(response => {
                                        var modalGeneral = document.createElement('div');
                                        modalGeneral.id = 'modal'
                                        modalGeneral.classList = 'modal'
                                        document.getElementsByTagName('body')[0].appendChild(modalGeneral)
                                        var modalDialog = document.createElement('div')
                                        modalDialog.classList = 'modal-dialog'
                                        modalDialog.id = 'modalDialog'
                                        document.getElementById('modal').appendChild(modalDialog)
                                        var modalContent = document.createElement('div')
                                        modalContent.classList = 'modal-content'
                                        document.getElementById('modalDialog').appendChild(modalContent)
                                        
                                        
                                    })
                                }
                            })
                        })
                        
                    }
                    resolve();
                })
            }
        })
    });
}

function createElement(typeElement, elementID, elementIDLocation, elementClass, elementSrc, elementTextContent){
    var createElement = document.createElement(typeElement);
    createElement.id = elementID;
    createElement.classList = elementClass;
    createElement.src = elementSrc;
    createElement.textContent = elementTextContent;
    document.getElementById(elementIDLocation).appendChild(createElement);
}