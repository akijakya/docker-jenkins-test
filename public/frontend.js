let loadContent = async function () {
    try {
        let response = await fetch('/greetings');
        let responseJson = await response.json();
        responseJson.forEach(e => createLi(e.greeting));
    } catch (reason) {
        console.log(reason);
    }
}

function createLi (item) {
    let ul = document.querySelector("ul");
    let li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
}

let form = document.getElementsByTagName('form')[0];

form.addEventListener ('submit', async function (e) {
    e.preventDefault(); 
    let greeting = form.querySelector('input[type="text"]').value;
    let data = {"greeting": greeting};

    try {
        let response = await fetch('/newgreeting', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        let responseJson = await response.json();
        setTimeout(() => window.location.assign('/'), 100);
    } catch (reason) {
        console.log(reason);
    }
});

loadContent();