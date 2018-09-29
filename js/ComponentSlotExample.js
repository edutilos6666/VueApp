Vue.component('custom_component', {
  render: function(createElement) {
    const els = this.elementtype.split(',');
    return createElement(els[0], {
       attrs: {
         id: els[4],
         style: `color:${els[1]};background-color:${els[2]};font-size:${els[3]}`
       }
        },
       this.$slots.default);

   },
     props: {
       elementtype: {
         attributes:String,
         required:true
       }
     }

});

Vue.component('slot_component', {
  template: `<h1><slot></slot></h1>`,
  methods: {

  }
});



const ret = new Vue({
  el: '#component_slot_example'
});
