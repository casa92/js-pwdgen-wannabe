// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

//DICHIARAZIONE
const nome = prompt('Come ti chiami?')
const cognome = prompt('Qual\'è il tuo cognome')
const colorePreferito = prompt('Qual\'è il tuo colore preferito?')

//LOGICA
// const passwordSuggerita = nome + cognome + colorePreferito + '21'
const passwordSuggerita = `${nome}${cognome}${colorePreferito}21`

//OUTPUT
document.getElementById('user_message').innerHTML = `La tua password suggerita è ${passwordSuggerita}`
