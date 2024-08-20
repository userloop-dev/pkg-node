const fetch = require('node-fetch');

class Userloop {
	constructor(apiKey) {
		this.apiKey = apiKey;
	}

	async emit(id, data = {}) {
		if (!id || typeof id !== 'string') {
			throw new Error('Event ID must be a non-empty string');
		}

		try {
			const response = await fetch('https://events.userloop.dev/emit', {
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
