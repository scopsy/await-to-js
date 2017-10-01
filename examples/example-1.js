import to from '../../dist';

const UserModel = {
  findById: (userId) => {
    return new Promise((resolve, reject) => {
      if(userId) {
        const userObjet = {
          id: userId,
          notificationsEnabled: true
        };

        return resolve(userObjet);
      }

      reject('Data is missing');
    });
  }
};

const TaskModel = function ({userId, name}) {
  return new Promise((resolve, reject) => {
    if(userId && name) {
      const newTask = {
        assignedUser: {
          id: userId
        }
      };

      return resolve(newTask);
    }

    reject('Data is missing');
  });
};

const NotificationService = {
  sendNotification: (userId, name) => {
    return new Promise((resolve, reject) => {
      if(userId && name) return resolve('Success');

      reject('Data is missing');
    });
  }
};


async function asyncTask(userId, cb) {
  let err, user, savedTask, notification;
  [ err, user ] = await to(UserModel.findById(userId));
  if(!(user && user.id)) return cb('No user found');

  [ err, savedTask] = await to(TaskModel({userId: user.id, name: 'Demo Task'}));
  if(err) return cb('Error occurred while saving task');

  if(user.notificationsEnabled) {
    [ err ] = await to(NotificationService.sendNotification(user.id, 'Task Created'));
    if(err) return cb('Error while sending notification');
  }

  if(savedTask.assignedUser.id !== user.id) {
    [ err, notification ] = await to(NotificationService.sendNotification(savedTask.assignedUser.id, 'Task was created for you'));
    if(err) return cb('Error while sending notification');
  }

  cb(null, savedTask);
}


asyncTask(1, (err, newTask) => {
  console.log('new task created');
  console.log(err);
  console.log(newTask);
});

asyncTask(null, (err, newTask) => {
  console.log('fail');
  console.log(err);
  console.log(newTask);
});
