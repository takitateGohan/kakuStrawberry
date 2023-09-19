'use strict'

$(document).ready(function () {
    $('#openNavi, #closeNavi').on('click', function () {
        console.log("hamburgerButton clicked");
        $('#navi, .wrapper').toggleClass('show');
        $('.wrapper').toggleClass('cantTouch');
    });
});

// $(document).ready(function () {
//     $('#openNavi').on('click', function () {
//         $('#navi, .wrapper').addClass('showOn');
//         if( $('#navi').hasClass('showOff') ){
//             $('#navi').removeClass('showOff');
//            }
//     });
// });
// $(document).ready(function () {
//     $('#closeNavi').on('click', function () {
//         $('#navi, .wrapper').addClass('showOff');
//         if( $('#navi').hasClass('showOn') ){
//             $('#navi').removeClass('showOn');
//            }
//     });
// });