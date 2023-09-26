// load-secrets.js
const AWS = require("aws-sdk");
const secretsManager = new AWS.SecretsManager({
  region: "us-east-1",
});

async function loadSecrets(secretName) {
  try {
    AWS.config.update({ region: "us-east-1" });
    const data = await secretsManager
      .getSecretValue({ SecretId: "aslambaba" })
      .promise();
    const secrets = JSON.parse(data.SecretString);

    for (const key in secrets) {
      process.env[key] = secrets[key];
    }
  } catch (error) {
    console.error("Error loading secrets 22:", error);
    throw error;
  }
}

module.exports = loadSecrets;
