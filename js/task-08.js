// eslint-disable-next-line import/extensions
import users from './users.js';

// eslint-disable-next-line no-shadow
const getUsersWithFriend = (users, friendName) => {
  const usersByFriend = users
    // eslint-disable-next-line no-shadow
    .filter(users => users.friends.includes(friendName))
    // eslint-disable-next-line no-shadow
    .map(users => users.name);
  return usersByFriend;
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
