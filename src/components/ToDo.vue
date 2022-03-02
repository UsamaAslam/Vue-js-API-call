<template>
  <div class="container">
    <h1>Articles</h1>
  <ul>
    <div class="list-group">
  <label v-for="item in $store.state.items[$store.state.page]" :key="item.title" class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" disabled v-model="item.completed">
    {{ item.title }}
  </label>
</div>
</ul>  
    
   <button  @click="getToDoList">Get Latest Articles</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ToDo',
  props: {
    msg: String
  },
   methods: mapActions([
    'getToDoList',
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
