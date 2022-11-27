/*---------SHOW SIDEBAR---------*/


/*------SIDEBAR SHOW ----*/
/* Validate if Constant Exists */



/*---------SIDEBAR HIDDEN-----------*/


/*----------SKILLS TABS------*/
const tabs = document.querySelectorAll('[data-target'),
    tabContent = document.querySelectorAll('[data-content]')

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.target)

            tabContent.forEach(tabContents => {
                tabContents.classList.remove('skills__active')
            })

            target.classList.add('skills__active')

            tabs.forEach(tab => {
                tab.classList.remove('skills__active')
            })

            tab.classList.remove('skills__active')
        })
    })


/*-------MIXITUP FILTER PORTFOLIO -------------*/
let mixerPortfolio = mixitup('.project__container', {
    selectors: {
        target: '.project__card'
    },
    animation: {
        duration: 300
    }
});

/*------link Active project---*/
const linkProject = document.querySelectorAll('.project__item')

function activeProject(){
    linkProject.forEach(l=> I.classLink.remove('active-project'))
    this.classList.add('activeproject')
}

linkProject.forEach(l=> I.addEventListener("click",activeProject))

/*---------Project Popup ----------*/
document.addEventListener("click",(e) => {
    if(e.target.classList.contains("project__button")){
        togglePorfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePorfolioPopup(){
    document.querySelector("./portfolio__popup").classList.toggle("open");
}

document.querySelector("./portfolio__popup-close").addEventListener("click", togglePorfolioPopup)

function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".project__title").innerHTML;
    document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".project__item-details").innerHTML;
}


/*--------------- CONTACT ---------------*/
const inputs = document.querySelectorAll(".input");

function focusFunc(){
    let parent = this.parentNode;
        parent.classList.remove("focus");
    }


function blurFunc(){
    let parent = this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) =>{
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);

})

/*--------------- CONTACT ---------------*/

