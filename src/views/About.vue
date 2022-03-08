<template>
  <h1>About Page</h1>
  <div><button @click="increment">Increment Counter</button></div>
  <p class="counter">{{counter}}</p>
  <p class="double-counter">Double Counter: {{doubleCount}}</p>

</template>

<script>
import { mapActions, mapState } from "pinia";
import {useCounterStore} from "@/stores/counter"

export default {
  name: 'About',
  computed: {
    ...mapState(useCounterStore, ['counter']),
    ...mapState(useCounterStore, ['doubleCount'])
    
  },
  methods: {
    ...mapActions(useCounterStore, ['increment'])
  },
  setup(){
    // const counterstore = useCounterStore();
    // return {counter:counterstore.counter, doubleCount:counterstore.doubleCount}
  }
};
</script>
