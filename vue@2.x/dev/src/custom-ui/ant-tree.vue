<template>
  <div class="hello">

    <a-tree
      blockNode
      :tree-data="treeData"
      :replaceFields="replaceFields"
      :expandedKeys="expandedKeys"
      draggable
      showIcon
      switcherIcon
      @select="handleSelect"
    >
      <!-- 展开/折叠图标 -->
      <template slot="folderIcon" slot-scope="{ selected }">
        <a-icon theme='twoTone' :type="selected ? 'folder' : 'folder-open'" />
      </template>
      <!-- 标题、三个点 -->
      <template slot="folderTitle" slot-scope="item">
        <span style="width: 100%; display: inline-flex; align-items: center; justify-content: space-between;">
          <span>{{item.name}}</span>
          <a-dropdown>
            <a-icon type="ellipsis" />
            <a-menu slot="overlay">
              <a-menu-item key="1">1nd menu item </a-menu-item>
              <a-menu-item key="2">2nd menu item </a-menu-item>
              <a-menu-item key="3">3rd item </a-menu-item>
            </a-menu>
          </a-dropdown>
        </span>
      </template>

      <!-- 子节点markdown -->
      <a-icon slot="markdown" type="file-markdown" />
      <!-- 子节点三个点 -->
      <template slot="markdownTitle" slot-scope="item">
        <span style="width: 100%; display: inline-flex; align-items: center; justify-content: space-between;">
          <span>{{item.name}}</span>
          <a-dropdown>
            <a-icon type="ellipsis" />
            <a-menu slot="overlay"><a-menu-item key="1">1nd menu item </a-menu-item></a-menu>
          </a-dropdown>
        </span>
      </template>
      <!-- 子节点markdown -->
      <a-icon slot="pdf" type="file-pdf" />
      <!-- 子节点三个点 -->
      <template slot="pdfTitle" slot-scope="item">
        <span style="width: 100%; display: inline-flex; align-items: center; justify-content: space-between;">
          <span>{{item.name}}</span>
          <a-dropdown>
            <a-icon type="ellipsis" />
            <a-menu slot="overlay"><a-menu-item key="1">1nd menu item </a-menu-item></a-menu>
          </a-dropdown>
        </span>
      </template>
    </a-tree>

  </div>
</template>

<script>
const treeData = [
  {
    name: 'folder',
    data_id: '0-0',
    scopedSlots: { icon: 'folderIcon', title: 'folderTitle' },
    children: [
      { name: 'markdown', data_id: '0-0-0', scopedSlots: { icon: 'markdown', title: 'markdownTitle' } },
      { name: 'pdf', data_id: '0-0-1', scopedSlots: { icon: 'pdf', title: 'pdfTitle' } }
    ]
  }
]

export default {
  name: 'HelloWorld',

  /**
   * @type data
   * treeData 数据
   * replaceFields 替换对应的字段
   * expandedKeys 展开指定的树节点
   */
  data () {
    return {
      treeData,
      replaceFields: { children: 'children', title: 'name', key: 'data_id' },
      expandedKeys: ['0-0']
    }
  },

  methods: {
    // click tree node
    handleSelect (key, e) {
      // 1. 获取数据 push children
      // 2. 折叠
      const includesKeys = this.expandedKeys
      const clickNodeId = e.node.dataRef.data_id
      const ifExpandedKeys = includesKeys.findIndex(item => (item === clickNodeId))
      if (ifExpandedKeys === -1) {
        this.expandedKeys = [...includesKeys, clickNodeId]
      } else {
        this.expandedKeys.splice(ifExpandedKeys, 1)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 200px;
  height: 100vh;
  background: #f9f9f9f9;
}

/* 目录树样式校正 */
/* 删调折叠图标 */
.ant-tree /deep/ .ant-tree-switcher {
  display: none;
}
/* 校正图标与字体位置 */
.ant-tree /deep/ .ant-tree-node-content-wrapper {
  display: inline-flex;
  align-items: center;
}
/* 文字与三个点的位置 */
.ant-tree /deep/ .ant-tree-title {
  width: 100%;
}
/* 三个点显示隐藏 */
.ant-tree /deep/ .ant-dropdown-trigger {
  visibility: hidden;
}
.ant-tree /deep/ .ant-tree-node-content-wrapper:hover .ant-dropdown-trigger {
  visibility: visible;
}
</style>
