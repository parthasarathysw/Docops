<template>
  <div class="hello">
    <div class="container">
      <input type="text" ref="userTxt" v-model="user" @keyup.enter="addUser" />
      <button @click="addUser">Add user</button>
      <h3>Users</h3>
      <ul>
        <List :users="users" :removeUser="removeUser" />
      </ul>
    </div>
  </div>
</template>

<script>
import List from './List.vue';
export default {
  name: 'HelloWorld',
  components: {
    List,
  },
  props: {
    msg: String,
  },
  data: function () {
    return {
      message: 'This is vue',
      user: '',
      users: ['raj', 'taj', 'waj'],
    };
  },
  methods: {
    addUser: function (e) {
      this.users.push(this.user);
      this.user = '';
      this.$nextTick(() => this.$refs.userTxt.focus());
    },
    removeUser: function (e, i) {
      this.users.splice(i, 1);
    },
  },
  beforeCreate: function () {
    // alert('Before create')
  },
  created: function () {
    // alert('After create');
  },
  beforeMount: function () {
    // aler('Before mounting');
  },
  mounted: function () {
    // alert('Mounted');
    //this.$nextTick(() => this.$refs.userTxt.focus());
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin-top: 20px;
  margin-left: 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
</style>
