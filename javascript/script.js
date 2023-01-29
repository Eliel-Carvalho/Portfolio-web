const sectionCard = document.querySelector("div.contens-projetos")

const card = document.querySelector("div.projetos")

const cards = [
    {
        thumb: "assets/img/internet.png",
        title: "Freelancer",
        paragrafo: "atuando como desenvolvedor lider, responsavel por toda a parte visual e tecnica, trabalhando com uma equipe de 4 pessoas. desenvolmemos uma rede social pessoal, postagens de fotos, videos, curtidas e comentarios"
    },
    {
        thumb: "assets/img/jogo-da-velha.png",
        title: "Jogo da Velha",
        paragrafo: "atuando como desenvolvedor lider, responsavel por toda a parte visual e tecnica, trabalhando com uma equipe de 4 pessoas. desenvolmemos uma rede social pessoal, postagens de fotos, videos, curtidas e comentarios"
    },
    {
        thumb: "assets/img/cep (1).png",
        title: "Buscador de Cep",
        paragrafo: "atuando como desenvolvedor lider, responsavel por toda a parte visual e tecnica, trabalhando com uma equipe de 4 pessoas. desenvolmemos uma rede social pessoal, postagens de fotos, videos, curtidas e comentarios"
    },
    {
        thumb: "assets/img/cadastro (2).png",
        title: "Tela de Cadastro",
        paragrafo: "atuando como desenvolvedor lider, responsavel por toda a parte visual e tecnica, trabalhando com uma equipe de 4 pessoas. desenvolmemos uma rede social pessoal, postagens de fotos, videos, curtidas e comentarios"
    }
  
]

cards.map(projetos => {
    const cardClone = card.cloneNode(true)
    cardClone.querySelector("img").src = projetos.thumb
    cardClone.querySelector("h3").innerHTML = projetos.title
    cardClone.querySelector("p").innerHTML = projetos.paragrafo
    sectionCard.appendChild(cardClone)
})
card.remove()