# Userloop

A simple and lightweight Node.js wrapper for the Userloop API, allowing easy integration of event tracking in your applications.

## Installation

Install the package using npm:

```bash
npm install @userloop/api
```

## Usage

First, import the Userloop class and create an instance with your API key:

```javascript
const Userloop = require('@userloop/api');
const userloop = new Userloop('your-api-key-here');
```

### Emitting an event

To emit an event, use the `emit` method:

```javascript
userloop
	.emit('event_id', { property1: 'value1', property2: 'value2' })
	.then((response) => console.log(response))
	.catch((error) => console.error(error));
```

## API

### `new Userloop(apiKey)`

Creates a new Userloop instance.

-   `apiKey` (string): Your Userloop API key.

### `userloop.emit(id, data)`

Emits an event to Userloop.

-   `id` (string): The ID of the event you want to emit.
-   `data` (object): An object containing event data.

Returns a Promise that resolves with the API response or rejects with an error.

## Error Handling

The `emit` method will throw an error if something goes wrong during the API request. It's recommended to use try/catch (for async/await) or .catch() (for Promises) to handle these errors gracefully.
