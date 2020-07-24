<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Content',
  data () {
    return {
      message: 'Content goes here!'
    }
  }
}
</script>

<style scoped>
div {
  margin: auto;
  padding: 4em;
}
</style>
