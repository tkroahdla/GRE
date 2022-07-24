const User = require('../../models/user');
var people = async () => await User.find();

User.find({}, function (err, docs) {
  if (err) {
    console.log(err);
  } else {
    console.log('First function call : ', docs);
  }
});

const resolvers = {
  Query: {
    async people(_, args) {
      try {
        const people = await User.find();
        return people;
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
  },
  User: {
    _id(_, args) {
      return _._id;
    },
    name(_, args) {
      return _.name;
    },
    async friends(_, args) {
      const friends = await User.find({ _id: { $in: _.friendIds } });
      return friends;
    },
  },
};

module.exports = resolvers;
