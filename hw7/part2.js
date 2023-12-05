CreateCookie("name", nm_ck);
CreateCookie("username", un_ck);
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