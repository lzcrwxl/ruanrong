//弹出框选择
var cat = [
  {'did': 'delete', 'msg': "是否删除当前项？", 'act':'myDelete'},
  {'did': 'forbid', 'msg': "是否禁用当前项？", 'act':'myDisable'},
  {'did': 'release', 'msg': "是否发布当前活动？"},
  {'did': 'reset', 'msg': "是否重置当前项？", 'act':'myReset'},
  {'did': 'close', 'msg': "是否关闭当前活动？"},
  {'did': 'sold-out', 'msg': "是否下架当前商品？", 'act':'myShelf'},
  {'did': 'deliver', 'msg': "是否发货？"},
  {'did': 'closeInfo', 'msg': "是否关闭中奖信息？"},
  {'did': 'transfer', 'title': "转移相册", 'info': '选择相册', 'def': '默认相册', 'btn': '开始转移', 'act':'transferPhoto'},
  {'did': 'editPhoto', 'title': "编辑相册", 'info': '相册名称', 'def': '默认相册', 'btn': '立即提交', 'act':'editPhoto'},
  {'did': 'newPhoto', 'title': "新增相册", 'info': '相册名称', 'def': '默认相册', 'btn': '立即提交', 'act':'newPhoto'},
  {'did': 'newDep', 'title': "新增部门", 'name': '部门名称', 'subnm': '部门名称：', 'act':'addDepart'},
  {'did': 'editDep', 'title': "编辑部门", 'name': '部门名称', 'subnm': '上级部门：', 'act':'editDepart'},
  {'did': 'classify', 'title': "新增分类", 'name': '分类名称：', 'subnm': '上级分类：', 'act':'addType'},
  {'did': 'editClassify', 'title': "编辑分类", 'name': '分类名称：', 'subnm': '上级分类：', 'act':'editType'},
  {'did': 'parment', 'title': "新增参数", 'name': '参数名称：', 'subnm': '排序：', 'act':'addParment'},
  {'did': 'editParment', 'title': "编辑参数", 'name': '参数名称：', 'subnm': '排序：', 'act':'editParment'}
];
function popup(that,data) {
  //console.log(did);
  var did = $(that).data('id');
  for (var i = 0; i < cat.length; i++) {
    for (var key in cat[i]) {
      if (cat[i].did == did) {
        var msg = cat[i].msg;
        var title = cat[i].title;
        var info = cat[i].info;
        var def = cat[i].def;
        var btn = cat[i].btn;
        var name = cat[i].name;
        var subnm = cat[i].subnm;
        var act = cat[i].act;
      }
    }
  }
  var html = '';
  if ((did == 'delete') || (did == "forbid") || (did == "reset") || (did == "sold-out")||(did=='release')||(did=='close')||(did=='deliver')||(did=='closeInfo')) {
    html += `
      <div data-id="delete" class="popup w300 f14 fix deleteUser dn">
    <h4 class="popup-title f14 tc rel g6">
      温馨提示
      <span class="r myclose f20 poi" data-id="myclose" onclick="$(this).myClose()"></span>
    </h4>
    <hr>
    <div class="popup-main g6 f12">
      <ul class="f14 tc">
        <li class="detailInfo mt30"></li>
        <li class="f12 fix mt33">
          <button class="themebgRed-lg wh popup-btn mr40 actNotice"  data-delid="" data-id='userList'>确定</button>
          <button class="bdgrey-lg bgwh popup-btn g6" id="userDel" data-id="myclose" onclick="$(this).myClose()">取消</button>
        </li>
      </ul>
    </div>
  </div>
    `;
    $('.module').html(html);
    $('.module .detailInfo').html(msg);
    $('.module .actNotice').attr("onclick",act+"(this)");
    $('[data-id="userList"]').attr('data-delid',data);
  }
  else if (did == "newUser") {
    html += `
    <div data-id="newUser" class=" popup f14 fix dn newUser">
    <h4 class="popup-title f18 tc rel g6">
      新增企业用户
      <span class="r myclose f20 poi" data-id="myclose" onclick="$(this).myClose()"></span>
    </h4>
    <div class="popup-main g5a f12">
      <ul class="f12">
      <form id="ajax_new_user">
        <li class="mt20"><span class="asterisk rel">姓名：</span></li>
        <li><input type="text" name="r_name" id="r_name" class="pct100 bdgrey-lg"></li>
        <li class="mt10"><span class="asterisk rel">手机号：</span></li>
        <li class=""><input type="text" name="u_name" id="u_name" class="pct100 bdgrey-lg phone">
        </li>
        <!--<li class="mt10"><span class="asterisk rel">密码：</span></li>-->
        <!--<li><input type="password" class="pct100 bdgrey-lg"></li>-->
        <!--<li class="mt10"><span class="asterisk rel">确认密码：</span></li>-->
        <!--<li><input type="password" class="pct100 bdgrey-lg"></li>-->
        <li class="mt10"><span class=" rel">角色：</span></li>
        <li>
          <select name="role" id="role" class="bdgrey-lg pct100">
            <option value="0" style="color: #bfbfbf;">请选择</option>
          </select>
        </li>
        <li class="mt10"><span class=" rel">部门：</span></li>
        <li>
          <select name="department" id="department" class="bdgrey-lg pct100">
            <option value="0" style="color: #bfbfbf;">请选择</option>
          </select>
        </li>
        </form>
        <li class="f12 fix mt20 tc">
          <button class="themebgRed-lg wh popup-btn mr30" onclick="addUser()">确定</button>
          <button class="bdgrey-lg bgwh popup-btn g6" id="userClose" data-id="myclose" onclick="$(this).myClose()">取消</button>
        </li>
      </ul>
    </div>
  </div>
    `;
    $('.module').html(html);
    var depList = $(that).attr('data-dep');
    var roleList = $(that).attr('data-role');
    //json字符串转换为对象
    var depList = eval('(' + depList + ')');
    var roleList = eval('(' + roleList + ')');
    for(var i in depList){
      if(depList[i].count == 1){
        var text = depList[i].text;
      } else if(depList[i].count == 2){
        var text = "&nbsp;&nbsp;∟"+depList[i].text;
      } else if (depList[i].count == 3){
        var text = "&nbsp;&nbsp;&nbsp;&nbsp;├－"+depList[i].text;
      }
      var option = "<option value='"+depList[i].id+"'>"+text+"</option>";
      $('#department').append(option);
    }
    for(var j in roleList){
      var option = "<option value='"+roleList[j].id+"'>"+roleList[j].text+"</option>";
      $('#role').append(option);
    }
  }
  else if (did == "editUser") {
    html += `
    <div data-id="editUser" class=" popup f14 fix dn newUser">
    <h4 class="popup-title f18 tc rel g6">
      编辑企业用户
      <span class="r myclose f20 poi" data-id="myclose" onclick="$(this).myClose()"></span>
    </h4>
    <div class="popup-main g5a f12">
      <ul class="f12">
      <form id="ajax_edit_user">
        <input type="hidden" name="uid" id="userId" value="">
        <li class="mt20"><span class="asterisk rel">姓名：</span></li>
        <li><input type="text" name="r_name" id="r_name" class="pct100 bdgrey-lg"></li>
        <li class="mt10"><span class="asterisk rel">手机号：</span></li>
        <li class=""><input type="text" name="u_name" id="u_name" class="pct100 bdgrey-lg phone">
        </li>
        <li class="mt10"><span class=" rel">角色：</span></li>
        <li>
          <select name="role" id="role" class="bdgrey-lg pct100">
            <option value="0" style="color: #bfbfbf;">请选择</option>
          </select>
        </li>
        <li class="mt10"><span class=" rel">部门：</span></li>
        <li>
          <select name="department" id="department" class="bdgrey-lg pct100">
            <option value="0" style="color: #bfbfbf;">请选择</option>
          </select>
        </li>
        </form>
        <li class="f12 fix mt20 tc">
          <button class="themebgRed-lg wh popup-btn mr30" onclick="editUser()">确定</button>
          <button class="bdgrey-lg bgwh popup-btn g6" id="editClose" data-id="myclose" onclick="$(this).myClose()">取消</button>
        </li>
      </ul>
    </div>
  </div>
    `;
    $('.module').html(html);
    var r_name = $(that).attr('data-rname');
    var u_name = $(that).attr('data-uname');
    var u_id = $(that).attr('data-uid');
    var r_id = $(that).attr('data-rid');
    var d_id = $(that).attr('data-did');
    $('#r_name').val(r_name);
    $('#u_name').val(u_name);
    $('#userId').val(u_id);
    var depList = $(that).attr('data-dep');
    var roleList = $(that).attr('data-role');
    //json字符串转换为对象
    var depList = eval('(' + depList + ')');
    var roleList = eval('(' + roleList + ')');
    for(var i in depList){
      if(depList[i].count == 1){
        var text = depList[i].text;
      } else if(depList[i].count == 2){
        var text = "&nbsp;&nbsp;∟"+depList[i].text;
      } else if (depList[i].count == 3){
        var text = "&nbsp;&nbsp;&nbsp;&nbsp;├－"+depList[i].text;
      }
      if(d_id == depList[i].id){
        var dep_sel = 'selected';
      } else {
        var dep_sel = '';
      }
      var option = "<option value='"+depList[i].id+"' "+dep_sel+" >"+text+"</option>";
      $('#department').append(option);
    }
    for(var j in roleList){
      if(r_id == roleList[j].id){
        var role_sel = 'selected';
      } else {
        var role_sel = '';
      }
      var option = "<option value='"+roleList[j].id+"' "+role_sel+">"+roleList[j].text+"</option>";
      $('#role').append(option);
    }
  }
  else if (did == 'transfer') {
    html += `
      <div class="popup w300 f14 fix h120 transfer editPhoto fn-clear">
    <h4 class="popup-title f16 tc rel g6">
      <span class="r myclose f20 poi" data-id="myclose" onclick="$(this).myClose()"></span>
    </h4>
    <hr>
    <div class="popup-main g6 f12 fn-clear">
    <form id="ajax_transfer_photo">
      <input type="hidden" name="id" value="" id="ids">
      <ul class="f14 tc fn-clear ovh">
        <li class="detailInfo">
          <select name="album" id="album" class="bde5 ml15">
            <option value="0">请选择相册</option>
          </select>
        </li>
    </form>
        <li class="f12 fix mt33">
          <button class="themebgRed popup-btn f14 wh" type="button"></button>
        </li>
      </ul>
    </div>
  </div>
    `;
    $('.module').html(html);
    var albumId = $(that).attr('data-aid');
    $('#ids').val(data);
    var albList = $(that).attr('data-json');
    var data = eval('(' + albList + ')');
    for(var i in data){
      if(albumId == data[i].id){
        var selected = 'selected';
      } else {
        var selected = '';
      }
      var option = "<option value='"+data[i].id+"' "+selected+">"+data[i].text+"</option>";
      $('#album').append(option);
    }
    $('.module .popup-title').prepend(title);
    $('.module .detailInfo').prepend(info);
    //$('.module option').html(def);
    $('.module .popup-btn').html(btn);
    $('.module .popup-btn').attr('onclick',act+'(this)');
    //if (did == 'editPhoto') {
    //  $('.module .detailInfo').after(
    //    `
    //       <li class="mt20">
    //      相册排序
    //      <input type="text" value="默认相册" class="bde5 ml15">
    //    </li>
    //    `
    //  );
    //}
  }
  else if (did == 'editPhoto' || did == 'newPhoto'){
    html += `
      <div class="popup w300 f14 fix transfer editPhoto fn-clear">
    <h4 class="popup-title f16 tc rel g6">
      <span class="r myclose f20 poi" data-id="myclose" onclick="$(this).myClose()"></span>
    </h4>
    <hr>
    <div class="popup-main g6 f12 fn-clear">
    <form id="ajax_transfer_photo">
      <input type="hidden" name="id" value="" id="id">
      <ul class="f14 tc fn-clear ovh">
      <li class="mt20">
          相册名称
          <input type="text" id="albumName" value="" class="bde5 ml15">
      </li>
      <li class="mt20">
          相册排序
          <input type="text" id="albumSort" value="1" class="bde5 ml15">
      </li>
    </form>
        <li class="f12 fix mt33">
          <button class="themebgRed popup-btn f14 wh" type="button"></button>
        </li>
      </ul>
    </div>
  </div>
    `;
    $('.module').html(html);
    $('.module .popup-title').prepend(title);
    $('.module .detailInfo').prepend(info);
    //$('.module option').html(def);
    $('.module .popup-btn').html(btn);
    $('.module .popup-btn').attr('onclick',act+'(this)');
    if (did == 'editPhoto') {
      var text = $(that).attr('data-text');
      var sort = $(that).attr('data-sort');
      var id = $(that).attr('data-aid');
      $('#id').val(id);
      $('#albumName').val(text);
      $('#albumSort').val(sort);
    }
  }
  else if (did == 'newDep' || did == 'editDep' || (did == 'classify') || (did == 'editClassify')) {
    html += `
      <div class="popup f14 fix newDep classify">
        <h4 class="popup-title f16 tc rel g6">
          <span class="r myclose f20 poi" data-id="myclose" onclick="$(this).myClose()"></span>
        </h4>
        <hr>
        <div class="popup-main g5a f12">
          <ul class="f12">
          <form id="ajax_new_type">
            <input type="hidden" name="id" id="typeId" value=""/>
            <li class="mt20"><span class="asterisk rel name"></span></li>
            <li><input type="text" name="text" id="typeName" class="pct100 bdgrey-lg"></li>
            <li class="mt14"><span class="asterisk rel subName"></span></li>
            <li class="selClassify">
              <select name="pid" id="typeList" class="bdgrey-lg pct100">
                <option value="0" style="color: #bfbfbf;">不选择分类，为一级分类</option>
              </select>
            </li>
            </form>
            <li class="f12 fix mt25 tc">
              <button class="themebgRed-lg wh popup-btn mr40 actType">确定</button>
              <button class="bdgrey-lg bgwh popup-btn g6" id="typeClose" data-id="myclose" onclick="$(this).myClose()">取消</button>
            </li>
          </ul>
        </div>
      </div>
    `;
    $('.module').html(html);
    var text = $(that).attr('data-text');
    var id = $(that).attr('data-tid');
    var pid = $(that).attr('data-pid');
    var sort = $(that).attr('data-sort');
    for(var i in data){
      if(data[i].count == 1){
        var newText = data[i].text;
      } else if (data[i].count == 2){
        var newText = "&nbsp;&nbsp;∟"+data[i].text;
      } else {
        var newText = "&nbsp;&nbsp;&nbsp;&nbsp;├－"+data[i].text;
      }
      if(did == 'editClassify' || did == 'editDep'){
        if(pid === data[i].id){
          var sel = 'selected';
        } else {
          var sel = '';
        }
        // 编辑的时候自身不能选
        if(id == data[i].id){
          var sel = 'disabled';
        }
        var option = "<option value='"+data[i].id+"' "+sel+" >"+newText+"</option>";
        $('#typeList').append(option);
      } else {
        if(typeof(id) !== "undefined"){
          $('#typeList').children(0).text(text);
          $('#typeList').children(0).val(id);
        } else {
          var option = "<option value='"+data[i].id+"'>"+newText+"</option>";
          $('#typeList').append(option);
        }
      }
    };
    $('.module .popup-title').prepend(title);
    $('.module .name').html(name);
    $('.module .subName').html(subnm);
    $('.module .actType').attr("onclick",act+"(this)");
    if (did == 'classify' || did == 'editClassify') {
      $('.module .selClassify').after(`
          <li class="mt20"><span class="asterisk rel">排列序号：</span></li>
        <li><input type="text" name="sort" id="typeSort" class="pct100 bdgrey-lg"></li>
        `);
    }
    //编辑信息
    if(did == 'editClassify' || did == 'editDep'){
      $('.module #typeId').val(id);
      $('.module #typeName').val(text);
      $('.module #typeSort').val(sort);
    }
  }

  else if (did == 'parment' || did == 'editParment') {
    html += `
      <div class="popup f14 fix newDep classify">
        <h4 class="popup-title f16 tc rel g6">
          <span class="r myclose f20 poi" data-id="myclose" onclick="$(this).myClose()"></span>
        </h4>
        <hr>
        <div class="popup-main g5a f12">
          <ul class="f12">
          <form id="ajax_new_parament">
            <input type="hidden" name="id" id="paraId" value=""/>
            <li class="mt20"><span class="asterisk rel name"></span></li>
            <li><input type="text" name="name" id="paraName" class="pct100 bdgrey-lg"></li>
            <li class="mt20"><span class="asterisk rel subName"></span></li>
            <li><input type="text" name="sort" id="paraSort" class="pct100 bdgrey-lg"></li>
            </form>
            <li class="f12 fix mt25 tc">
              <button class="themebgRed-lg wh popup-btn mr40 actType">确定</button>
              <button class="bdgrey-lg bgwh popup-btn g6" id="paraClose" data-id="myclose" onclick="$(this).myClose()">取消</button>
            </li>
          </ul>
        </div>
      </div>
    `;
    $('.module').html(html);
    var text = $(that).attr('data-name');
    var id = $(that).attr('data-pid');
    var sort = $(that).attr('data-sort');
    $('.module .popup-title').prepend(title);
    $('.module .name').html(name);
    $('.module .subName').html(subnm);
    $('.module .actType').attr("onclick",act+"(this)");
    //编辑信息
    if(did == 'editParment'){
      $('.module #paraId').val(id);
      $('.module #paraName').val(text);
      $('.module #paraSort').val(sort);
    }
  }

}