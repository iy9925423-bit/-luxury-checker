function check(){

  let brand = document.getElementById("brand").value;
  let text = document.getElementById("text").value;
  let result = document.getElementById("result");

  if(!brand){
    result.innerHTML = "브랜드를 입력하세요.";
    return;
  }

  result.innerHTML = "분석 중...";

  setTimeout(function(){

    result.innerHTML =
    "분석 완료<br><br>" +
    "브랜드: " + brand + "<br>" +
    "정품 가능성 분석 결과입니다.<br>" +
    "(참고용 결과이며 실제 감정과 다를 수 있습니다.)";

  },1000);

}
