const burger = document.querySelector(".burger");

const iconBurger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");
const column = document.querySelector("nav");

burger.addEventListener("click", function () {
    iconBurger.classList.toggle("show"); //tak
    iconX.classList.toggle("show"); //nie
    column.classList.toggle("show"); //nie

})

$(document).on('scroll', function () {

    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();
    // console.log(scrollValue);


    //Pierwsza sekcja
    const $img2 = $('.img2');
    const img2FromTop = $img2.offset().top;
    const img2Height = $img2.outerHeight();


    if (scrollValue > img2FromTop + img2Height - windowHeight) {
        //   console.log("jestem art 2 wywietlony w całości");
        $img2.addClass('shown');
    }


    //Czyściciel
    if (scrollValue < 100) {
        $('.img2').removeClass('shown');
    }
})



// Links for menu elements

document.querySelector("div.i1").setAttribute('onclick', 'location.href = "products.html"');
document.querySelector("div.i2").setAttribute('onclick', 'location.href = "products.html"');
document.querySelector("div.i3").setAttribute('onclick', 'location.href = "products.html"');
document.querySelector("div.i4").setAttribute('onclick', 'location.href = "products.html"');