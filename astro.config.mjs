// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'PRISM',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/statsvine/prism' }],
			sidebar: [
				{ label: 'Philosophy', slug: 'philosophy' },
				{
					label: 'Components',
					items: [
						{ label: 'Crosswalk', slug: 'crosswalk' },
						{ label: 'Registry', slug: 'registry' },
						{ label: 'Tools', slug: 'tools' },
					],
				},
			],
		}),
	],
});
