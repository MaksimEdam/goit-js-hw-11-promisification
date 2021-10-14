const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
  //вариант 1
  return new Promise(resolve => {
    resolve(
      allUsers.map(user => (user.name === userName ? { ...user, active: !user.active } : user)),
    );
  });
  //вариант 2
  /*  return Promise.resolve(
    allUsers.map(user => (user.name === userName ? { ...user, active: !user.active } : user)),
  ); */
  // вариат 3
  /* const toggleUserState = (allUsers, userName, callback) => {
    const updatedUsers = allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user,
    );

    return Promise.resolve(updatedUsers);
  }; */
};

const logger = updatedUsers => console.table(updatedUsers);

/*
 * Сейчас работает так
 */
//toggleUserState(users, 'Mango', logger);
//toggleUserState(users, 'Lux', logger);

/*
 * Должно работать так
 */
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
