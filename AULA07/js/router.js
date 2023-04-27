"use strict";

const routes = {
  "/": "/pages/home.html",
  "/vermelho": "/pages/vermelho.html",
  "/azul": "/pages/azul.html",
};

const route = async () => {
  window.event.preventDefault();
  window.history.pushState({}, "", window.event.target.href);
  console.log(window.event.target.href);

  const path = window.location.pathname;
  console.log(path);

  const route = routes[path];
  console.log(routes['/vermelho']);

  const response = await fetch(route)
  console.log(response);
  
  
  const html = await response.text()

  console.log(html);
  

  document.getElementById('root').innerHTML = html
};

window.route = route;
