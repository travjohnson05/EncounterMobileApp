<template>
    <base-layout pageTitle="Upcoming Events">
        <strong class="capitalize">{{ $route.params.id }}</strong>
        <p>FRICKIN EVENTS</p>
    </base-layout>
</template>

<script lang="ts">
// import { IonButtons } from '@ionic/vue';
import BaseLayout from '@/components/BaseLayout.vue';

export default {
  name: 'Events',
  components: {
    BaseLayout
  }
}
</script>