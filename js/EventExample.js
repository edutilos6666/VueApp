const ret = new Vue({
  el: '#event_example',
  data: {

  },
  methods: {
    onkeydown: function() {
      console.log("onkeydown event");
    },
    onkeypress: function() {
      console.log("onkeypress event");
    },
    onkeyup: function() {
      console.log("onkeyup event");
    },
    onmouseenter: function() {
      console.log("onmouseenter event");
    },
    onmouseover: function() {
      console.log("onmouseover event");
    },
    onmousemove: function() {
      console.log("onmousemove event");
    },
    onmousedown: function() {
      console.log("onmousedown event");
    },
    onmouseup: function() {
      console.log("onmouseup event");
    },
    onauxclick: function() {
      console.log("onauxclick event");
    },
    onclick: function() {
      console.log("onclick event");
    },
    ondblclick: function() {
      console.log("ondblclick event");
    },
    onwheel: function() {
      console.log("onwheel event");
    },
    onmouseleave: function() {
      console.log("onmouseleave event");
    },
    onmouseout: function() {
      console.log("onmouseout event");
    }
  }
});
