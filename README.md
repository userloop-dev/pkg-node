Certainly! Here's the README content formatted so it can be easily copied and pasted:

# Userloop

A TypeScript/JavaScript client for the Userloop API.

## Installation

```bash
npm install userloop
```

## Usage

```typescript
import Userloop from 'userloop';

const userloop = new Userloop('your-api-key');

// Emit an event
userloop
	.emit('event_id', { key: 'value' })
	.then((response) => console.log(response))
	.catch((error) => console.error(error));
```

## API

### `Userloop(apiKey: string)`

Creates a new Userloop instance.

### `emit(id: string, data?: Record<string, any>): Promise<any>`

Emits an event to the Userloop API.

-   `id`: The event identifier.
-   `data`: Optional data associated with the event.

Returns a promise that resolves to the API response.

## License

[Add your chosen license here]

## Support

For issues and feature requests, please [open an issue](https://github.com/your-repo/userloop/issues).
