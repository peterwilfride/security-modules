const PROXY_CONFIG = [{
    context: ['/auth'],
    target: 'http://localhost:28080/',
    secure: false,
    logLevel : 'debug'
}];

module.exports = PROXY_CONFIG;