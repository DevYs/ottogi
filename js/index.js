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
setSlide('.banner', 1);
setSlide('.event-slide', 1);
setSlide('.new-slide', 1);

setList('section.popular div.list');
setList('section.cooking-story div.list');

/*************
    이벤트 선언부
*************/
// a 태그 링크 이동 막기
$(document).find('a').on('click', function(e) {
    e.preventDefault();
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
        var now             = slideNum;
        var next            = 0;
        var prev            = 0;
        var slideSize       = slide.children().length;
        var timerId         = 0;
        var intervalTime    = 2 * 1000;
        var isTimerOn       = true;

        /***********************
            HTML 태그 생성 및 초기화
        ************************/
        // 슬라이드 재생 on
        $(this).addClass('on');

        // 인디케이터를 비운다.
        indicator.empty();

        // 인디케이터에 버튼을 추가한다.
        for(var i=0; i<slideSize; i++) {
            var num = i + 1;
            indicator.append($(indicatorButton));
            indicator.find('li').eq(i).find('a').text(num + '번 슬라이드');

            if(i === 0) {
               indicator.find('li').addClass('on');
            }
        }

        // 인디케이터의 마지막에 슬라이드 재생/일시정지 버튼을 추가한다.
        indicator.append(playButton);

        // 슬라이드의 위치를 인덱스 X 100%로 계산하여 위치시킨다. 
        slide.find('li').each(function(i) {
            $(this).css({ 'left': (i * 100) + '%' });
        });

        // 슬라이드 재생
        playSlide();

        /*************
            이벤트 선언부
        *************/
        // 이전 슬라이드 버튼 클릭 이벤트
        control.find('.left').on('click', function() {
            setSlideNum('.left');
            showSlide();
            playSlide();
        });

        // 다음 슬라이드 버튼 클릭 이벤트
        control.find('.right').on('click', function() {
            setSlideNum('.right');
            showSlide();
            playSlide();
        });

        // 인디케이터 버튼 클릭 이벤트
        indicator.find('li').not('.play').find('a').on('click', function() {
            var index = indicator.children().index($(this).parent());
            now = index + 1;

            setSlideNum();
            showSlide();
            playSlide();
        });

        // 인디케이터 재생 및 일시정지 버튼 이벤트 
        indicator.find('.play a').on('click', function() {
            if(isTimerOn === true) {
                slide.parent().removeClass('on');
                clearInterval(timerId);
            } else {
                slide.parent().addClass('on');
                playSlide();
            }

            // 처리가 끝난 후 isTimerOn의 밸류를 토글한다.
            isTimerOn = !isTimerOn;
        });

        /************
            함수 선언부
        ************/
        /*
            direction에 따라 슬라이드의 현재 번호, 이전 슬라이드 번호, 다음 슬라이드 번호를 계산합니다.
            direction : 문자열 'left' 또는 문자열 'right'가 포함된 문자열
        */
        function setSlideNum(direction) {

            // 방향에 따라 현재 슬라이드 번호를 계산한다
            if(direction !== undefined) {
                if(-1 < direction.indexOf('left')) {
                    now = now - 1;
                    if(now < 1) {
                        now = slideSize;
                    }
                } else if(-1 < direction.indexOf('right')) {
                    now = now + 1;
                    if(slideSize < now) {
                        now = 1;
                    }
                }
            }

            // 다음 슬라이드 번호 계산
            next = now + 1;
            if(slideSize < next) {
                next = 1;
            }

            // 이전 슬라이드 번호 계산
            prev = now - 1;
            if(prev < 1) {
                prev = slideSize;
            }

        }

        /**
         * now에 해당하는 슬라이드를 보이게 한다.
         */
        function showSlide() {
            var slideNum = now - 1;
            var left = -(slideNum * 100);

            indicator.children().removeClass('on');
            indicator.children().eq(slideNum).addClass('on');

            slide.css({'left': left + '%'});
        }

        /**
         * 슬라이드를 intrvalTime마다 재생시킵니다.
         */
        function playSlide() {
            clearInterval(timerId);
            timerId = setInterval(function() {
                if(isTimerOn === true) {
                    setSlideNum('right');
                    showSlide();
                }
            }, intervalTime);
        }
    });
}

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

        left.on('click', function() {
            if(Math.abs(direction) < 1) {
                return false;
            }

            direction = direction + 1;
            console.log('left ' + direction);
            var left =  direction * itemWidth + 'px';
            items.css({ 'left':left });
        });

        right.on('click', function() {
            if((itemLength - 1) === Math.abs(direction)) {
                return false;
            }

            direction = direction - 1;
            console.log('right ' + direction);
            var left = direction * itemWidth + 'px';
            items.css({ 'left':left });
        });

    });
}

/***************** 종료 ***************/
});
