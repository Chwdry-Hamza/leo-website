/**
 * cPanel (Phusion Passenger) entry point.
 *
 * cPanel "Setup Node.js App" expects a CommonJS startup file that boots an HTTP
 * server itself — it does not run `next start`. Passenger assigns the port via
 * process.env.PORT and proxies the domain to it.
 *
 * Requires a production build on the server first: `npm ci && npm run build`
 * (the .next/ folder must exist next to this file).
 *
 * Using the Next request handler keeps middleware, dynamic/SSR routes and the
 * /api routes working exactly as in `next start`.
 */
const http = require('http');
const next = require('next');

const port = process.env.PORT || 3000;
const hostname = '0.0.0.0';

const app = next({ dev: false, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  http
    .createServer((req, res) => {
      handle(req, res);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
