(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(63),l=a(58);t.default=()=>r.a.createElement(i.a,null,r.a.createElement(l.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},56:function(e,t,a){e.exports=(e=>e&&e.default||e)(a(61))},57:function(e,t,a){"use strict";t.a={access_token:null,myminifactory_url:"https://www.myminifactory.com",logo_url:"https://www.myminifactory.com/images/logo_mobile.png",recent_objects_url:"https://www.myminifactory.com/api/v2/search?q=&cat=112&sort=date&per_page=16&light=1",suggester_url:"https://www.myminifactory.com/search/search-suggester",social_links:[{name:"Instagram",url:"https://www.instagram.com/scantheworld"},{name:"Twitter",url:"https://twitter.com/Scan_The_World"},{name:"Medium",url:"https://medium.com/scantheworld"}]}},58:function(e,t,a){"use strict";var n=a(59),r=a(0),i=a.n(r),l=a(3),s=a.n(l),c=a(64),o=a.n(c);function m({description:e,lang:t,meta:a,title:r}){const{site:l}=n.data,s=e||l.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:t},title:r,titleTemplate:`%s | ${l.siteMetadata.title}`,meta:[{name:"description",content:s},{property:"og:title",content:r},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:s}].concat(a)})}m.defaultProps={lang:"en",meta:[],description:"",title:"Scan The World"},m.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),title:s.a.string.isRequired},t.a=m},59:function(e){e.exports={data:{site:{siteMetadata:{title:"Scan The World",description:"",author:"Romain B."}}}}},60:function(e){e.exports={data:{site:{siteMetadata:{title:"Scan The World"}}}}},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(3),l=a.n(i),s=a(16),c=a(2);const o=({location:e})=>{const t=c.default.getResourcesForPathnameSync(e.pathname);return t?r.a.createElement(s.a,{location:e,pageResources:t,...t.json}):null};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=o},62:function(e){e.exports={data:{allMarkdownRemark:{totalCount:2,edges:[{node:{id:"7fec8a8e-e11a-51e5-bb89-d7462ee0496d",frontmatter:{title:"About",path:"about"},excerpt:"About page"}},{node:{id:"5f331e8c-73f0-5694-9f86-24a416580081",frontmatter:{title:"Contribute",path:"contribute"},excerpt:"contribute page"}}]}}}},63:function(e,t,a){"use strict";var n=a(60),r=a(0),i=a.n(r),l=a(3),s=a.n(l);a(9),a(56);const c=i.a.createContext({}),o=e=>i.a.createElement(c.Consumer,null,t=>e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)"));o.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func};a(65);var m=a(55),u=a(57);var d=class extends r.Component{constructor(e){super(e),this.state={links:e.links?e.links:u.a.social_links}}renderLinks(){return this.state.links.map((e,t)=>{let a=null;switch(e.name.toLowerCase()){case"twitter":a=i.a.createElement(m.c,null);break;case"medium":a=i.a.createElement(m.b,null);break;case"instagram":a=i.a.createElement(m.a,null);break;default:a=i.a.createElement(m.c,null)}return i.a.createElement("li",{key:t,className:"link-item",title:e.name},i.a.createElement("a",{href:e.url},a))})}render(){return i.a.createElement("div",{className:"social-bar"},i.a.createElement("p",{className:"social"},"social"),i.a.createElement("ul",{className:"links"},this.renderLinks()))}},p=a(62);a(66);const h="https://www.myminifactory.com",w="https://www.myminifactory.com/images/logo_mobile.png";var f=class extends r.Component{renderLinks(){return i.a.createElement(o,{query:"3776865759",render:e=>{let t=[i.a.createElement("li",{key:0,className:"link-item"},i.a.createElement("a",{href:"/"},"Home"))];return e.allMarkdownRemark.edges.map(({node:e},a)=>t.push(i.a.createElement("li",{key:a+1,className:"link-item"},i.a.createElement("a",{href:e.frontmatter.path},e.frontmatter.title)))),t},data:p})}render(){return i.a.createElement("div",{className:"top-bar"},i.a.createElement("a",{href:h},i.a.createElement("img",{className:"logo",src:w,alt:"MyMiniFactory Logo"})),i.a.createElement("ul",{className:"links"},this.renderLinks()))}};const g=({children:e})=>i.a.createElement(o,{query:"755544856",render:t=>i.a.createElement(i.a.Fragment,null,i.a.createElement(f,null),i.a.createElement(d,null),i.a.createElement("main",null,e)),data:n});g.propTypes={children:s.a.node.isRequired};t.a=g}}]);
//# sourceMappingURL=component---src-pages-404-js-4254daf0cdf58d59d78c.js.map