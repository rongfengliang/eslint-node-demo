const index = require("./index.js");

function app(a,b ) {
    return index.demo(a,b);
}
function  demo2(a,b) {
    return index.demoapp(a,b);
}
module.exports = {
    app:app,
    demo2: demo2
};