const ret = new Vue({
  el: '#animation_example',
  data: {
    show:null,
    styleObj: {
      width: "100px",
      height: "100px",
      border: "1px solid black",
      backgroundColor: "red"
    },
    pStyleObj: {
      fontSize: "20px",
      color: "blue"
    },
    view: "custom_component"
  },
  created: function() {
    this.show = true;
    console.log(this.show);
  },
  methods: {
    beforeEnter: function(el) {
      el.style.opacity = 0;
    },
    enter: function(el, done) {
      Velocity(el, {opacity: 1, fontSize: "25px"}, {duration: 1000});
      Velocity(el, {fontSize: "10px"}, {complete:done});
    },
    leave: function(el, done) {
      Velocity(el, {translateX:"15px", rotateZ:"50deg"}, {duration:1500});
      Velocity(el, {rotateZ: "100deg"}, {loop:2});
      Velocity(el, {
        rotateZ: "45deg",
        translateX:"30px",
        translateY:"30px",
        opacity:0
      }, {complete:done});
    }
   },
   components: {
     'custom_component': {
       template: '<div><h3>Heading 3</h3><h4>Heading 4</h4></div>'
     }
   }
});
