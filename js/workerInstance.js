const worker = new Vue({
  el: '#workerInstance',
  data: {
    id:1,
    name: 'foo',
    age: 10,
    wage: 100.0,
    active: true
  },
  methods: {
    getId: function()  {
      return this.id;
    },
    getName: function() {
      return this.name;
    },
    getProps: function() {
      return `Person(${this.id}, ${this.name}, ${this.age}, ${this.wage}, ${this.active})`;
    }
  }
});

console.log(worker);
console.log(worker.id, worker.name, worker.age, worker.wage, worker.active);
console.log(worker.$data);
console.log(worker.$data.name);


const CustomComponent = Vue.extend({
  data: function() {
    return {
      id:2,
      name: 'bar',
      age: 20,
      wage: 200.0,
      active: false
    }
  },
  computed: {
      concattedProps: function() {
        return `${this.id},${this.name},${this.age},${this.wage},${this.active}`;
      }
  }
});

const cc1 = new CustomComponent();
console.log(cc1);
console.log(cc1.id, cc1.name);
console.log(cc1.$data);
console.log(cc1.$data.id, cc1.$data.name);
console.log(cc1.concattedProps);

const rectangle = new Vue({
  data: {
    width: 100,
    height: 100,
    x:10
  },
  computed: {
    area: function() {
      return this.width * this.height;
    },
    perimeter: function() {
      return 2* (this.width + this.height);
    },
    squareX: {
      get: function() { return this.x; },
      set: function(v) { this.x = Math.pow(v, 2); }
    }
  },
  methods: {
    setWidth: function(width) { this.width = width; },
    getWidth: function() { return this.width; },
    setHeight: function(height) { this.height = height; },
    getHeight: function() { return this.height; }
  }
});

console.log(rectangle.width, rectangle.height, rectangle.x, rectangle.area, rectangle.perimeter);
rectangle.squareX = 10;
console.log(rectangle.squareX, rectangle.x);
rectangle.setWidth(25);
console.log(rectangle.getWidth(), rectangle.area, rectangle.perimeter);
rectangle.setHeight(50);
console.log(rectangle.getHeight(), rectangle.area, rectangle.perimeter);
console.log(rectangle.width, rectangle.height);
