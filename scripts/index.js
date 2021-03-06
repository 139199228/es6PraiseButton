"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PraiseButton = function () {
    function PraiseButton(ele, num) {
        _classCallCheck(this, PraiseButton);

        this.ele = ele;
        this.num = num;
        this.event();
    }

    _createClass(PraiseButton, [{
        key: "event",
        value: function event() {
            this.ele.on("click", this.clickAction.bind(this));
        }
    }, {
        key: "clickAction",
        value: function clickAction() {
            if (this.num < 10) {
                $("#animation").addClass("num");
                setTimeout(function () {
                    $("#animation").removeClass("num");
                }, 1000);

                $("div").css("webkit-filter", "grayscale(0)");
                this.num = add(this.num);
            } else {
                $("div").css("webkit-filter", "grayscale(1)");
                this.num = 0;
            }
            console.log(this.num);
        }
    }]);

    return PraiseButton;
}();

var Thumb = function (_PraiseButton) {
    _inherits(Thumb, _PraiseButton);

    function Thumb(ele, num) {
        _classCallCheck(this, Thumb);

        return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, ele, num));
    }

    return Thumb;
}(PraiseButton);

exports.default = Thumb;
