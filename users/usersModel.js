const db = require('../data/dbConfig');

module.exports = {
      insert,
      update,
      remove,
      getAll,
      findById,
    };

    async function (users) {
      const [id] = await db('users').insert(users, 'id');

      return db('users')
        .where({ id })
        .first();
    }

    async function update(id, changes) {
      return null;
    }

    function remove(id) {
      return null;
    }
    
    function getAll() {
      return db('hobbits');
    }

    function findById(id) {
      return null;
    }