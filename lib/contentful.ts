import * as cf from 'contentful'

export function newClient(): cf.ContentfulClientApi {
	const client = cf.createClient({
		space: process.env.CONTENTFUL_SPACE || "",
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
	}) 
	return client
}
