// Venom Simple VLESS Worker - 2026
const UUID = 'ad800262-e69c-482f-8d94-0678e7059858'; // غيّره لـ UUID جديد

const html = `
<!DOCTYPE html>
<html>
<head><title>Venom VLESS</title></head>
<body style="font-family:Arial;text-align:center;padding-top:50px;">
<h1>Venom VLESS Worker</h1>
<p>Worker شغال بنجاح ✅</p>
<p><strong>UUID:</strong> ${UUID}</p>
<p>استخدم الـ link ده في Hiddify أو Nekoray:</p>
<pre style="background:#f0f0f0;padding:15px;border-radius:8px;text-align:left;display:inline-block;">vless://${UUID}@king916.workers.dev:443?encryption=none&security=tls&sni=www.whatsapp.com&type=ws&host=king916.workers.dev&path=%2F%3Fed%3D2048#Venom-Iran</pre>
</body>
</html>`;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // لو طلب /admin أو / → يرجع الصفحة البسيطة
    if (url.pathname === "/" || url.pathname === "/admin") {
      return new Response(html, {
        headers: { "Content-Type": "text/html; charset=utf-8" }
      });
    }

    // هنا الـ VLESS logic (WebSocket)
    return new Response("404 Not Found", { status: 404 });
  }
};
