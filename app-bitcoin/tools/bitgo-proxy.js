var http = require('http');
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({changeOrigin: true, secure: false});

proxy.on('proxyReq', function(proxyReq, req, res, options) {
	proxyReq.removeHeader("Origin");
});

http.createServer(function(req, res) {
	proxy.web(req, res, { target: 'https://test.bitgo.com' });
}).listen(3005);
