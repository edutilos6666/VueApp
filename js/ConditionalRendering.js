const ret = new Vue({
  el: '#conditional_rendering',
  data:  {
    id:null,
    name: null,
    age: null,
    wage: null,
    active: null,
    isShowId: null,
    isShowName: null,
    isShowAge: null,
    isShowWage: null,
    isShowActive: null,
    names: null
  },
  created: function() {
    this.id = 2;
    this.name = "edutilos";
    this.age = 20;
    this.wage = 200.0;
    this.active = true;
    this.isShowId = false;
    this.isShowName = false;
    this.isShowAge = false;
    this.isShowWage = false;
    this.isShowActive = false;
    this.names = [];
  },
  methods: {
    showId: function() {
      this.isShowId = !this.isShowId;
    },
    showName: function() {
      this.isShowName = !this.isShowName;
    },
    showAge: function() {
      this.isShowAge = !this.isShowAge;
    },
    showWage: function() {
      this.isShowWage = !this.isShowWage;
    },
    showActive: function() {
      this.isShowActive = !this.isShowActive;
    },
    addNewName: function(event) {
      this.names.push(event.target.value);
    }
  }
});
