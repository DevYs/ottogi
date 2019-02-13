/*
    1. 상수는 변수명이 대문자
*/

/******
    변수
******/
// 요청 URL
var URL_CATEGORY_DEPTH2 = 'https://devys.github.io/ottogi/js/category.json';
var URL_PRODUCT_LIST    = 'https://devys.github.io/ottogi/js/product.json';

// 템플릿 태그
var FIRST   = '<li class="first"><a href="#"><i class="fas fa-angle-double-left"></i></a></li>';
var PREV    = '<li class="prev"><a href="#"><i class="fas fa-angle-left"></i></a></li>';
var NEXT    = '<li class="next"><a href="#"><i class="fas fa-angle-right"></i></a></li>';
var LAST    = '<li class="last"><a href="#"><i class="fas fa-angle-double-right"></i></a></li>';
var OPTION  = "<option value='{code}'>{name}</option>";
var PRODUCT = '<li><dl><dt><img src="{imageSrc}" alt="{imageAlt}"></dt><dd class="title"><span>{productName}</span><span>{type}</span></dd><dd class="link"><a href="../../page/product/product-article.html?idx={idx}"><strong><i class="fas fa-search"></i><span>자세히 보기</span></strong></a></dd></dl></li>';

var PRODUCT_LIST = ''; // Product 목록 json 객체
var PAGE_SIZE    = 10; // 
var totalPage    = 0;
var resultList   = [];
var resultSize   = 0;
var pageNow      = 1;
var pagePrev     = 0;
var pageNext     = 0;
var pageFisrt    = 0;
var pageLast     = 0;
var totalPage    = 0;

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
        $('div.result-card div.top p').text('총 ' + PRODUCT_LIST.length + '건의 제품이 있습니다.');
        $('div.result-card ul.thumb-list').empty();
        search('');
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

    $('#depth2').empty();
    $('#depth2').append(OPTION.replace('{code}', '0').replace('{name}', '선택하세요'));

    for(var i=0; i<DEPTH_2_LIST.length; i++) {
        var depth2 = DEPTH_2_LIST[i];
        if(depth2.parentCode == depth1) {
            var temp = OPTION.replace('{code}', depth2.code)
                          .replace('{name}', depth2.name);
            $('#depth2').append(temp);
        }
    }
});

$('div.search button').on('click', function(e){
    e.preventDefault();
    var searchWord  = $('#search-word').val();
    $('div.result-card ul.thumb-list').empty();
    resultList = new Array();
    resultSize = 0;
    pageNow = 1;
    search(searchWord);
});

// $(document).ready() 종료
});

/******
    함수
******/
function search(searchWord) {
    $("div.result-card ul.thumb-list").empty();

    for(var i=0; i<PRODUCT_LIST.length; i++) {
        var product = PRODUCT_LIST[i];
        if(-1 < product.productName.indexOf(searchWord)) {
            resultList[resultSize++] = product;
        }
    }

    $('div.result-card div.top p').text('총 ' + resultList.length + '건의 제품이 있습니다.');

    totalPage = Math.ceil(resultList.length / PAGE_SIZE);

    pageNum();
    paggination();
}

function pageNum() {
    $('ul.page-no').empty();

    var start = (( Math.floor( (pageNow - 1) / PAGE_SIZE) ) * PAGE_SIZE) + 1;
    var end = start + 9;
    if(totalPage < end) {
        end = totalPage;
    }

    pageFirst = 1;
    pagePrev = 0 < (start - 1) ? start - 1 : 1;
    pageNext = totalPage < end + 1 ? totalPage : end + 1 ;
    pageLast = totalPage;

    $('ul.page-no').append(FIRST);
    $('ul.page-no li.first a').on('click', function(e) {
        e.preventDefault();
        pageNow = pageFirst;
        search();
    });

    $('ul.page-no').append(PREV);
    $('ul.page-no li.prev a').on('click', function(e) {
        e.preventDefault();
        pageNow = pagePrev;
        search();
    });

    var p = '<li class="pageNum"><a href="#">{page}</a></li>';
    var p_on = '<li class="on pageNum"><a href="#">{page}</a></li>';
    for(var i=start; i<=end; i++) {
        if(pageNow === i) {
            $('ul.page-no').append(p_on.replace('{page}', i));
        } else {
            $('ul.page-no').append(p.replace('{page}', i));
        }
    }
    $('ul.page-no li.pageNum a').on('click', function(e) {
        e.preventDefault();
        pageNow = Number($(this).text());
        search();
    });

    $('ul.page-no').append(NEXT);
    $('ul.page-no li.next a').on('click', function(e) {
        e.preventDefault();
        pageNow = pageNext;
        search();
    });

    $('ul.page-no').append(LAST);
    $('ul.page-no li.last a').on('click', function(e) {
        e.preventDefault();
        pageNow = pageLast;
        search();
    });
    
}

function paggination() {
    var end = pageNow * PAGE_SIZE;
    var start = end - (PAGE_SIZE - 1);

    if(resultList.length < end) {
        end = resultList.length;
    }

    start = start - 1;
    end = end - 1;

    for(var i=start; i<=end; i++) {
        addProduct(resultList[i]);
    }
}

function addProduct(product) {
    if(product.imageSrc === undefined) {
        return false;
    }

    var temp = PRODUCT.replace('{imageSrc}', 'https://www.ottogi.co.kr' + product.imageSrc)
                .replace('{imageAlt}', product.imageAlt)
                .replace('{productName}', product.productName)
                .replace('{type}', product.type)
                .replace('{idx}', product.idx);
    $("div.result-card ul.thumb-list").append(temp);
}