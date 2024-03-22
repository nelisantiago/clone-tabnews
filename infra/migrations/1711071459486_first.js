exports.up = pgm => {
  pgm.createTable('users', {
    id : 'id',
  });
};

exports.down = false;
