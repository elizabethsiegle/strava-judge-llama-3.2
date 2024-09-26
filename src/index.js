import html from '../static/index.html';
export default {
    async fetch(request, env) {
        const url = new URL(request.url);

        if (request.method === 'GET' && url.pathname === '/') {
            return new Response(html, {
                headers: { 'Content-Type': 'text/html' },
            });
        } else if (request.method === 'POST' && url.pathname === '/analyze-image') {
            const formData = await request.formData();
			const imageFile = formData.get('image');

			if (!imageFile) {
				return new Response('No image file uploaded', { status: 400 });
			}

			const arrayBuffer = await imageFile.arrayBuffer();
			const uint8Array = new Uint8Array(arrayBuffer);
			const input = {
				image: [...uint8Array],
				prompt: "You are a workout judger. In an encouraging tone, rate and provide some workout inspiration in a short blurb, mentioning the city location,distance, time, and elevation gain of their input workout. Keep it short, sweet, and simple.",
				max_tokens: 512,
			};
			try {
				const response = await env.AI.run(
					"@cf/meta/llama-3.2-11b-vision-instruct",
					input
				);
				console.log(`response: ${JSON.stringify(response)}`);

				return new Response(JSON.stringify(response), {
					headers: { 'Content-Type': 'application/json' }
				});
			} catch (error) {
				console.log(`error: ${error}`);
				return new Response('Error analyzing image: ' + error.message, { status: 500 });
			}
		}
	}
}
