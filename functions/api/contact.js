export async function onRequestPost(context) {
  const runtimeEndpoint = context.env.CONTACT_FORM_ENDPOINT || context.env.PUBLIC_CONTACT_FORM_ENDPOINT;

  if (!runtimeEndpoint) {
    return Response.json(
      { message: 'Contact form service is not configured.' },
      { status: 500, headers: { 'Cache-Control': 'no-store' } },
    );
  }

  let payload;

  try {
    payload = await context.request.json();
  } catch {
    return Response.json(
      { message: 'Invalid request payload.' },
      { status: 400, headers: { 'Cache-Control': 'no-store' } },
    );
  }

  const upstreamResponse = await fetch(runtimeEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const responseBody = await upstreamResponse.text();
  const contentType = upstreamResponse.headers.get('content-type') || 'application/json';

  return new Response(responseBody, {
    status: upstreamResponse.status,
    headers: {
      'Content-Type': contentType,
      'Cache-Control': 'no-store',
    },
  });
}