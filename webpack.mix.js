require('dotenv').config();
const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.browserSync({
			 proxy: process.env.APP_URL,
			 open:false})
			.js('resources/js/app.js', 'public/js')
			.styles([
									'resources/css/style.css', 
									'node_modules/open-sans-all/css/open-sans.css',
									'node_modules/font-awesome/css/font-awesome.css'
							],'public/css/app.css')
.copy('node_modules/open-sans-all/fonts', 'public/fonts')
.copy('node_modules/font-awesome/fonts', 'public/fonts')
.copy('resources/images', 'public/images')
.options({
		extractVueStyles:'public/css/vue-style.css'
});
