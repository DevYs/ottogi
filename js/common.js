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
var skip   = '<a href="#main" id="skip-nav">본문 바로가기</a>';
var header = '<header id="header"> <div class="gnb-bg"></div><div class="header-wrap container"> <h1 class="logo"><a href="#"><img src="img/logo.png" alt="오뚜기"/></a></h1> <ul class="nav-link container"> <li class="lang"> <a href="#"><img src="img/icon_lang.png" alt="언어선택"/></a> <ul> <li><a href="#">KOREAN</a></li><li><a href="#">ENGLISH</a></li></ul> </li><li><a href="#"><img src="img/icon_cart.png" alt="오뚜기몰"/></a></li></ul> <nav class="sitemap"> <span class="sitemap-btn"> <a href="#"><img src="img/icon_all.png" alt="상단메뉴 열기"/></a> <a href="#"><img src="./img/btn_menu_cls.png" alt="상단메뉴 닫기"/></a> </span> <div class="sitemap-wrap"> <div class="sitemap-depth1 has-depth"> <a href="#">회사소개</a> <dl class="sitemap-depth2"> <dt><a href="#">(주) 오뚜기</a></dt> <dd><a href="#">- 오뚜기 소개</a></dd> <dd><a href="#">- 오뚜기 이념</a></dd> <dd><a href="#">- CI 소게</a></dd> <dt><a href="#">지속 가능 경영</a></dt> <dd><a href="#">- 사회공헌</a></dd> <dd><a href="#">- 환경경영</a></dd> <dd><a href="#">- 윤리경영</a></dd> <dd><a href="#">- 지배구조</a></dd> <dt><a href="#">인재 채용</a></dt> <dd><a href="#">- 인사제도</a></dd> <dd><a href="#">- 직무소개</a></dd> <dd><a href="#">- 공고 및 입사지원</a></dd> <dt><a href="#">사업장 소개</a></dt> <dd><a href="#">- 국내 사업장</a></dd> <dd><a href="#">- 해외 사업장</a></dd> <dd><a href="#">- 중앙 연구소</a></dd> <dt><a href="#">찾아오시는 길</a></dt> </dl> </div><div class="sitemap-depth1"> <a href="#">제품 정보</a> </div><div class="sitemap-depth1"> <a href="#">쿠킹&amp;스토리</a> </div><div class="sitemap-depth1 has-depth"> <a href="#">홍보 센터</a> <dl class="sitemap-depth2"> <dt><a href="#">오뚜기 뉴스</a></dt> <dd><a href="#">- 보도 자료</a></dd> <dd><a href="#">- 오뚜기 소식</a></dd> <dt><a href="#">오뚜기 광고</a></dt> <dd><a href="#">- TV 광고</a></dd> <dd><a href="#">- 지면광고</a></dd> <dt><a href="#">즐거운 오뚜기</a></dt> <dt><a href="#">카레 및 향신료 국제 심포지엄</a></dt> <dt><a href="#">투자 정보</a></dt> <dd><a href="#">- 재무정보</a></dd> <dd><a href="#">- 공시정보</a></dd> </dl> </div><div class="sitemap-depth1 has-depth"> <a href="#">고객 서비스</a> <dl class="sitemap-depth2"> <dt><a href="#">고객 한마디</a></dt> <dt><a href="#">공장 견학</a></dt> <dd><a href="#">- 공장소개</a></dd> <dd><a href="#">- 공장견학 신청</a></dd> </dl> </div></div></nav> <nav class="gnb"> <ul class="gnb-depth1"> <li> <a href="#">회사소개</a> <div class="gnb-depth1-wrap"> <dl class="desc"> <dt>회사소개</dt> <dd class="eng">About</dd> <dd>365일 웃음 가득, 행복 가득. 언제나 고객과<br/>함께 합니다.고객이 웃을 때 오뚜기는 행복합니다.</dd> </dl> <ul class="gnb-depth2"> <li> <a href="#">(주) 오뚜기 &gt;</a> <ul class="gnb-depth3"> <li><a href="#">오뚜기 소개</a></li><li><a href="#">오뚜기 이념</a></li><li><a href="#">CI 소개</a></li></ul> </li><li> <a href="#">지속 가능 경영 &gt;</a> <ul class="gnb-depth3"> <li><a href="#">사회공헌</a></li><li><a href="#">환경경영</a></li><li><a href="#">윤리경영</a></li><li><a href="#">지배구조</a></li></ul> </li><li> <a href="#">인재 채용 &gt;</a> <ul class="gnb-depth3"> <li><a href="#">인사제도</a></li><li><a href="#">직무제도</a></li><li><a href="#">공고 및 입사지원</a></li></ul> </li><li> <a href="#">사업장 소개 &gt;</a> <ul class="gnb-depth3"> <li><a href="#">국내사업장</a></li><li><a href="#">해외사업장</a></li><li><a href="#">중앙연구소</a></li></ul> </li><li> <a href="#">찾아오시는 길</a> </li></ul> <div class="etc"> <a href="#">온라인 입시지원 <i class="fas fa-plus"></i></a> <a href="#">환경경영 바로가기 <i class="fas fa-plus"></i></a> <a href="#">공장견학 신청하기 <i class="fas fa-plus"></i></a> </div></div></li><li class="no-depth"> <a href="#">제품정보</a> </li><li class="no-depth"> <a href="#">쿠킹&amp;스토리</a> </li><li> <a href="#">홍보센터</a> <div class="gnb-depth1-wrap"> <dl class="desc"> <dt>홍보센터</dt> <dd class="eng">PR Center</dd> <dd>광고로 보는 오뚜기의 역사.<br/>TV CF, 지면광고를 통해 오뚜기의 변천사를 보실 수 있습니다.</dd> </dl> <ul class="gnb-depth2"> <li> <a href="#">오뚜기 뉴스 &gt;</a> <ul class="gnb-depth3"> <li><a href="#">보도자료</a></li><li><a href="#">오뚜기 소식</a></li></ul> </li><li> <a href="#">오뚜기 광고 &gt;</a> <ul class="gnb-depth3"> <li><a href="#">TV 광고</a></li><li><a href="#">지면광고</a></li></ul> </li><li> <a href="#">즐거운 오뚜기</a> </li><li> <a href="#">카레 및 향신료 국제 심포지엄</a> </li><li> <a href="#">투자정보 &gt;</a> <ul class="gnb-depth3"> <li><a href="#">재무정보</a></li><li><a href="#">공시정보</a></li></ul> </li></ul> <div class="etc"> <a href="#">카탈로그 보기 <i class="fas fa-plus"></i></a> <a href="#">투자정보 다운로드 <i class="fas fa-plus"></i></a> <a href="#">제품별 TV CF 보기 <i class="fas fa-plus"></i></a> </div></div></li><li> <a href="#">고객서비스</a> <div class="gnb-depth1-wrap"> <dl class="desc"> <dt>고객서비스</dt> <dd class="eng">Customer</dd> <dd>오뚜기는 고객님의 작은 소리에도 귀기울여 듣습니다. 오뚜기에 대한 불편하신 사항이나, 문의사항, 제품관련 문의사항을 남겨주세요.</dd> </dl> <ul class="gnb-depth2"> <li> <a href="#">고객 한마디</a> </li><li> <a href="#">공장 견학 &gt;</a> <ul class="gnb-depth3"> <li><a href="#">공장 소개</a></li><li><a href="#">공장견학 신청</a></li></ul> </li></ul> <div class="etc"> <a href="#">공장견학 신청 <i class="fas fa-plus"></i></a> <a href="#">견학 공장 위치 <i class="fas fa-plus"></i></a> </div></div></li><li class="no-depth"> <a href="#">오뚜기몰</a> </li></ul> </nav> </div></header>';
var footer = '<div class="go-top"> <a href="#header"><i class="fas fa-angle-up"></i></a> </div><footer> <div class="footer-above"> <div class="container"> <ul class="links"> <li><a href="#"><strong>개인정보처리방침</strong></a></li><li><a href="#">고객상담</a></li><li><a href="#">찾아오시는 길</a></li><li><a href="#">오뚜기몰</a></li><li><a href="#"><strong><i class="fas fa-film"></i>동반성장홍보영상</strong></a></li></ul> <ul class="social"> <li><a href="#"><i class="fab fa-facebook-f"></i></a></li><li><a href="#"><i class="fab fa-twitter"></i></a></li><li><a href="#"><i class="fab fa-youtube"></i></a></li></ul> </div></div><div class="footer-below container"> <div class="footer-logo"> <img src="img/f_logo.jpg" alt="주식회사 오뚜기"/> </div><ul class="info"> <li>(주)오뚜기</li><li>사업자등록번호 : 138-81-03238</li><li>대표이사 이강훈</li><li>주소 (14060) 경기도 안양시 동안구 흥안대로 405 (평촌동 160)</li><li>오뚜기 고객상담실 : 080-024-2311</li><li class="nobar">오뚜기라면 고객상담실 : 080-088-1212 (월~금 08:30~17:30)</li><li class="copyright nobar">Copyright ⓒ ottogi co.,Ltd All Rights Reserved.</li></ul> <div class="mark"> <img src="img/2014_WA_mark2.gif" alt="가족친화우수기업인증마크,한국서비스품질 우수기업 인증마크,미래창조과학부 WA마크"/> </div></div></footer>';

/***********************
    HTML 태그 생성 및 초기화
************************/
$('body').prepend(skip);
$('div.wrap').prepend(header);
$('div.wrap').append(footer);

/*************
    이벤트 선언부
*************/
// a 태그 링크 이동 막기
$(document).find('a').on('click', function(e) {
    e.preventDefault();
});

// 언어선택 클릭, 포커스 이벤트 < 상단 우측 링크
$('header div.header-wrap ul.nav-link li.lang > a').on('click focus', function() {
    $(this).parent().find('ul').toggleClass('on');
});

// 언어선택 포커스 아웃 이벤트 < 상단 우측 링크
$('header div.header-wrap ul.nav-link li.lang > a').on('focusout', function() {
    $(this).parent().find('ul').removeClass('on');
});

// 언어 포커스 이벤트 < 언어선택 < 상단 우측 링크
$('header div.header-wrap ul.nav-link li.lang ul li a').on('focus', function() {
    $(this).parent().parent().addClass('on');
});

// 언어 포커스아웃 이벤트 < 언어선택 < 상단 우측 링크
$('header div.header-wrap ul.nav-link li.lang ul li a').on('focusout', function() {
    $(this).parent().parent().removeClass('on');
});

// 사이트맵 열기 버튼
$('header nav.sitemap span.sitemap-btn a').eq(0).on('click', function() {
    $('header nav.sitemap').addClass('on');
});

$('header nav.sitemap span.sitemap-btn a').eq(0).on('focus', function() {
    $('header nav.sitemap').addClass('remove');
});

// 사이트맵 닫기 버튼
$('header nav.sitemap span.sitemap-btn a').eq(1).on('click', function() {
    $('header nav.sitemap').removeClass('on');
});
$('header nav.sitemap span.sitemap-btn a').eq(1).on('focus', function() {
    $('header nav.sitemap').addClass('on');
});

// 사이트맵 depth1 클릭 포커스 이벤트 
$('header nav.sitemap div.sitemap-wrap div.sitemap-depth1 > a').on('click focus', function() {
    $('header nav.sitemap div.sitemap-wrap div.sitemap-depth1').removeClass('on');
    $(this).parent().addClass('on');
});

// 사이트맵 depth2 가장 마지막 링크 포커스 아웃 이벤트
$('header nav.sitemap div.sitemap-wrap div.sitemap-depth1:last-child dl.sitemap-depth2 dd:last-child a').on('focusout', function() {
    $('header nav.sitemap span.sitemap-btn a').eq(1).trigger('click');
});

// GNB depth1 클릭 이벤트
$('header div.header-wrap nav.gnb ul.gnb-depth1 > li > a').on('click focus', function() {
    if($(this).parent().has('div.gnb-depth1-wrap').length < 1) {
        return false;
    } 
    
    $('header div.gnb-bg').addClass('on');
    $('header div.header-wrap nav.gnb ul.gnb-depth1 > li').removeClass('on');
    $('header div.header-wrap nav.gnb ul.gnb-depth1 > li div.gnb-depth1-wrap ul.gnb-depth2 > li').removeClass('on');
    $(this).parent().addClass('on');
});

// GNB depth1의 하위에 depth가 없을 경우 포커스 이벤트
$('header div.header-wrap nav.gnb ul.gnb-depth1 > li.no-depth a').on('focus', function() {
    $('header div.gnb-bg').removeClass('on');
    $('header div.header-wrap nav.gnb ul.gnb-depth1 > li').removeClass('on');
    $('header div.header-wrap nav.gnb ul.gnb-depth1 > li div.gnb-depth1-wrap ul.gnb-depth2 > li').removeClass('on');
});

// depth2 클릭 이벤트
$('header div.header-wrap nav.gnb ul.gnb-depth1 > li div.gnb-depth1-wrap ul.gnb-depth2 > li > a').on('click focus', function() {
    $('header div.header-wrap nav.gnb ul.gnb-depth1 > li div.gnb-depth1-wrap ul.gnb-depth2 > li').removeClass('on');
    $(this).parent().addClass('on');
});


/************
	함수 선언부
************/

/***************** 종료 ***************/
});
