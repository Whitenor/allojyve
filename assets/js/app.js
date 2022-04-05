var navbar = document.createElement('nav');
navbar.id = 'nav';
document.getElementById('main').appendChild(navbar);

var logoNav = document.createElement('img');
logoNav.src = 'assets/img/allojyve_logo.png'

var mobileNav = document.createElement('div');
mobileNav.id = 'mobileNav';
mobileNav.classList = 'none'
document.getElementById('main').appendChild(mobileNav)

var mainCont = document.createElement('div');
mainCont.id = 'mainContent';
document.getElementById('main').appendChild(mainCont);

var leftCol = document.createElement('div');
leftCol.id = 'leftCol';
document.getElementById('mainContent').appendChild(leftCol)

var allSlider = document.createElement('div');
allSlider.id = 'allSlider';
document.getElementById('mainContent').appendChild(allSlider)

var rightCol = document.createElement('div');
rightCol.id = 'rightCol';
document.getElementById('mainContent').appendChild(rightCol)

document.getElementById('main').appendChild(document.createElement('footer'))


fetch('https://api.themoviedb.org/3/movie/popular?api_key=9e9d157f9d784170b706af996525a97c&language=fr-FR&page=1').then(res => {
    if (res.ok) {
        var populaire = document.createElement('h2')
        populaire.textContent = 'Populaires'
        populaire.id = 'PopulairesTitle'
        document.getElementById('allSlider').appendChild(populaire)
        var popularSlide = document.createElement('div')
        popularSlide.id = 'popularSlide';
        document.getElementById('allSlider').appendChild(popularSlide)
        res.json().then(response => {
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

fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=9e9d157f9d784170b706af996525a97c&language=fr-FR&page=1').then(res => {
    if (res.ok) {
        var nowPlaying = document.createElement('h2')
        nowPlaying.textContent = 'À l\'affiche'
        nowPlaying.id = 'nowPlayingsTitle'
        document.getElementById('allSlider').appendChild(nowPlaying)
        var nowPlayingSlide = document.createElement('div')
        nowPlayingSlide.id = 'nowPlayingSlide';
        document.getElementById('allSlider').appendChild(nowPlayingSlide)
        res.json().then(response => {
            for (i = 0; i < 20; i++) {
                var card2 = document.createElement('div');
                card2.classList = 'card2';
                document.getElementById('nowPlayingSlide').appendChild(card2);
                var img = document.createElement('img');
                img.classList = 'nowPlayingSlider';
                img.src = 'https://image.tmdb.org/t/p/original' + response.results[i].poster_path;
                document.getElementsByClassName('card2')[i].appendChild(img);
                var title = document.createElement('div');
                title.textContent = response.results[i].title;
                document.getElementsByClassName('card2')[i].appendChild(title);
            }
        })
    }
})