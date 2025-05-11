function customScroll(id) {
    const scrollPercent = (window.scrollY - 100) / ((document.body.clientHeight) - (window.innerHeight))
    document.querySelector(id).style.right = (Math.round(scrollPercent * 100)) + '%'
}
function formatNumber (num) {
    return new Intl.NumberFormat('en-US', {style : "decimal" }).format(num);
}
function calcDiscountPrice (price,discount) {
    return price - (price * (discount / 100))
}

export { customScroll,formatNumber,calcDiscountPrice }