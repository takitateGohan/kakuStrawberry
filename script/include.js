'use strict'

// common html の読み込み
$(function () {
    $.ajaxSetup({ cache: false });
    $("header").load("../common/header.html");
    $("footer").load("../common/footer.html");
    $("nav").load("../common/hamburger.html");
});

// $(function() {
//     $.ajax({
//       url: '../common/header.html', // includeしたいファイルのパスを指定
//       dataType: 'html', // htmlのまま
//       // 読み込み成功時の処理
//       success: function (data) {
//         $('header').prepend(data);
//       },
//       // 読み込み失敗時の処理
//       error: function () {
//         alert('header error!');
//       },
//     });
//   });

// hamburger の処理

