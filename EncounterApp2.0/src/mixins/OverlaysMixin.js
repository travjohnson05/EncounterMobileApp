import { loadingController, alertController } from '@ionic/vue';


export default {  
  data(){
      return{
          loading: null,
          toast: null,
          modal: null,
          alert: null
      }
  },
  methods: {
    async presentLoading(message) {
      this.loading = await loadingController
        .create({
          message: message ? message : "Loading...",
        });
      await this.loading.present();
      console.log("loading popped");
    },  

    dismissLoading() {
      if(this.loading != null){
          this.loading.dismiss();
      }
      console.log("loading dismissed");
    },

    async presentErrorAlertMessage(message) {
      this.alert = await alertController.create({
        header: 'Oh snap!',
        message: message ? message : "There was a problem!",
        buttons: ['Got it']
      });
      this.alert.present();
    },


  }


}

