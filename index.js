const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];
const lenght = 12;
const passwordBox1 = document.getElementById('passwordBoxOne');
const passwordBox2 = document.getElementById('passwordBoxTwo');

let popUp = document.getElementById('copied');

function generatePasswords() {
    let randomPassword1 = "";
    randomPassword1 += characters[Math.floor(Math.random() * characters.length)];

    let randomPassword2 = "";
    randomPassword2 += characters[Math.floor(Math.random() * characters.length)];

    while (lenght > randomPassword1.length || lenght > randomPassword2.length) {
        randomPassword1 += characters[Math.floor(Math.random() * characters.length)];
        randomPassword2 += characters[Math.floor(Math.random() * characters.length)];
    }
    passwordBox1.value = randomPassword1;
    passwordBox2.value = randomPassword2;
}

function copyOne() {
    passwordBox1.select();
    document.execCommand("copy");
}

function copyTwo() {
    passwordBox2.select();
    document.execCommand("copy");
}

if (passwordBox1) {
    try {
        passwordBox1.addEventListener('click', () => {
            popUp.textContent = "COPIED";
            setTimeout(() => {
                popUp.textContent = '';
            }, 2000)
        });
    } catch (err) {
        console.log('id not found');
    }
}

if (passwordBox2) {
    try {
        passwordBox2.addEventListener('click', () => {
            popUp.textContent = "COPIED";
            setTimeout(() => {
                popUp.textContent = '';
            }, 2000)
        });
    } catch (err) {
        console.log('id not found');
    }
}