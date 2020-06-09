<template>
  <div class="document-body" ref="documentBody">
    <router-view />
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import highlight from '../utils/highlight';
@Component
export default class DocumentBody extends Vue {
  mounted() {
    highlight();
  }

  updated() {
    highlight();
    this.$nextTick(() => {
      (this.$refs.documentBody as HTMLDivElement).scrollIntoView()
    })
  }
  
  
}
</script>
<style lang="scss">
.document-body {
  padding-left: 350px;
  padding-right: 200px;
  font-size: 14px;
  color: #5e6d82;
  > div > * {
    margin-bottom: 30px;
  }
  h1 {
    margin-bottom: 1rem;
    color: #66ccff;
  }
  pre {
    margin: 10px 0;
    padding: 0 0.5em;
    line-height: 2;
    code {
      text-shadow: none;
    }
  }
  .demo {
    padding: 10px;
    border-radius: 10px;
    .source {
      padding: 1.4rem;
      box-shadow: var(--shadow);
      border-radius: var(--small-radius);
      > div > * {
        margin-bottom: 10px;
        margin-right: 15px;
      }
    }
    .neumorphic-collapse {
      width: 100%;
      height: auto;
    }
  }
  .neumorphic-collapse-item {
    padding: 5px 10px 0 10px;
    overflow: scroll;
    &:not([open]) {
      height: 20%;
    }
    pre, code {
      background-color: transparent;
    }
  }
  .api-table {
    width: 100%;
  }
  
}
@media screen and (max-width: 1000px) {
  .document-body {
    padding-right: 0;
  }
}
</style>