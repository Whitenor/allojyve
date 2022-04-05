// Header

var header = document.createElement('header');
header.id = 'header';
document.getElementById('main').appendChild(header)

var siteTitle = document.createElement('h1');
siteTitle.textContent = 'AlloJyvé';
siteTitle.classList ='none';
document.getElementById('header').appendChild(siteTitle);

var navbar = document.createElement('nav');
navbar.id = 'nav';
document.getElementById('header').appendChild(navbar);

var logoNav = document.createElement('img');
logoNav.src = 'assets/img/allojyve_logo.png';
logoNav.id ='logoNav';
document.getElementById('nav').appendChild(logoNav);

for (let i = 0; i < 3; i++) {
    var arrayNav = ['Prochainement', 'affiche', 'Populaires'];
    var creation = document.createElement('a');
    if (i == 1) {
        creation.href = '#nowPlayingsTitle';
        creation.textContent = "À l'"+arrayNav[i];
    }
    else {
        creation.href = '#'+arrayNav[i];
        creation.textContent =arrayNav[i];
    }
    document.getElementById('nav').appendChild(creation);
}

createDiv('mobileNav', 'main');
document.getElementById('mobileNav').classList.add('none');

// Contenu Principal


createDiv('mainContent', 'main')
createDiv('leftCol', 'mainContent')
createDiv('allSlider', 'mainContent')
createDiv('rightCol', 'mainContent')

getList('now_playing','À l\'affiche','nowPlayingsTitle', 'nowPlayingSlide', 'cardNowPlaying');
getList('popular', 'Populaires', 'Populaires', 'popularSlide', 'cardPopular');

function getList(listName, titleContent, titleID, sliderID, cardClassSpec,){
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
                console.log(response);
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
            })
        }
    })
}

function createDiv(divID, divIDPosition){
    var createDiv = document.createElement('div');
    createDiv.id = divID;
    document.getElementById(divIDPosition).appendChild(createDiv);
}

// Footer

document.getElementById('main').appendChild(document.createElement('footer'));