export default {
	fetch(request) {
		console.log(request.URL)
		
		if (request.method == "GET") {
			return new Response('Hello worker! This is a GET request!', {
				headers: {'content-type': 'text/plain',},

			});
		}

		if (request.method == "POST") {
			return new Response('Hello worker! This is a POST request!', {
				headers: {'content-type': 'text/plain',},
			});
		}
	},
}