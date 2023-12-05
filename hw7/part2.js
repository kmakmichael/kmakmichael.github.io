
let nm_ck = {name = "Stephano" };
let un_ck = { username = "steffy2011"};
CreateCookie(nm_ck);
CreateCookie(un_ck);

function CreateCookie(vals) {
    for (const [key, value] of Object.entries(vals)) {
        console.log(`${key}: ${value}`);
    }
}