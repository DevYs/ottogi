
/******
    변수
******/
var URL_CATEGORY_DEPTH2 = "https://devys.github.io/ottogi/js/category.json";
var URL_PRODUCT_LIST = "https://devys.github.io/ottogi/js/product.json";
var DEPTH_2_LIST = "";
var PRODUCT_LIST = "";

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

$.ajax({
    url:URL_PRODUCT_LIST,
    type:'get',
    success:function(data) {
        PRODUCT_LIST = data;
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

$('div.search button').on('click', function(e){
    var tag = '<li><dl><dt><img src="{imageSrc}" alt="{imageAlt}"></dt><dd class="title"><span>{productName}</span><span>{type}</span></dd><dd class="link"><a href="../../page/product/product-article.html?idx={idx}"><strong><i class="fas fa-search"></i><span>자세히 보기</span></strong></a></dd></dl></li>';

    e.preventDefault();

    $("div.result-card div.top p").text("총 541건의 제품이 있습니다.");
    $("div.result-card ul.thumb-list").empty();

    for(var i=0; i<PRODUCT_LIST.length; i++) {
        var product = PRODUCT_LIST[i];
        var temp = tag.replace('{imageSrc}', 'https://www.ottogi.co.kr' + product.imageSrc)
                      .replace('{imageAlt}', product.imageAlt)
                      .replace('{productName}', product.productName)
                      .replace('{type}', product.type)
                      .replace('{idx}', product.idx);
        $("div.result-card ul.thumb-list").append(temp);
    }
});


// $(document).ready() 종료
});

/******
    함수
******/