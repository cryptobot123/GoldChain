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
		ok: res.ok,
		data: await res.json()
	};
}
