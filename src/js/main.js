import $ from "jquery"
import "slick-carousel"

import ScrollReveal from "scrollreveal"

$(document).ready(function(){
    $(".slider__carousel")
        .slick({dots:true})
})

ScrollReveal().reveal(".list__item")