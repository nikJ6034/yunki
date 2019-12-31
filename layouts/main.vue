<template>
  <div>
    <baseHeader />
    <nuxt />
    <baseFooter />
  </div>
</template>

<script>
import baseHeader from '~/layouts/base/header.vue'
import baseFooter from '~/layouts/base/footer.vue'

export default {
  components: {
    baseHeader,
    baseFooter
  }
}
</script>
