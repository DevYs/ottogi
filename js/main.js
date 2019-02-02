/*
    원칙1. JS는 '변수 선언부', 'HTML 태그 생성부', '이벤트 선언부', '함수 선언부' 등의 4가지 영역으로 나누어 작성한다.
    원칙2. '모든 화면에서' 또는 '대부분의 화면에서' 공통으로 사용되는 부분은 같은 4가지 영역으로 새로이 JS 파일을 따로 작성하여 HTML 문서상의 가장 먼저 로드되도록 한다.
*/

'use strict';
$(document).ready(function() {
/************ 시작 ****************/

/************
	변수 선언부
************/


/***********************
    HTML 태그 생성 및 초기화
************************/
setSlide('.banner', 0);

/*************
    이벤트 선언부
*************/
$(document).find('a').on('click', function(e) {
    e.preventDefault();
});

// 사이트맵 열기 버튼
$('header div.header-wrap span.sitemap-open a').on('click', function() {
    $('header nav.sitemap').css({'height':'800px'});
    $('header nav.sitemap div.sitemap-close a').focus();
});

// 사이트맵 닫기 버튼
$('header nav.sitemap div.sitemap-close a').on('click', function() {
    $('header nav.sitemap').css({'height':'0'});
    $('header div.header-wrap span.sitemap-open a').focus();
});

// SNS 클릭 및 포커스
$('main section.sns dl dt a').on('click focus', function() {
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

/************
	함수 선언부
************/

/*
    슬라이드를 설정합니다.
*/
function setSlide(selector, slideNum) {
    $(selector).each(function() {
        /************
            변수 선언부
        ************/
        var slide           = $(this).find('.slide');
        var control         = $(this).find('.control');
        var indicator       = $(this).find('.indicator');
        var indicatorButton = indicator.find('li').eq(0).clone().wrapAll('<div/>').parent().html();
        var playButton      = indicator.find('li.play').clone().wrapAll('<div/>').parent().html();
        var now             = 1;
        var next            = 0;
        var prev            = 0;
        var slideSize       = slide.children().length;

        /***********************
            HTML 태그 생성 및 초기화
        ************************/
        $(this).addClass('on');

        indicator.empty();
        for(var i=0; i<slideSize; i++) {
            var num = i + 1;
            indicator.append($(indicatorButton));
            indicator.find('li').eq(i).find('a').text(num + '번 슬라이드');

            if(i === 0) {
               indicator.find('li').addClass('on');
            }
        }
        indicator.append(playButton);

        slide.find('li').each(function(i) {
            $(this).css({ 'left': (i * 100) + '%' });
        });

        /*************
            이벤트 선언부
        *************/
        control.find('.left').on('click', function() {
            setSlideNum('.left');
            setSlide();
        });
        control.find('.right').on('click', function() {
            setSlideNum('.right');
            setSlide();
        });
        indicator.find('a').on('click', function() {
            var index = indicator.children().index($(this).parent());
            now = index + 1;

            setSlideNum();
            setSlide();
        });

        /************
            함수 선언부
        ************/
        /*
            direction에 따라 슬라이드의 현재 번호, 이전 슬라이드 번호, 다음 슬라이드 번호를 계산합니다.
            direction : 문자열 'left' 또는 문자열 'right'가 포함된 문자열
        */
        function setSlideNum(direction) {

            if(direction !== undefined) {
                if(0 < direction.indexOf('left')) {
                    now = now - 1;
                    if(now < 1) {
                        now = slideSize;
                    }
                } else if(0 < direction.indexOf('right')) {
                    now = now + 1;
                    if(slideSize < now) {
                        now = 1;
                    }
                }
            }

            next = now + 1;
            if(slideSize < next) {
                next = 1;
            }

            prev = now - 1;
            if(prev < 1) {
                prev = slideSize;
            }

            console.log(prev + ' / ' + now + ' / ' + next);
        }

        function setSlide() {
            var slideNum = now - 1;
            var left = -(slideNum * 100);
            console.log(slideNum);
            console.log(left);

            indicator.children().removeClass('on');
            indicator.children().eq(slideNum).addClass('on');

            slide.css({'left': left + '%'});
        }
    });
}



/***************** 종료 ***************/
});
