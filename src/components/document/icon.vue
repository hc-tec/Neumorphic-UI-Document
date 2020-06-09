<template>
  <div>
    <h1>Icon 图标</h1>
    <h4>推荐使用 Font Awesome 提供的图标(因为本人不会制作Icon啊 qwq)</h4>
    <h2 ref="iconList">下面是从菜鸟教程爬来的 Font-Awesome 图标集合</h2>
    <ul class="icon-list">
      <li 
        v-for="(icon,index) in currentIcons"
        :key="icon+index">
        <i :class="icon"></i>
        <span>{{ icon }}</span>
      </li>
    </ul>
    <neu-pagination 
      :total="785" 
      :pageSize="singlePageCount"
      v-model="currentPage"
      @page-change="pageChange($event)"
      shadow>

    </neu-pagination>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch } from 'vue-property-decorator'
import { ajaxGet } from '../../utils/http';
@Component
export default class Icon extends Vue {

  private font_awesome: string[] = [];

  private currentIcons: string[] = [];

  private totalPage: number = 0;

  private singlePageCount: number = 80;

  private currentPage: number = 1;

  private getFontAwesome() {
    ajaxGet(
      '/json/font-awesome.json', {},
      this.getFontAwesomeResponse, (e) => (console.log(e)), []
    )
  }
  private getFontAwesomeResponse(res: any) {
    this.font_awesome = res.data;
    
    // this.totalPage = res.data.length;
    this.currentIcons = res.data.slice(0, this.singlePageCount);
    // console.log(this.totalPage)
  }

  private pageChange(currentPage: number) {
    const icons = currentPage*80;
    this.currentIcons = this.font_awesome.slice((currentPage-1)*80,(icons > 785 ? 785 : icons));
    (this.$refs.iconList as HTMLUListElement).scrollIntoView()
  }

  @Watch('totalPage')
  totalNumberChange(newValue: number) {
    this.totalPage = newValue;
  }

  mounted() {
    this.getFontAwesome();
  }
  

}
</script>
<style lang="scss" scoped>
.icon-list {
  margin: 10px 0;
  font-size: 14px;
  color: #5e6d82;
  line-height: 2em;
  overflow: hidden;
  list-style: none;
  padding: 0!important;
  border: 1px solid #eaeefb;
  border-radius: 4px;
  li {
    float: left;
    width: 18%;
    height: 120px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    padding: 5px;
    color: #606266;
    border: 1px solid #aba3a340;
    border-collapse: collapse;
    transition: color .2s linear, box-shadow .2s linear;
    &:hover {
      color: #66ccff;
      box-shadow: var(--shadow);
    }
    i {
      display: block;
      font-size: 32px;
      margin-bottom: 15px;
    }
    span {
      font-size: .7rem;
    }
  }
}
</style>