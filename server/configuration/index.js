
if(process.env.NODE_ENV === 'test'){
    module.exports = {
        JWT_SECRET: 'thisSecretShouldBeChanged',
        oauth: {
            google: {
                clientID: '208048925927-9hhalutqphl06je9q3b13pv7nlepsvj8.apps.googleusercontent.com', 
                clientSecret: 'rX5wzKPETVg-D-3EVXVDXV9O',
            }
        }
    }
} else {
    module.exports = {
        JWT_SECRET: '', 
        oauth: {
            google: {
                clientID: 'number', 
                clientSecret: 'string',
            }
        }
    }
}
