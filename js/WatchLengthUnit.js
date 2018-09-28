const ret = new Vue({
  el: '#watch_length_unit',
  data: {
    millimeter: 0,
    centimeter: 0,
    decimeter: 0,
    meter: 0,
    kilometer: 0
  },
  computed: {

  },
  watch: {
    millimeter: function(val) {
      this.millimeter = val;
      this.centimeter = val/10;
      this.decimeter = val/100;
      this.meter = val/1000;
      this.kilometer= val/Math.pow(10,6);
    },
    centimeter: function(val) {
      this.centimeter = val;
      this.millimeter = val*10;
      this.decimeter = val/10;
      this.meter = val/100;
      this.kilometer = val/Math.pow(10,5);
    },
    decimeter: function(val) {
      this.decimeter = val;
      this.millimeter = val*100;
      this.centimeter = val*10;
      this.meter = val/10;
      this.kilometer = val/Math.pow(10,4);
    },
    meter: function(val) {
      this.meter = val;
      this.millimeter = val*1000;
      this.centimeter = val*100;
      this.decimeter = val*10;
      this.kilometer = val/Math.pow(10,3);
    },
    kilometer: function(val) {
      this.kilometer = val;
      this.millimeter = val*Math.pow(10,6);
      this.centimeter = val*Math.pow(10,5);
      this.decimeter = val*Math.pow(10,4);
      this.meter = val*Math.pow(10,3);
    }
  },
  methods: {

  }
});
