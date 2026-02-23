document.addEventListener('DOMContentLoaded', () => {
  const ballContainer = document.getElementById('ball-container');
  const generateBtn = document.getElementById('generate-btn');
  const dreamText = document.getElementById('dream-text');
  const statusMessage = document.getElementById('status-message');

  // 감성적인 상태 메시지들
  const messages = [
    "꿈의 기운을 분석하는 중입니다...",
    "당신의 무의식에서 행운의 숫자를 찾는 중...",
    "밤하늘의 별빛이 숫자로 내려앉고 있습니다...",
    "꿈의 해석을 마쳤습니다. 결과를 확인하세요!"
  ];

  const getBallClass = (num) => {
    if (num <= 10) return 'num-1';
    if (num <= 20) return 'num-11';
    if (num <= 30) return 'num-21';
    if (num <= 40) return 'num-31';
    return 'num-41';
  };

  const generateLottoNumbers = () => {
    const numbers = new Set();
    while (numbers.size < 6) {
      const randNum = Math.floor(Math.random() * 45) + 1;
      numbers.add(randNum);
    }
    return Array.from(numbers).sort((a, b) => a - b);
  };

  const showStatusWithDelay = async () => {
    for (let msg of messages) {
      statusMessage.textContent = msg;
      // 분석하는 느낌을 주기 위한 지연 (0.8초)
      await new Promise(resolve => setTimeout(resolve, 800));
    }
  };

  generateBtn.addEventListener('click', async () => {
    const text = dreamText.value.trim();
    if (!text) {
      alert("꿈 내용을 짧게라도 적어주시면 더 정확한 분석이 가능합니다. :)");
      return;
    }

    // 초기화
    ballContainer.innerHTML = '';
    generateBtn.disabled = true;
    generateBtn.style.opacity = '0.5';

    // 감성 분석 시뮬레이션
    await showStatusWithDelay();

    const luckyNumbers = generateLottoNumbers();
    
    luckyNumbers.forEach((num, index) => {
      setTimeout(() => {
        const ball = document.createElement('div');
        ball.className = `ball ${getBallClass(num)}`;
        ball.textContent = num;
        ballContainer.appendChild(ball);
        
        // 마지막 번호까지 나오면 버튼 복구
        if (index === 5) {
          generateBtn.disabled = false;
          generateBtn.style.opacity = '1';
        }
      }, index * 200); // 0.2초 간격으로 별이 떨어지듯 등장
    });
  });
});
