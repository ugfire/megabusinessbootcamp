/*
Author: webthemez.com
Author URL: http://webthemez.com
*/
jQuery(function ($) {
  "use strict";

  $(window).scroll(function (event) {
    Scroll();
  });

  $(".navbar-collapse ul li a").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $(this.hash).offset().top - 5,
      },
      1000
    );
    return false;
  });

  function Scroll() {
    var contentTop = [];
    var contentBottom = [];
    var winTop = $(window).scrollTop();
    var rangeTop = 200;
    var rangeBottom = 500;
    $(".navbar-collapse")
      .find(".scroll a")
      .each(function () {
        contentTop.push($($(this).attr("href")).offset().top);
        contentBottom.push(
          $($(this).attr("href")).offset().top +
            $($(this).attr("href")).height()
        );
      });
    $.each(contentTop, function (i) {
      if (winTop > contentTop[i] - rangeTop) {
        $(".navbar-collapse li.scroll")
          .removeClass("active")
          .eq(i)
          .addClass("active");
      }
    });
  }

  $("#tohash").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $(this.hash).offset().top - 5,
      },
      1000
    );
    return false;
  });

  new WOW().init();

  smoothScroll.init();

  $(window).load(function () {
    "use strict";
    var $portfolio_selectors = $(".portfolio-filter >li>a");
    var $portfolio = $(".portfolio-items");
    $portfolio.isotope({
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });

    $portfolio_selectors.on("click", function () {
      $portfolio_selectors.removeClass("active");
      $(this).addClass("active");
      var selector = $(this).attr("data-filter");
      $portfolio.isotope({
        filter: selector,
      });
      return false;
    });
  });

  $(document).ready(function () {
    $.fn.animateNumbers = function (stop, commas, duration, ease) {
      return this.each(function () {
        var $this = $(this);
        var start = parseInt($this.text().replace(/,/g, ""));
        commas = commas === undefined ? true : commas;
        $({
          value: start,
        }).animate(
          {
            value: stop,
          },
          {
            duration: duration == undefined ? 1000 : duration,
            easing: ease == undefined ? "swing" : ease,
            step: function () {
              $this.text(Math.floor(this.value));
              if (commas) {
                $this.text(
                  $this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
                );
              }
            },
            complete: function () {
              if (parseInt($this.text()) !== stop) {
                $this.text(stop);
                if (commas) {
                  $this.text(
                    $this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
                  );
                }
              }
            },
          }
        );
      });
    };

    $(".business-stats").bind(
      "inview",
      function (event, visible, visiblePartX, visiblePartY) {
        var $this = $(this);
        if (visible) {
          $this.animateNumbers(
            $this.data("digit"),
            false,
            $this.data("duration")
          );
          $this.unbind("inview");
        }
      }
    );
  });

  $("a[rel^='prettyPhoto']").prettyPhoto({
    social_tools: false,
  });
});

function toggleBackground() {
  var paragraph = document.getElementById("backgroundParagraph");
  if (paragraph.style.display === "none") {
    paragraph.style.display = "block";
  } else {
    paragraph.style.display = "none";
  }
}

function hideBackground() {
  var paragraph = document.getElementById("backgroundParagraph");
  paragraph.style.display = "none";
}

function showAlert() {
  Swal.fire({
    title: "BSB",
    html: `
      <p>Inspiration was born out of one entrepreneur’s need to sell his business</p>
      <p>BSB started in 2019 as an online business school to be precise. Since 2019 our passion for introducing people who want to buy a business to those who are selling a business has grown exponentially along with the site. BSB has evolved into a truly a regional giant that connects over half a million business buyers and sellers each and every year.</p>
      <p>For 4 years now we have been helping business owners, brokers and private sellers market their underperforming businesses or businesses with high growth potentials. From kikuubo shops to construction businesses, some of our most exciting business opportunities have included import and export businesses that have high return on investment.</p>
      <p>We have become the Uganda’s largest marketplace advertising 5000 businesses for sale in over 12 countries. The website is proudly run by our team of 12 based in Dubai, Kigali, Nairobi, and Kampala.</p>
      <p>We are always looking to improve the site and our services, so if you have any feedback or you are looking to sell your business, we would love to hear from you. Contact Us.</p>
    `,
    icon: "info",
    customClass: {
      popup: "responsive-popup",
    },
  });
}

// Attach the event listener to your button
document.getElementById("myButton").addEventListener("click", showAlert);
