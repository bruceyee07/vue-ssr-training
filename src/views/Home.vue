<template>
  <div>
    <h3>文章列表</h3>
    <div
      v-for="i in list"
      :key="i.id"
      class="list"
    >
      <router-link :to="{path:'/item/'+i.id}">
        {{ i.title }}
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            name:'wfz'
        };
    },
    computed: {
        list () {
            return this.$store.state.list;
        }
    },
    asyncData ({store, route}){
        return store.dispatch('fetchList');
    }
};
</script>