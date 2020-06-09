<template>
  <div>
    <h1>Nav 导航栏</h1>
    <h3>引路人</h3>
    <h2>基本用法</h2>
    <p>navItem 是实际上是 Anchor，用法基本相同，不过有些属性转移到了nav上，方便统一管理。</p>
    <p>mode 两种值 vertical 与 horizon 可以控制导航栏是竖直还是水平方向，默认为 vertical</p>
    <source-code :source_code="source_code">
      <neu-nav>
        <neu-navitem 
          v-for="link in linkList"
          :key="link.title"
          :link="link.link">
          {{ link.title }}
        </neu-navitem>
      </neu-nav>
      <neu-nav mode="horizon">
        <neu-navitem 
          v-for="link in linkList"
          :key="link.title"
          :link="link.link">
          {{ link.title }}
        </neu-navitem>
      </neu-nav>
    </source-code>
    <h2>路由模式切换</h2>
    <source-code :source_code="source_code2">
      <neu-nav 
        mode="horizon"
        :router="false">
        <neu-navitem 
          v-for="link in myBlogList"
          :key="link.title"
          :link="link.link"
          color="red">
          {{ link.title }}
        </neu-navitem>
      </neu-nav>
    </source-code>
    <h2>图标链接</h2>
    <source-code :source_code="source_code3">
      <neu-nav 
        mode="horizon"
        :router="false"
        circle>
        <neu-navitem 
          style="font-size:2rem;"
          v-for="link in iconList"
          :key="link.title"
          :link="link.link"
          :icon="link.icon">
        </neu-navitem>
      </neu-nav>
    </source-code>
    <h2>Nav Attributes</h2>
    <arrt-table :tableRowData="tableRowData">
    </arrt-table>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import sourceCode from '../source.vue'
import ArrtTable from '../attribute-table.vue'
@Component({
  components: {
    'source-code': sourceCode,
    'arrt-table': ArrtTable
  }
})
export default class NavMenu extends Vue {

  private tableRowData: Record<string, string>[] = [
    {
      '参数': 'mode',
      '说明': '决定导航栏方向(水平/竖直)',
      '类型': 'string',
      '可选值': 'vertical / horizon',
      '默认值': 'vertical'
    },
    {
      '参数': 'router',
      '说明': '是否启用单页面链接',
      '类型': 'boolean',
      '可选值': '--',
      '默认值': 'true'
    },
    {
      '参数': 'size',
      '说明': '导航按钮大小',
      '类型': 'string',
      '可选值': 'large / normal / small / mini / supermini',
      '默认值': 'normal'
    },
    {
      '参数': 'circle',
      '说明': '是否采用圆形按钮',
      '类型': 'boolean',
      '可选值': '--',
      '默认值': 'false'
    }
  ]

  

  private linkList: Record<string, string>[] = [
    {
      'title': '首页',
      'link': '/'
    },
    {
      'title': '博文',
      'link': '/'
    },
    {
      'title': '归档',
      'link': '/'
    },
    {
      'title': '关于',
      'link': '/'
    }
  ]

  private myBlogList: Record<string, string>[] = [
    {
      'title': '首页',
      'link': 'http://ncuteam.top/#/'
    },
    {
      'title': '博文',
      'link': 'http://ncuteam.top/#/web'
    },
    {
      'title': '归档',
      'link': 'http://ncuteam.top/#/file'
    },
    {
      'title': '近期目标',
      'link': 'http://ncuteam.top/#/todoList'
    },
  ]

  private iconList: Record<string, string>[] = [
    {
      'icon': 'fa fa-github',
      'link': 'https://github.com/hc-tec/neumorphic-ui'
    },
    {
      'icon': 'fa fa-home',
      'link': 'https://ncuteam.top/#/'
    },
    {
      'icon': 'fa fa-paper-plane',
      'link': '#'
    }
  ]

  private source_code = 
`
<template>
  <div>
    <neu-nav>
      <neu-navitem 
        v-for="link in linkList"
        :key="link.title"
        :link="link.link">
        {{ link.title }}
      </neu-navitem>
    </neu-nav>
    <neu-nav mode="horizon">
      <neu-navitem 
        v-for="link in linkList"
        :key="link.title"
        :link="link.link">
        {{ link.title }}
      </neu-navitem>
    </neu-nav>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class NavMenu extends Vue {
  private linkList: Record<string, string>[] = [
    {
      'title': '首页',
      'link': '/'
    },
    {
      'title': '博文',
      'link': '/'
    },
    {
      'title': '归档',
      'link': '/'
    },
    {
      'title': '关于',
      'link': '/'
    }
  ]
}
<\/script>
`
  private source_code2 = 
`
<template>
  <div>
    <neu-nav 
      mode="horizon"
      :router="false">
      <neu-navitem 
        v-for="link in myBlogList"
        :key="link.title"
        :link="link.link"
        color="red">
        {{ link.title }}
      </neu-navitem>
    </neu-nav>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class NavMenu extends Vue {
  private myBlogList: Record<string, string>[] = [
    {
      'title': '首页',
      'link': 'http://ncuteam.top/#/'
    },
    {
      'title': '博文',
      'link': 'http://ncuteam.top/#/web'
    },
    {
      'title': '归档',
      'link': 'http://ncuteam.top/#/file'
    },
    {
      'title': '近期目标',
      'link': 'http://ncuteam.top/#/todoList'
    },
  ]
}
<\/script>
`  
  private source_code3 = 
`
<template>
  <div>
    <neu-nav 
      mode="horizon"
      :router="false"
      circle>
      <neu-navitem 
        style="font-size:2rem;"
        v-for="link in iconList"
        :key="link.title"
        :link="link.link"
        :icon="link.icon">
      </neu-navitem>
    </neu-nav>
  </div>
<template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class NavMenu extends Vue {
  private iconList: Record<string, string>[] = [
    {
      'icon': 'fa fa-github',
      'link': 'https://github.com/hc-tec/neumorphic-ui'
    },
    {
      'icon': 'fa fa-home',
      'link': 'https://ncuteam.top/#/'
    },
    {
      'icon': 'fa fa-paper-plane',
      'link': '#'
    }
  ]
}
<\/script>
`

}
</script>
<style scoped>
</style>