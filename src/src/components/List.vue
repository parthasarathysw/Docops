<template>
  <template v-if="users.length > 0">
    <li v-for="(user, index) in users" :key="user">
      {{ user }}
      <i class="remove" @click="removeUserItem(index)">&times;</i>
    </li>
  </template>
  <template v-else>
    <li>No users available. Add one!!!</li>
  </template>
</template>

<script>
export default {
  name: 'list',
  props: {
    users: Array,
    removeUser: undefined,
  },
  methods: {
    removeUserItem: function (e, i) {
      this.$parent.removeUser(i);
    },
  },
};
</script>
<style scoped>
li {
  display: block;
  margin: 3px 10px;
  border: 1px solid #eee;
  padding: 10px 10px;
}
a {
  color: #42b983;
}
i {
  float: right;
  cursor: pointer;
}
</style>
