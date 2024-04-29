// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

//alert("ciao")

const { createApp } = Vue;
createApp({
  data() {
    return {
      emails: [],
    };
  },
  //   created() {
  //     this.generateEmails(10); // Chiamo il metodo per generare 10 email se lo voglio generare al caricamento della pagina
  //   },
  methods: {
    //Tolgo il parametro (numEmails) ed inserisco 10
    generateEmails() {
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((randomEmail) => {
            console.log(randomEmail);
            this.emails.push(randomEmail.data.response);
          });
      }
      this.emails = [];
      console.log("__________", this.emails);
    },
  },
}).mount("#app");
