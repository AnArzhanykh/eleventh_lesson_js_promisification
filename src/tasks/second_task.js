
// Перепиши функцию toggleUserState() так, чтобы она не использовала callback-функцию callback, а принимала всего два параметра allUsers и userName и возвращала промис.

const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
  ];
  
  // const toggleUserState = (allUsers, userName, callback) => {
  //   const updatedUsers = allUsers.map(user =>
  //     user.name === userName ? { ...user, active: !user.active } : user,
  //   );
  
  //   callback(updatedUsers);
  // };
  
  const toggleUserState = (allUsers, userName) => {
    const promis = new Promise(resolve => {
      const updatedUsers = allUsers.map(user =>
        user.name === userName ? { ...user, active: !user.active } : user,
      );
      resolve(updatedUsers)
    })
    return promis;
  };
  
  
  const logger1 = updatedUsers => console.table(updatedUsers);
  
  /*
   * Сейчас работает так
   */
  toggleUserState(users, 'Mango', logger1);
  toggleUserState(users, 'Lux', logger1);
  
  /*
   * Должно работать так
   */
  toggleUserState(users, 'Mango').then(logger1);
  toggleUserState(users, 'Lux').then(logger1);
  
  