<template>
    <base-layout pageTitle="Sign Ups">
        <strong class="capitalize">{{ $route.params.id }}</strong>
        <p>FRICKIN SIGNUPS</p>
    </base-layout>
</template>

<script>

import BaseLayout from '@/components/BaseLayout.vue';

export default {
  name: 'Signups',
  components: {
    BaseLayout
  }
}
</script>