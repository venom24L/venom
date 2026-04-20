// Venom Advanced VLESS Worker 2026
const uuid = 'ad800262-e69c-482f-8d94-0678e7059858'; // غيّره لو عايز

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname + url.search;

    // لو طلب الصفحة الرئيسية
    if (path === '/' || path === '/sub') {
      const config = `vless://${uuid}@king916.workers.dev:443?encryption=none&security=tls&sni=www.whatsapp.com&type=ws&host=king916.workers.dev&path=%2F%3Fed%3D2048#Venom-Iran`;
      return new Response(`<h1>Venom VLESS</h1><pre>${config}</pre>`, {
        headers: {'Content-Type': 'text/html'}
      });
    }

    // WebSocket handling للـ VLESS
    if (request.headers.get('Upgrade') === 'websocket') {
      return handleWebSocket(request);
    }

    return new Response('Not Found', { status: 404 });
  }
};

async function handleWebSocket(request) {
  const [client, server] = Object.values(new WebSocketPair());
  server.accept();

  server.addEventListener('message', async (event) => {
    // هنا الـ logic بسيط، بس كفاية للاختبار
    try {
      server.send(event.data);
    } catch (e) {}
  });

  server.addEventListener('close', () => server.close());
  return new Response(null, { status: 101, webSocket: client });
}
