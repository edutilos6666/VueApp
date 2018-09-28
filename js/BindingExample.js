const ret = new Vue({
  el: '#binding_example',
  data: {
    workers:[],
    id: null,
    name: null,
    age: null,
    wage: null,
    active: null,
    idHasErrors: false,
    nameHasErrors: false,
    ageHasErrors: false,
    wageHasErrors: false,
    activeHasErrors: false,
    idErrorMsg: null,
    nameErrorMsg: null,
    ageErrorMsg: null,
    wageErrorMsg: null,
    activeErrorMsg: null,
    showHrefs: true,
    hrefs: null,
  },
  created: function() {
    this.hrefs =  [
      {name: "Google", value: "http://www.google.com"},
      {name: "Github", value: "http://www.github.com"},
      {name: "Twitter", value: "http://www.twitter.com"},
      {name: "Facebook", value: "http://www.fb.com"},
      {name: "Youtube", value: "http://www.youtube.com"}
    ];
  },
  computed: {
    isWorkersArrayNotEmpty: function() {
      return this.workers.length !== 0;
    }
  },
  methods: {
    addNewWorker: function() {
      this.checkInputIdValue();
      this.checkInputNameValue();
      this.checkInputAgeValue();
      this.checkInputWageValue();
      this.checkInputActiveValue();

      if(this.idHasErrors || this.nameHasErrors || this.ageHasErrors || this.wageHasErrors || this.activeHasErrors) return;
      const id = parseInt(this.id);
      if(this.workers.filter(worker=> worker.id === id).length > 0) {
        this.idHasErrors = true;
        this.idErrorMsg = "duplicate id";
        return;
      } else {
        this.idHasErrors = false;
        this.idErrorMsg = "";
      }
      const age = parseInt(this.age);
      const wage = parseFloat(this.wage);
      const active = this.active.toLowerCase() === "true"? true: false;
      this.workers.push({id:id, name:this.name, age:age, wage:wage, active:active});
    },
    checkInputIdValue()  {
      console.log("checkInputIdValue()");
      const pattern = /^\d+$/;
      if(!pattern.test(this.id)) {
        this.idHasErrors = true;
        this.idErrorMsg = "id must be of type int";
      } else {
        this.idHasErrors = false;
        this.idErrorMsg = "";
      }
    },
    checkInputNameValue() {
      console.log("checkInputNameValue()");
      try {
        if(this.name.length === 0) {
          this.nameHasErrors = true;
          this.nameErrorMsg = "name can not be empty";
        } else {
          this.nameHasErrors = false;
          this.nameErrorMsg = "";
        }
      } catch(msg) {
        this.nameHasErrors = true;
        this.nameErrorMsg = "name can not be empty";
      }
    },
    checkInputAgeValue() {
      console.log("checkInputAgeValue()");
      const pattern = /^\d+$/;
      if(!pattern.test(this.age)) {
        this.ageHasErrors = true;
        this.ageErrorMsg = "age must be of type int";
      } else {
        this.ageHasErrors = false;
        this.ageErrorMsg = "";
      }
    },
    checkInputWageValue() {
      console.log("checkInputWageValue()");
      const pattern = /^\d+(\.(\d+)?)?$/;
      if(!pattern.test(this.wage)) {
        this.wageHasErrors = true;
        this.wageErrorMsg = "wage must be of type float";
      } else {
        this.wageHasErrors = false;
        this.wageErrorMsg = "";
      }
    },
    checkInputActiveValue() {
      console.log("checkInputActiveValue");
      try {
        if(this.active.toLowerCase() === "true" || this.active.toLowerCase() === "false") {
          this.activeHasErrors = false;
          this.activeErrorMsg = "";
        } else {
          this.activeHasErrors = true;
          this.activeErrorMsg = "active must be of type boolean";
        }
      } catch(msg) {
          this.activeHasErrors = true;
          this.activeErrorMsg = "active must be of type boolean";
      }
    }
  }
});
