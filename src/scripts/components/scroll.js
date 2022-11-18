class SCROLL {
    constructor(set) {
        if (typeof set.el == 'string') {
            this.el = document.querySelector(set.el)
        }else if (set.el instanceof HTMLElement) {
            this.el = set.el
        }

        this.el.style.position = 'fixed'
        this.top = set.top ?? this.el.offsetTop
        this.unit = set.unit
        this.el.style.top = this.scroll()

        window.addEventListener('scroll', () => this.scroll())
    }
    scroll(){
        this.window = this.scrollNumber()
        if (this.window - scrollY > 0) {
            this.el.style.top = this.window - scrollY + 'px'
        }else{
            this.el.style.top = 0
        }
    }
    scrollNumber(){
        if (this.unit == 'px') {
            return this.top >= 0 ? this.top : 0
        }else{
            return 200
        }
    }
}
const header = document.querySelector('.header')
const myScroll = new SCROLL({
    el: '.header__nav',
    unit: 'px'
})