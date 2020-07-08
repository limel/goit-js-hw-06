// eslint-disable-next-line import/extensions
import users from './users.js';

// eslint-disable-next-line no-shadow
const getUsersWithAge = (users, min, max) => {
  const usersByAge = users.filter(
    // eslint-disable-next-line no-shadow
    users => users.age >= min && max >= users.age,
  );

  return usersByAge;
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
