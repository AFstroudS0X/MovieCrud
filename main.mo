import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Iter "mo:base/Iter";
import Nat32 "mo:base/Nat32";
import Text "mo:base/Text";
import Principal "mo:base/Principal";
import Debug "mo:base/Debug";

// src/movie_backend/main.mo

import Array "mo:stdlib/array";

type Movie = { id : Nat; title : Text; rating : Nat };

var movies : Array.Movie;

public func getMovies() : async Array.ReadOnly<Movie> {
  movies;
};

public func addMovie(title : Text, rating : Nat) : async () {
  let newMovie = { id = Array.length(movies) + 1; title; rating };
  movies := Array.append(movies, newMovie);
};

public func deleteMovie(movieId : Nat) : async () {
  movies := Array.filter((movie) => movie.id != movieId, movies);
};
