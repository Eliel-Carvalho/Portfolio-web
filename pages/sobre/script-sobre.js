
const sectionHabilidades = document.querySelector("div.contens-cards")
const cardSoft = document.querySelector("div.card")

const cards = [
    {
       thumb: "/assets/img/marketing.png",
       title: "Comunicação",
       paragrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque suscipit optio enim blanditiis laborum quas, aut harum eos! Quas impedit fugit neque iure velit placeat alias numquam veritatis aliquid rerum.",
       atribut: "icon-comunicação"
    },
    {
       thumb: "/assets/img/trabalho-em-equipe.png",
       title: "Trabalho em Equipe",
       paragrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque suscipit optio enim blanditiis laborum quas, aut harum eos! Quas impedit fugit neque iure velit placeat alias numquam veritatis aliquid rerum.",
       atribut: "icon-trabalho-em-equipe"
    },
    {
       thumb: "/assets/img/resiliencia.png",
       title: "Resiliência",
       paragrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque suscipit optio enim blanditiis laborum quas, aut harum eos! Quas impedit fugit neque iure velit placeat alias numquam veritatis aliquid rerum.",
       atribut: "icon-Resiliência"
    },
    {
       thumb: "/assets/img/gerenciamento-de-tempo.png",
       title: "Gerenciamento de Tempo",
       paragrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque suscipit optio enim blanditiis laborum quas, aut harum eos! Quas impedit fugit neque iure velit placeat alias numquam veritatis aliquid rerum.",
       atribut: "icon-gerenciamento-de-tempo"
    },
    {
       thumb: "/assets/img/proativo.png",
       title: "Proatividade",
       paragrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque suscipit optio enim blanditiis laborum quas, aut harum eos! Quas impedit fugit neque iure velit placeat alias numquam veritatis aliquid rerum.",
       atribut: "icon-proatividade"
    }
]

cards.map(comunication => {
    const cardClone = cardSoft.cloneNode(true)
    cardClone.setAttribute( "alt", comunication.atribut)
    cardClone.querySelector("img").src = comunication.thumb
    cardClone.querySelector("h3").innerHTML = comunication.title
    cardClone.querySelector("p").innerHTML = comunication.paragrafo

    sectionHabilidades.appendChild(cardClone)
})

cardSoft.remove()

