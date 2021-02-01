
// アコーディオン用の変数
// * ============================================ *

var $window = $(window),
    $wrapper = $('.wrapper'),
    $menuButton = $('.humburgerBtn'),
    $jsCover = $('.js-cover'),
    $nav = $('.gmenu');


// ウィンドウの高さを取得
// * ============================================ *

$window.on('load resize',function(){
  windowHeight = $window.height();
})

// ~1024pxの場合だけのアニメーション（幅が変わらない）
// * ============================================ *

$menuButton.on('click',function(){
  //ハンバーガーメニューがクリックされたか判定
  $menuButton.toggleClass('isOpen');
  //class isOpenの切り替え

  if($menuButton.hasClass('isOpen')){
    //class isOpenであれば

    $jsCover.fadeIn("1000");
    //メニューの背景をフェードイン

    $nav.animate({
      "top": "7.5vw"
    },1000);
    //class gmenuが降りてくる

  }else if(!$menuButton.hasClass('isOpen')){
  //class isOpenが無ければ

    $jsCover.fadeOut("1000");
    //メニューの背景をフェードアウト
    $nav.animate({
      "top": "-700px"
    },1000);
    //class gmenuが収納される
  }
});


// ~1024pxと1024px~のアニメーション（幅が変わる）
// * ============================================ *

$(function(){
  $window.on('load resize',function(){
  // ウィンドウ幅の取得
  var spWidth = $(window).width();
  var pcWidth = 1023;
  // ウィンドウ幅の定義
    if($menuButton.hasClass('isOpen') && spWidth >= pcWidth){
    // もしもclass isOpenを持っていて、1025px以上であれば
      $jsCover.fadeOut("1000");
      //メニューの背景をフェードアウト
      $nav.css({'top': '0px'});
      //PC版メニューのレイアウト
    }else if ($menuButton.hasClass('isOpen') && spWidth <= pcWidth) {
      // もしもclass isOpenを持っていて、1025px以下であれば
      $jsCover.fadeIn("1000");
      //メニューの背景をフェードイン
      $nav.css({'top': '9vw'});
      //SP版の開いた状態のレイアウト
    }else if (!$menuButton.hasClass('isOpen') && spWidth >= pcWidth){
      $nav.css({'top': '0px'});
      //PC版メニューのレイアウト
    }else {
      $nav.css({'top': '-700px'});
    }
  })
});
