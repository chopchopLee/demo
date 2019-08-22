<template>
 <el-container>
      <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu router>
            <el-menu-item index="/hello">hello</el-menu-item>
            <el-menu-item index="/test">test</el-menu-item>
        </el-menu>
      </el-aside>
       <el-main>
           <router-view></router-view>
        </el-main>
    </el-container> 
    </el-container>
</template>

<script>
export default { 
    data() {
        return{
            
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header{
    background: #91B8FF;
    line-height: 60px;
}
</style>
