import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors

	kit: {
		adapter: adapter({
			// default options are shown
			out: 'build',
			precompress: false,
			env: {
				host: 'HOST',
				port: 'PORT'
			}
		}),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
                vite: ({
		      ssr: {
			external: ['firebase']
		}
	    })

	}
};

export default config;
