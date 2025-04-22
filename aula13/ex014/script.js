function carregar() {
    var msg = window.document.getElementById('msg') // Corrigido: getElementById (sem "s")
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.png' // Corrigido: removido acento do "manhã" para evitar problemas
        document.body.style.background = '#5AA7E6' // Corrigido: adicionado fundo para manhã
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#F4A261' // Corrigido: adicionado fundo para tarde
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#2C3E50' // Corrigido: adicionado fundo para noite
    }
}