// eslint-disable-next-line import/extensions
import users from './users.js';

// eslint-disable-next-line no-shadow
const calculateTotalBalance = users => {
  const totalBalance = users.reduce(function(acc, user) {
    return acc + user.balance;
  }, 0);
  return totalBalance;
  // return users.reduce((acc, user) => acc + user.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916
