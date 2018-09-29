const Route1 = {
  template: `<h1 style="backgroundColor:yellow;">Heading 1</h1>`
};

const Route2 = {
  template: '<h2>Heading 2</h2>'
};

const Route3 = {
  template: '<h3>Heading 3</h3>'
};

const Route4 = {
  template: '<h4>Heading 4</h4>'
};

const Route5 = {
  template: '<h5>Heading 5</h5>'
};

const Route6 = {
  template: '<h6>Heading 6</h6>'
};
const Route7 = {
  // template: '<div>name = {{ $route.params.name }}</div>'
  template: `<div>dynamic routing example <br>
id = {{ $route.params.id }} <br>
name = {{ $route.params.name }} <br>
age = {{ $route.params.age }} <br>
wage = {{ $route.params.wage }} <br>
active = {{ $route.params.active }} <br>
  </div>`
};
const Route8 = {
  template: `<div>dynamic routing example <br>
id = {{ $route.query.id }} <br>
name = {{ $route.query.name }} <br>
age = {{ $route.query.age }} <br>
wage = {{ $route.query.wage }} <br>
active = {{ $route.query.active }} <br>
  </div>`
};

const routes = [
  { path: '/heading1', component: Route1 },
  { path: '/heading2', component: Route2 },
  { path: '/heading3', component: Route3 },
  { path: '/heading4', component: Route4 },
  { path: '/heading5', component: Route5 },
  { path: '/heading6', component: Route6 },
  { path: '/heading7/:id/:name/:age/:wage/:active', component: Route7 },
  { path: '/heading8', component: Route8 }
];

const router = new VueRouter({
  routes //shorthand for routes:routes
});

const ret = new Vue({
  el: '#router_example',
  router
});
