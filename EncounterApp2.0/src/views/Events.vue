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
                  <p>{{event.startTime}}</p>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card-header>
          <ion-card-content>
            <ion-grid>
              <ion-row>
                <ion-col>
                  <h2>{{event.summary}}</h2>
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


export default {
  name: 'Events',
  components: {
    BaseLayout, IonCard, IonGrid, IonRow, IonCol, IonCardHeader, IonCardContent
  },
  data(){
    return {
      events: null
    }
  },
  methods: {
    getEvents(){
      this.axios.get("http://travj.travjohnson.net/encounter-app-api/events").then((response) => {
        this.events = response.data;
      })
    }
  },
  created(){
    this.getEvents();
  }
}
</script>

<style scoped>
  .day-of-week{
      font-size: 6em;
      white-space: nowrap;
  }
  .date-row h2{
      font-size: 2em;
  }
  h2{
    font-size: 1.6em;
  }
</style>