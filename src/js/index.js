
const abas = document.querySelectorAll(".aba");


abas.forEach(aba => {

    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")) {
            return;
        }

        selecionarAba(aba)
        
        mostrarInfoDaAba(aba)
    });
});

function selecionarAba(aba){
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    aba.classList.add("selecionado")
}

function mostrarInfoDaAba(aba){
    const informacaoSelecionada = document.querySelector(".info.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    const idDoElementoInfoAba = `info-${aba.id}`

    const infoASerMostrada = document.getElementById(idDoElementoInfoAba)

    infoASerMostrada.classList.add("selecionado")
}