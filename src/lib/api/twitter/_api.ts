const base = 'https://api.goldchain.finance';

export async function api(method: string, url: string, data?: {}) {
	const res = await fetch(`${base}/${url}`, {
		method: method,
		headers: {
			'content-type': 'application/json'
		},
		body: data && JSON.stringify(data)
	});

	return {
		status: res.status,
		body: await res.json()
	};
}
