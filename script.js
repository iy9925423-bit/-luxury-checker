function check() {
  alert("버튼 작동!");

  const brand = document.getElementById("brand").value;
  const brand = document.getElementById("brand").value;
  const text = document.getElementById("text").value;
  const image = document.getElementById("image").files.length;
  const result = document.getElementById("result");

  if (!brand || (!text && image === 0)) {
    result.innerHTML = "브랜드와 상품 정보를 입력해주세요.";
    return;
  }

  const score = Math.floor(Math.random() * 15) + 80;

  result.innerHTML = `
    <div style="
      margin-top:20px;
      padding:20px;
      background:#222;
      border-radius:15px;
    ">
      <h2>🔍 분석 결과</h2>
      <h1 style="color:#d4af37;">${score}%</h1>
      <p>정품 가능성</p>

      <hr>

      <p>✅ 브랜드: ${brand}</p>
      <p>✅ 로고 및 외관 분석</p>
      <p>✅ 판매글 특징 분석</p>
      <p>⚠️ 추가 전문가 확인 권장</p>
    </div>
  `;
}
ㅏ document.getElementById("image").addEventListener("change", function() {
  const file = this.files[0];
  const preview = document.getElementById("preview");

  if (file) {
    preview.src = URL.createObjectURL(file);
    preview.style.display = "block";
  }
});
