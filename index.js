export default {
	fetch(request) {
		console.log(request.URL)
		console.log("HTTP Method: " + request.method)
		
		if (request.method == "GET") {
			return new Response('Hello worker! This is a GET request!', {
				headers: {'content-type': 'text/plain',},

			});
		}

		else if (request.method == "POST") {
			return new Response('Hello worker! This is a POST request!', {
				headers: {'content-type': 'text/plain',},
			});
		}

		else {
			return new Response('Hello worker! This is not a GET/POST request!', {
				headers: {'content-type': 'text/plain',},
			});
		}
	},
}