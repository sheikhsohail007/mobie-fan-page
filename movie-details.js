const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

const movie = movies.find(m => m.id === movieId);

const container = document.getElementById('movie-detail');

if (movie) {
  container.innerHTML = `
    <h1>${movie.title}</h1>
    <img src="${movie.image}" alt="${movie.title}">
    <p><strong>Genre:</strong> ${movie.genre}</p>
    <p><strong>Quality:</strong> ${movie.quality}</p>
    <p><strong>Release Date:</strong> ${movie.date}</p>
    <p><strong>Description:</strong> ${movie.description}</p>
    ${
      movie.youtube
        ? `<div style="text-align:center; margin-top: 20px;">
             <iframe width="100%" height="400" src="${movie.youtube}" 
             frameborder="0" allowfullscreen style="border-radius: 10px; box-shadow: 0 0 10px #00ffff88;"></iframe>
           </div>`
        : ''
    }
    <a class="download-btn" href="${movie.download}" target="_blank">⬇️ Download Movie</a>
  `;
}

