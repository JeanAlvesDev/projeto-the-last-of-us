alert('Ateção seu dispositivo foi contaminado com Cavalo de Troia e sera desligado')
/* objetivo: quando a gente clicar no botao, temos que mostrar a imagem de fundo que corresponde
- passo 1- dar um jeito de pegar o elemento HTML dos botoes
 - passo 2- dar um jeito de identificar o clique do usuario do botao
 - passo 3- desmarcar o botao selecionado anterior
 - passo 4- marcar o botao clicando como se tivese selecionado
 - passo 5- esconder a imagem fundo anterior
 - passo 6 - fazer aparecer a imagem fundo correspondente ao botao
*/

//passo 1- dar um jeito de pegar o elemento HTML dos botoes
document.querySelectorAll('.botao'); //vai pegar elementos que tem classe botao
const botoesCarrossel = document.querySelectorAll('.botao')
const imagens = document.querySelectorAll('.imagem');

// - passo 2- dar um jeito de identificar o clique do usuario do botao

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        console.log('clicou no botao');
        //- passo 3- desmarcar o botao selecionado anterior
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        //- passo 4- marcar o botao clicando como se tivese selecionado
        botao.classList.add('selecionado'); //fez clicar o botao ver ir em todos carrosel (.) ir clicando e selecionando como se fosse trocar imagem (.)

        //- passo 5- esconder a imagem ativa fundo anterior
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        //- passo 6 - fazer aparecer a imagem fundo correspondente ao botao
        imagens[indice].classList.add('ativa');

    })
})

