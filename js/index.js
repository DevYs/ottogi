/*
    원칙1. JS는 '변수 선언부', 'HTML 태그 생성부', '이벤트 선언부', '함수 선언부' 등의 4가지 영역으로 나누어 작성한다.
    원칙2. '모든 화면에서' 또는 '대부분의 화면에서' 공통으로 사용되는 부분은 같은 4가지 영역으로 새로이 JS 파일을 따로 작성하여 HTML 문서상의 가장 먼저 로드되도록 한다.
    
*/

/************
	변수 선언부
************/

'use strict';
$(document).ready(function() {
/************ 시작 ****************/

/***********************
    HTML 태그 생성 및 초기화
************************/
setSlide('.banner', 1);
setSlide('.event-slide', 1);
setSlide('.new-slide', 1);

setList('section.popular div.list');
setList('section.cooking-story div.list');

/*************
    이벤트 선언부
*************/
// a 태그 링크 이동 막기
// $(document).find('a').on('click', function(e) {
//     e.preventDefault();
// });

// SNS 클릭 및 포커스
$('main section.sns dl dt a').on('click focus', function(e) {
    e.preventDefault();
    $('main section.sns dl dt').removeClass('on');
    $('main section.sns dl dd').removeClass('on');
    $(this).parent().addClass('on');
    $(this).parent().next().addClass('on');
});

// SNS 포커스
$('main section.sns dl dd a').on('focus', function() {
    $('main section.sns dl dt').removeClass('on');
    $('main section.sns dl dd').removeClass('on');
    $(this).parent().addClass('on');
    $(this).parent().prev().addClass('on');
});

/***************** 종료 ***************/
});

/************
	함수 선언부
************/
/**
 * 리스트 기능을 설정합니다. 
 */
function setList(selector) {
    $(selector).each(function() {
        var itemWidth  = 240;
        var items      = $(this).find('ul.items');
        var itemLength = items.find('li').length;
        var itemsWidth = itemLength * itemWidth;
        var control    = $(this).find('div.control'); 
        var left       = control.find('.left');
        var right      = control.find('.right');
        var direction  = 0;

        items.css({'width': itemsWidth + 'px'});

        left.on('click', function(e) {
            e.preventDefault();
            if(Math.abs(direction) < 1) {
                return false;
            }

            direction = direction + 1;
            var left =  direction * itemWidth + 'px';
            items.css({ 'left':left });
        });

        right.on('click', function(e) {
            e.preventDefault();

            if((itemLength - 1) === Math.abs(direction)) {
                return false;
            }

            direction = direction - 1;
            var left = direction * itemWidth + 'px';
            items.css({ 'left':left });
        });

    });
}
