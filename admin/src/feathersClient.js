import feathers from 'feathers-client';
import decodeJwt from 'jwt-decode';

const host = 'http://localhost:3030';

export default feathers()
    .configure(feathers.hooks())
    .configure(feathers.rest(host).fetch(window.fetch.bind(window)))
    .configure(feathers.authentication({ jwtStrategy: 'jwt', storage: window.localStorage }));

//export const UserID = decodeJwt(localStorage.getItem('feathers-jwt')).id;

export const UserID = (localStorage.getItem('feathers-jwt') == null) ? "" : decodeJwt(localStorage.getItem('feathers-jwt')).id;
