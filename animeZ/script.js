const animeData = [
    {
        title: "One Piece",
        image: "https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg",
        episode: "Ep 1089",
        type: "TV"
    },
    {
        title: "Jujutsu Kaisen",
        image: "https://m.media-amazon.com/images/M/MV5BNGY4MTg3NzgtMmFkZi00NTg5LWExMmEtMWI3YzI1ODdmMWQ1XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg",
        episode: "Ep 47",
        type: "TV"
    },
    {
        title: "Delicious in Dungeon",
        image: "https://m.media-amazon.com/images/M/MV5BMjdiMjFlYjItYTIwMy00YjkzLTliMWMtZGRjNDNiYmY1NzIzXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg",
        episode: "Ep 6",
        type: "TV"
    },
    {
        title: "Solo Leveling",
        image: "https://m.media-amazon.com/images/M/MV5BMjEwNDM2NzYtZDY2MS00N2Q3LWE1ZTYtY2E4YTAzM2E5ZDM4XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg",
        episode: "Ep 5",
        type: "TV"
    },
    {
        title: "Frieren: Beyond Journey's End",
        image: "https://m.media-amazon.com/images/M/MV5BMjdiMjFlYjItYTIwMy00YjkzLTliMWMtZGRjNDNiYmY1NzIzXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg",
        episode: "Ep 21",
        type: "TV"
    },
    {
        title: "Mashle: Magic and Muscles",
        image: "https://m.media-amazon.com/images/M/MV5BMjEyNzUyMzAtYjYxMi00MWRlLWI2M2ItYTU5YzhhMzM5NzM3XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg",
        episode: "Ep 16",
        type: "TV"
    },
    {
        title: "Bleach: TYBW",
        image: "https://m.media-amazon.com/images/M/MV5BMjEwNDM2NzYtZDY2MS00N2Q3LWE1ZTYtY2E4YTAzM2E5ZDM4XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg",
        episode: "Ep 26",
        type: "TV"
    },
    {
        title: "Spy x Family",
        image: "https://m.media-amazon.com/images/M/MV5BOTE5NTk5OWYtYjhkMy00MTA3LWFkMmEtMmY0YTc4MjY0NWVkXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg",
        episode: "Movie",
        type: "Movie"
    }
];

// Expose to global scope for other scripts
window.animeData = animeData;

function createAnimeCard(anime) {
    const card = document.createElement('div');
    card.className = 'anime-card';
    // Use a fallback image if the URL fails (mock logic)
    const imageSrc = anime.image.includes('placeholder') ? 'https://via.placeholder.com/200x300?text=' + encodeURIComponent(anime.title) : anime.image;

    card.innerHTML = `
    <div class="image-container">
      <img src="${imageSrc}" alt="${anime.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/200x300?text=No+Image'">
    </div>
    <div class="card-info">
      <h3>${anime.title}</h3>
      <div class="meta">
        <span class="episode-badge">${anime.episode}</span>
        <span>${anime.type}</span>
      </div>
    </div>
  `;

    card.addEventListener('click', () => {
        window.location.href = `anime-details.html?title=${encodeURIComponent(anime.title)}`;
    });

    return card;
}

function init() {
    const grid = document.getElementById('anime-list');
    const newList = document.getElementById('new-list');

    if (grid) {
        animeData.forEach(anime => {
            grid.appendChild(createAnimeCard(anime));
        });
    }

    // Just duplicating for the 'New Episodes' section for now to fill space
    if (newList) {
        animeData.slice(0, 4).forEach(anime => {
            newList.appendChild(createAnimeCard(anime));
        });
    }
}

// Check for user login status
function checkAuthStatus() {
    const loginBtn = document.querySelector('.login-btn');
    // Mock check - in real app, check for valid token
    const isLoggedIn = localStorage.getItem('animeZ_user');

    if (isLoggedIn && loginBtn) {
        loginBtn.textContent = 'Profile';
        loginBtn.href = 'profile.html';
        loginBtn.style.background = 'transparent';
        loginBtn.style.border = '1px solid var(--primary-color)';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    init();
    checkAuthStatus();
});
