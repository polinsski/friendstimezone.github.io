// search all desired clocks
function searchClocks() {
	document.querySelectorAll('.container h2').forEach(item => {
		const timezone = {
			locale: item.getAttribute('data-locale'),
			offset: item.getAttribute('data-offset')
		};
		
		setInterval(() => {
			item.querySelector('p').innerHTML = calcTime(timezone);
		}, 1000);
	})
}

// get local time (browser based)
function calcTime(timezone) {
	const d = new Date(),
				utc = d.getTime() + (d.getTimezoneOffset() * 60000),
				nd = new Date(utc + (3600000 * timezone.offset));

	return nd.toLocaleString();
}

searchClocks();