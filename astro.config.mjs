import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://some-drops-of-javascript.vercel.app/',
	integrations: [
		starlight({
			title: 'Some drops of JavaScript',
			editLink: {
				baseUrl: 'https://github.com/roberto-butti/some-drops-of-javascript/edit/main',
			},
			social: {
				github: 'https://github.com/roberto-butti/some-drops-of-javascript',
			},
			sidebar: [
				{
					label: '📔 Intro',
					autogenerate: { directory: '00-intro' },
					collapsed: false
				},
				{
					label: '🧑‍💻 System',
					autogenerate: { directory: '01-system' },
					collapsed:true
				},
				{
					label: '📚 Array',
					autogenerate: { directory: '02-array' },
					collapsed: true
				},
				{
					label: '[ 🧑‍💻 Sources ]',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Markdown', link: 'https://github.com/roberto-butti/some-drops-of-javascript/tree/main/src/content/docs' },
						{ label: 'Examples', link: 'https://github.com/roberto-butti/some-drops-of-javascript/tree/main/examples' },
					],
					collapsed: true
				},
			],
		}),
	],
});
