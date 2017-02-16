/**
 * Created by lx on 2016/12/30.
 */
(function ($) {
  $.fn.extend({
    //关闭按钮插件
    myClose: function () {
      $(this).parents('.module,.popup').hide();
    },
    //弹出框
    myPopup: function (that,data) {
      //var did = $(that).data('id');
      $('.module').show();
      popup(that,data);
      $('.module .popup').show();
    },
    //全选和反选：
    checkAll: function () {
      this.click(function () {
        var _name = $(this).attr('name');
        if (this.checked) {
          $("input[type='checkbox'][name='" + _name + "']").each(function () {
            $(this).prop("checked", true);
          });
        } else {
          $("input[type=checkbox]").each(function () {
            $(this).removeAttr("checked");
          });
        }
      })
    },
    // 获取单个id
    getId: function (that) {
      var id = $(that).attr('data-delid');
      this.myPopup(that,id);
    },
    // 获取id数组
    getIds: function (that) {
      var len = $('.check:checked');
      if(len.length > 0){
        var ids = new Array();
        len.each(function(i){
          ids.push(len.eq(i).val());
        });
        this.myPopup(that,ids);
      } else {
        alert('请至少选择一项！');
      }
    },
   /* myDelete: function (that) {
      var did = $(that).data('id');
      var chk = $('[data-id="' + did + '"] input:checked');
      $(chk).each(function () { // 遍历选中的checkbox
        $(this).parents('[data-id="' + did + '"]').remove();  // 获取checkbox所在行的顺序
      })
      this.myClose();
    },*/
    myAddImg:function(){
      var img = $(this).children().find('img');
      var src01 = img.attr('src');
      var i = src01.lastIndexOf('/');
      if ($(this).hasClass('mousein')){
        var src = src01.slice(0, i + 5) + "r" + src01.slice(-6, -1) + 'g';
        img.attr('src', src);
      }else{
        var src02 = src01.slice(0, i + 5) + src01.slice(-6, -1) + "g";
        img.attr('src', src02);
      }
    },
    switchPage: function (that) {
      var w = '';
      var current = $(window.frames["frame01"].document).find('#nr .z-current');
      var pages = $(window.frames["frame01"].document).find('#nr .main-page');
      var progress = $(window.frames["frame01"].document).find('.progress ');
      var i = current.index();
      if (that.id == "pre_page") {
        if (i == 1) {
          progress.find('.page-tip').html('8' + '/' + '8');
         current.removeClass('z-current');
          pages.last().addClass('z-current');
          progress.find('span').width('320px');
        }
        else {
          progress.find('.page-tip').html(i-1 + '/' + '8');
         current.removeClass('z-current').prev('.main-page').addClass('z-current');
          w = (i-1) * 40 + 'px';
          progress.find('span').width(w);
        }
      }
      else if (that.id == "next_page") {
        if (i == 8) {
         current.removeClass('z-current');
          pages.first().addClass('z-current');
          progress.find('.page-tip').html(i - 7 + '/' + '8');
          progress.find('span').width('40px');
        }else {
          progress.find('.page-tip').html(i + 1 + '/' + '8');
          current.removeClass('z-current').next('.main-page').addClass('z-current');
          w = ((i + 1) * 40) + 'px';
          progress.find('span').width(w);
        }
      }
    }
  })
})(jQuery);


