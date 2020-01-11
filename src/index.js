import Vue from 'vue/dist/vue.esm.browser.js'
import httpVueLoader from 'http-vue-loader/src/httpVueLoader.js'

Vue.use(httpVueLoader);

new Vue({
    el: '#app',
    components: {
        'app': 'url:./components/app.vue'
    },
    template: '<app></app>'
});
