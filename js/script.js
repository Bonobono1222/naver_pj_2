//label 태그를 클릭 했을 때 실행할 함수
$('label').on('click', function(e) {
  //form 안에 있는 input을 전송하는 동작을 e.preventDefault()로 중단
  e.preventDefault();
  $(this).children('.checkbox-img').toggleClass('checked');

  if($(this).children('.checkbox-img').hasClass('checked')) {
    //.checkbox-img가 checked 클래스를 가지고 있을 때 실행 할 코드
    $(this).children('input[type="checkbox"]').attr('checked','true');
    //'true'를 'checked'로 적어도 결과는 같음
  } else {
    //.checkbox-img가 checked 클래스를 가지고 있지 않을 때 실핼 할 코드
    $(this).children('input[type="checkbox"]').removeAttr('checked');
  }
})

//total에 체크하면 모든 .agree에 체크가 들어감
//total에 언체크하면 모든 .agree에 언체크가 들어감
$('.total label').on('click', function() {
  if($(this).find('.checkbox-img').hasClass('checked')) {
    //total에 체크하면 모든 .agree에 체크가 들어감(.checked 추가)
    $('.agree').find('.checkbox-img').addClass('checked');
    $('.agree').find('input[type="checkbox"]').attr('checked','true');
     //'true'를 'checked'로 적어도 결과는 같음
  } else {
    //total에 언체크하면 모든 .agree에 언체크가 들어감(.checked 제거)
    $('.agree').find('.checkbox-img').removeClass('checked');
    $('.agree').find('input[type="checkbox"]').removeAttr('checked','true');
     //'true'를 'checked'로 적어도 결과는 같음
  }
})

$('#cancel').on('click', function() {
  location.href = "http://naver.com";
})

// #submit 버튼을 클릭했을 때 필수 동의 사항에 모두 체크했는지 확인
// 모두 체크되어 있으면 통과
//체크 안 된게 있다면 #red-alert을 보여주고 전송을 중지
$('#submit').on('click', function(e) {
  let req = $('.req').length;
  //req 변수선언 해주고 그 클래스 개수를 가져옴
  let chkreq = $('.req .checked').length;
  let unchk = req - chkreq;
  if(unchk == 0) {
    $('#form1').submit();
  } else {
    //form이 제출되지 못하게 막기
    e.preventDefault();
    //#red-alert가 보이게
    $('#red-alert').css("visibility","visible");
  }
})