/** @type {import('./$types').PageServerLoad} */
export function load(event) {

	const ip = event.getClientAddress();
	const city = decodeURIComponent(event.request.headers.get('x-vercel-ip-city') ?? 'unknown');

	return {
		ip,
		city,
		now: new Date().toISOString(),
	};
}