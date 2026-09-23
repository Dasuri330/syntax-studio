const fs = require('fs');
const path = require('path');

const required = ['EMAILJS_SERVICE_ID', 'EMAILJS_TEMPLATE_ID', 'EMAILJS_PUBLIC_KEY'];

const missing = required.filter((key) => !process.env[key]);
const envDir = path.join(process.cwd(), 'src', 'environments');

if (missing.length > 0) {
  const localEnv = path.join(envDir, 'environment.ts');
  const localProdEnv = path.join(envDir, 'environment.prod.ts');

  if (fs.existsSync(localEnv) && fs.existsSync(localProdEnv)) {
    console.log('Environment variables not found. Using existing local environment files.');
    process.exit(0);
  }

  console.error(`Missing environment variables: ${missing.join(', ')}`);
  process.exit(1);
}

fs.mkdirSync(envDir, { recursive: true });

const serviceId = JSON.stringify(process.env.EMAILJS_SERVICE_ID);
const templateId = JSON.stringify(process.env.EMAILJS_TEMPLATE_ID);
const publicKey = JSON.stringify(process.env.EMAILJS_PUBLIC_KEY);

const environmentContent = `export const environment = {
  production: false,
  emailjs: {
    serviceId: ${serviceId},
    templateId: ${templateId},
    publicKey: ${publicKey},
  },
};
`;

const productionEnvironmentContent = `export const environment = {
  production: true,
  emailjs: {
    serviceId: ${serviceId},
    templateId: ${templateId},
    publicKey: ${publicKey},
  },
};
`;

fs.writeFileSync(path.join(envDir, 'environment.ts'), environmentContent);

fs.writeFileSync(path.join(envDir, 'environment.prod.ts'), productionEnvironmentContent);

console.log('Angular environment files generated successfully.');
