
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("songs")
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('songs').insert([
        {name: 'song1', duration: 3600, artist: 'Bob the Singer', favorite: true},
        {name: 'song2', duration: 2400, artist: 'Sam the Singer', favorite: false},
        {name: 'song3', duration: 2800, artist: 'Joe the Singer', favorite: true},
      ]);
    });
};
