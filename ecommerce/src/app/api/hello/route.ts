export async function GET () {
    return new Response('Next is next', {
        status: 200,
        statusText: 'Hello called at ' + new Date().toLocaleString()
    })
} 