(this.webpackJsonpqex=this.webpackJsonpqex||[]).push([[3],{41:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n(0);var r=n(42),c=n.n(r),a=n(1);function s(e){var t=e.type,n=e.children,r=e.onClick,s=e.className,o=void 0===s?"":s;return Object(a.jsx)("button",{className:"".concat(c.a.button," ").concat(o),type:t,onClick:r,children:n})}},42:function(e,t,n){e.exports={button:"Button_button__3DizS"}},45:function(e,t,n){e.exports={form:"SearchForm_form__2fEkZ",input:"SearchForm_input__UMpTq"}},46:function(e,t,n){e.exports={newsBlock:"NewsBlock_newsBlock__23Sq5",image:"NewsBlock_image__52iQr",newsTitle:"NewsBlock_newsTitle__2voxN",source:"NewsBlock_source__3n8B6",sourceDate:"NewsBlock_sourceDate__19YKT",sourceName:"NewsBlock_sourceName__OWxNE"}},47:function(e,t,n){e.exports={page:"News_page__3981f",title:"News_title__Ts0HT",heading:"News_heading__2IPV1",separator:"News_separator__1ohMw"}},53:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));n(0);var r=n(12),c=function(e){var t=new URL("https://newsapi.org");return t.pathname=e,t.searchParams.set("apiKey","c76a3a8ef15c457cb5e909068bad444b"),t},a=n(27),s=n(15),o=n(41),i=n(45),u=n.n(i),l=n(1);function h(e){var t=e.onSubmit;return Object(l.jsxs)("form",{className:u.a.form,onSubmit:t,children:[Object(l.jsx)("input",{className:u.a.input,name:"search",type:"text",placeholder:"Enter Keyword"}),Object(l.jsx)(o.a,{type:"submit",children:"Search"})]})}var b=n(46),j=n.n(b);function m(e){var t=e.news,n=t.urlToImage,r=t.url,c=t.title,a=t.publishedAt,s=t.source;return Object(l.jsxs)("div",{className:j.a.newsBlock,children:[Object(l.jsx)("img",{className:j.a.image,alt:"",src:n}),Object(l.jsx)("h3",{className:j.a.newsTitle,children:Object(l.jsx)("a",{href:r,rel:"noopener noreferrer",target:"_blank",children:c})}),Object(l.jsxs)("div",{className:j.a.source,children:[Object(l.jsx)("span",{className:j.a.sourceDate,children:new Date(a).toDateString()}),Object(l.jsx)("span",{className:j.a.sourceName,children:s.name})]})]})}var _=n(47),f=n.n(_);function p(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.news.newsList}));t.length||function(e){var t=c("/v2/top-headlines");return t.searchParams.set("country",e),fetch(t.href).then((function(e){return e.json()}))}("ru").then((function(t){return e(Object(a.b)(t.articles))})).catch((function(t){return e(Object(s.b)(t.toString()))}));return Object(l.jsxs)("main",{className:f.a.page,children:[Object(l.jsxs)("div",{className:f.a.heading,children:[Object(l.jsx)("h1",{className:f.a.title,children:"News"}),Object(l.jsx)(h,{onSubmit:function(t){t.preventDefault();var n=t.target.elements.search.value;""!==n&&function(e){var t=c("/v2/everything");return t.searchParams.set("q",e),fetch(t.href).then((function(e){return e.json()}))}(n).then((function(t){return e(Object(a.b)(t.articles))})).catch((function(t){return e(Object(s.b)(t.toString()))}))}})]}),t.map((function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{className:f.a.separator}),Object(l.jsx)(m,{news:e})]},Math.random())}))]})}}}]);
//# sourceMappingURL=3.770cfe3b.chunk.js.map