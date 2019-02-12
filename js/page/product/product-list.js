
/******
    변수
******/
var URL_CATEGORY_DEPTH2 = "https://devys.github.io/ottogi/js/category.json";
var DEPTH_2_LIST = "";

$(document).ready(function() {

/*******************
    HTML 생성 및 초기화
*******************/
$.ajax({
    url:URL_CATEGORY_DEPTH2,
    type:'get',
    success:function(data) {
        DEPTH_2_LIST = data;
    },
    error:function(e) {
        console.log(e);
    }

});

/********
    이벤트
********/
$("#depth1").on("change", function() {
    var depth1 = $(this).find("option:selected").val();
    var tag = "<option value='{code}'>{name}</option>";

    $('#depth2').empty();
    $('#depth2').append(tag.replace('{code}', '').replace('{name}', '선택하세요'));

    for(var i=0; i<DEPTH_2_LIST.length; i++) {
        var depth2 = DEPTH_2_LIST[i];
        if(depth2.parentCode == depth1) {
            var temp = tag.replace('{code}', depth2.code)
                          .replace('{name}', depth2.name);
            $('#depth2').append(temp);
        }
    }
});


});

/******
    함수
******/