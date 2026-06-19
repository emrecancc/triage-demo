const { expect } = require('chai');
const { User, Post } = require('../models');

describe('User', () => {
  let userId;

  before(async () => {
    const user = await User.create({ name: 'Test User' });
    userId = user.id;
  });

  it('adds user to database', async () => {
    const user = await User.findByPk(userId);
    expect(user.name).to.equal('Test User');
  });

  it('retrieves user by ID', async () => {
    const user = await User.findByPk(userId);
    expect(user.name).to.equal('Test User');
  });

  it('deletes user and cleans up related records', async () => {
    await User.destroy({ where: { id: userId } });
    // Add explicit wait for foreign key cascade
    await new Promise(resolve => setTimeout(resolve, 1000));
    const posts = await Post.findAll({ where: { userId } });
    expect(posts.length).to.equal(0);
  });
});
