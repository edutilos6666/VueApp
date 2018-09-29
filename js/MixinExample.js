const mixin1 = {
  data: {
    id: null,
    name: null
  },
  created: function() {
    console.log("mixin1 was created.");
    this.id = 3;
    this.name = "pako";
  },
  methods: {
    callMixin1: function() {
      console.log("mixin1.callMixin1() was called.");
    }
  }
}

const mixin2 = {
  data: {
    age: null,
    wage: null,
    active: null
  },
  created: function() {
    console.log("mixin2 was created.");
    this.age = 30;
    this.wage = 300.0;
    this.active = true;
  },
  methods: {
    callMixin2: function() {
      console.log("mixin2.callMixin2() was called.");
    }
  }
}

const ret = new Vue({
  el: '#mixin_example',
  mixins: [mixin1, mixin2]
});

console.log(ret.id, ret.name, ret.age, ret.wage, ret.active);
ret.callMixin1();
ret.callMixin2();
