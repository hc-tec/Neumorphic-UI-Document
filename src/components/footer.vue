<template>
  <footer class="footer">
    <i class="fa fa-copyright"> <a href="https://github.com/hc-tec/neumorphic-ui" target="_blank"> Titto</a></i>
    <p><i class="fa fa-qq">:2598772546</i> <i class="fa fa-phone">:13177666570</i> </p>
  </footer>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Footer extends Vue {

}
</script>
<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>