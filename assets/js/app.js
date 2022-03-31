var navbar = document.createElement('nav');
navbar.id = 'nav';
document.getElementById('main').appendChild(navbar);

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