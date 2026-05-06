/**
 * Like Counter Worker — D1 backend.
 *
 * Setup:
 *   1. D1 → Create database → name: likes-db
 *   2. Worker → Settings → D1 Database Bindings → Add binding
 *      Variable: DB  /  D1 database: likes-db
 *   3. Paste this code → Save and Deploy
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
      await env.DB.exec(
        'CREATE TABLE IF NOT EXISTS likes (id TEXT PRIMARY KEY, count INTEGER DEFAULT 0)'
      );

      if (request.method === 'GET') {
        var row = await env.DB.prepare(
          'SELECT count FROM likes WHERE id = ?'
        ).bind('main').first();
        return new Response(JSON.stringify({ count: row ? row.count : 0 }), {
          headers: { 'Content-Type': 'application/json', ...cors },
        });
      }

      if (request.method === 'POST') {
        await env.DB.prepare(
          'INSERT INTO likes (id, count) VALUES (?, 1) ON CONFLICT(id) DO UPDATE SET count = count + 1'
        ).bind('main').run();
        var updated = await env.DB.prepare(
          'SELECT count FROM likes WHERE id = ?'
        ).bind('main').first();
        return new Response(JSON.stringify({ count: updated.count }), {
          headers: { 'Content-Type': 'application/json', ...cors },
        });
      }
    }

    return new Response('Not found', { status: 404, headers: cors });
  },
};
