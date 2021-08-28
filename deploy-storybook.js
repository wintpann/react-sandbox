/* eslint-disable */
const { exec } = require('shelljs');
const { config } = require('dotenv');

config();
exec(`npx chromatic --project-token=${process.env.STORYBOOK_PROJECT_TOKEN}`);
