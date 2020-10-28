Vue.component('button-preference', {
  data() {
    return { count: 0 };
  },
  methods: {
    countUp() {
      this.count += 1;
    },
  },
  「空欄」: `
    <button v-on:click="countUp">
      {{ count }} いいね！
    </button>
  `,
});
new Vue({
  el: '#example',
});
