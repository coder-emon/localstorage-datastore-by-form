const getInputValueById = (Id) => {
    const inputElement = document.getElementById(Id);
    const inputValue = inputElement.value;
    return inputValue;
}
const sendNameBtn = document.getElementById('addName');
const sendEmailBtn = document.getElementById('addEmail');
const sendMessageBtn = document.getElementById('addMessage');

const removeNameBtn = document.getElementById('removeName');
const removeEmailBtn = document.getElementById('removeEmail');
const removeMessageBtn = document.getElementById('removeMessage');

const sendAllBtn = document.getElementById('sendAll');
const resetAllBtn = document.getElementById('resetAll');

sendNameBtn.addEventListener('click', () => {
    const name = getInputValueById('name');
    localStorage.setItem('name', name);
});
sendEmailBtn.addEventListener('click', () => {
    const email = getInputValueById('email');
    localStorage.setItem('email', email);
});
sendMessageBtn.addEventListener('click', () => {
    const message = getInputValueById('message');
    localStorage.setItem('message', message);
});

removeNameBtn.addEventListener('click', () => {
    localStorage.removeItem('name');
});
removeEmailBtn.addEventListener('click', () => {
    localStorage.removeItem('email');
});
removeMessageBtn.addEventListener('click', () => {
    localStorage.removeItem('message');
});

sendAllBtn.addEventListener('click', () => {
    const name = getInputValueById('name');
    const email = getInputValueById('email');
    const message = getInputValueById('message');
    const person = {name, email, message}
    console.log(person);
    const personStringified = JSON.stringify(person);
    localStorage.setItem('person', personStringified);
});

resetAllBtn.addEventListener('click', () => {
    localStorage.clear();
})