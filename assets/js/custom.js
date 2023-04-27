$(function () {

    $("a").each(function () {
        if ($(this).attr("href") == "#" || $(this).attr("href") == " ") {
            $(this).attr("href", "javascript:void(0)");
        }
    });

    if($('.bs-switch').length != 0){
        switchOnChangeHandle()
    }

    if($('.mod-progress').length != 0){
        progressBarIndicator();
    }

    if($('.lyt-player-list').length != 0){
        addRemovePlayer()
    }
    


});

function isCheckedById(id) {
    var checked = $("input[id=" + id + "]:checked").length;
    $('.js-tab-content').removeClass('active');
    if (checked == 0) {
        $('#listCont').addClass('active');

    } else {
        $('#pitchCont').addClass('active');
    }
}

function switchOnChangeHandle(){
    var target = $("input[id='switch']");

    target.on('change',function(){
        isCheckedById('switch');
    });
}

function progressBarIndicator(){
    var target = $('.js-progress');

    target.each(function(e){
        var percentWidth = $('.js-progress').eq(e).data('percent');
        $(this).css('width',percentWidth+'%')
    })
}

function addRemovePlayer(){
    var target = $('.js-mod-player');

    target.on('click',function(){
        if($(this).hasClass('typ-added')){
            $(this).removeClass('typ-added');
        }else{
            $(this).addClass('typ-added');
        }
    });
}
