document.addEventListener("DOMContentLoaded", function () {
    fetchMovies();
  });
  
  function fetchMovies() {
    // Puedes implementar la lógica para obtener las películas del backend aquí
    // Por ahora, usaremos un array temporal
    const movies = [
      { id: 1, title: "Movie 1", rating: 4 },
      { id: 2, title: "Movie 2", rating: 3 },
      // ... más películas
    ];
  
    renderMovies(movies);
  }
  
  function renderMovies(movies) {
    const movieList = document.getElementById("movieList");
    movieList.innerHTML = "";
  
    movies.forEach((movie) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${movie.title}</strong> (Rating: ${movie.rating}) <button onclick="deleteMovie(${movie.id})">Delete</button>`;
      movieList.appendChild(li);
    });
  }
  
  function addMovie() {
    const titleInput = document.getElementById("title");
    const ratingInput = document.getElementById("rating");
  
    const title = titleInput.value.trim();
    const rating = parseInt(ratingInput.value);
  
    if (title && !isNaN(rating) && rating >= 1 && rating <= 5) {
      // Puedes implementar la lógica para agregar una película al backend aquí
      // Por ahora, simplemente recargamos las películas
      fetchMovies();
      titleInput.value = "";
      ratingInput.value = "";
    } else {
      alert("Please enter a valid title and rating (1-5).");
    }
  }
  
  function deleteMovie(movieId) {
    // Puedes implementar la lógica para eliminar una película del backend aquí
    // Por ahora, simplemente recargamos las películas
    fetchMovies();
  }
  