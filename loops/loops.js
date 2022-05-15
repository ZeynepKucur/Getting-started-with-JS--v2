let languages = ["C","C#","SQL","DART","JavaScript"];

console.log(languages.length);

for (let index = 0; index < 5; index++) {
    console.log( languages[index]);
}

for(let lang of languages){
    console.log(lang);
}



let i=0;
console.log("     ");
while(languages.length>i){
    console.log(languages[i]);
    i++;
}
console.log("     ");



while(languages.length>0){
    let lang =languages.pop();
    console.log(lang);
}
console.log(languages.length);

function languageName(lang){
    console.log(`-${lang }`)
}
languageName("meow");

