'use strict';

/* ------------ 共通パーツの読み込み ---------------- */
$(function () {
    $.ajaxSetup({ cache: false });
    $("header").load("header.html");
    $("footer").load("footer.html");
    $("nav").load("hamburger.html");
});

/* ------------ end 共通パーツの読み込み ---------------- */

/* ------------ stickyHeader ---------------- */
$(window).scroll(function(){
    // .headerLogo の高さを取得
    outerHeight = $('.headerLogo').outerHeight(true);
    // outerHeight(.headerLogoの高さ)をストレージに保存
    sessionStorage.setItem('outerHeight',outerHeight);

    // .stickHeader の top にouterHeight(.headerLogoの高さ)を追加
    $('.stickyHeader').css('top', -outerHeight);

    // スクロール時の処理
    // スクロール値が outerHeight を越えるかどうか判定
    if ($(this).scrollTop() >= outerHeight) {
        $('header').addClass('stickyHeader');
        // sessionStorage.setItem('sticky','true');
    }else {
        $('header').removeClass('stickyHeader');
        // sessionStorage.setItem('sticky','false');
    }
});

/* ------------ end stickyHeader ---------------- */

/* ------------ アコーディオンメニュー ------------- */
$(document).ready(function () {
    $('.infoHeadLine').on('click', function () {
        if ($(this).next('.infoText').css('display') == 'block') {
            $(this).next('.infoText').not(':animated').slideUp('slow');
        } else {
            $(this).next('.infoText').slideDown('slow');
        }
    });
});

// more button
$(document).ready(function () {
    $('.moreButton').on('click', function () {
        if ($('#moreItems').css('display') == 'block') {
            $('#moreItems').not(':animated').slideUp('slow');
            $('.moreButton').toggleClass('hidden');
        } else {
            console.log('display != block');
            $('#moreItems').slideDown('slow');
            $('.moreButton').toggleClass('hidden');
        }
    });
});
/* ------------ end アコーディオンメニュー ------------- */

/* ------------ PageTop ------------------------------- */
$(document).ready(function () {
    $('.pagetop').on('click', function () {
        $('body,html').animate({ scrollTop: 0 }, 1000);
    });
});

// 一定値スクロールすると topPage button を表示
$(window).scroll(function(){
    // スクロール時の処理
    // スクロール値が outerHeight を越えるかどうか判定
    if ($(this).scrollTop() <= window.innerHeight) {
        $('.pagetop').addClass('hidden');
        sessionStorage.setItem('pageTop','false');
    }else {
        $('.pagetop').removeClass('hidden');
        sessionStorage.setItem('pageTop','true');
    }
});

/* --------------- end pageTop ------------------------ */

/* --------------- hamburgerMenu toggle ---------------*/ 
$(document).ready(function () {
    $('#openNavi, #closeNavi').on('click', function () {
        console.log("hamburgerButton clicked");
        $('#navi, .wrapper').toggleClass('show');
        $('.wrapper').toggleClass('cantTouch');
    });
});

/* --------------- end hamburgerMenu toggle ---------------*/ 