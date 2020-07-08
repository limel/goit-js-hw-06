// eslint-disable-next-line import/extensions
import users from './users.js';

// eslint-disable-next-line no-shadow
const getUserWithEmail = (users, email) => {
  // eslint-disable-next-line no-shadow
  const userByEmail = users.find(users => users.email === email);
  return userByEmail;
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
