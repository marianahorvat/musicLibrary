let firstLibrary = new library("Mary library", "Mary");
let firstPlaylist = new playlist("Hits playlist");
let track1 = new track("Wonderful Life", 3, 180);
let track2 = new track("Best song", 5, 120);

// A Library has a name and a creator (both strings)
// A Library has many playlists (starts as an empty array)
function library (name, creator) {
  this.name = name,
  this.creator = creator,
  this.playlists = []
}

// Each Playlist has a name which is required upon creation
// A Playlist also has many tracks
function playlist (name) {
  this.name = name,
  this.tracks = []
}

// A Track has a title, a rating (an integer from 1 to 5) and a length (integer in seconds) all of which are required when creating a new track
function track (title, rating, length) {
  this.title = title,
  this.rating = rating,  
  this.length = length
}

// Each Playlist also has an overallRating function which will calculate the rating by averaging the rating of its tracks
playlist.prototype.overallRating = function overallRating (){

  let ratings = [];
  for (let track of this.tracks) {
    ratings.push(track.rating);
  };
  let sum = 0;
  for( var i = 0; i < ratings.length; i++ ){
      sum += ratings[i];
  }
  return sum/ratings.length;
}

// Each Playlist also has a totalDuration function which will sum the duration of all of its tracks
playlist.prototype.totalDuration = function totalDuration () {
  let durations = [];
  for (let track of this.tracks){
    durations.push(track.length)
  }
  let sum = 0;
  for( var i = 0; i < ratings.length; i++ ){
      sum += ratings[i];
  }
  return sum;
}

playlist.prototype.addTrackToPlaylist = function addTrackToPlaylist (track) {
  this.tracks.push(track);
}

library.prototype.addPlaylist = function addPlaylist (playlist) {
  this.playlists.push(playlist);
}

firstLibrary.addPlaylist(firstPlaylist);
firstPlaylist.addTrackToPlaylist(track1);
firstPlaylist.addTrackToPlaylist(track2);

console.log(firstPlaylist.tracks);

