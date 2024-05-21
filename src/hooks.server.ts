export async function handle({ event, resolve }) {
    let locale = event.params.lang

    if(locale){
        event.cookies.set("locale", locale, {
            path: "/",
        })
    }
    
    const response = await resolve(event, {
        transformPageChunk: ({html}) => html.replace("%lang%", locale || "bg"),
    })
    return response
}