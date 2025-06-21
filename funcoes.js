function logar() {
    var Login = document.getElementById("Login").value;
    var Senha = document.getElementById("Senha").value;

    if (Login == "admin" && Senha == "admin") {
        alert("Logado");
        window.location.href = "home.html";
    } else {
        alert("senha ou usuário incorretos");
    }


}

// Atualiza o relógio
function atualizarRelogio() {
    const agora = new Date();
    const hora = agora.getHours().toString().padStart(2, '0');
    const minuto = agora.getMinutes().toString().padStart(2, '0');
    const segundo = agora.getSeconds().toString().padStart(2, '0');
    document.getElementById('relogio').textContent = `${hora}:${minuto}:${segundo}`;
}

// Atualiza a data do calendário
function atualizarData() {
    const hoje = new Date();
    const opcoes = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dataFormatada = hoje.toLocaleDateString('pt-BR', opcoes);
    document.getElementById('dataAtual').textContent = dataFormatada;
}

// Marca o ponto na tabela
function marcarPonto() {
    const agora = new Date();
    const hora = agora.toLocaleTimeString();
    const dia = agora.getDay(); // 0 = domingo

    document.getElementById('registro').textContent = `Ponto marcado às ${hora}`;

    const ids = ['seg', 'ter', 'qua', 'qui', 'sex'];
    if (dia >= 1 && dia <= 5) {
        const idDia = ids[dia - 1];
        document.getElementById(idDia).textContent = hora;
    } else {
        alert("Hoje não é um dia útil (segunda a sexta).");
    }
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();
atualizarData();
