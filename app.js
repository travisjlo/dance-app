 // pair.html logic
document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generate');
  if (!generateBtn) return;

  generateBtn.addEventListener('click', () => {
    const listA = document.getElementById('listA').value.trim().split('\n').filter(Boolean);
    const listB = document.getElementById('listB').value.trim().split('\n').filter(Boolean);

    if (listA.length === 0 || listB.length === 0) {
      alert("Please enter names in both lists!");
      return;
    }

    const randomA = listA[Math.floor(Math.random() * listA.length)];
    const randomB = listB[Math.floor(Math.random() * listB.length)];

    document.getElementById('result').innerHTML = `${randomA} ❤️ ${randomB}`;
  });
});
