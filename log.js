const customEmitter = require('./customEmitter');

function logUserLoggedIn(userId) {
  const timestamp = new Date().toLocaleString();
  console.log(`${timestamp}: USER_${userId} logged in`);
}

customEmitter.on('userLoggedIn', logUserLoggedIn);

setInterval(() => {
  const userId = Math.floor(Math.random() * 1000); // Simulate a user ID
  customEmitter.emit('userLoggedIn', userId);
}, Math.floor(Math.random() * 1900) + 100);

// Simulate userLoggedOut event (just for demonstration)
customEmitter.on('userLoggedOut', (userId) => {
  const timestamp = new Date().toLocaleString();
  console.log(`${timestamp}: USER_${userId} logged out`);
});

// Emit a userLoggedOut event (just for demonstration)
setTimeout(() => {
  customEmitter.emit('userLoggedOut', 123); // Replace 123 with a user ID
}, 3000);
