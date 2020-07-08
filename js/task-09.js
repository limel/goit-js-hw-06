// eslint-disable-next-line import/extensions
import users from './users.js';

// eslint-disable-next-line no-shadow

// eslint-disable-next-line no-shadow
const getNamesSortedByFriendsCount = users => {
  const sortedUsers = [...users];
  return (
    sortedUsers
      .sort((prev, next) => prev.friends.lenght - next.friends.length)
      // eslint-disable-next-line no-shadow
      .map(sortedUsers => sortedUsers.name)
  );
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
