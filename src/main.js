const request= require('./request')
const index= require('./index')

const pageInitialization = {
    '/' : index.init,
    '/index.html': index.init,
  }  

const path = window.location.pathname


if(pageInitialization.hasOwnProperty(path)) {
  pageInitialization[path]()
}
else {
  console.error(`${path} does not have an initializer`)
}

request.getAllSnacks()
    .then(data => console.log(data)).catch(e => console.log(e))

