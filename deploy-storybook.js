/* eslint-disable */
const { exec } = require('child_process');
const { config } = require('dotenv');

config();
exec(`npx chromatic --project-token=${process.env.STORYBOOK_PROJECT_TOKEN}`);
