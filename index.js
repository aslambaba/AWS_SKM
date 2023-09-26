// app.js
const loadSecrets = require("./load-script");

async function startApp() {
  await loadSecrets("aslambaba");

  // Now you can use the environment variables just like you would with .env
  console.log(
    `Hello My Name is ${process.env.name} and I'm a ${process.env.role}`
  );

  // The rest of your application code here...
}

startApp();