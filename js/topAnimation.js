$(function(){
    $(window).scroll(function(){ //スクロールイベント
        var y = jQuery(this).scrollTop(); //基本スクロール量
        var sc = y / 530;
        var c = Math.floor(sc); //端数を切り落としで、数値を単純化

        switch(c){
            case 0:
            $("#anime1").fadeIn();
            $("#anime2").fadeOut();
            $("#anime3").fadeOut();
            $("#anime4").fadeOut();
            $("#anime5").fadeOut();
            break;

            case 1:
            $("#anime1").fadeOut();
            $("#anime2").fadeIn();
            $("#anime3").fadeOut();
            $("#anime4").fadeOut();
            $("#anime5").fadeOut();
            break;

            case 2:
            $("#anime1").fadeOut();
            $("#anime2").fadeOut();
            $("#anime3").fadeIn();
            $("#anime4").fadeOut();
            $("#anime5").fadeOut();
            break;

            case 3:
            $("#anime1").fadeOut();
            $("#anime2").fadeOut();
            $("#anime3").fadeOut();
            $("#anime4").fadeIn();
            $("#anime5").fadeOut();
            break;

            case 4:
            $("#anime1").fadeOut();
            $("#anime2").fadeOut();
            $("#anime3").fadeOut();
            $("#anime4").fadeOut();
            $("#anime5").fadeIn();
            break;

            default:
            $("#anime1").fadeIn();
        }
    });
});
