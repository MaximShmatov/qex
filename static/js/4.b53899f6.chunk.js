(this.webpackJsonpqex=this.webpackJsonpqex||[]).push([[4],{43:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(0);var s=n(44),a=n.n(s),c=n(1);function r(e){var t=e.type,n=e.children,s=e.onClick,r=e.className,o=void 0===r?"":r;return Object(c.jsx)("button",{className:"".concat(a.a.button," ").concat(o),type:t,onClick:s,children:n})}},44:function(e,t,n){e.exports={button:"Button_button__3DizS"}},49:function(e,t,n){e.exports={form:"SearchForm_form__2fEkZ",input:"SearchForm_input__UMpTq"}},50:function(e,t,n){e.exports={newsBlock:"NewsBlock_newsBlock__23Sq5",image:"NewsBlock_image__52iQr",newsTitle:"NewsBlock_newsTitle__2voxN",source:"NewsBlock_source__3n8B6",sourceDate:"NewsBlock_sourceDate__19YKT",sourceName:"NewsBlock_sourceName__OWxNE"}},51:function(e,t,n){e.exports={page:"News_page__3981f",title:"News_title__Ts0HT",heading:"News_heading__2IPV1",separator:"News_separator__1ohMw"}},56:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));n(0);var s=n(12),a=function(e){var t=new URL("https://newsapi.org");return t.pathname=e,t.searchParams.set("apiKey","ce03e39174374877b5dc588a9012459b"),t},c=n(27),r=n(15),o=n(43),i=n(49),u=n.n(i),l=n(1);function h(e){var t=e.onSubmit;return Object(l.jsxs)("form",{className:u.a.form,onSubmit:t,children:[Object(l.jsx)("input",{className:u.a.input,name:"search",type:"text",placeholder:"Enter Keyword"}),Object(l.jsx)(o.a,{type:"submit",children:"Search"})]})}var j=n(50),m=n.n(j);function b(e){var t=e.news,n=t.urlToImage,s=t.url,a=t.title,c=t.publishedAt,r=t.source;return Object(l.jsxs)("div",{className:m.a.newsBlock,children:[Object(l.jsx)("img",{className:m.a.image,alt:"",src:n}),Object(l.jsx)("h3",{className:m.a.newsTitle,children:Object(l.jsx)("a",{href:s,rel:"noopener noreferrer",target:"_blank",children:a})}),Object(l.jsxs)("div",{className:m.a.source,children:[Object(l.jsx)("span",{className:m.a.sourceDate,children:new Date(c).toDateString()}),Object(l.jsx)("span",{className:m.a.sourceName,children:r.name})]})]})}var _=n(51),p=n.n(_);function f(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.news.newsList}));return Object(l.jsxs)("main",{className:p.a.page,children:[Object(l.jsxs)("div",{className:p.a.heading,children:[Object(l.jsx)("h1",{className:p.a.title,children:"News"}),Object(l.jsx)(h,{onSubmit:function(t){t.preventDefault();var n=t.target.elements.search.value;""!==n&&function(e){var t=a("/v2/everything");return t.searchParams.set("q",e),fetch(t.href).then((function(e){return e.json()}))}(n).then((function(t){"ok"===t.status?e(Object(c.b)(t.articles)):e(Object(r.b)("".concat(t.status,": limit reached...")))})).catch((function(t){return e(Object(r.b)(t.toString()))}))}})]}),t.map((function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{className:p.a.separator}),Object(l.jsx)(b,{news:e})]},Math.random())}))]})}}}]);
//# sourceMappingURL=4.b53899f6.chunk.js.map