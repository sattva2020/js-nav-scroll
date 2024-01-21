window.buttonScroll.onclick = () =>
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })

  let isDisplay = false

  setIntervall(() =>{
    if(
        window.scrollY > window.innerHTML &&
        isDisplay === false
    )  {
        isDisplay === true
        window.buttonScroll.style.isDisplay = 'flex'
        return 
    }

    if(
        window.scrollY <= window.innerHeight &&
        isDisplay === true
    ) {
        isDisplay = false
        window.buttonScroll.style.display = 'none'
        return 
    }
}, 500 )