import { defineConfig } from 'cypress';

if (!process.env.APP_URL)
	throw new Error('You should set APP_URL env variable');

export default defineConfig({
	e2e: {
		video: false,
		screenshotOnRunFailure: false,
		supportFile: false,
		baseUrl: process.env.APP_URL,
	},
});
