(this.webpackJsonpreact_project01=this.webpackJsonpreact_project01||[]).push([[0],{28:function(e,t,s){},30:function(e,t,s){},64:function(e,t,s){"use strict";s.r(t);var n=s(0),c=s.n(n),a=s(31),r=s.n(a),i=s(8),o=s(2),j=s(17),l=s.n(j),m=s(32),d=s(11),u=s(12),b=s(14),h=s(13),p=s(33),v=s.n(p),O=(s(28),s(1));var x=function(e){e.id;var t,s=e.year,n=e.title,c=e.summary,a=e.poster,r=e.genres;return Object(O.jsx)(i.b,{to:{pathname:"movie/".concat(n),state:{year:s,title:n,summary:c,poster:a,genres:r}},children:Object(O.jsxs)("div",{className:"movie_list",children:[Object(O.jsx)("div",{className:"movie_poster",children:Object(O.jsx)("img",{src:a,alt:n})}),Object(O.jsxs)("div",{className:"movie_contents",children:[Object(O.jsx)("h3",{className:"movie_title",children:n}),Object(O.jsx)("h5",{className:"movie_year",children:s}),Object(O.jsx)("ul",{className:"movie_genres",children:r.map((function(e,t){return Object(O.jsxs)("li",{className:"genres_list",children:[" ",e," "]},t)}))}),Object(O.jsx)("p",{className:"movie_summary",children:(t=c,t.length>280?Object(O.jsxs)("span",{children:[t.slice(0,180),"..."]}):Object(O.jsx)("span",{children:t}))})]})]})})},y=(s(30),function(e){Object(b.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(d.a)(this,s);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(l.a.mark((function t(){var s,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=like_count");case 2:s=t.sent,n=s.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("section",{className:"container",children:t?Object(O.jsx)("div",{className:"loader",children:Object(O.jsx)("span",{className:"loader_text",children:'"\ub85c\ub529\uc911..."'})}):Object(O.jsx)("div",{className:"movies_container",children:s.map((function(e){return Object(O.jsx)(x,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})})}}]),s}(c.a.Component));var f=function(e){return console.log(e),Object(O.jsx)("div",{className:"about_cont",children:Object(O.jsx)("p",{children:"About \ud398\uc774\uc9c0 \uc785\ub2c8\ub2e4."})})};var g=function(){return Object(O.jsxs)("div",{className:"nav_con",children:[Object(O.jsx)(i.b,{to:"/",children:"Home"}),Object(O.jsx)(i.b,{to:"/about",children:"About"})]})},_=function(e){Object(b.a)(s,e);var t=Object(h.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,s=e.history;void 0===t.state&&s.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(O.jsxs)("div",{className:"movie_detail",children:[Object(O.jsx)("span",{children:e.state.year}),Object(O.jsx)("span",{children:e.state.title}),Object(O.jsx)("span",{children:e.state.summary}),Object(O.jsx)("span",{children:e.state.poster}),Object(O.jsx)("span",{children:e.state.geners})]}):null}}]),s}(c.a.Component);var N=function(){return Object(O.jsxs)(i.a,{children:[Object(O.jsx)(g,{}),Object(O.jsx)(o.a,{path:"/",exact:!0,component:y}),Object(O.jsx)(o.a,{path:"/about",component:f}),Object(O.jsx)(o.a,{path:"/movie/",component:_})]})};r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(N,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.7a4b6eba.chunk.js.map