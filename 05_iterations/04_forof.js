const myobject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: 'swift by apple'
}

for (const key in myobject) {
    // console.log(myobject[key]);
    // console.log(`${key} shortcut is for ${myobject[key]}`);
}


const programming = ['js','java','py','rb','cpp']

for (const key in programming) {
    console.log(programming[key]);
}