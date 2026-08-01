function check() {
  const text = document.getElementById("text").value;
  const image = document.getElementById("image").files.length;
  const result = document.getElementById("result");

  if (!text && image === 0) {
    result.innerHTML = "상품 사진 또는 판매글을 입력해주세요.";
    return;
  }

  result.innerHTML = `
    <div style="margin-top:20px;">
      <h3>분석 완료</h3>
      <p>현재 AI 분석 준비 단계입니다.</p>
      <p>입력된 정보를 기반으로 정품 가능성을 분석합니다.</p>
    </div>
  `;
}
