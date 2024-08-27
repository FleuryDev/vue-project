

<template>
  <el-dropdown @command="handleCommand">
    <span class="el-dropdown-link flex flex-col">
      <span>
        {{title }} <el-icon class="el-icon--right"><arrow-down/></el-icon>
      </span>
      <small id="ol">{{  selectedval }}</small>
    </span>
    <template #dropdown>
      <el-dropdown-menu >
        <el-dropdown-item  v-for="(item, i) in items" :key="i" @click="selectedOption( item )" command="a">{{ item }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>


<script>
 export default {
    data() {
        return {
            selectedval: '',
        }
    },
    methods: {
        selectedOption(e){
            this.selectedval = e
        }
    },
    props : ['title','items']
 }
</script>
<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
el-dropdown-menu,el-dropdown-item{
    z-index: 75555722421566666666666663 !important;
}
</style>
