window.addEventListener('load', () => {
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayName = dayNames[new Date().getDay()];

  const rows = document.querySelectorAll('.schedule-table tbody tr');

  rows.forEach(row => {
    const dayCell = row.querySelector('td');
    if (dayCell && dayCell.textContent.trim() === todayName) {
      row.classList.add('highlighted');
    }
  });
});
