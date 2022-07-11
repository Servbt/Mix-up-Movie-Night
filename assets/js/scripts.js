window.onload = () => { //Needed for the transition element 
    

    // ONLOAD FXN FOR WELCOME BANNER //
    var transitionEl = document.querySelector('.transition-el')

    setTimeout(() => {
        transitionEl.classList.remove('is-active')
    }, 3000)

}

