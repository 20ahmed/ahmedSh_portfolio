sectionTwoId = document.getElementById("section_2ID");
sectionTwoHP = document.getElementById("secTwoP");
sectionTwoHead = document.getElementById("sec2head");
sectionTwoList = document.getElementById("section2UlID");
sectionTwoBar = document.getElementById("skillBarId");

$(window).onload =
  // Animate loader off screen

  setTimeout(function () {
    $(".se-pre-con").fadeOut(1000);
  }, 2000);
$(document).ready(function () {
  $(window).scrollTop(0); // 34an lma a3ml refresh yft7 3la awl l page
});

var myScrollFunc = function () {
  var y = window.scrollY;

  if (y >= 600) {
    sectionTwoHead.className = "section_2H2  show";
  } else {
    sectionTwoHead.className = "section_2H2  hide";
  }

  if (y >= 650) {
    sectionTwoHP.className = "section2para  show";
  } else {
    sectionTwoHP.className = "section2para  hide";
  }

  if (y >= 650) {
    sectionTwoList.className = "section_2Ul show";
  } else {
    sectionTwoList.className = "section_2Ul hide";
  }
};

window.addEventListener("scroll", myScrollFunc);

/* ----------------------------------blur--------------------------- */

(function () {
  var addEvent = function (object, type, callback) {
    if (object == null || typeof object == "undefined") return;
    if (object.addEventListener) {
      object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
      object.attachEvent("on" + type, callback);
    } else {
      object["on" + type] = callback;
    }
  };
  function detectMouseMove() {
    // Initial container width
    var containerWidth = $(".container").outerWidth();
    document.addEventListener("mousemove", function (e) {
      $(".hover").css({
        left: e.pageX,
      });
      $(".left-side").css({
        left: e.pageX + 75,
      });
      var rightSideLeft = containerWidth - e.pageX;
      $(".right-side").css({
        right: rightSideLeft,
      });
    });
  }
  detectMouseMove();

  function detectTouch() {
    // Initial container width
    var containerWidth = $(".container").outerWidth();
    document.addEventListener("mousemove", function (e) {
      $(".hover").css({
        left: e.pageX,
      });
      $(".left-side").css({
        left: e.pageX + 75,
      });
      var rightSideLeft = containerWidth - e.pageX;
      $(".right-side").css({
        right: rightSideLeft,
      });
    });
  }
  detectMouseMove();

  function touchMove() {
    // Initial container width
    var containerWidth = $(".container").outerWidth();
    document.addEventListener("touchmove", function (e) {
      $(".hover").css({
        left: e.pageX,
      });
      $(".left-side").css({
        left: e.pageX + 75,
      });
      var rightSideLeft = containerWidth - e.pageX;
      $(".right-side").css({
        right: rightSideLeft,
      });
    });
  }

  touchMove();

  function detectInput(inputType) {
    // Detect container width after resizing
    addEvent(window, "resize", function (event) {
      var containerWidth = $(".container").outerWidth();
      $(document).bind(inputType, function (e) {
        $(".hover").css({
          left: e.pageX,
        });
        $(".left-side").css({
          left: e.pageX + 75,
        });
        var rightSideLeft = containerWidth - e.pageX;
        $(".right-side").css({
          right: rightSideLeft,
        });
      });
    });
  }

  detectInput("mousemove");
  detectInput("touchmove");
})();
/**------------------------------------------------------------------- */
//const upBtn = document.querySelector("#go-up");
//const topView = document.querySelector("#top-view");

/*upBtn.addEventListener("click", (e) => {
  e.preventDefault();

  topView.scrollIntoView({ behavior: "smooth" });
});

setTimeout(showsomething, 3000);

function showsomething() {
  document.getElementById;
} //34an l button ly hytl3ny ll top

document.getElementById("sec2head").onmousemove = function (event) {
  var cord= document.getElementById("sec2head").innerHTML = ` x= ${event.clientX} y= ${event.clientY}`;
 
 };
 
sec2head
*/

/*

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 500) {
    $('.bottomMenu').fadeIn();
  } else {
    $('.bottomMenu').fadeOut();
  }

  if (y > 550) {
    $('.section2para').fadeIn(3000);
  } else {
    $('.section2para').fadeOut();
  }

  if (y > 600) {
    $('.section2UlID').fadeIn(3000);
  } else {
    $('.section2UlID').fadeOut();
  }

  
});

*/
