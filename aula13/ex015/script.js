function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
    
    // Corrigido: .value (não .Value) e verificação correta do valor
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 12) {
            img.setAttribute('src','imagens/menino.png')
            } else if(idade < 18){
                img.setAttribute('src','imagens/garoto.png')
            } else if (idade < 50) {
                img.setAttribute('src','imagens/homem.png')
            } else {
                img.setAttribute('src','imagens/idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src','imagens/menina.png')
            } else if(idade < 18){
                img.setAttribute('src','imagens/garota.png')
            } else if (idade < 50) {
                img.setAttribute('src','imagens/mulher.png')
            } else {
                img.setAttribute('src','imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`;
        res.appendChild(img)
    }
}