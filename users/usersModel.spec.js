const db = require('../data/dbConfig');
const Users = require('./usersModel');

describe('users model', () => {
  describe('insert', () => {
      it('should insert the provided users into the db', async () => {
          await Users.insert({ name: "Pepe" });
          await Users.insert({ name: "Jefe" });

          const hobbits = await db('users');
          expect(hobbits).toHaveLength(2);
      })

      it('should return the inserted user', async () => {
          let hobbit = await Users.insert({ name: 'Pepe' });
          expect(hobbit.name).toBe('Pepe');

          hobbit = await Users.insert({ name: 'Jefe' });
          expect(hobbit.name).toBe('Jefe');
      })
  })
})

beforeEach(async () => {
  await db('users').truncate();
})