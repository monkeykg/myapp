<template>
    <div>
        <Header></Header>
        <div >
            <list></list>
        </div>
    </div>
   
</template>
<script>
import Header from '@/components/common/header.vue'
import list from '@/components/page/list.vue'


export default {
  name:'index',
  components:{
      Header,
        list
  }
}
</script>
