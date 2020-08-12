export function getFormBody(params) {
  let formBody = [];

  for (let property in params) {
    let encodedKey = encodeURIComponent(property);
    // converts 'user name' to 'user%20name'

    let encodedValue = encodeURIComponent(params[property]);

    formBody(encodedKey + "=" + encodedValue);

    return formBody.join("&"); // example 'user%20name=boss&password=123
  }
}
