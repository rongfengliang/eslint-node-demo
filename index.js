#!/usr/bin/env node

function demo(a,b) {
    return a+b;
}
function demoapp(a,b){
    return a+b;
}
module.exports ={
    demo:demo,
    demoapp:demoapp
};