document.addEventListener('DOMContentLoaded', () => {
  const ballContainer = document.getElementById('ball-container');
  const generateBtn = document.getElementById('generate-btn');

  const getBallColor = (num) => {
    if (num <= 10) return 'var(--color-1)';
    if (num <= 20) return 'var(--color-11)';
    if (num <= 30) return 'var(--color-21)';
    if (num <= 40) return 'var(--color-31)';
    return 'var(--color-41)';
  };

  const generateLottoNumbers = () => {
    const numbers = new Set();
    while (numbers.size < 6) {
      const randNum = Math.floor(Math.random() * 45) + 1;
      numbers.add(randNum);
    }
    return Array.from(numbers).sort((a, b) => a - b);
  };

  const createBall = (num, delay) => {
    const ball = document.createElement('div');
    ball.className = 'ball';
    ball.textContent = num;
    ball.style.backgroundColor = getBallColor(num);
    ball.style.animationDelay = `${delay}s`;
    return ball;
  };

  generateBtn.addEventListener('click', () => {
    // Clear previous balls
    ballContainer.innerHTML = '';

    const luckyNumbers = generateLottoNumbers();
    
    luckyNumbers.forEach((num, index) => {
      const ball = createBall(num, index * 0.1);
      ballContainer.appendChild(ball);
    });
  });
});
