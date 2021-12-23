(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var s=c(7),i=c.n(s),n=(c(20),c(14)),a=c(8),r=c(9),o=c(15),l=c(13),j=c(1),d=(c(21),c(22),c(23),c(0)),m=function(e){var t=e.movie;return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"card-image",children:Object(d.jsx)("figure",{className:"image is-4by3",children:Object(d.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(d.jsxs)("div",{className:"card-content",children:[Object(d.jsxs)("div",{className:"media",children:[Object(d.jsx)("div",{className:"media-left",children:Object(d.jsx)("figure",{className:"image is-48x48",children:Object(d.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(d.jsx)("div",{className:"media-content",children:Object(d.jsx)("p",{className:"title is-8",children:t.Title})})]}),Object(d.jsxs)("div",{className:"content",children:[t.Plot,Object(d.jsx)("br",{})]})]})]})},b=function(e){var t=e.movies;return Object(d.jsx)("div",{className:"movies",children:t.map((function(e){return Object(d.jsx)(m,{movie:e},e.imdbID)}))})},u=c(11),h=c(4),v=c(6),O=c.n(v),x=c(12),f=c.n(x),p=function(e){return fetch("".concat("https://www.omdbapi.com/?apikey=e63cfb8c&t=").concat(e)).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()}))},N=(c(26),function(e){var t=e.addMovie,c=Object(j.useState)(""),s=Object(h.a)(c,2),i=s[0],n=s[1],a=Object(j.useState)(null),r=Object(h.a)(a,2),o=r[0],l=r[1],b=Object(j.useState)(!1),v=Object(h.a)(b,2),x=v[0],N=v[1],g=function(){var e=Object(u.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(i);case 2:if(!(t=e.sent).Title){e.next=5;break}return e.abrupt("return",l(t));case 5:return e.abrupt("return",N((function(e){return!e})));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("form",{className:"find-movie",children:[Object(d.jsxs)("div",{className:"field",children:[Object(d.jsxs)("label",{className:"label",htmlFor:"movie-title",children:["Movie title",Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("input",{type:"text",id:"movie-title",required:!0,placeholder:"Enter a title to search",className:f()("input",{"is-danger":x}),value:i,onChange:function(e){N(!1),n(e.target.value)}})})]}),x&&Object(d.jsx)("p",{className:"help is-danger",children:"Can't find a movie with such a title"})]}),Object(d.jsxs)("div",{className:"field is-grouped",children:[Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("button",{type:"button",className:"button is-light",onClick:g,children:"Find a movie"})}),Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("button",{type:"button",className:"button is-primary",disabled:!o,onClick:function(){o&&(t(o),n(""))},children:"Add to the list"})})]})]}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h2",{className:"title",children:"Preview"}),o&&Object(d.jsx)(m,{movie:o})]})]})}),g=function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(a.a)(this,c);for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={movies:[]},e.addToTheList=function(t){e.state.movies.some((function(e){return t.imdbID===e.imdbID}))||e.setState((function(e){return{movies:[].concat(Object(n.a)(e.movies),[t])}}))},e}return Object(r.a)(c,[{key:"render",value:function(){var e=this.state.movies;return Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)("div",{className:"page-content",children:Object(d.jsx)(b,{movies:e})}),Object(d.jsx)("div",{className:"sidebar",children:Object(d.jsx)(N,{addMovie:this.addToTheList})})]})}}]),c}(j.Component);i.a.render(Object(d.jsx)(g,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.4f61f6a5.chunk.js.map