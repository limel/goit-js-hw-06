// eslint-disable-next-line import/extensions
import users from './users.js';

// eslint-disable-next-line no-shadow
const getSortedUniqueSkills = users => {
  const allSkills = users.reduce(function(skills, skill) {
    skills.push(...skill.skills);

    return skills;
  }, []);

  return allSkills
    .filter(function(user, idx, arr) {
      return arr.indexOf(user) === idx;
    })
    .sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
