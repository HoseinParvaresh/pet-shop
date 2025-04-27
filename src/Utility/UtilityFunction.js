function customScroll(id) {
    const scrollPercent = (window.scrollY - 100) / ((document.body.clientHeight) - (window.innerHeight))  
    document.querySelector(id).style.right = (Math.round(scrollPercent * 100)) + '%'
}





export {customScroll}