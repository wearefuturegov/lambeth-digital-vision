import $ from "jquery"
import "slick-carousel"

import ScrollReveal from "scrollreveal"

$(document).ready(function(){
  ScrollReveal().reveal(".list__item")
    // $(".slider__carousel")
    //     .slick({
    //       dots:false,
    //       arrows: false,
    //       infinite: false
    //     })
    $("#home_slider")
        .slick({
          dots: true,
          arrows: true,
          infinite: true
        })


    $("#reuben_final_slider")
        .slick({
          dots:false,
          arrows: false,
          infinite: false,
          asNavFor: "#reuben_final_slider_nav",
          adaptiveHeight: true
        })
    $("#reuben_final_slider_nav")
        .slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: "#reuben_final_slider",
          dots: true,
          focusOnSelect: true
        })


    $("#slider1")
        .slick({
          dots:false,
          arrows: false,
          infinite: false,
          asNavFor: "#slider1_nav",
          adaptiveHeight: true
        })
    $("#slider1_nav")
        .slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: "#slider1",
          dots: true,
          focusOnSelect: true
        })
    $("#slider2")
        .slick({
          dots:false,
          arrows: false,
          infinite: false,
          asNavFor: "#slider2_nav",
          adaptiveHeight: true
        })
    $("#slider2_nav")
        .slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: "#slider2",
          dots: true,
          focusOnSelect: true
        })
    $("#slider3")
        .slick({
          dots:false,
          arrows: false,
          infinite: false,
          asNavFor: "#slider3_nav",
          adaptiveHeight: true
        })
    $("#slider3_nav")
        .slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: "#slider3",
          dots: true,
          focusOnSelect: true
        })
    $("#slider4")
        .slick({
          dots:false,
          arrows: false,
          infinite: false,
          asNavFor: "#slider4_nav",
          adaptiveHeight: true
        })
    $("#slider4_nav")
        .slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: "#slider4",
          dots: true,
          focusOnSelect: true
        })
    $("#slider5")
        .slick({
          dots:false,
          arrows: false,
          infinite: false,
          asNavFor: "#slider5_nav",
          adaptiveHeight: true
        })
    $("#slider5_nav")
        .slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: "#slider5",
          dots: true,
          focusOnSelect: true
        })
    $("#slider6")
        .slick({
          dots:false,
          arrows: false,
          infinite: false,
          asNavFor: "#slider6_nav",
          adaptiveHeight: true
        })
    $("#slider6_nav")
        .slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: "#slider6",
          dots: true,
          focusOnSelect: true
        })

})
