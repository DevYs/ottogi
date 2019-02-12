
/******
    변수
******/
var URL_CATEGORY_DEPTH2 = "https://devys.github.io/ottogi/js/category.json";

$(document).ready(function() {

/*******************
    HTML 생성 및 초기화
*******************/
$.ajax({
    url:URL_CATEGORY_DEPTH2,
    type:'get',
    success:function(data) {
        console.log(data);
    },
    error:function(e) {
        console.log(e);
    }

});

/********
    이벤트
********/

});

/******
    함수
******/