Vue.directive('changestyle', {
  bind(el,binding, vnode) {
    console.log(el, binding, vnode);
    el.style.color="red";
    el.style.fontSize= "30px";
    el.style.backgroundColor="yellow";
  }
});

Vue.directive('changestyle2', {
  bind(el, binding, vnode) {
    el.style.color = binding.value.color;
    el.style.fontSize = binding.value.fontSize;
    el.style.backgroundColor = binding.value.backgroundColor;
  }
});
const ret = new Vue({
  el: '#directive_example',
  data: {
    name: null,
  },
  created: function() {
    this.name = "";
  },
  methods: {

  },
  filters: {
    countLetters: function(value) {
      return value.length;
    }
  }
});
