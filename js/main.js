$(document).ready(function() {
    $('#pagepiling').pagepiling({
        scrollingSpeed: 10,
        loopBottom: true,
        css3: true,
        anchors: ['首页', '项目经历', '个人技能', '教育背景', '联系方式'],
        navigation: {
            'position': 'right',
            'tooltips': ['首页', '项目经历', '个人技能', '教育背景', '联系方式']
        },
        onLeave: function(index, nextIndex, direction) {
            var $pages = $('.section');
            for (var i = 0,j = $pages.length; i < j; i++) {
                if (i + 1 !== nextIndex) {
                    $($pages[i]).css('background-color', '#FACF44');
                } else {
                    $($pages[i]).css('background-color', '#DC3955');
                }
            }
        }
    });
    $(window).bind('mousewheel', function() {
        var tags = $('.page3 .tag');
        if ($('.page3').hasClass('active')) {
            // console.log(tags)
            for (var i = tags.length - 1; i >= 0; i--) {
                $(tags[i]).animate({
                    padding: '0 .8em'
                }, 500);
            }
        } else {
            for (var j = tags.length - 1; j >= 0; j--) {
                $(tags[j]).animate({
                    padding: '0 .3em'
                }, 300);
            }
        }
    });
});
