var cookies = ReadCookies();

if ("name" in cookies && "username" in cookies) {
    let cb = document.querySelector("#cookiebox");
    cb.innerHTML = `<p>Welcome back, ${cookies.name}</p>`;
    document.querySelector("#entryform").hidden = true;
}

function CreateCookie(name, val) {
    document.cookie = `${name}=${val};`;
    console.log(`Writing ${name}=${val};`);
}

function ReadCookies() {
    let matches = decodeURIComponent(document.cookie).matchAll("[^;]+=[^;]+;");
    console.log(document.cookie);
    console.log(decodeURIComponent(document.cookie));
    let c = {};
    for (str in matches) {
        let [k,v] = str.split("=");
        if (k != "path") {
            c[k] = v;
            console.log(`${k} = ${v}`);
        }
    }
    return c;
}

var f = document.forms[0]
f.onsubmit = (event) => {
    CreateCookie("name", f.ck_name.value);
    CreateCookie("username", f.ck_user.value);
}
