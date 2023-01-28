const sectionCard = document.querySelector("div.constens-projetos")
const card = document.querySelector("div.projetos")

const cads = [
    {
        thumb: "C:/Users/eliel/OneDrive/Documentos/Estudos/projetos/Portifollio/assets/img/jogo-da-velha.png",
        title: "Jogo da velha",
        paragrafo: "fibwfbfwbfwbuwfrbufrwbuwfrbuwfrqbwfrbifrwbfrbufrbufrbufrbuifrqwbuirfqwbuifrbufrebuifrburfbuifrbuifrbuifrbuifrew"
    },
    {
        thumb: "C:/Users/eliel/OneDrive/Documentos/Estudos/projetos/Portifollio/assets/img/cadastro (1).png",
        title: "Tela de Cadastro",
        paragrafo: "fibwfbfwbfwbuwfrbufrwbuwfrbuwfrqbwfrbifrwbfrbufrbufrbufrbuifrqwbuirfqwbuifrbufrebuifrburfbuifrbuifrbuifrbuifrew"
    },
    {
        thumb: "C:/Users/eliel/OneDrive/Documentos/Estudos/projetos/Portifollio/assets/img/cep (1).png",
        title: "Buscador de Cep",
        paragrafo: "fibwfbfwbfwbuwfrbufrwbuwfrbuwfrqbwfrbifrwbfrbufrbufrbufrbuifrqwbuirfqwbuifrbufrebuifrburfbuifrbuifrbuifrbuifrew"
    }
  
]

cads.map(projetos => {
    const cardClone = card.cloneNode(true)
    cardClone.appendChild
})