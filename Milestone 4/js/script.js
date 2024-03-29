// Milestone 4
// ● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome 
// contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono 
//    solo Marco e Martina)

const app = new Vue({
    el: "#root",
    data: {
      active:0,
      newMexText:'',
      searchTextUser:'',
      contacts: [
        {
          name: "Michele",
          avatar: "_1",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di stendere i panni",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "_2",
          visible: true,
          messages: [
            {
              date: "20/03/2020 16:30:00",
              message: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "sent",
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "_3",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              message: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro B.",
          avatar: "_4",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro L.",
          avatar: "_5",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ricordati di chiamare la nonna",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Va bene, stasera la sento",
              status: "received",
            },
          ],
        },
        {
          name: "Claudia",
          avatar: "_6",
          visible: true,
          messages: [
          {
              date: "10/01/2020 15:30:55",
              message: "Ciao Claudia, hai novità?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Non ancora",
              status: "received",
            },
           {
              date: "10/01/2020 15:51:00",
              message: "Nessuna nuova, buona nuova",
              status: "sent",
            },
          ],
        },
        {
          name: "Federico",
          avatar: "_7",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Fai gli auguri a Martina che è il suo compleanno!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Grazie per avermelo ricordato, le scrivo subito!",
              status: "received",
            },
          ],
        },
        {
          name: "Davide",
          avatar: "_8",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao, andiamo a mangiare la pizza stasera?",
              status: "received",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "OK!!",
              status: "received",
            },
          ],
        },
      ],
    },

    methods: {

      tapToClick(index){
        this.active = index;

        const adesso = new Date();
      },

    //  getHoursMinutes(dateToFormat){
     //   const dateToFormat = this.contacts[index].messages[0].date;
      // const array = dateToFormat.split(" "); // ["10/01/2020",  "15:30:55"]
      //  const ora = array[1]; // "15:30:55"
      //  const arrayOra = ora.split(":"); // ["15", "30", "55"]
     //   const oreMinuti = arrayOra[0] + ":" + arrayOra[1]; // "15:30"
    //    console.log(oreMinuti);
  
     //   const adesso = new Date();
   //     console.log(adesso.getHours() + ":" + adesso.getMinutes());
      // },

      sendMessage(){ 
        console.log(this.newMexText)
        const selectedContact = this.contacts[this.active];
         selectedContact.messages.push(
          {
            date:this.getNow(),
            message:this.newMexText,
            status: "sent",
          },
        );

        setTimeout(()=>{ selectedContact.messages.push(
          {
            date:this.getNow(),
            message:'Ok!',
            status: "received",
          },
        );},2000)


        this.newMexText = ''; 
      },
      
      
      getNow(){
        const now = new Date();

        const hours = this.formatDate(now.getHours());
        const minutes = this.formatDate(now.getMinutes());
        const seconds = this.formatDate(now.getSeconds());
        const day = this.formatDate(now.getDay());
        const month = this.formatDate(now.getMonth()+ 1);
        const year = now.getFullYear();
        return `${day}/${month}/${year}/${hours}:${minutes}:${seconds}`;
        



      },
      
      formatDate (datePart){
        return datePart < 10 ? '0' + datePart : datePart;

      },

     searchUser() {
      
      this.contacts.forEach((item, index) => {
        console.log(item.name.toLowerCase());
        console.log(this.searchTextUser.toLowerCase());
      
        if(item.name.toLowerCase().includes(this.searchTextUser.toLowerCase())) {
          item.visible = true;
        } 
       else{
        item.visible = false;
       }
          
        
      });
    }
      
    },
  });
  
  
  