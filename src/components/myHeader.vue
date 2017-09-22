<template>
        <header id="myheader" >
                <mt-search class="pili" v-model="value"  ancel-text="取消"  placeholder="女包">
                <h5 style='fontSize:.38rem;padding-top:.16rem;padding-left:.16rem'>热门搜索</h5>
                <ul class='myheader_ul'>
                    <li ><img src="../assets/yifu.png" alt=""></li>
                    <li><img src="../assets/yifu.png"  alt=""></li>
                    <li><img src="../assets/shoubiao.png"  alt=""></li>
                    <li><img src="../assets/shoubiao.png"  alt=""></li>
                </ul>
                </mt-search>
        </header>
</template>

<script>
export default{

    data:function(){
        return {
            value:"",
        }
    },
    methods:{

    },
    props:['']

}
</script>

<style>
</style>