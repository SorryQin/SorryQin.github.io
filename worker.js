/**
 * Like Counter Worker — deploy to Cloudflare Workers.
 *
 * Setup:
 *   1. Create KV namespace: wrangler kv:namespace create "LIKES"
 *   2. Update wrangler.toml with the KV namespace ID
 *   3. Deploy: wrangler deploy
 *   4. Update API_URL in js/likes.js to point to your worker URL
 */

export default {
  async fetch(request, env) {
    var url = new URL(request.url);
    var cors = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: cors });
    }

    if (url.pathname === '/likes') {
      if (request.method === 'GET') {
        var count = await env.LIKES.get('count') || '0';
        return new Response(JSON.stringify({ count: parseInt(count) }), {
          headers: { 'Content-Type': 'application/json', ...cors },
        });
      }

      if (request.method === 'POST') {
        var current = parseInt(await env.LIKES.get('count') || '0');
        var next = current + 1;
        await env.LIKES.put('count', String(next));
        return new Response(JSON.stringify({ count: next }), {
          headers: { 'Content-Type': 'application/json', ...cors },
        });
      }
    }

    return new Response('Not found', { status: 404, headers: cors });
  },
};
