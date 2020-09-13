const myForm = document.getElementById('myForm');

myForm.eventListener('submit', function (ev) {
	ev.preventDefault();
	const formData = new FormData(this);

	fetch('submit.php', {
		method: 'post',
		body: formData
	}).then(function (response) {
		return response.text();
	}).then(function (text) {
		console.log(text);
	}).catch(function (err) {
		console.error(err);
	})
});