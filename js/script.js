//smooth scrolling
$(document).ready(function(){
    $('.up-arrow').css('opacity', '0');
    $(window).scroll(function(event) {
        if($(this).scrollTop() > 200) {
            $('.up-arrow').css('opacity', '1').fadeIn();
        } else {
            $('.up-arrow').css('opacity', '0').fadeOut();
        }
    });
    $('.up-arrow').click(function() {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    })
});

//play/pause carousel
var $pausePlay = $('.pausePlay');
var $pause = $('.fa-pause');
var $play = $('.fa-play');
/*
$pausePlay.click(function() {
    if($(this).text() === '&#xf04c;') {
        $('.primary-carousel').carousel('pause');
        $(this).text('&#xf04b;');
    } else {
        $('.primary-carousel').carousel('cycle');
        $(this).text('&#xf04c;');
    }
});
*/

$pausePlay.click(function() {
    if($(this).hasClass('fa-pause')) {
        $('.primary-carousel').carousel('pause');
        $play.css('z-index', '11');    
    } else {
        $('.primary-carousel').carousel('cycle');
        $play.css('z-index', '9');    
    }
});
/*
$pause.click(function() {
    $('.primary-carousel').carousel('pause');
    $play.css('z-index', '11');
});
$play.click(function() {
    $('.primary-carousel').carousel('cycle');
    $play.css('z-index', '9');
});
*/

//form submitted button
var $submitMessage = $('form .btn-outline-success');
var $submitBtn = $('form .btn-submit');
var $cardFront = $('.about-front');
var $returnButton = $('.return-button');

$submitMessage.hide();
$submitBtn.click(function() {
    if($(":input, textarea").val() !== "" )
    $submitMessage.slideDown(500).delay(5000).slideUp(500);
});

//cube-carousel
/*$(".jR3DCarouselGalleryDefault").jR3DCarousel({
    "width": 300,
    "height": 300,
    "slideLayout": "fill",
    "animation": "slide3D",
    "animationCurve": "ease",
    "animationDuration": 1200,
    "animationInterval": 2000,
    "autoplay": true,
    "rotationDirection": "rtl",
    "navigation": "circles",
    "slides": [
        {
            "src": "images/icons/broom.png"
        },
        {
            "src": "images/icons/eFriendly.png"
        },
        {
            "src": "images/icons/tileFloor.png"
        }
    ]
})*/
//get help with this

//random image generator

var images = [
    "images/compound.png",
    "images/compound2.png",
    "images/compound3.png",
    "images/compound4.png",
    "images/compound6.png"
];

var sweepingProduct = document.querySelector('.compoundImage');

/* Get help with this as it is the correct way.
function getRandomImage() {
    let randomImg;
    randomImg = Math.floor(Math.random() * images.length);
    return randomImg[images];
}

function setRandomImage(src) {
    const img = document.createElement('img');
    img.alt = 'A photo of sweeping compound';
    img.classList.add('img-fluid');
    img.onload = function () {
        sweepingProduct.appendChild(img);
    };
    img.src = src;
}

const productImage = getRandomImage();
setRandomImage(productImage);
*/

function getRandomImage() {
    var img = '<img alt=\"An image of Mary Kay Ash.\" class=\"img-fluid\" src=\"';
    var randomImg;
    randomImg = Math.floor(Math.random() * images.length);
    img += images[randomImg];
    img += '\">';
    return img;
};

sweepingProduct.innerHTML = getRandomImage();
//accordion

var acc = document.getElementsByClassName('accordion');
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("minus");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


/*
var acc2 = document.getElementsByClassName("card-header");
var j;

for (j = 0; j < acc2.length; j++) {
    acc2[j].addEventListener("click", function() {
        this.classList.toggle("minus2");
    });
}
*/
/*
var header = document.querySelectorAll('.card-header');
var minus = document.querySelectorAll('.fa-minus');
var plus = document.querySelectorAll('.fa-plus');
console.log(header.classList);
minus.style.display = "none";

header.forEach(function(item) {
    console.log(item.classList);
    console.log(item);
    item.onclick = function(event) {
        minus.style.display = "block";
        plus.style.display = "none";
    }
});
*/

// var $answer = $('.panel');
// var $accordion = $('.accordion');
// $('.panel').hide();
// $answer.hide();
// $accordion.click(function {
//     $answer.hide();
//     $answer.slideDown();
// });

//phone number selection
//get help from the meetup
/*var $states = $('.states li');
$states.hide();
$states.click(function() {
    if ($states).is('.georgia')
        $('.georgia').show();
    $('.georgia').show();
});

$('#georgia').click(function() {
    $('.georgia').show();
});
*/

//find a way to display one number at a time or either 
//the list of phone numbers and fax numbers.