<template>
  <div id="app">
    <div id="add-wrapper">
      <router-view/>
    </div>
    <PageFooter />
  </div>
</template>

<script>
import PageFooter from './components/footer'
export default {
  components: {
    PageFooter
  }
}
</script>

<style lang="scss">
#app {
  height: 89vh;
  padding: 40px;
  background-color: rgb(228,235,245);
  overflow: hidden;
  #add-wrapper {
    box-shadow: var(--shadow);
    padding: 20px;
    max-height: 600px;
    overflow: scroll;
    margin-bottom: 20px;
  }
}

</style>
