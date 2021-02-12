import { loadingController, alertController, toastController, modalController } from '@ionic/vue';


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
          spinner: 'bubbles'
        });
      await this.loading.present();
    },  

    dismissLoading() {
      if(this.loading != null){
          this.loading.dismiss();
      }
    },

    async presentErrorAlertMessage(message) {
      this.alert = await alertController.create({
        header: 'Oh snap!',
        message: message ? message : "There was a problem!",
        buttons: ['Got it']
      });
      this.alert.present();
    },

    async presentToast(message) {
      this.toast = await toastController
        .create({
          message: message,
          duration: 3000,
          position: 'top'
        })
      return this.toast.present();
    },

    async presentModal(modalVue) {
      this.modal = await modalController
        .create({
          component: modalVue,
          // componentProps: {
          //   title: 'New Title'
          // },
        })
      return this.modal.present();
    }
  }


}

