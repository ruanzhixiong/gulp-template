/** 
 * @param author:'阮志雄'，
 * @param fearures：'青春自愿网'
 * @param company:''
 * @param date:'2018-12-19 17:14'
 */
$(function () {
    // 逻辑区域
    console.log('app is running!');
    // 导航按钮
    $('.navbars-nav li').each(function (i) {
        $(this).click(function (e) {
            $('.navbars-nav li').removeClass('avtive-link');
            $(this).addClass("avtive-link")
        });

    })
    // 功能点切换介绍
    var consArr = [{
        title: '更精准的学校推荐',
        value: '通过大数据分析，根据你的个人情况，为你量身定制目标，让你考上如愿的的大学',
        img:''
    }, {
        title: '精准定位',
        value: '通过大数据分析，根据你的个人情况，为你量身定制目标，让你考上如愿的的大学',
        img:''
    }, {
        title: '拓展社交',
        value: '通过大数据分析，根据你的个人情况，为你量身定制目标，让你考上如愿的的大学',
        img:''
    }, {
        title: '学校全景',
        value: '通过大数据分析，根据你的个人情况，为你量身定制目标，让你考上如愿的的大学',
        img:''
    }]
    $('.app_switch li').each(function (i) {
        $(this).click(function () {
            $('.app_switch li').removeClass("isTrue");
            $(this).addClass("isTrue")
            $('.app_cons h3').html(consArr[i].title)
            $('.app_cons p').html(consArr[i].value)
            // $('app_imgs img').attr("src","test.jpg")
        })

    })
    // 滚动动画
    // $(document).scroll(function (e) { 
    //     console.log($('.first_wrap').scrollTop());
        
    // });
})