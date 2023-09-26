# AWS_SKM
Sample test Nodejs App for getting values from AWS Secret Key Manager

- ```load-script.js``` Is the actual script that Loads your Secret Keys From AWS.
```
// Creates an AWS SecretsManager instance for the us-east-1 region
const secretsManager = new AWS.SecretsManager({
  region: "us-east-1",
});

// Retrieves the secret value associated with the specified SecretId using AWS SecretsManager.
const data = await secretsManager.getSecretValue({ SecretId: "secret-id" }).promise();
```
- ```index.js``` is the file that consoles the secret keys by
````
const loadSecrets = require("./load-script");

const NextAPP = async ()=>{
 await loadSecrets("//secret-id");
 console.log(
    `Hello My Name is ${process.env.name} and I'm a ${process.env.role}`
  );
}

````

### Steps
- Create a new AWS User and Attach the policy of **secretsmanager:GetSecretValue**
- Create security credentials like Access Key and Secret Access Key
- SSG into Instance
- Install AWS-Cli and AWS-SDK on your machine
- Configure AWS Credential by running ```aws configure```

## Read the Article at 
https://blog.devgenius.io/integrate-aws-secret-manager-in-your-nodejs-application-c167115eec3e
