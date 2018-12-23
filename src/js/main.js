/** 
 * @param author:'阮志雄'，
 * @param fearures：'青春自愿网'
 * @param company:''
 * @param date:'2018-12-19 17:14'
 */
$(function () {
    // 逻辑区域
    console.log('app is running!');
    $('.navbars-nav li').each(function (i) {
        $(this).click(function (e) {
            $('.navbars-nav li').removeClass('avtive-link');
            $(this).addClass("avtive-link")
        });

    })

})