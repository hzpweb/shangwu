<template>
    <div class="product_list">
            <slot name="one_row">
                        <ul class='one_row'>
                           <li><img src="../assets/shangping.png"  alt=""></li>
                           <li><img src="../assets/shangping.png"  alt=""></li>
                           <li><img src="../assets/shangping.png"  alt=""></li>
                           <li><img src="../assets/shangping.png"  alt=""></li>
                           <li style="height:1.1rem;"></li>
                        </ul>
            </slot>
            <slot name="two_row">
                        <ul class='two_row'>
                           <li>
                              <router-link :to="{ name: 'user', params: { userId: 123 }}">
                            <img src="../assets/shangping2.png"  alt="">
                              </router-link>
                           </li>
                           <li><img src="../assets/shangping2.png"  alt=""></li>
                           <li><img src="../assets/shangping2.png"  alt=""></li>
                           <li><img src="../assets/shangping2.png"  alt=""></li>
                           <li><img src="../assets/shangping2.png"  alt=""></li>
                           <li><img src="../assets/shangping2.png"  alt=""></li>
                           <li><img src="../assets/shangping2.png"  alt=""></li>
                           <li><img src="../assets/shangping2.png"  alt=""></li>
                           <li style="height:1.1rem;"></li>
                        </ul>
            </slot>
            <slot name="three_row">
                        <h5 style='background-color:#f5f5f5;text-indent:.15rem;padding:.05rem 0'>精选手表</h5>
                        <ul class='three_row'>
                           <li><img src="../assets/shangping3.png"  alt=""></li>
                           <li><img src="../assets/shangping3.png"  alt=""></li>
                           <li><img src="../assets/shangping3.png"  alt=""></li>
                           <li><img src="../assets/shangping3.png"  alt=""></li>
                           <li><img src="../assets/shangping3.png"  alt=""></li>
                           <li><img src="../assets/shangping3.png"  alt=""></li>
                           <li><img src="../assets/shangping3.png"  alt=""></li>
                           <li><img src="../assets/shangping3.png"  alt=""></li>
                           <li><img src="../assets/shangping3.png"  alt=""></li>
                           <li><img src="../assets/shangping3.png"  alt=""></li>
                           <li><img src="../assets/shangping3.png"  alt=""></li>
                           <li><img src="../assets/shangping3.png"  alt=""></li>
                           <li style="height:1.1rem;"></li>
                        </ul>
            </slot>
    </div>

</template>

<script>
export default {

    data:function(){
        return {count:this.$store.state.count}
    }

}

</script>

<style scoped>

</style>
