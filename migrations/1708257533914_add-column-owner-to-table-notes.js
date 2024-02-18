/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.addColumns('notes', {
    owner: {
      type: 'VARCHAR(50)',
    },
  });
};

exports.down = (pgm) => {
  pgm.dropColumns('notes', 'owner');
};
