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
        creation.href = '#nowPlaying';
        creation.textContent = "À l'"+arrayNav[i];
    }
    else {
        creation.href = '#'+arrayNav[i];
        creation.textContent =arrayNav[i];
    }
    document.getElementById('nav').appendChild(creation);
}

var mobileNav = document.createElement('div');
mobileNav.id = 'mobileNav';
mobileNav.classList = 'none'
document.getElementById('main').appendChild(mobileNav);







// Contenu Principal




var mainCont = document.createElement('div');
mainCont.id = 'mainContent';
document.getElementById('main').appendChild(mainCont);

var leftCol = document.createElement('div');
leftCol.id = 'leftCol';
document.getElementById('mainContent').appendChild(leftCol);

var allSlider = document.createElement('div');
allSlider.id = 'allSlider';
document.getElementById('mainContent').appendChild(allSlider);

var rightCol = document.createElement('div');
rightCol.id = 'rightCol';
document.getElementById('mainContent').appendChild(rightCol);

fetch('https://api.themoviedb.org/3/movie/popular?api_key=9e9d157f9d784170b706af996525a97c&language=fr-FR&page=1').then(res => {
    if (res.ok) {
        var populaire = document.createElement('h2')
        populaire.textContent = 'Populaires'
        populaire.id = 'Populaires'
        document.getElementById('allSlider').appendChild(populaire)
        var popularSlide = document.createElement('div')
        popularSlide.id = 'popularSlide';
        document.getElementById('allSlider').appendChild(popularSlide)
        res.json().then(response => {
            console.log(response);
            for (i = 0; i < 20; i++) {
                var card = document.createElement('div');
                card.classList = 'card';
                document.getElementById('popularSlide').appendChild(card);
                var img = document.createElement('img');
                img.classList = 'popularSlider';
                img.src = 'https://image.tmdb.org/t/p/original' + response.results[i].poster_path;
                document.getElementsByClassName('card')[i].appendChild(img);
                var title = document.createElement('div');
                title.textContent = response.results[i].title;
                document.getElementsByClassName('card')[i].appendChild(title);
            }
        })
    }
})


// Footer



document.getElementById('main').appendChild(document.createElement('footer'));







