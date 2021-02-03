<template>
    <base-layout pageTitle="Home">
        <strong class="capitalize">{{ $route.params.id }}</strong>
        <p>FRICKIN HOME</p>
    </base-layout>
</template>

<script>

import BaseLayout from '@/components/BaseLayout.vue';

export default {
  name: 'Home',
  components: {
    BaseLayout
  }
}
</script>