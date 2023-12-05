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
    console.log("reading");
    let matches = decodeURIComponent(document.cookie).matchAll(/[^;]+=[^;]+/g);
    console.log(document.cookie);
    console.log(decodeURIComponent(document.cookie));
    let c = {};
    for (const str of matches) {
        let spl = str.split("=");
        if (spl[0] != "path") {
            c[spl[0]] = spl[1];
            console.log(`${spl[0]} = ${spl[1]}`);
        }
    }
    return c;
}

var f = document.forms[0]
f.onsubmit = (event) => {
    CreateCookie("name", f.ck_name.value);
    CreateCookie("username", f.ck_user.value);
}
