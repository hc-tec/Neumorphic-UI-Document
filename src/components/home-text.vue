<template>
  <div class="home-text">
    <neu-anchor link="/document">
      <h1>Neumorphic UI</h1>
    </neu-anchor>
    <div>
      <h3>放下调色板，停下空洞的想象</h3>
      <h3>让新拟物带给你另一种奇幻感觉。</h3>
      <neu-divider class="divider"></neu-divider>
    </div>
    <home-start-button />
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import HomeStartButton from '../components/home-start-button.vue'

@Component({
  components: {
    'home-start-button': HomeStartButton
  }
})
export default class HomeText extends Vue {

}
</script>
<style lang="scss" scoped>
.home-text {
  button {
    margin: 0 auto;
  }
  h1 {
    font-size: 3rem;
    color: var(--second-color);
  }
  > div {
    text-shadow: var(--text-shadow);
    margin: 20px 0 20px 20px;
    color: var(--primary-color);
    > * {
      margin-bottom: 5px;
    }
    .divider {
      margin: 0 auto;
    }
  }
}

</style>