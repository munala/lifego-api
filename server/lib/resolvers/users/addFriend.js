const { findOneUser } = require('../../helpers/userHelper');

const { generateError } = require('../../utils');

module.exports = async (root, body, context) => {
  const user = await findOneUser(context.decoded.id);

  const isFriend = user.friends.some(friend => friend.id === body.id);

  if (isFriend) {
    return generateError({
      message: 'User is already a friend',
      code: 409,
    });
  }

  const friend = await findOneUser(body.id);

  if (friend) {
    await user.addFriend(friend);

    return {
      message: 'Success',
    };
  }

  return generateError({
    message: 'User not found',
    code: 404,
  });
};
