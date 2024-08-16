document.addEventListener('DOMContentLoaded', () => {

  const cardArray = [
    {
      name: '1',
      img:"https://cloud-olwelsnif.vercel.app/39.png"
    },
    {
      name: '2',
      img:"https://cloud-olwelsnif.vercel.app/74.png"
    },
    {
      name: '3',
      img:"https://cloud-olwelsnif.vercel.app/28.png"
    },
    {
      name: '4',
      img:"https://cloud-olwelsnif.vercel.app/57.png"
    },
    {
      name: '5',
      img:"https://cloud-5ystxzer7.vercel.app/06.png"
    },
    {
      name: '6',
      img:"https://cloud-5ystxzer7.vercel.app/11.png"
    },
    {
      name: '7',
      img:"https://cloud-5ystxzer7.vercel.app/55.png"
    },
    {
      name: '8',
      img:"https://cloud-5ystxzer7.vercel.app/33.png"
    },
    {
      name: '9',
      img:"https://cloud-5ystxzer7.vercel.app/22.png"
    },
    {
      name: '10',
      img:"https://cloud-olwelsnif.vercel.app/010.png"
    },
    {
      name: '11',
      img:"https://cloud-olwelsnif.vercel.app/65.png"
    },
    {
      name: '12',
      img:"https://cloud-olwelsnif.vercel.app/83.png"
    },
    {
      name: '13',
      img:"https://cloud-olwelsnif.vercel.app/111.png"
    },
    {
      name: '14',
      img:"https://cloud-olwelsnif.vercel.app/91.png"
    },
    {
      name: '15',
      img:"https://cloud-mzq1pmqof.vercel.app/612.png"
    },
    {
      name: '16',
      img:"https://cloud-mzq1pmqof.vercel.app/52.png"
    },
    {
      name: '17',
      img:"https://cloud-mzq1pmqof.vercel.app/411.png"
    },
    {
      name: '18',
      img:"https://cloud-mzq1pmqof.vercel.app/37.png"
    },
    {
      name: '19',
      img:"https://cloud-mzq1pmqof.vercel.app/29.png"
    },
    {
      name: '20',
      img:"https://cloud-mzq1pmqof.vercel.app/18.png"
    },
    {
      name: '21',
      img:"https://cloud-mzq1pmqof.vercel.app/010.png"
    },
    {
      name: '1',
      img:"https://cloud-olwelsnif.vercel.app/39.png"
    },
    {
      name: '2',
      img:"https://cloud-olwelsnif.vercel.app/74.png"
    },
    {
      name: '3',
      img:"https://cloud-olwelsnif.vercel.app/28.png"
    },
    {
      name: '4',
      img:"https://cloud-olwelsnif.vercel.app/57.png"
    },
    {
      name: '5',
      img:"https://cloud-5ystxzer7.vercel.app/06.png"
    },
    {
      name: '6',
      img:"https://cloud-5ystxzer7.vercel.app/11.png"
    },
    {
      name: '7',
      img:"https://cloud-5ystxzer7.vercel.app/55.png"
    },
    {
      name: '8',
      img:"https://cloud-5ystxzer7.vercel.app/33.png"
    },
    {
      name: '9',
      img:"https://cloud-5ystxzer7.vercel.app/22.png"
    },
    {
      name: '10',
      img:"https://cloud-olwelsnif.vercel.app/010.png"
    },
    {
      name: '11',
      img:"https://cloud-olwelsnif.vercel.app/65.png"
    },
    {
      name: '12',
      img:"https://cloud-olwelsnif.vercel.app/83.png"
    },
    {
      name: '13',
      img:"https://cloud-olwelsnif.vercel.app/111.png"
    },
    {
      name: '14',
      img:"https://cloud-olwelsnif.vercel.app/91.png"
    },
    {
      name: '15',
      img:"https://cloud-mzq1pmqof.vercel.app/612.png"
    },
    {
      name: '16',
      img:"https://cloud-mzq1pmqof.vercel.app/52.png"
    },
    {
      name: '17',
      img:"https://cloud-mzq1pmqof.vercel.app/411.png"
    },
    {
      name: '18',
      img:"https://cloud-mzq1pmqof.vercel.app/37.png"
    },
    {
      name: '19',
      img:"https://cloud-mzq1pmqof.vercel.app/29.png"
    },
    {
      name: '20',
      img:"https://cloud-mzq1pmqof.vercel.app/18.png"
    },
    {
      name: '21',
      img:"https://cloud-mzq1pmqof.vercel.app/010.png"
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())
    const placeholder = "https://cloud-5ystxzer7.vercel.app/7placeholder.png"
    const blank = "background.jpg"
    const grid = document.querySelector('.grid')
    const result1 = document.querySelector('#result1')
    const result2 = document.querySelector('#result2')
    const p1 = document.querySelector('#p1')
    const p2 = document.querySelector('#p2')
    console.log([p1, p2])
    var cardsChosen = []
    var cardsChosenId = []
    const cardsMatchedBy1 = []
    const cardsMatchedBy2 = []
    var player1 = true
    var player2 = false

    function createGrid() {
      for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', placeholder)
        card.setAttribute('data-id', i)
        card.setAttribute('class', 'tile')
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }

    function checkMatch() {
      var cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]

      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', placeholder)
        cards[optionTwoId].setAttribute('src', placeholder)
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {

        cards[optionOneId].setAttribute('src', blank)
        cards[optionTwoId].setAttribute('src', blank)
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        if(player1){
          cardsMatchedBy1.push(cardsChosen)
        }
        else if(player2){
          cardsMatchedBy2.push(cardsChosen)
        }

      } else {
        setTimeout(() => {
          cards[optionOneId].setAttribute('src', placeholder)
          cards[optionTwoId].setAttribute('src', placeholder)
          if(player1){
            player1=false
            player2=true
          }
          else if(player2){
            player2=false
            player1=true
          }
        }, 500)
        currentPlayer()
      }
      cardsChosen = []
      cardsChosenId = []
      // current player
      function currentPlayer(){
        if(player1){
          p2.classList.add("active")
          p1.classList.remove("active")
        }
        else{
          p1.classList.add("active")
          p2.classList.remove("active")
        }
      }



      if(player1){
        result1.textContent = cardsMatchedBy1.length 
      }
      else if(player2){
        result2.textContent = cardsMatchedBy2.length
      }

    }

    //flip card
    function flipCard() {
      var cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkMatch, 500)
      }
    }    

    createGrid()
})