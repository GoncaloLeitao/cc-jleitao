/*const availableSizes = {
	0: "720/1280",
	1: "720/480",
	2: "1280/720",
	3: "1920/1080",
};

function getRandomInt(max) {
	return	Math.floor(Math.random() * max)
}
*/
export default {

	async fetch(request, env, context) {
		const score = request.cf.botManagement.score
		console.log(score)

		if(score < 20){
			console.log("BOT")
			return new Response("BOT", {
				headers: {'content-type': 'text/plain',},

			});
		}
		console.log("HUMAN")
		return new Response("HUMAN", {
			headers: {'content-type': 'text/plain',},
		});

		//const response = await fetch(request)
		//const newResponse = new Response(response.body, response)
		//newResponse

	},
/*
	async fetch(request) {
		//console.log(request.URL)
		//console.log("HTTP Method: " + request.method)

		if (request.method != "GET") {
			return new Response(`Method ${request.method} not allowed.`, {
				status: 405,
				headers: {
				  Allow: 'GET',
				},
			});
		}

		let size = availableSizes[getRandomInt(4)]
		let img = "https://random.imagecdn.app/" + size
		//console.log(img)		

		let html = `<!DOCTYPE html>
			<head>
				<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
			</head>
			<body>
				<p style="text-align:center;">
					<img src="` + img + `">
				</p>
				<footer>
					<p>Displayed Image Size: ` + size + ` pixels. <a href="https://random.responsiveimages.io/">Source</a></p>
				</footer>
			</body>`

		return new Response(html, {
			headers: {'content-type': 'text/html;charset=UTF-8',},
		  });

		return new Response('Hello worker! This is a GET request!', {
			headers: {'content-type': 'text/plain',},
		});
	},*/
}