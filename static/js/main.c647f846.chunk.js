(this.webpackJsonpnewsapi=this.webpackJsonpnewsapi||[]).push([[0],{61:function(e,t,c){},90:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),i=c(20),s=c.n(i),r=(c(61),c(26)),j=c(7),d=c(15),l=c(11),h=c(17),o=c(16),b=c(107),O=c(108),x=c(109),p=c(110),u=c(111),g=c(112),f=c(121),m=c(21),y=c.n(m),w=c(2),v=function(e){Object(h.a)(c,e);var t=Object(o.a)(c);function c(){var e;return Object(d.a)(this,c),(e=t.call(this)).state={apinews:[]},e.getApi=function(){y.a.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5da45fca78524c79a414bfe1d214a970").then((function(t){console.log(t.data.articles),e.setState({apinews:t.data.articles})}))},e.getApi(),e}return Object(l.a)(c,[{key:"render",value:function(){return Object(w.jsx)("div",{children:Object(w.jsx)(b.a,{style:{padding:70},children:Object(w.jsxs)(O.a,{children:[Object(w.jsx)(x.a,{children:Object(w.jsxs)(p.a,{children:[Object(w.jsx)(u.a,{children:"Name"}),Object(w.jsx)(u.a,{children:"Image"}),Object(w.jsx)(u.a,{children:"Title"}),Object(w.jsx)(u.a,{children:"Date"}),Object(w.jsx)(u.a,{children:"Description"})]})}),Object(w.jsx)(g.a,{children:this.state.apinews.map((function(e,t){return Object(w.jsxs)(p.a,{children:[Object(w.jsx)(u.a,{children:e.source.name}),Object(w.jsx)(u.a,{children:Object(w.jsx)(f.a,{src:e.urlToImage})}),Object(w.jsx)(u.a,{children:e.title}),Object(w.jsx)(u.a,{children:e.publishedAt}),Object(w.jsx)(u.a,{children:e.description})]})}))})]})})})}}]),c}(n.Component),A=c(113),D=c(114),C=c(115),N=c(116),T=c(117),k=c(35),I=function(e){Object(h.a)(c,e);var t=Object(o.a)(c);function c(){var e;return Object(d.a)(this,c),(e=t.call(this)).mediaImage={height:0,paddingTop:"56.26%",marginTop:"30"},e.state={news1:[]},e.FetchNews=function(){y.a.get("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=5da45fca78524c79a414bfe1d214a970").then((function(t){console.log(t.data.articles),e.setState({news1:t.data.articles})}))},e.root={maxWidth:"30"},e.media={height:0,paddingTop:"56.25%"},e.FetchNews(),e}return Object(l.a)(c,[{key:"render",value:function(){var e=this;return Object(w.jsx)("div",{children:Object(w.jsxs)(A.a,{container:!0,style:{padding:70},children:[this.state.news1.map((function(t,c){return Object(w.jsx)(A.a,{item:!0,xs:12,sm:6,md:6,lg:6,xl:6,children:Object(w.jsxs)(D.a,{style:e.root,children:[Object(w.jsx)(C.a,{title:t.title,subheader:t.publishedAt}),Object(w.jsx)(N.a,{style:e.mediaImage,image:t.urlToImage}),Object(w.jsx)(T.a,{children:Object(w.jsx)(k.a,{children:t.description})})]})})})),Object(w.jsx)(A.a,{item:!0,xs:12,sm:6,md:6,lg:6,xl:6})]})})}}]),c}(n.Component),F=c(118),S=c(119),L=c(122),B=function(e){Object(h.a)(c,e);var t=Object(o.a)(c);function c(){return Object(d.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(w.jsx)("div",{children:Object(w.jsx)(F.a,{children:Object(w.jsxs)(S.a,{children:[Object(w.jsx)(k.a,{children:"NEWS"}),Object(w.jsx)(r.b,{to:"/news1",style:{textDecoration:"secondary"},children:Object(w.jsx)(L.a,{style:{paddingLeft:40,paddingRight:40},children:"News1"})}),Object(w.jsx)(r.b,{to:"/news2",style:{textDecoration:"secondary"},children:Object(w.jsx)(L.a,{style:{paddingLeft:40,paddingRight:40},children:"News2"})}),Object(w.jsx)(r.b,{to:"/news3",style:{textDecoration:"primary"},children:Object(w.jsx)(L.a,{style:{paddingLeft:40,paddingRight:40},children:"News3"})}),Object(w.jsx)(r.b,{to:"/news4",style:{textDecoration:"primary"},children:Object(w.jsx)(L.a,{style:{paddingLeft:40,paddingRight:40},children:"News4"})})]})})})}}]),c}(n.Component),K=c(120),R=function(e){Object(h.a)(c,e);var t=Object(o.a)(c);function c(){var e;Object(d.a)(this,c);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={news:[]},e.FetchApi=function(){y.a.get("https://newsapi.org/v2/everything?q=tesla&from=2021-08-20&sortBy=publishedAt&apiKey=5da45fca78524c79a414bfe1d214a970").then((function(t){console.log(t.data.articles),e.setState({news:t.data.articles})}))},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(w.jsx)("div",{children:Object(w.jsx)(A.a,{container:!0,style:{padding:70},children:Object(w.jsxs)(A.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12,children:[Object(w.jsx)(K.a,{color:"secondary",variant:"contained",fullWidth:!0,onClick:this.FetchApi,children:"Get News"}),Object(w.jsx)(b.a,{children:Object(w.jsxs)(O.a,{children:[Object(w.jsx)(x.a,{children:Object(w.jsxs)(p.a,{children:[Object(w.jsx)(u.a,{children:"author"}),Object(w.jsx)(u.a,{children:"title"}),Object(w.jsx)(u.a,{children:"  description"}),Object(w.jsx)(u.a,{children:"publishedAt"}),Object(w.jsx)(u.a,{children:"content"})]})}),Object(w.jsx)(g.a,{children:this.state.news.map((function(e,t){return Object(w.jsxs)(p.a,{children:[Object(w.jsx)(u.a,{children:e.author}),Object(w.jsx)(u.a,{children:e.title}),Object(w.jsxs)(u.a,{children:["  ",e.description]}),Object(w.jsx)(u.a,{children:e.publishedAt}),Object(w.jsx)(u.a,{children:e.content})]})}))})]})})]})})})}}]),c}(n.Component),W=function(e){Object(h.a)(c,e);var t=Object(o.a)(c);function c(){var e;Object(d.a)(this,c);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={news:[]},e.getData=function(){y.a.get("https://newsapi.org/v2/everything?q=apple&from=2021-09-19&to=2021-09-19&sortBy=popularity&apiKey=5da45fca78524c79a414bfe1d214a970").then((function(t){console.log(t.data.articles),e.setState({news:t.data.articles})}))},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(w.jsx)("div",{children:Object(w.jsx)(A.a,{container:!0,style:{padding:70},children:Object(w.jsxs)(A.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12,children:[Object(w.jsx)(K.a,{color:"primary",variant:"contained",fullWidth:!0,onClick:this.getData,children:"Get Data"}),Object(w.jsx)(b.a,{children:Object(w.jsxs)(O.a,{children:[Object(w.jsx)(x.a,{children:Object(w.jsxs)(p.a,{children:[Object(w.jsx)(u.a,{children:"Image"}),Object(w.jsx)(u.a,{children:"Date"}),Object(w.jsx)(u.a,{children:"Author"}),Object(w.jsx)(u.a,{children:"Title"}),Object(w.jsx)(u.a,{children:"Description"}),Object(w.jsx)(u.a,{children:"Content"})]})}),Object(w.jsx)(g.a,{children:this.state.news.map((function(e,t){return Object(w.jsxs)(p.a,{children:[Object(w.jsx)(u.a,{children:Object(w.jsx)(f.a,{variant:"square",src:e.urlToImage})}),Object(w.jsx)(u.a,{children:e.publishedAt}),Object(w.jsx)(u.a,{children:e.author}),Object(w.jsx)(u.a,{children:e.title}),Object(w.jsx)(u.a,{children:e.description}),Object(w.jsx)(u.a,{children:e.content})]})}))})]})})]})})})}}]),c}(n.Component);var q=function(){return Object(w.jsx)("div",{className:"App",children:Object(w.jsxs)(r.a,{children:[Object(w.jsx)(B,{}),Object(w.jsx)(j.a,{path:"/news1",exact:!0,component:R}),Object(w.jsx)(j.a,{path:"/news2",exact:!0,component:W}),Object(w.jsx)(j.a,{path:"/news3",exact:!0,component:v}),Object(w.jsx)(j.a,{path:"/news4",exact:!0,component:I})]})})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,123)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};s.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(q,{})}),document.getElementById("root")),E()}},[[90,1,2]]]);
//# sourceMappingURL=main.c647f846.chunk.js.map