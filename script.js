document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('guessInput')
    const button = document.getElementById('guessButton')
    const message = document.getElementById('message')

    let numero = Math.floor(Math.random() * 100) + 1

    button.addEventListener('click', () => {
        const valor = Number(input.value)

        if (valor === numero) {
            message.textContent = 'Acertou!'
            message.className = 'right'
        } else if (valor < numero) {
            message.textContent = 'Tente um número maior'
            message.className = 'wrong'
        } else {
            message.textContent = 'Tente um número menor'
            message.className = 'wrong'
        }
    })
})