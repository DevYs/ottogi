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
$('[data-bg]').each(function() {
    $(this).css({'background':$(this).attr('data-bg')});
});

/*************
    이벤트 선언부
*************/
$('main.sub ul.history-map li a').on('click focus', function(e) {
    e.preventDefault();
    var index = $('main.sub ul.history-map li').index($(this).parent());
    $('main.sub ul.history-map > li').removeClass('on');
    $(this).parent().addClass('on');
    $('main.sub ul.history-contents > li').removeClass('on');
    $('main.sub ul.history-contents > li').eq(index).addClass('on');
});

$('.u-zip').on('click', function(e) {
    e.preventDefault();
    execDaumPostcode();
});

/***************** 종료 ***************/
});

/************
	함수 선언부
************/
//본 예제에서는 도로명 주소 표기 방식에 대한 법령에 따라, 내려오는 데이터를 조합하여 올바른 주소를 구성하는 방법을 설명합니다.
function execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 도로명 주소의 노출 규칙에 따라 주소를 조합한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var fullRoadAddr = data.roadAddress; // 도로명 주소 변수
            var extraRoadAddr = ''; // 도로명 조합형 주소 변수

            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                extraRoadAddr += data.bname;
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if(data.buildingName !== '' && data.apartment === 'Y'){
               extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
            }
            // 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if(extraRoadAddr !== ''){
                extraRoadAddr = ' (' + extraRoadAddr + ')';
            }
            // 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
            if(fullRoadAddr !== ''){
                fullRoadAddr += extraRoadAddr;
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('u_zip').value = data.zonecode; //5자리 새우편번호 사용
            document.getElementById('input_addre').value = fullRoadAddr;
            //document.getElementById('sample4_jibunAddress').value = data.jibunAddress;
            
            document.getElementById('input_addre').focus();

            /*
            // 사용자가 '선택 안함'을 클릭한 경우, 예상 주소라는 표시를 해준다.
            if(data.autoRoadAddress) {
                //예상되는 도로명 주소에 조합형 주소를 추가한다.
                var expRoadAddr = data.autoRoadAddress + extraRoadAddr;
                document.getElementById('guide').innerHTML = '(예상 도로명 주소 : ' + expRoadAddr + ')';

            } else if(data.autoJibunAddress) {
                var expJibunAddr = data.autoJibunAddress;
                document.getElementById('guide').innerHTML = '(예상 지번 주소 : ' + expJibunAddr + ')';

            } else {
                document.getElementById('guide').innerHTML = '';
            }
            */
            
        }
    }).open();
}
