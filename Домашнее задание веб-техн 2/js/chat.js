function hello() {
    let name = prompt("Введите имя: ")
    alert(`Привет, ${name}!`)
}

function send() {
    let messagess = []
    let name = document.getElementById('name').value
    let message = document.getElementById('message').value
    if(!message) {
        document.getElementById('error').innerText = "Сообщение не может быть пустым"
        return
    }
    document.getElementById('error').innerText = ""
    if(!name) {
        name = "Гость"
    }
    messagess.push({ name: name, message: message })  
    name.value = ''
    message.value = ''
    
    for (let i = 0; i < messagess.length; i++) {
        let newMessage = document.createElement('p')
        newMessage.textContent = messagess[i].name + ': ' + messagess[i].message
        messages.innerHTML += newMessage.textContent + '<br>'
    }
}
