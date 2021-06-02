import {json_response, HttpError} from './utils'

export async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url)
  if (url.pathname == '/error/') {
    throw new HttpError(500, 'this is an error')
  }
  return json_response({message: 'success'})
}
