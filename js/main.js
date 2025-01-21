// メニュー展開時に背景を固定
const backgroundFix = (bool) => {
  const scrollingElement = () => {
    const browser = window.navigator.userAgent.toLowerCase();
    if ("scrollingElement" in document) return document.scrollingElement;
    return document.documentElement;
  };

  const scrollY = bool
    ? scrollingElement().scrollTop
    : parseInt(document.body.style.top || "0");

  const fixedStyles = {
    height: "100vh",
    position: "fixed",
    top: `${scrollY * -1}px`,
    left: "0",
    width: "100vw"
  };

  Object.keys(fixedStyles).forEach((key) => {
    document.body.style[key] = bool ? fixedStyles[key] : "";
  });

  if (!bool) {
    window.scrollTo(0, scrollY * -1);
  }
};

// 変数定義
const CLASS = "-active";
let flg = false;
let accordionFlg = false;

let hamburger = document.getElementById("js-hamburger");
let focusTrap = document.getElementById("js-focus-trap");
let menu = document.querySelector(".js-nav-area");
let accordionTrigger = document.querySelectorAll(".js-sp-accordion-trigger");
let accordion = document.querySelectorAll(".js-sp-accordion");
let link = document.querySelectorAll(".global-navigation__link");


// メニュー開閉制御
hamburger.addEventListener("click", (e) => { //ハンバーガーボタンが選択されたら
  e.currentTarget.classList.toggle(CLASS);
  menu.classList.toggle(CLASS);
  if (flg) {// flgの状態で制御内容を切り替え
    backgroundFix(false);
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.focus();
    flg = false;
  } else {
    backgroundFix(true);
    hamburger.setAttribute("aria-expanded", "true");
    flg = true;
  }
});

link.forEach((el) => {
  el.addEventListener('click', (event) => {
    event.preventDefault(); // デフォルトのリンク動作を防止
    const target = el.getAttribute("href"); // リンク先のIDを取得

    // メニューを閉じる
    menu.classList.remove('-active');
    hamburger.classList.remove('-active');
    hamburger.setAttribute("aria-expanded", "false");

    // 背景固定を解除してからスクロールを実行
    backgroundFix(false);

    // スクロール処理
    const element = document.querySelector(target);
    const top = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: top, behavior: 'smooth' });
  });
});



window.addEventListener("keydown", () => {　//escキー押下でメニューを閉じられるように
  if (event.key === "Escape") {
    hamburger.classList.remove(CLASS);
    menu.classList.remove(CLASS);

    backgroundFix(false);
    hamburger.focus();
    hamburger.setAttribute("aria-expanded", "false");
    flg = false;
  }
});
// メニュー内アコーディオン制御
accordionTrigger.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle(CLASS);
    e.currentTarget.nextElementSibling.classList.toggle(CLASS);
    if (accordionFlg) {
      e.currentTarget.setAttribute("aria-expanded", "false");
      accordionFlg = false;
    } else {
      e.currentTarget.setAttribute("aria-expanded", "true");
      accordionFlg = true;
    }
  });

});

// フォーカストラップ制御
focusTrap.addEventListener("focus", (e) => {
  hamburger.focus();
});


// アコーディオン
document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionWrap = item.querySelector('.faq-question__wrap');
    const answerWrap = item.querySelector('.faq-answer__wrap');
    const faqTitle = item.querySelector('.faq-question__title');

    questionWrap.addEventListener('click', () => {
      // 回答表示の切り替え
      answerWrap.classList.toggle('active');

      // アイコンの切り替え
      faqTitle.classList.toggle('active');
    });
  });
});

// 画面トップへ戻る
// document.addEventListener("DOMContentLoaded", function() {
//   const pagetop = document.querySelector('.page-top');

//   window.addEventListener('scroll', function() {
//       if (window.scrollY > 100) {
//           pagetop.style.opacity = '1';
//           pagetop.style.transform = 'translateY(0)';
//       } else {
//           pagetop.style.opacity = '0';
//           pagetop.style.transform = 'translateY(10px)';
//       }
//   });

//   pagetop.addEventListener('click', function(e) {
//       e.preventDefault();
//       window.scrollTo({
//           top: 0,
//           behavior: 'smooth'
//       });
//   });
// });


gsap.to(".glow-effect", {
  x: "1500%",
  duration: 9,
  repeat: -1,
  ease: "linear"
});



var animation = bodymovin.loadAnimation({
  container: document.getElementById("logo-lottie"),
  renderer: "svg",
  loop: !1,
  autoplay: !1,
  path: "assets/img/flont/data.json"
})
, animation1_1 = bodymovin.loadAnimation({
  container: document.getElementById("flontfv_svgbg1"),
  renderer: "svg",
  loop: !0,
  autoplay: !0,
  path: "assets/img/flont/mvbg.json"
})
, animation1_2 = bodymovin.loadAnimation({
  container: document.getElementById("flontfv_svgbg2"),
  renderer: "svg",
  loop: !0,
  autoplay: !1,
  path: "assets/img/flont/mvbg.json"
})
, animation1_3 = bodymovin.loadAnimation({
  container: document.getElementById("flontfv_svgbg3"),
  renderer: "svg",
  loop: !0,
  autoplay: !1,
  path: "assets/img/flont/mvbg.json"
});
function flontfv_box_mv_resize() {
  $(".flontfv_box_mv_box").each(function(o) {
      var a = $(this).outerWidth()
        , n = $(this).outerHeight();
      $(this).find("video").css({
          width: a,
          height: n
      })
  })
}
load_flag ? setTimeout(function() {
  animation.play(),
  setTimeout(function() {
      $(".flont_load_mes1").addClass("anim"),
      setTimeout(function() {
          $(".flont_load_mes1").addClass("anim2"),
          setTimeout(function() {
              $(".flont_load").addClass("anim"),
              $(".flontfv_bg_img").addClass("anim1"),
              setTimeout(function() {
                  $(".flontfv_txt1").addClass("anim"),
                  $(".flontfv_txt2").addClass("anim"),
                  $(".flontfv_txt3").addClass("anim"),
                  setTimeout(function() {
                      $(".flontfv_box_mv").addClass("anim"),
                      $(".flontfv_mes").addClass("anim"),
                      $(".flontfv_box_mv_bg").addClass("anim"),
                      setTimeout(function() {
                          $("#pageHeader").addClass("anim")
                      }, 1400)
                  }, 300)
              }, 800)
          }, 200)
      }, 1300)
  }, 2e3)
}, 1e3) : (animation.play(),
$(".flont_load_mes1").addClass("anim"),
$(".flont_load_mes1").addClass("anim2"),
$(".flont_load").addClass("anim"),
$(".flontfv_bg_img").addClass("anim1"),
$(".flontfv_txt1").addClass("anim"),
$(".flontfv_txt2").addClass("anim"),
$(".flontfv_txt3").addClass("anim"),
$(".flontfv_box_mv").addClass("anim"),
$(".flontfv_mes").addClass("anim"),
$(".flontfv_box_mv_bg").addClass("anim"),
$("#pageHeader").addClass("anim")),
setTimeout(function() {
  animation1_2.play()
}, 500),
setTimeout(function() {
  animation1_3.play()
}, 1e3),
flontfv_box_mv_resize(),
$(window).on("resize load", function() {
  flontfv_box_mv_resize()
});
var flontfv_bg = $(".flontfv_bg")
, work = $(".work")
, body = $("body")
, what_list_bg = ($(window).on("scroll load resize", function() {
  var o = $(this).scrollTop()
    , a = work.offset();
  100 < o ? body.addClass("main_sc") : body.removeClass("main_sc"),
  a.top < o ? flontfv_bg.addClass("off") : flontfv_bg.removeClass("off")
}),
$("#js-what_list_bg"));
$("#js-what_list").hover(function() {
  what_list_bg.addClass("on")
}, function() {
  what_list_bg.removeClass("on"),
  $(".what_list_bg span").removeClass("on")
}),
$("#js-what_list a").each(function(o) {
  $(this).hover(function() {
      $(".what_list_bg span").removeClass("on"),
      $(".what_list_bg span:eq(" + o + ")").addClass("on"),
      $(".what_list a").addClass("on"),
      $(this).removeClass("on")
  }, function() {
      $(".what_list a").removeClass("on")
  })
}),
$("#js-about_btn a").each(function(o) {
  $(this).hover(function() {
      $(".about_btn_bg_hover div").removeClass("on"),
      $(".about_btn_bg_hover div:eq(" + o + ")").addClass("on")
  }, function() {
      $(".about_btn_bg_hover div").removeClass("on")
  })
}),
$(".column_side_list a").each(function(o) {
  $(this).click(function() {
      return $(".column_side_list a").removeClass("on"),
      $(this).addClass("on"),
      $(".column_list").css({
          display: "none"
      }),
      $(".column_list:eq(" + o + ")").fadeIn("slow"),
      !1
  })
});
