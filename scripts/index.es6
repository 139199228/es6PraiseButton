class PraiseButton {
    constructor(ele, num) {
        this.ele = ele
        this.num = num
        this.event()
    }
    event() {
        this.ele.on("click", this.clickAction.bind(this))
    }
    clickAction() {
        if (this.num < 10) {
            $("#animation").addClass("num");
            setTimeout(() => {
                $("#animation").removeClass("num");
            }, 1000)

            $("div").css("webkit-filter", "grayscale(0)")
            this.num = add(this.num)
        } else {
            $("div").css("webkit-filter", "grayscale(1)")
            this.num = 0
        }
        console.log(this.num)
    }
}
class Thumb extends PraiseButton {
    constructor(ele, num) {
        super(ele, num)
    }
}
export default Thumb