Vue.component('worker_component', {
  template: `<div>
<h3>Worker Details</h3>
id = {{ id }} <br>
name = {{ name }} <br>
age = {{ age }} <br>
wage = {{ wage }} <br>
active = {{ active }} <br>
<button v-on:click= "printProps()">print Properties</button> <br>
<br />

id: <input type="text" v-model="anotherId" /> <br>
name: <input type="text"  v-model="anotherName" /> <br>
age: <input type="text"  v-model="anotherAge" /> <br>
wage: <input type="text"  v-model="anotherWage" /> <br>
active: <input type="text"  v-model="anotherActive"/> <br>
<button v-on:click="addNewWorker()">Add New Worker</button> <br>
<br/>
<h4>All Workers</h4>
<table>
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Age</th>
    <th>Wage</th>
    <th>Active</th>
  </tr>
  <tr v-for="worker in workers">
    <td>{{ worker.id }}</td>
    <td>{{ worker.name }}</td>
    <td>{{ worker.age }}</td>
    <td>{{ worker.wage }}</td>
    <td>{{ worker.active }}</td>
  </tr>
</table>
</div>
`,
  data: function() {
    return {
      id: 4,
      name: "leonel",
      age: 40,
      wage: 400.0,
      active: false,
      anotherId: "default",
      anotherName: "default",
      anotherAge: "default",
      anotherWage: "default",
      anotherActive: "default",
      workers: []
    };
  },
  computed: {

  },
  methods: {
    printProps: function() {
      const str = `id = ${this.id}
name = ${this.name}
age = ${this.age}
wage = ${this.wage}
active = ${this.active}
  `;
     alert(str);
   },
   addNewWorker() {
     const _id = parseInt(this.anotherId);
     const _age = parseInt(this.anotherAge);
     const _wage = parseFloat(this.anotherWage);
     if(isNaN(_id)) {
       console.log("id must be of type integer");
       return;
     }
     if(isNaN(_age)) {
       console.log("age must be of type integer");
       return;
     }
     if(isNaN(_wage)) {
       console.log("wage must be of type float");
       return;
     }

     if(this.anotherActive.toLowerCase() !== "true" && this.anotherActive.toLowerCase() !== "false") {
       console.log("active must be of type boolean");
       return;
     }
     if(this.workers.map(w=> w.id).filter(id => id === _id).length > 0) {
       console.log("worker with id already exists");
       return;
     }
     const w = {id: _id, name: this.anotherName, age: _age, wage: _wage, active: this.anotherActive.toLowerCase() === "true"?true: false};
     this.workers.push(w);
   }
  }
});


const ret = new Vue({
  el: '#vue_component1'
});

const ret2 = new Vue({
  el: '#vue_component2'
});
