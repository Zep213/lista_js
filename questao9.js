const alunos = [ { nome: 'Ana', nota: 8 }, { nome: 'Carlos', nota: 5 }, {
    nome: 'João', nota: 7 } ];

    function exibirResultados(alunos) {
        for (let i = 0; i < alunos.length; i++) {
            let aluno = alunos[i];
            if (aluno.nota >= 7) {
                console.log(aluno.nome + ": aprovrado")
            }else{
                console.log(aluno.nome + ": reprovado")
            }
        }
    }
    exibirResultados(alunos)