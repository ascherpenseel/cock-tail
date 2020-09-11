module.exports = {
    async redirects() {
        return [{
            source: '/',
            destination: '/list/a',
            permanent: true,
        }, ]
    },
}