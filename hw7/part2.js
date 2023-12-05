CreateCookie("name", "Stephano");
CreateCookie("username", "steffy2011");
ReadCookies();



function CreateCookie(name, val) {
    document.cookie = `${name}=${val};`;
    console.log(`Writing ${name}=${val};`);
}

function ReadCookies() {
    let matches = decodeURIComponent(document.cookie).matchAll("[^;]+=[^;]+;");
    for (str in matches) {
        let [k,v] = str.split("=");
        console.log(`${k} = ${v}`);
    }
}
function GetCookie(cookies) {

}