<template>
    <base-layout pageTitle="Podcasts">
        <strong class="capitalize">{{ $route.params.id }}</strong>
        <ion-card v-for="podcast in podcasts" :key="podcast.id" text-wrap>
          <!-- <audio-track #audio [track]="podcast">
          </audio-track> -->
        <ion-card-header>
          {{podcast.title}}
        </ion-card-header>
        <!-- <ion-card-content>{{podcast.content}}</ion-card-content> -->
        <ion-grid>
          <ion-row>
            <ion-col>
              <button primary >
                <ion-icon name="play"></ion-icon>
                Play
              </button>
            </ion-col>
            <ion-col>
              <button primary >
                <ion-icon name="pause"></ion-icon>
                Pause
              </button>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-card>
    </base-layout>
</template>

<script>

import { IonCard, IonRow, IonCol, IonCardHeader, IonGrid} from '@ionic/vue';
import BaseLayout from '@/components/BaseLayout.vue';
import OverlaysMixin from '@/mixins/OverlaysMixin';

export default {
  name: 'Podcasts',
  mixins: [OverlaysMixin],
  components: {
    BaseLayout, IonCard, IonRow, IonCol, IonCardHeader, IonGrid
  },
  data(){
    return {
      podcasts: null
    }
  },
  methods: {
    getPodcasts(){
      this.presentLoading("Loading Podcasts...");
      this.axios.get("http://travj.travjohnson.net/encounter-app-api/podcasts").then((response) => {
        this.podcasts = response.data;
        this.dismissLoading();
      }).catch((error) => {
        console.log(error);
        setTimeout(() => { // is there a better way to dismiss after the async loading pops up?
          this.dismissLoading();
          this.presentErrorAlertMessage("There seems to be a problem with our podcast feed right now. Please try again later!");
        }, 1000);
      })
    }
  },
  created(){
    this.getPodcasts();
  }
}
</script>