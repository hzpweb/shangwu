<template>

  <el-tabs v-model="activeName" @tab-click="handleClick" class='calssify_list'>
    <slot name="first">
    <el-tab-pane label="专场" name="first">
                  <product-list>
                          <div slot='two_row'>

                          </div>
                          <div slot='three_row'>

                          </div>
                  </product-list>
    </el-tab-pane>
    </slot>
    <slot name="second">
    <el-tab-pane label="服饰" name="second">
                  <product-list>
                          <div slot='one_row'>

                          </div>
                          <div slot='three_row'>

                          </div>
                  </product-list>
    </el-tab-pane>
    </slot>
    <slot name="third">
    <el-tab-pane label="美妆" name="third">
                  <product-list>
                          <div slot='one_row'>

                          </div>
                          <div slot='two_row'>

                          </div>
                  </product-list>
    </el-tab-pane>
    </slot>
    <slot name='fifth'>
    <el-tab-pane label="轻奢" name="fourth">
                  <product-list>
                          <div slot='one_row'>

                          </div>
                          <div slot='three_row'>

                          </div>
                  </product-list>
    </el-tab-pane>
    </slot>
    <slot name='seventh'>
    <el-tab-pane label="办公" name="five">
                  <product-list>
                  </product-list>
    </el-tab-pane>
    </slot>
    <slot name='eighth'>
    <el-tab-pane label="运动" name="six">
                  <product-list>
                          <div slot='one_row'>

                          </div>
                          <div slot='two_row'>

                          </div>
                  </product-list>
    </el-tab-pane>
    </slot>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
      }
    }
  };
</script>