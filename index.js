const fetch = typeof window !== 'undefined' && window.fetch ? window.fetch.bind(window) : require('node-fetch');

class Userloop {
	constructor(apiKey) {
		this.apiKey = apiKey;
		this.baseUrl = 'https://events.userloop.dev/emit';
	}

	async emit(id, data = {}) {
		try {
			const response = await fetch(this.baseUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'x-api-key': this.apiKey,
				},
				body: JSON.stringify({ id, data }),
			});

			if (!response.ok) {
				if (response.status === 403) {
					throw new Error('Invalid API key');
				}
				throw new Error(`Events API failed with status ${response.status}`);
			}

			return await response.json();
		} catch (error) {
			console.error('Error emitting event:', error);
			throw error;
		}
	}
}

module.exports = Userloop;
