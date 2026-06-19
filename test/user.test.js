const { User, Profile } = require('../models');
const { sequelize } = require('../models');

describe('User', () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true });
  });

  it('adds user to database', async () => {
    const user = await User.create({ name: 'John Doe' });
    expect(user.name).toBe('John Doe');
  });

  it('retrieves user by ID', async () => {
    const user = await User.create({ name: 'Jane Doe' });
    const foundUser = await User.findByPk(user.id);
    expect(foundUser.name).toBe('Jane Doe');
  });

  it('deletes user and cleans up related records', async () => {
    const user = await User.create({ name: 'Bob Smith' });
    await Profile.create({ userId: user.id, bio: 'Test bio' });
    await user.destroy();
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
    const count = await Profile.count({ where: { userId: user.id } });
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
    expect(count).toBe(0);
  });
});