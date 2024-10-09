const ScrollToSection = (id) => {
    document.querySelector("#"+id).scrollIntoView({behavior:"smooth"})
}
export default ScrollToSection;