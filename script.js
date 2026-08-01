function check() {

  let brand = document.getElementById("brand").value;
  let result = document.getElementById("result");

  if (brand == "") {
    result.innerHTML = "브랜드를 입력해주세요.";
    return;
  }

  let random = Math.floor(Math.random() * 3);

  if (random == 0) {
    result.innerHTML = "✅ 진품 가능성 높음<br>추가 확인을 권장합니다.";
  }

  if (random == 1) {
    result.innerHTML = "⚠️ 가품 의심<br>세부 확인이 필요합니다.";
  }

  if (random == 2) {
    result.innerHTML = "🔍 판단 보류<br>추가 사진이 필요합니다.";
  }

}
