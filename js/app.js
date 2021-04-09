
//HAMBURGER MENU

const secondbutton = document.querySelector('.second-button');
const animatedicon = document.querySelector('.animated-icon2')

secondbutton.addEventListener('click', function () {
  animatedicon.classList.toggle('open');

});



// TOP BTN

$(document).ready(function () {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $('#topBtn').fadeIn();
    } else {
      $('#topBtn').fadeOut();
    }
  });

  $("#topBtn").click(function () {
    $('html ,body').animate({ scrollTop: 0 }, 800);
  });
});




//HOVER

const cardbox1 = document.querySelector('.card1');
const cardbox2 = document.querySelector('.card2');
const cardbox3 = document.querySelector('.card3');
const cardboxicon1 = document.querySelector('.icon1');
const cardboxicon2 = document.querySelector('.icon2');
const cardboxicon3 = document.querySelector('.icon3');



cardbox1.addEventListener('mouseover', function () {
  cardboxicon1.removeAttribute('src');
  cardboxicon1.setAttribute('src', 'icon/massage(white).svg')
});


cardbox1.addEventListener('mouseout', function () {
  cardboxicon1.removeAttribute('src', 'icon/massage(white).svg');
  cardboxicon1.setAttribute('src', 'icon/massage2.svg')
});



cardbox2.addEventListener('mouseover', function () {
  cardboxicon2.removeAttribute('src');
  cardboxicon2.setAttribute('src', 'icon/spa(white).svg');
});


cardbox2.addEventListener('mouseout', function () {
  cardboxicon2.removeAttribute('src', 'icon/spa(white).svg');
  cardboxicon2.setAttribute('src', 'icon/spa2.svg');
});


cardbox3.addEventListener('mouseover', function () {
  cardboxicon3.removeAttribute('src');
  cardboxicon3.setAttribute('src', 'icon/female-hairs(white).svg');
});


cardbox3.addEventListener('mouseout', function () {
  cardboxicon3.removeAttribute('src', 'icon/female-hairs(white).svg');
  cardboxicon3.setAttribute('src', 'icon/female-hairs2.svg');
});


/**************3D****************/


const cards = document.querySelector('.cards1');
const cards2 = document.querySelector('.cards2');
const cards3 = document.querySelector('.cards3');



//CARDS1
cards.addEventListener("mouseover", () => {

  cards.style.transform = "translateZ(200px) rotateZ(-15deg)";
  cards.style.transform = " transform: rotateX(10deg)";
  cards.style.transform = "transform: rotateY(-20deg)";

});

cards.addEventListener("mouseout", () => {
  cards.style.transform = "translateZ(0px) rotateZ(0deg)";
  cards.style.transform = " transform: rotateX(0deg)";
  cards.style.transform = "transform: rotateY(0deg)";

});


//CARDS2


cards2.addEventListener("mouseover", () => {

  cards2.style.transform = "translateZ(200px) rotateZ(-15deg)";
  cards2.style.transform = " transform: rotateX(10deg)";
  cards2.style.transform = "transform: rotateY(-20deg)";

});


cards2.addEventListener("mouseout", () => {


  cards2.style.transform = "translateZ(0px) rotateZ(0deg)";
  cards2.style.transform = " transform: rotateX(0deg)";
  cards2.style.transform = "transform: rotateY(0deg)";


});


//CARDS3

cards3.addEventListener("mouseover", () => {


  cards3.style.transform = "translateZ(200px) rotateZ(-15deg)";

  cards3.style.transform = " transform: rotateX(10deg)";

  cards3.style.transform = "transform: rotateY(-20deg)";

});


cards3.addEventListener("mouseout", () => {

  cards3.style.transform = "translateZ(0px) rotateZ(0deg)";

  cards3.style.transform = " transform: rotateX(0deg)";

  cards3.style.transform = "transform: rotateY(0deg)";


});

//// SEVICES CARDS

const servicescard1 = document.querySelector(".card_1");
const servicescard2 = document.querySelector(".card_2");
const servicescard3 = document.querySelector(".card_3");
const servicescard4 = document.querySelector(".card_4");
const servicescard5 = document.querySelector(".card_5");
const servicescard6 = document.querySelector(".card_6");
const servicesicon1 = document.querySelector(".icon_1");
const servicesicon2 = document.querySelector(".icon_2");
const servicesicon3 = document.querySelector(".icon_3");
const servicesicon4 = document.querySelector(".icon_4");
const servicesicon5 = document.querySelector(".icon_5");
const servicesicon6 = document.querySelector(".icon_6");

const animatons1 = document.querySelector('.h-1')


//SERVICESCARD1

servicescard1.addEventListener("mouseover", () => {
  servicesicon1.removeAttribute('src');
  servicesicon1.setAttribute('src', 'icon/icon_services/massage.svg');
});


servicescard1.addEventListener("mouseout", () => {
  servicesicon1.removeAttribute('src');
  servicesicon1.setAttribute('src', 'icon/icon_services/massage_color.svg');
});



//SERVICESCARD2

servicescard2.addEventListener("mouseover", () => {
  servicesicon2.removeAttribute('src');
  servicesicon2.setAttribute('src', 'icon/icon_services/cosmetics.svg');
});


servicescard2.addEventListener("mouseout", () => {
  servicesicon2.removeAttribute('src');
  servicesicon2.setAttribute('src', 'icon/icon_services/cosmetics_color.svg');
});


//SERVICESCARD3

servicescard3.addEventListener("mouseover", () => {
  servicesicon3.removeAttribute('src');
  servicesicon3.setAttribute('src', 'icon/icon_services/cream.svg');
});


servicescard3.addEventListener("mouseout", () => {
  servicesicon3.removeAttribute('src');
  servicesicon3.setAttribute('src', 'icon/icon_services/cream_color.svg');
});



//SERVICESCARD4

servicescard4.addEventListener("mouseover", () => {
  servicesicon4.removeAttribute('src');
  servicesicon4.setAttribute('src', 'icon/icon_services/hair-removal.svg');
});


servicescard4.addEventListener("mouseout", () => {
  servicesicon4.removeAttribute('src');
  servicesicon4.setAttribute('src', 'icon/icon_services/hair-removal_color.svg');
});


//SERVICESCARD5

servicescard5.addEventListener("mouseover", () => {
  servicesicon5.removeAttribute('src');
  servicesicon5.setAttribute('src', 'icon/icon_services/nail.svg');
});


servicescard5.addEventListener("mouseout", () => {
  servicesicon5.removeAttribute('src');
  servicesicon5.setAttribute('src', 'icon/icon_services/nail_color.svg');
});



//SERVICESCARD6

servicescard6.addEventListener("mouseover", () => {
  servicesicon6.removeAttribute('src');
  servicesicon6.setAttribute('src', 'icon/icon_services/salon.svg');
});


servicescard6.addEventListener("mouseout", () => {
  servicesicon6.removeAttribute('src');
  servicesicon6.setAttribute('src', 'icon/icon_services/salon_color.svg');
});


/******************NUMBER COUNTER************************ */


(function ($) {
  $.fn.countTo = function (options) {
    options = options || {};

    return $(this).each(function () {
      // set options for current element
      var settings = $.extend({}, $.fn.countTo.defaults, {
        from: $(this).data('from'),
        to: $(this).data('to'),
        speed: $(this).data('speed'),
        refreshInterval: $(this).data('refresh-interval'),
        decimals: $(this).data('decimals')
      }, options);

      // how many times to update the value, and how much to increment the value on each update
      var loops = Math.ceil(settings.speed / settings.refreshInterval),
        increment = (settings.to - settings.from) / loops;

      // references & variables that will change with each update
      var self = this,
        $self = $(this),
        loopCount = 0,
        value = settings.from,
        data = $self.data('countTo') || {};

      $self.data('countTo', data);

      // if an existing interval can be found, clear it first
      if (data.interval) {
        clearInterval(data.interval);
      }
      data.interval = setInterval(updateTimer, settings.refreshInterval);

      // initialize the element with the starting value
      render(value);

      function updateTimer() {
        value += increment;
        loopCount++;

        render(value);

        if (typeof (settings.onUpdate) == 'function') {
          settings.onUpdate.call(self, value);
        }

        if (loopCount >= loops) {
          // remove the interval
          $self.removeData('countTo');
          clearInterval(data.interval);
          value = settings.to;

          if (typeof (settings.onComplete) == 'function') {
            settings.onComplete.call(self, value);
          }
        }
      }

      function render(value) {
        var formattedValue = settings.formatter.call(self, value, settings);
        $self.html(formattedValue);
      }
    });
  };

  $.fn.countTo.defaults = {
    from: 0,               // the number the element should start at
    to: 0,                 // the number the element should end at
    speed: 1000,           // how long it should take to count between the target numbers
    refreshInterval: 100,  // how often the element should be updated
    decimals: 0,           // the number of decimal places to show
    formatter: formatter,  // handler for formatting the value before rendering
    onUpdate: null,        // callback method for every time the element is updated
    onComplete: null       // callback method for when the element finishes updating
  };

  function formatter(value, settings) {
    return value.toFixed(settings.decimals);
  }
}(jQuery));

jQuery(function ($) {
  // custom formatting example
  $('.count-number').data('countToOptions', {
    formatter: function (value, options) {
      return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
    }
  });

  // start all the timers
  $('.timer').each(count);

  function count(options) {
    var $this = $(this);
    options = $.extend({}, options || {}, $this.data('countToOptions') || {});
    $this.countTo(options);
  }
});


function toggleShow() {
  var el = document.getElementById("box");
  el.classList.toggle("show");
}

/******************GSAP ANIMATION*********************** */


let sc1 = gsap.timeline({


  scrollTrigger:
  {
    trigger: '.section1',
    start: "top center"
  }

})

sc1.from(".cards-container", { x: -200, duration: 3, yoyo: true });




//section2

let sc2 = gsap.timeline({


  scrollTrigger:
  {
    trigger: '.section2',
    start: "top center"
  }

})

sc2.from(".container-left", { x: -200, duration: 2 });


let sc3 = gsap.timeline({


  scrollTrigger:
  {
    trigger: '.section2',
    start: "top center"
  }

})

sc3.from(".box-img", { y: 200, duration: 2 });


//Section7

let sc7 = gsap.timeline({


  scrollTrigger:
  {
    trigger: '.section7',
    start: "top center"
  }

})

sc7.from(".sectionTitle", { x: -200, duration: 2 });


let sc8 = gsap.timeline({


  scrollTrigger:
  {
    trigger: '.section7',
    start: "top center"
  }

})

sc8.from(".elementor-container", { y: 200, duration: 2 });



//Section9

let sc9 = gsap.timeline({


  scrollTrigger:
  {
    trigger: '.section9',
    start: "top center"
  }

})

sc9.from(".gallery-container", { y: 200, duration: 2 });

//SECTION 11


let sc11 = gsap.timeline({


  scrollTrigger:
  {
    trigger: '.section11',
    start: "top center"
  }

})

sc11.from(".team-container", { y: 200, duration: 2 });


//SECTION 12



let sc12 = gsap.timeline({


  scrollTrigger:
  {
    trigger: '.section12',
    start: "top center"
  }

})

sc12.from(".clearfix", { x: -200, duration: 2 });

let sc13 = gsap.timeline({


  scrollTrigger:
  {
    trigger: '.section12',
    start: "top center"
  }

})

sc13.from(".card-right", { y: -200, duration: 2 });




// Froms

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const subjects = document.getElementById('subject');
const phone = document.getElementById('phone');
const textmessage = document.getElementById('textmessage');


function error(input, message) {
  input.className = 'form-control is-invalid';
  const div = input.nextElementSibling;
  div.innerText = message;
  div.className = 'invalid-feedback';
}

function success(input) {
  input.className = 'form-control is-valid';

}

//Email check

function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value)) {
    success(input);
  }

  else {
    error(input, "Error email address");
  }
}


function checkRequired(inputs) {
  inputs.forEach(function (input) {

    if (input.value == '') {
      error(input, `${input.id} is required`)
    }

    else {
      success(input);
    }
  })

}


//Length

function checkLength(input, min, max)
{
  if(input.value.length < min)
  {
    error(input, `${input.id} en az ${min} xarakter sayi olmali`)
  }

  else if (input.value.length > max)
  {
    error(input, `${input.id} en cpx ${max} xarakter sayi olmali`)
  }

  else{
    success(input);
  }
}


form.addEventListener('submit', function (e) {
  e.preventDefault();


  checkRequired([username, email, subject, phone, textmessage]);
  checkEmail(email);
  checkLength(username,7,15);
  checkLength(phone,7,15);









  /*
    if (username.value == '') {
      error(username, 'Please your name');
    }
  
    else {
      success(username);
    }
  
  
    if (email.value == '') {
      error(email, 'Please email');
    }
  
    else if (!validateEmail(email.value)) {
      error('Please email write');
    }
  
    else {
      success(email);
    }
  
  
    if (subject.value == '') {
      error(subject, 'Please subject');
    }
  
    else {
      success(subject);
    }
  
    if (phone.value == '') {
      error(phone, 'Please number');
    }
  
    else {
      success(phone);
    }
  
  
    if (textmessage.value == '') {
      error(textmessage, 'Please text message');
    }
  
    else {
      success(textmessage);
    }
  
  */


});