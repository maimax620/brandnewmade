$(function(){
	// 画像の枚数
	var count = $("#slide li").length;
  
	// 現在表示されている画像（最初は１番目の画像）
	var current = 1;
  
	// 次に表示する画像
	var next = 2;
  
	// フェードイン/アウトのインターバル（何秒ごとに画像を切り替えるか。）
	var interval = 4800;
  
	// フェードイン/アウトのスピード
	var duration = 1200;
  
	// タイマー用の設定
	var timer;
  
	// １番目の写真以外は非表示
	$("#slide li:not(:first-child)").hide();
  
	// 3000ミリ秒（変数intervalの値）ごとにslideTimer()関数を実行
	timer = setInterval(slideTimer, interval);
  
	// slideTimer()関数
	function slideTimer(){
	  // 現在の画像をフェードアウト
	  $("#slide li:nth-child(" + current + ")").fadeOut(duration);
  
	  // 次の画像をフェードイン
	  $("#slide li:nth-child(" + next + ")").fadeIn(duration);
  
 // 変数currentの新しい値：変数nextの元の値
 current = next;

 // 変数nextの新しい値：変数currentの新しい値+1
 next = ++next;


 // 変数nextの値が3（画像の総数）を超える場合、1に戻す
 if(next > count){ next = 1;}
	

//ヘッダーのカラーチェンジ用

jQuery(function(){

	var line = jQuery('header');
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() >700) { //スクロールが1000pxを越えたらinvert
			line.addClass('invert');
      
		} else { //スクロールが指定を越えなければクラスを外す
			line.removeClass('invert');
		}});

});

jQuery(function(){

	var line = jQuery('header');
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() >1500) { 
			line.addClass('invert02');
      
		} else { 
			line.removeClass('invert02');
		}});

});

jQuery(function(){

	var line = jQuery('#add');
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() >700) { //スクロールが越えたら
			line.addClass('black');
      
		} else { //スクロールが指定を越えなければクラスを外す
			line.removeClass('black');
		}});

});

jQuery(function(){

	var line = jQuery('#add');
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() >1500) { //スクロールが越えたら
			line.addClass('white');
      
		} else { //スクロールが指定を越えなければクラスを外す
			line.removeClass('white');
		}});

});


jQuery(function(){

	var line = jQuery('#add');
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() >1500) { //スクロールが越えたら
			line.addClass('white');
      
		} else { //スクロールが指定を越えなければクラスを外す
			line.removeClass('white');
		}});

});

jQuery(function(){

	var line = jQuery('.s_box');
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() >700) { //スクロールが越えたら
			line.addClass('border_black');
      
		} else { //スクロールが指定を越えなければクラスを外す
			line.removeClass('border_black');
		}});

});

jQuery(function(){

	var line = jQuery('.s_box');
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() >1500) { //スクロールが越えたら
			line.addClass('border_white');
      
		} else { //スクロールが指定を越えなければクラスを外す
			line.removeClass('border_white');
		}});

});

jQuery(function(){

	var line = jQuery('.openbtn1 span');
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() >700) { //スクロールが越えたら
			line.addClass('bgblack');
      
		} else { //スクロールが指定を越えなければクラスを外す
			line.removeClass('bgblack');
		}});

});
jQuery(function(){

	var line = jQuery('.openbtn1 span');
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() >1500) { //スクロールが越えたら
			line.addClass('bgwhite');
      
		} else { //スクロールが指定を越えなければクラスを外す
			line.removeClass('bgwhite');
		}});

});


jQuery(function(){

	var line = jQuery('.dli-mail');
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() >700) { //スクロールが越えたら
			line.addClass('black');
      
		} else { //スクロールが指定を越えなければクラスを外す
			line.removeClass('black');
		}});

});
jQuery(function(){

	var line = jQuery('.dli-mail');
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() >1500) { //スクロールが越えたら
			line.addClass('white');
      
		} else { //スクロールが指定を越えなければクラスを外す
			line.removeClass('white');
		}});

});


jQuery(function(){

	var line = jQuery('#logo a');
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() >700) { //スクロールが越えたら
			line.addClass('black');
      
		} else { //スクロールが指定を越えなければクラスを外す
			line.removeClass('black');
		}});

});
jQuery(function(){

	var line = jQuery('#logo a');
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() >1500) { //スクロールが越えたら
			line.addClass('white');
      
		} else { //スクロールが指定を越えなければクラスを外す
			line.removeClass('white');
		}});

});




// 変数currentの新しい値：変数nextの元の値
current = next;
  
// 変数nextの新しい値：変数currentの新しい値+1
next = ++next;

// 変数nextの値が3（画像の総数）を超える場合、1に戻す
if(next > count){
  next = 1;
}

// targetクラスを削除
$("#button li a").removeClass("target");

// 現在のボタンにtargetクラスを追加
$("#button li:nth-child(" + current + ") a").addClass("target");
}

// ボタンをクリック
$("#button li a").click(function(){
// テキスト内容を変数nextに代入
next = $(this).html();

// タイマーを停止して再スタート
clearInterval(timer);
timer = setInterval(slideTimer, interval);

// 初回の関数実行
slideTimer();

return false;
});
});



//読み込まれたらフェードインinviewの設定
$(function () {//js-fadeクラスが読み込まれたらinvewクラスを付与
    $(".js-fade").on("inview", function () {//inviewは読み込まれたらの文なので変えない
        $(this).addClass("inview");//ここにクラスを付与(下から上)
    });
});

$(function () {//js-leftクラスが読み込まれたらfadeLeft左から出現
    $(".js-left").on("inview", function () {//inviewは読み込まれたらの文なので変えない
        $(this).addClass("fadeLeft");//ここにクラスを付与
    });
});

$(function () {//js-upクラスが読み込まれたらfadeLeft左から出現
    $(".js-up").on("inview", function () {//inviewは読み込まれたらの文なので変えない
        $(this).addClass("fadeUp");//ここにクラスを付与
    });
});



$(function () {//js-leftクラスが読み込まれたらinvewクラスを付与
    $(".anime").on("inview", function () {
        $(this).addClass("textAnime");
    });
});


$(function () {//js-leftクラスが読み込まれたらinvewクラスを付与
    $(".work_space").on("inview", function () {
        $(this).addClass("filter_none");
    });
});



$(function() {
    $('.gray_none').on('inview', function(event, isInView){
        if (isInView) {
            $(this).addClass('gray_none');
        } else {
            $(this).removeClass('gray_none');
        }
    });
});



/* ファーストビュー */
  $(window).on('load',function(){
    $("#splash-logo").delay(800).fadeOut('sfast');//ロゴ秒でフェードアウトする記述
  
    //=====ここからローディングエリア（splashエリア）を何秒でフェードアウトした後に動かしたいJSをまとめる
    $("#splash").delay(1200).fadeOut('fast',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
    
        $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
  
    });
    
    //=====ここまで背景が伸びた後に動かしたいJSをまとめる
        
});




   
//初期値の設定
function TypingInit() {
  $('.js_typing').each(function (i) { //js_typingクラスを全て処理をおこなう
    arr[i] = new ShuffleText(this);//動作させるテキストを配列に格納
  });
}


//ギャラリーの設定
//上部画像の設定
$('.gallery').slick({
	infinite: true, //スライドをループさせるかどうか。初期値はtrue。
	fade: true, //フェードの有効化
	arrows: true,//左右の矢印あり
	prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
	dots: false,
	nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
});

//選択画像の設定
$('.choice-btn').slick({
	infinite: true, //スライドをループさせるかどうか。初期値はtrue。
	slidesToShow: 6, //表示させるスライドの数
	focusOnSelect: true, //フォーカスの有効化
	asNavFor: '.gallery', //連動させるスライドショーのクラス名
});
  
//下の選択画像をスライドさせずに連動して変更させる設定。
$('.gallery').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
	var index = nextSlide; //次のスライド番号
	//サムネイルのslick-currentを削除し次のスライド要素にslick-currentを追加
	$(".choice-btn .slick-slide").removeClass("slick-current").eq(index).addClass("slick-current");
});
  

//ハンバーガーMENU02
$(".openbtn1").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
	  $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
  });
  
  $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
	  $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
	  $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
  });

//GRIDホバーエフェクト
  $(".hover").mouseleave(
	function () {
	  $(this).removeClass("hover");
	}
  );
