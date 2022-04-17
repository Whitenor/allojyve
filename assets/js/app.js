const pastList = [
  {
    listName: "upcoming",
    pastID: JSON.parse(localStorage.getItem("upcoming")),
  },
  {
    listName: "now_playing",
    pastID: JSON.parse(localStorage.getItem("now_playing")),
  },
  { listName: "popular", pastID: JSON.parse(localStorage.getItem("popular")) },
];
var newFilmCount = 0;
var x = 0;
var listActual = [
  { listName: "upcoming", actualID: [], title: [] },
  { listName: "now_playing", actualID: [], title: [] },
  { listName: "popular", actualID: [], title: [] },
];
var nouveauFilms = "";

const schema = [
  {
    type: "header",
    id: "header",
    position: "main",
    classes: "",
    src: "",
    textContent: "",
  },
  {
    type: "h1",
    id: "h1",
    position: "header",
    classes: "none",
    src: "",
    textContent: "Allojyvé",
  },
  {
    type: "nav",
    id: "nav",
    position: "header",
    classes: "",
    src: "",
    textContent: "",
  },
  {
    type: "img",
    id: "logoNav",
    position: "nav",
    classes: "",
    src: "assets/img/allojyve_logo.png",
    textContent: "",
  },
  {
    type: "p",
    id: "upcoming",
    position: "nav",
    classes: "navBtn",
    src: "",
    textContent: "Prochainement",
  },
  {
    type: "p",
    id: "nowPlayings",
    position: "nav",
    classes: "navBtn",
    src: "",
    textContent: "À l'affiche",
  },
  {
    type: "p",
    id: "popular",
    position: "nav",
    classes: "navBtn",
    src: "",
    textContent: "Populaires",
  },
  {
    type: "div",
    id: "mobileNav",
    position: "header",
    classes: "heightMobileNav",
    src: "",
    textContent: "",
  },
  {
    type: "div",
    id: "topMobileNav",
    position: "mobileNav",
    classes: "",
    src: "",
    textContent: "",
  },
  {
    type: "img",
    id: "",
    position: "topMobileNav",
    classes: "logoMobileNav",
    src: "assets/img/allojyve_logo.png",
    textContent: "",
  },
  {
    type: "i",
    id: "menuBurger",
    position: "topMobileNav",
    classes: "fa-solid fa-bars fa-3x",
    src: "",
    textContent: "",
  },
  {
    type: "div",
    id: "menuMobile",
    position: "mobileNav",
    classes: "",
    src: "",
    textContent: "",
  },
  {
    type: "div",
    id: "firstRow",
    position: "menuMobile",
    classes: "",
    src: "",
    textContent: "",
  },
  {
    type: "img",
    id: "",
    position: "firstRow",
    classes: "logoMobileNav",
    src: "assets/img/allojyve_logo.png",
    textContent: "",
  },
  {
    type: "i",
    id: "closeMenu",
    position: "firstRow",
    classes: "fa-solid fa-xmark fa-3x",
    src: "",
    textContent: "",
  },
  {
    type: "div",
    id: "linkTo",
    position: "menuMobile",
    classes: "",
    src: "",
    textContent: "",
  },
  {
    type: "div",
    id: "upcoming",
    position: "linkTo",
    classes: "mobileNavBtn",
    src: "",
    textContent: "Prochainement",
  },
  {
    type: "div",
    id: "nowPlayings",
    position: "linkTo",
    classes: "mobileNavBtn",
    src: "",
    textContent: "À l'affiche",
  },
  {
    type: "div",
    id: "popular",
    position: "linkTo",
    classes: "mobileNavBtn",
    src: "",
    textContent: "Populaires",
  },
  {
    type: "div",
    id: "socialsNavTop",
    position: "menuMobile",
    classes: "",
    src: "",
    textContent: "",
  },
  {
    type: "h3",
    id: "titleSocialsTop",
    position: "socialsNavTop",
    classes: "",
    src: "",
    textContent: "Suivez-nous!",
  },
  {
    type: "div",
    id: "socialsLinkTop",
    position: "socialsNavTop",
    classes: "",
    src: "",
    textContent: "",
  },
  {
    type: "i",
    id: "facebookNavTop",
    position: "socialsLinkTop",
    classes: "fa-brands fa-facebook-square fa-3x",
    src: "fa-facebook-square fa-3x",
    textContent: "",
  },
  {
    type: "i",
    id: "twitterNavTop",
    position: "socialsLinkTop",
    classes: "fa-brands fa-twitter fa-3x",
    src: "",
    textContent: "",
  },
  {
    type: "i",
    id: "instagramNavTop",
    position: "socialsLinkTop",
    classes: "fa-brands fa-instagram fa-3x",
    src: "",
    textContent: "",
  },
  {
    type: "div",
    id: "mainContent",
    position: "main",
    classes: "",
    src: "",
    textContent: "",
  },
  {
    type: "div",
    id: "leftCol",
    position: "mainContent",
    classes: "",
    src: "",
    textContent: "",
  },
  {
    type: "div",
    id: "allSlider",
    position: "mainContent",
    classes: "",
    src: "",
    textContent: "",
  },
  {
    type: "div",
    id: "rightCol",
    position: "mainContent",
    classes: "",
    src: "",
    textContent: "",
  },
  {
    type: "footer",
    id: "footer",
    position: "main",
    classes: "",
    src: "",
    textContent: "",
  },
  {
    type: "div",
    id: "socialsFooter",
    position: "footer",
    classes: "",
    src: "",
    textContent: "",
  },
  {
    type: "div",
    id: "logoCopy",
    position: "footer",
    classes: "",
    src: "",
    textContent: "",
  },
  {
    type: "div",
    id: "legals",
    position: "footer",
    classes: "",
    src: "",
    textContent: "",
  },
  {
    type: "h3",
    id: "titleSocialsFooter",
    position: "socialsFooter",
    classes: "",
    src: "",
    textContent: "Suivez-nous !",
  },
  {
    type: "div",
    id: "socialsLinkFooter",
    position: "socialsFooter",
    classes: "",
    src: "",
    textContent: "",
  },
  {
    type: "i",
    id: "facebookFooter",
    position: "socialsLinkFooter",
    classes: "fa-brands fa-facebook-square fa-3x",
    src: "",
    textContent: "",
  },
  {
    type: "i",
    id: "twitterFooter",
    position: "socialsLinkFooter",
    classes: "fa-brands fa-twitter fa-3x",
    src: "",
    textContent: "",
  },
  {
    type: "i",
    id: "instagramFooter",
    position: "socialsLinkFooter",
    classes: "fa-brands fa-instagram fa-3x",
    src: "",
    textContent: "",
  },
  {
    type: "img",
    id: "logoFooter",
    position: "logoCopy",
    classes: "",
    src: "assets/img/allojyve_logo_white.png",
    textContent: "",
  },
  {
    type: "p",
    id: "copyright",
    position: "logoCopy",
    classes: "",
    src: "",
    textContent: "Copyright \u00a9 - Allojyvé 2022",
  },
  {
    type: "h3",
    id: "mentionsLegals",
    position: "legals",
    classes: "",
    src: "",
    textContent: "Mentions Légales",
  },
  {
    type: "p",
    id: "cgu",
    position: "legals",
    classes: "",
    src: "",
    textContent: "CGU",
  },
  {
    type: "p",
    id: "cookiePolicy",
    position: "legals",
    classes: "",
    src: "",
    textContent: "Politiques de cookies",
  },
  {
    type: "p",
    id: "rgpd",
    position: "legals",
    classes: "",
    src: "",
    textContent: "Réglement RGPD",
  },
];
for (let i = 0; i < schema.length; i++) {
  createElement(
    schema[i].type,
    schema[i].id,
    schema[i].position,
    schema[i].classes,
    schema[i].src,
    schema[i].textContent
  );
}
var modalGeneral = document.createElement("div");
modalGeneral.id = "modal";
modalGeneral.classList = "modal";
document.getElementsByTagName("body")[0].appendChild(modalGeneral);
// Contenu Principal

getList(
  "upcoming",
  "Prochainement",
  "upcomingTitle",
  "upcomingSlide",
  "cardUpcoming"
).then((res) => {
  getList(
    "now_playing",
    "À l'affiche",
    "nowPlayingsTitle",
    "nowPlayingSlide",
    "cardNowPlaying"
  );
  getList(
    "popular",
    "Populaires",
    "popularTitle",
    "popularSlide",
    "cardPopular"
  );
});

document.getElementById("menuBurger").addEventListener("click", function () {
  document.getElementById("mobileNav").classList.remove("heightMobileNav");
  document.getElementsByTagName("body")[0].style.overflowY = "hidden";
  document.getElementById("menuMobile").classList.add("open");
  document.getElementById("menuBurger").classList.add("transparent");
  setTimeout(() => {
    document.getElementById("topMobileNav").classList.add("close");
  }, 100);
});

document.getElementById("closeMenu").addEventListener("click", function () {
  setTimeout(() => {
    document.getElementById("menuBurger").classList.remove("transparent");
  }, 200);
  document.getElementById("topMobileNav").classList.remove("close");
  document.getElementsByTagName("body")[0].style.overflowY = "visible";

  setTimeout(() => {
    document.getElementById("mobileNav").classList.add("heightMobileNav");
    document.getElementById("menuMobile").classList.remove("open");
  }, 500);
});

var buttons = document.getElementsByClassName("navBtn");
for (let index = 0; index < buttons.length; index++) {
  const btn = buttons[index];
  btn.addEventListener("click", function () {
    var idBtn = document.getElementsByClassName("navBtn")[index].id;
    var offsetTop = document.getElementById(idBtn + "Title").offsetTop - 180;
    var offsetLeft = document.getElementById(idBtn + "Title").offsetLeft;
    window.scrollTo(offsetLeft, offsetTop);
  });
}
var mobileButtons = document.getElementsByClassName("mobileNavBtn");
for (let index = 0; index < mobileButtons.length; index++) {
  const btn = mobileButtons[index];
  btn.addEventListener("click", function () {
    var idBtn = document.getElementsByClassName("mobileNavBtn")[index].id;
    var offsetTop = document.getElementById(idBtn + "Title").offsetTop - 180;
    var offsetLeft = document.getElementById(idBtn + "Title").offsetLeft;
    window.scrollTo(offsetLeft, offsetTop);

    document.getElementById("mobileNav").classList.add("heightMobileNav");
    setTimeout(() => {
      document.getElementById("menuBurger").classList.remove("transparent");
    }, 200);
    document.getElementById("topMobileNav").classList.remove("close");
    document.getElementsByTagName("body")[0].style.overflowY = "visible";
    document.getElementById("menuMobile").classList.remove("open");
  });
}
function getList(listName, titleContent, titleID, sliderID, cardClassSpec) {
  return new Promise((resolve, reject) => {
    fetch(
      "https://api.themoviedb.org/3/movie/" +
        listName +
        "?api_key=9e9d157f9d784170b706af996525a97c&language=fr-FR&page=1"
    ).then((res) => {
      if (res.ok) {
        var titleSlider = document.createElement("h2");
        titleSlider.textContent = titleContent;
        titleSlider.id = titleID;
        titleSlider.classList = "sliderTitle";
        document.getElementById("allSlider").appendChild(titleSlider);
        var Slide = document.createElement("div");
        Slide.id = sliderID;
        Slide.classList = "slider";
        document.getElementById("allSlider").appendChild(Slide);
        var listArray = [];
        res.json().then((response) => {
          for (i = 0; i < 20; i++) {
            var card = document.createElement("div");
            card.classList = "card " + cardClassSpec;
            card.id = listName + response.results[i].id;
            card.value = response.results[i].id;
            document.getElementById(sliderID).appendChild(card);
            var img = document.createElement("img");
            img.classList = "imgSlider";
            img.src =
              "https://image.tmdb.org/t/p/original" +
              response.results[i].poster_path;
            document.getElementsByClassName(cardClassSpec)[i].appendChild(img);
            var title = document.createElement("div");
            title.classList = "titleFilm";
            title.textContent = response.results[i].title;
            document
              .getElementsByClassName(cardClassSpec)
              [i].appendChild(title);
            listArray[i] = response.results[i].id;
            localStorage.setItem(listName, JSON.stringify(listArray));
            var idCard = listName + response.results[i].id;
            document
              .getElementById(idCard)
              .addEventListener("click", function () {
                var id = this.value;
                fetch(
                  "https://api.themoviedb.org/3/movie/" +
                    id +
                    "?api_key=9e9d157f9d784170b706af996525a97c&language=fr-FR"
                ).then((res) => {
                  if (res.ok) {
                    res.json().then((response) => {
                      var modalContent = document.createElement("div");
                      modalContent.id = "modalContent";
                      modalContent.classList = "modal-content";
                      document
                        .getElementById("modal")
                        .appendChild(modalContent);
                      document.getElementById("modal").classList.add("yes");

                      var affiche = document.createElement("div");
                      affiche.id = "zoneAffiche";
                      document
                        .getElementById("modalContent")
                        .appendChild(affiche);
                      var poster_path = document.createElement("img");
                      poster_path.id = "poster";
                      poster_path.src =
                        "https://image.tmdb.org/t/p/original" +
                        response.poster_path;
                      document
                        .getElementById("zoneAffiche")
                        .appendChild(poster_path);

                      var descriptif = document.createElement("div");
                      descriptif.id = "descriptif";
                      document
                        .getElementById("modalContent")
                        .appendChild(descriptif);
                      var titleFilmModal = document.createElement("div");
                      titleFilmModal.id = "titleFilm";
                      titleFilmModal.textContent = response.original_title;
                      document
                        .getElementById("descriptif")
                        .appendChild(titleFilmModal);
                      var release = document.createElement("div");
                      release.id = "releaseDate";
                      release.textContent = response.release_date;
                      document
                        .getElementById("descriptif")
                        .appendChild(release);
                      var actor = document.createElement("div");
                      actor.id = "actor";
                      document.getElementById("descriptif").appendChild(actor);
                      var synopsis = document.createElement("div");
                      synopsis.id = "synopsis";
                      synopsis.textContent = response.overview;
                      document
                        .getElementById("descriptif")
                        .appendChild(synopsis);
                      var averageNoteUser = document.createElement("div");
                      averageNoteUser.id = "averageNoteUser";
                      averageNoteUser.textContent =
                        " note moyenne spectateurs " + response.vote_average;
                      document
                        .getElementById("descriptif")
                        .appendChild(averageNoteUser);
                      var spanModal = document.createElement("span");
                      spanModal.id = "spanModal";
                      spanModal.textContent = "/10";
                      document
                        .getElementById("averageNoteUser")
                        .appendChild(spanModal);

                      var closingModal = document.createElement("div");
                      closingModal.id = "closingModal";
                      closingModal.textContent = "X";
                      document
                        .getElementById("modalContent")
                        .appendChild(closingModal);
                      document
                        .getElementById("modalContent")
                        .addEventListener("click", function () {
                          document
                            .getElementById("modal")
                            .removeChild(
                              document.getElementById("modal").firstElementChild
                            );
                          document
                            .getElementById("modal")
                            .classList.remove("yes");
                        });
                      window.onclick = function (event) {
                        if (event.target == document.getElementById("modal")) {
                          var removeTime = document.getElementById("modal");
                          removeTime.removeChild(removeTime.firstElementChild);
                          document
                            .getElementById("modal")
                            .classList.remove("yes");
                        }
                      };
                    });
                  }
                });
              });
            listActual[x].actualID[i] = response.results[i].id;
            listActual[x].title[i] = response.results[i].title;
          }
          resolve();
          x++;
        });
      }
    });
  });
}
var listID = pastList[1].pastID;
for (let y = 0; y < listID.length; y++) {
  if (pastList[1].pastID[y] !== listID[y]) {
    if (y === 19) {
      nouveauFilms = nouveauFilms + listActual[1].title[y];
      newFilmCount++;
    } else {
      nouveauFilms = nouveauFilms + listActual[1].title[y] + ", ";
      newFilmCount++;
    }
  } else {
    break;
  }
  console.log(y);
}
setTimeout(() => {
  if (newFilmCount !== 0) {
    var modalGeneralGen = document.createElement("div");
    modalGeneralGen.id = "modalAlert";
    modalGeneralGen.classList = "modalAlert";
    document.getElementById("main").appendChild(modalGeneralGen);
    var modalContentGen = document.getElementById("div");
    modalContentGen.id = "modalAlertContent";
    modalContentGen.classList = "modal-content-alert";
    document.getElementById("modalAlert").appendChild(modalContentGen);
    var divMessage = document.createElement("div");
    divMessage.textContent =
      "Voici les nouveaux films à l'affiche:" + nouveauFilms;
    document.getElementById("modalAlertContent").appendChild(divMessage);
  } else {
    var modalGeneralGen = document.createElement("div");
    modalGeneralGen.id = "modalAlert";
    modalGeneralGen.classList = "modalAlert";
    document.getElementById("main").appendChild(modalGeneralGen);
    var modalContentGen = document.createElement("div");
    modalContentGen.id = "modalAlertContent";
    modalContentGen.classList = "modal-content-alert";
    document.getElementById("modalAlert").appendChild(modalContentGen);
    var leftColAlert = document.createElement("div");
    leftColAlert.id = "leftColAlert";
    document.getElementById("modalAlertContent").appendChild(leftColAlert);
    var divMessage = document.createElement("div");
    divMessage.id = "messageNewFilm";
    divMessage.textContent =
      "Pas de nouveaux film à l'affiche depuis la dernière visite";
    document.getElementById("modalAlertContent").appendChild(divMessage);
    var rightColAlert = document.createElement("div");
    rightColAlert.id = "rightColAlert";
    document.getElementById("modalAlertContent").appendChild(rightColAlert);
    document
      .getElementById("modalAlertContent")
      .addEventListener("click", function () {
        document.getElementById("modalAlert").style.display = "none";
      });
  }
}, 100);

function createElement(
  typeElement,
  elementID,
  elementIDLocation,
  elementClass,
  elementSrc,
  elementTextContent
) {
  var createElement = document.createElement(typeElement);
  createElement.id = elementID;
  createElement.classList = elementClass;
  createElement.src = elementSrc;
  createElement.textContent = elementTextContent;
  document.getElementById(elementIDLocation).appendChild(createElement);
}

window.onclick = function (event) {
  if (event.target == document.getElementById("modalAlert")) {
    document.getElementById("modalAlert").style.display = "none";
  }
};
