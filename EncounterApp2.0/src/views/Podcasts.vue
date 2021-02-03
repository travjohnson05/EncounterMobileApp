<template>
    <base-layout pageTitle="Podcasts">
        <strong class="capitalize">{{ $route.params.id }}</strong>
        <p>FRICKIN PODCASTS</p>
    </base-layout>
</template>

<script lang="ts">

import BaseLayout from '@/components/BaseLayout.vue';

export default {
  name: 'Podcasts',
  components: {
    BaseLayout
  }
}
</script>