function customScroll(id) {
    const scrollPercent = (window.scrollY - 100) / ((document.body.clientHeight) - (window.innerHeight))
    document.querySelector(id).style.right = (Math.round(scrollPercent * 100)) + '%'
}
function formatNumber (num) {
    return new Intl.NumberFormat('en-US', {style : "decimal" }).format(num);
}
function calcDiscountPrice (price,discount) {
    
    return Math.round(price - (price * (discount / 100)))
}
function toggleMobileNavbar () {
    document.querySelector('.navigation').classList.toggle('menu-active')
    document.querySelector('.mobile-overlay').classList.toggle('show')
}

export { customScroll,formatNumber,calcDiscountPrice,toggleMobileNavbar }