import devtools from './index.js';
if (devtools.isOpen == true) {
	if (edit !== "true") {
		window.location.replace("https://lxa2.github.io/404");
	}
}
window.addEventListener('devtoolschange', event => {
	if (event.detail.isOpen == true) {
		if (edit !== "true") {
			window.location.replace("https://lxa2.github.io/404");
		}
	}
});


