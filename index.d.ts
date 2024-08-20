declare module 'userloop' {
	export default class Userloop {
		constructor(apiKey: string);

		/**
		 * Emits an event to the Userloop API.
		 * @param id - The event identifier.
		 * @param data - Optional data associated with the event.
		 * @returns A promise that resolves to the API response.
		 * @throws Will throw an error if the API request fails.
		 */
		emit(id: string, data?: Record<string, any>): Promise<any>;
	}
}
