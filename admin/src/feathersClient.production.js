import feathers from "feathers-client";
import decodeJwt from "jwt-decode";

//development
//export const host = 'http://localhost';

// production
export const host = "http://104.236.33.63";

export const feathersPort = ":3030";
export const chalktalkPort = ":11235";

export default feathers()
  .configure(feathers.hooks())
  .configure(
    feathers.rest(host + feathersPort).fetch(window.fetch.bind(window))
  )
  .configure(
    feathers.authentication({
      jwtStrategy: "jwt",
      storage: window.localStorage
    })
  );

//export const UserID = decodeJwt(localStorage.getItem('feathers-jwt')).id;

export const UserID =
  localStorage.getItem("feathers-jwt") == null
    ? ""
    : decodeJwt(localStorage.getItem("feathers-jwt")).id;
