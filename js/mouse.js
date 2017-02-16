$(document).ready(function(){
  $('.listPic>li>div').mouseenter(function(){
    // 设置全局变量
    window._html = $(this).children('.infoBox').text();
    window._delid = $(this).attr('data-pid');
    window._jsonList = $(this).attr('data-json');
    window._albumId = $(this).attr('data-aid');
    $(this).find('.mask').show();
    $(this).children('.infoBox').html(
      `
        <a class="mr8" id="editPic" href="">编辑</a>
                <span class="mr8" data-id="delete" data-delid="" onclick="$(this).getId(this)">删除</span>
                <span class="mr8">替换</span>
                <span data-id="transfer" data-aid="" data-delid="" data-json="" onclick="$(this).getId(this)">转移</span>
        `
    );
    //编辑
    var _href = "/index.php/Home/Picture/pictureEdit?id="+_delid;
    $('#editPic').attr('href',_href);
    //删除
    $('[data-id="delete"]').attr('data-delid',_delid);
    // 替换

    //转移
    $('[data-id="transfer"]').attr('data-json',_jsonList);
    $('[data-id="transfer"]').attr('data-aid',_albumId);
    $('[data-id="transfer"]').attr('data-delid',_delid);
  }).mouseleave(function(){
    $(this).find('.mask').hide();
    $(this).children('.infoBox').html(_html);
  })

});
