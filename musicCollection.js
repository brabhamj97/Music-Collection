// Collection to be organised, a small batch of albums from my collection
const electronicMusicCollection = [
  {artist: 'Karenn', album: 'Grapefruit Regret', genre: 'Hypnotic'},
  {artist: 'Lurka', album: 'Make Your Own Meaning', genre: 'Deep'},
  {artist: 'Alarico', album: 'Neo Tokyo', genre: 'Grooving'},
  {artist: 'Blanka', album: 'Love Letter', genre: 'Deep'},
  {artist: 'Various Artists', album: 'High Communications', genre: 'Techno'},
  {artist: 'Phara', album: 'The Great Attractor', genre: 'Driving'},
  {artist: 'Kaiser', album: 'Konsequentz', genre: 'Techno'},
  {artist: 'Setaoc Mass', album: 'Fortnight', genre: 'Driving'},
  {artist: 'Mor Elian', album: 'Diva Test', genre: 'Hypnotic'},
  {artist: 'Bjarki', album: 'Fresh Jive', genre: 'Techno'},
  {artist: 'Deniro', album: 'Coachella', genre: 'Grooving'},
  {artist: 'Schake', album: 'Make Them Remember', genre: 'Deep'}
];

// Empty object that will hold an array for each genre
const organisedCollection = {};

// Loops through each individual object and creates an array for each genre category, if category already exists the matching genre will be pushed into that array
electronicMusicCollection.forEach(album => {
  if (!organisedCollection[album.genre]) {
    organisedCollection[album.genre] = [];
  }
  organisedCollection[album.genre].push(album.artist);
});

// Organises the collected elements into alphabetical order
for (const genre in organisedCollection) {
  organisedCollection[genre].sort();
}

// Prints the results
console.log(organisedCollection);
