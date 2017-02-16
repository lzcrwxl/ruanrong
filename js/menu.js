/**
 * Created by Administrator on 2016/12/20.
 */
// 下拉菜单
$(document).ready(function () {
  $('.articleMenu').on('mouseenter', 'a', function () {
    $(this).addClass('hoverColor');
  });
  $('.articleMenu').on('mouseleave', 'a', function () {
    $(this).removeClass('hoverColor');
  });
  /*$('body').on('mouseenter','.user p',function(){
   $(this).children('img').attr('src',"images/register_at.png")
   })
   $('body').on('mouseleave','.user p',function(){
   $(this).children('img').attr('src',"images/register_bf.png")
   })*/
  //$('.menu-click').eq(0).find('span').removeClass('menu-down');
  $('.menu-click').click(function () {
    //$(this).siblings().find("span").removeClass("menu-down");
    $(this).parent().find('.sub-menu').slideToggle();
    $(this).parent().find("i").toggleClass("menu-down");
    $(this).parent().siblings().children('.sub-menu').slideUp();
  });
  $('.articleMenu>li>a').click(function () {
    $(this).addClass("color-bg").parent().siblings().find("a").removeClass("color-bg");

  });
  $('.sub-menu').on('click', 'a', function () {
    $(this).addClass('themeRed').parent().siblings().find('a').removeClass('themeRed');
  })
  //加载头部
 /* $.ajax(
    {
      url: 'data/header.html',
      async: false,
      success: function (data) {
        $('#header').html(data);
      }
    });
  //加载尾部
  $.ajax(
    {
      url: 'data/footer.html',
      success: function (data) {
        $('footer').html(data);
      }
    });*/
  $('label:not([data-id="checkAll"])').on('click', function () {
    var pre = $(this).prev();
    if (pre.is(':checked')) {
      pre.removeAttr('checked');
    } else {
      pre.prop("checked", true);
    }
  });
});




