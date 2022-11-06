
// MILESTONE 1:
// stampare su console le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// organizzare i singoli membri in card/schede

const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];


  //creo una variabile generale "percorso per il percorso dell'immagine"
let path = './assets/img/'

  //recuer con un ciclo le informazioni dall'array di oggetti
  //in questo caso si tratta di un array quiindi per recuperare le informazioni si usa il for
  //una volta recupato l'oggetto desiderato si recupera l'informazione dentro al'oggetto con la dot notation


  for (i=0; i<team.length ; i++){
    // con (team[i]) ho recuperato gli oggetti che ci sono dentro all'array e cosa contengono.
    //console.log(team[i]);

    // dichiaro una variabile che contiene queste informazioni
    let elementiStaff = team[i];
    console.log(elementiStaff)
    // recupero i valori che ci sono dentro agli oggetti con la "chiave" corrispondente e usando la dot notation
    //in questo caso verrà visualizzato a stampa il name dell'ultimo oggetto
    //è cosi perche ha ciclato e stampato tutti i nam degli oggetti e ha sostituito ogni volta quello venchio con quello nuovo
    console.log(elementiStaff.name);
    // dichiaro una variabile dove richiamo il div html che fa da container
    let cardCntHtml = document.getElementById('card-cnt');
    // con innerHTML vado a stampare dentro al div i valori di name
    // con += è come se "appendessi" gli elementi al div e quindi vengono visualizzati tutti
    // se avessi messo solo = avrebbe stampato solo l'ultimo del ciclo 
    //sto "appendendo" una card di bootstrap e dinamicamente sto inserendo i dati degli oggetti dell'array
    //
    cardCntHtml.innerHTML +=`
    <div class="card" style="width: 18rem;">
    <img src="${path +elementiStaff.image  }" class="card-img-top img-fluid " alt="...">
    <div class="card-body">
      <p class="card-text">${elementiStaff.name}</p>
      <p class="card-text">${elementiStaff.role}</p>
     
    </div>
  </div>
  `

  }
















  










