export async function handle({ event, resolve }) {
    let locale = event.params.lang ? event.params.lang : "bg"
    
    const response = await resolve(event, {
        transformPageChunk: ({html}) => html.replace("%lang%", locale),
    })
    return response
}