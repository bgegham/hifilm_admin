module.exports = {
    development: {
        baseUrl : "https://dev.hifilmapp.com:8090/",
        secret: 'c6ddbf5047efc9s4e0d8ff9a8cf4b5acb92abb8sdd26662ff2ddc74e33d1e2ce0af7ssaa904825aec32e967418s98b1effd06531s15637cdca372bff0004f035',
        mongo_url: 'mongodb://127.0.0.1:27017/hifilm_transactions',
        SENDGRID_API_KEY : "",
        EMAIL_FROM : "HiFilm_report@info",
        http_port: 8090,
        http_host: '0.0.0.0'
    },
    production: {
        baseUrl : "http://37.186.125.214:8080",
        secret: 'c6ddqf5047efc9s4e0d8ff9a87f4b5acb92abbqsdd26662ff2ddc74e33d1e24e0af7ssaa904825aq632e967418s98b1qffd06531s15637cdca372bff0004f035',
        mongo_url: 'mongodb://localhost/hifilm_transactions',
        SENDGRID_API_KEY : "",
        EMAIL_FROM : "HiFilm_report@info",
        http_port: 8080,
        http_host: '0.0.0.0'
    }
};