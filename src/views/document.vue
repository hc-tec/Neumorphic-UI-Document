<template>
  <div class="document">
    <document-nav />
    <document-body />
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import DocumentNav from '../components/document-nav.vue'
import DocumentBody from '../components/document-body.vue'
@Component({
  components: {
    'document-nav': DocumentNav,
    'document-body': DocumentBody
  }
})
export default class Document extends Vue {

}
</script>
<style lang="scss" scoped>
.document {
  min-height: 600px;
}
</style>