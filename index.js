const fetch = require('node-fetch');

/**
 * @class Userloop
 * @description A class for interacting with the Userloop API
 */
class Userloop {
	/**
	 * Creates an instance of Userloop.
	 * @param {string} apiKey - The API key for authentication
	 */
	constructor(apiKey) {
		this.apiKey = apiKey;
		this.baseUrl = 'https://events.userloop.dev/emit';
	}

	/**
	 * Emits an event to the Userloop API
	 * @async
	 * @param {string} id - The event identifier
	 * @param {Object} [data={}] - Additional data for the event
	 * @returns {Promise<Object>} The response from the API
	 * @throws {Error} If there's an issue emitting the event
	 */
	async emit(id, data = {}) {
		try {
			const response = await fetch(this.baseUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'x-api-key': this.apiKey,
				},
				body: JSON.stringify({
					id,
					data,
				}),
			});

			if (!response.ok && response.status === 403) throw new Error('Invalid API key');
			else if (!response.ok) throw new Error(`Events API failed with status ${response.status}`);

			return await response.json();
		} catch (error) {
			console.error('Error emitting event:', error);
			throw error;
		}
	}
}

module.exports = Userloop;
