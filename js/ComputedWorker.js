const ret = new Vue({
  el: '#computed_worker',
  data: {
    id: 1,
    fname: 'foo',
    lname: 'bar',
    age: 10,
    wage: 100.0,
    country: 'Germany',
    city: 'Bochum',
    plz: 44801,
    active: true
  },
  computed: {
    name:{
      get: function() {
        return `${this.fname} ${this.lname}`;
      },
      set: function(newName) {
        try {
          const splitted = newName.split(/\s+/);
          console.log(splitted);
          this.fname = splitted[0];
          this.lname = splitted[1];
        } catch(msg) {
          console.log(msg);
        }
      }
    } ,
    address: function() {
      return `{country = ${this.country}, city = ${this.city}, plz = ${this.plz}}`;
    }
  },
  methods: {
    printProps: function() {
      const str = `ComputedWorker properties
id = ${this.id}
name = ${this.name}
age = ${this.age}
wage = ${this.wage}
address: ${this.address}
active: ${this.active}
`;
      console.log(str);
      return str;
    }
  }
});


ret.fname = "edutilos";
ret.name = "leonardo  davinci";
