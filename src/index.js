const mjml2html = require('mjml');
const path = require('path');
const fs = require('fs');
let file = process.argv[2]+'.mjml';
let dist = process.argv[2]+'.html';
fs.watch(`../src/${file}`,{encode: 'utf-8'}, ()=>{
  console.log("I'm watching you!");
  let mjml = fs.readFileSync(`../src/${file}`, 'utf-8');
  let html;
  try{
    html = mjml2html(mjml);
  }catch(e){
    console.log(e);
    return;
  }
  fs.writeFileSync(`../dist/${dist}`, html.html, 'utf-8');
});
