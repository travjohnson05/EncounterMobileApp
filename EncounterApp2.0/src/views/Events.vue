<template>
    <base-layout pageTitle="Upcoming Events">
        <strong class="capitalize">{{ $route.params.id }}</strong>
        <ion-card v-for="event in events" :key="event.id" text-wrap>
          <ion-card-header>
            <ion-grid>
              <ion-row class="date-row">
                <ion-col size="4" size-lg="2" class="day-of-week">
                  {{event.startDay}}
                </ion-col>
                <ion-col>
                  <h2>{{event.startMonth}}</h2>
                  <div class="start-time" v-if="event.startTime != null"><ion-icon :icon="timeOutline"></ion-icon>{{event.startTime}}</div>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card-header>
          <ion-card-content>
            <ion-grid>
              <ion-row>
                <ion-col>
                  <h2 class="event-summary">{{event.summary}}</h2>
                  <p>{{event.description}}</p>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card-content>
        </ion-card>
    </base-layout>
</template>

<script>
import { IonCard, IonGrid, IonRow, IonCol, IonCardHeader, IonCardContent } from '@ionic/vue';
import BaseLayout from '@/components/BaseLayout.vue';
import { timeOutline } from 'ionicons/icons';
import OverlaysMixin from '@/mixins/OverlaysMixin';


export default {
  mixins: [OverlaysMixin],
  name: 'Events',
  components: {
    BaseLayout, IonCard, IonGrid, IonRow, IonCol, IonCardHeader, IonCardContent
  },
  setup(){
    return {
      timeOutline,
    }
  },
  data(){
    return {
      events: null
    }
  },
  methods: {
    getEvents(){
      this.presentLoading("Loading Events...");
      this.axios.get("http://localhost:8080/encounter-app-api/events").then((response) => {
        this.events = response.data;
        this.dismissLoading();
      }).catch((error) => {
        console.log(error);
        setTimeout(() => { // is there a better way to dismiss after the async loading pops up?
          this.dismissLoading();
          this.presentErrorAlertMessage("There seems to be a problem with our events feed right now. Please try again later!");
        }, 1000);
      })
    }
  },
  created(){
    this.getEvents();
  }
}
</script>

<style scoped>
  .start-time{
    display: flex;
    align-items: center;
    color: var(--ion-color-primary-shade);
  }
  .start-time ion-icon{
    margin-right: 5px;
  }
  .day-of-week{
      font-size: 6em;
      white-space: nowrap;
  }
  .date-row h2{
      font-size: 2em;
  }
  .event-summary{
    color: var(--ion-color-primary);
  }
  h2{
    font-size: 1.6em;
  }
  ion-card-header{
    padding-bottom: 0px;
  }
</style>