import { getHighscores } from '../services/storage.js'

const leaderboardList = document.querySelector('.top-scores');

const displayHighscores = async () => {
  const highscores = await getHighscores();

  if (!leaderboardList) {
    console.error('Leaderboard list element not found!');
    return;
  }

  leaderboardList.innerHTML = '';

  if (highscores.length === 0) {
    leaderboardList.innerHTML = '<li>No high scores yet.</li>';
    return;
  }

  highscores.sort((a, b) => b.score - a.score);


  const top10 = highscores.slice(0, 10);

  top10.forEach((entry, index) => {
    const li = document.createElement('li');

    li.classList.add(`rank-${index + 1}`);

    const nameSpan = document.createElement('span');
    nameSpan.textContent = entry.name;

    const scoreSpan = document.createElement('span');
    scoreSpan.textContent = entry.score;

    li.appendChild(nameSpan);
    li.appendChild(scoreSpan);

    leaderboardList.appendChild(li);
  });
};

document.addEventListener('DOMContentLoaded', displayHighscores);
