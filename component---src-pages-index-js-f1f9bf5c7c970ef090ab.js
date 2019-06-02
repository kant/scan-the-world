(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{54:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(63),c=a(58),o=(a(74),a(75),a(57)),i=a(76),l=a.n(i);a(78);var m=class extends s.a.Component{constructor(e){super(e),this.state={object:e.object?e.object:{},isLoaded:!1}}render(){return s.a.createElement("a",{className:"object-tile-a",href:this.state.object.url},s.a.createElement("div",{className:"object-tile",style:{backgroundImage:`url(${this.state.object.images[0].thumbnail.url})`}},s.a.createElement("div",{className:"info"},s.a.createElement("p",null,this.state.object.name))))}};var u=class extends s.a.Component{constructor(e){super(e),this.state={objects:e.objects?e.objects:[],isLoaded:!1,currentPage:0,hasMore:!0},this.getObjects=this.getObjects.bind(this)}componentDidMount(){this.getObjects()}getObjects(e){fetch(o.a.recent_objects_url+"&page="+e).then(e=>e.json()).then(e=>{e.items?this.setState({isLoaded:!0,objects:this.state.objects.concat(e.items)}):this.setState({hasMore:!1})},e=>{this.setState({hasMore:!1,isLoaded:!0,error:e})})}render(){const e=this.state.objects.map((e,t)=>s.a.createElement(m,{key:t,object:e}));return 0===this.state.objects.length?s.a.createElement("p",null,"No objects found"):s.a.createElement(l.a,{className:"tiles",pageStart:0,loadMore:this.getObjects,hasMore:this.state.hasMore,loader:s.a.createElement("div",{className:"loader",key:0},"Loading ..."),useWindow:!0,threshold:400},e)}},d=(a(79),a(80)),h=a.n(d);function g(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const p=e=>e.map(e=>({name:e[1],image:e[2],designer:e[3],url:e[4]})),b=e=>e.name,f=e=>s.a.createElement("div",{className:"search-suggestion"},s.a.createElement("a",{href:e.url},s.a.createElement("img",{className:"image",alt:"suggested object",src:e.image}),s.a.createElement("div",{className:"text"},e.name,s.a.createElement("br",null),e.designer)));var E=class extends s.a.Component{constructor(){super(),g(this,"onChange",(e,{newValue:t})=>{this.setState({value:t})}),g(this,"onSuggestionsFetchRequested",({value:e})=>{fetch(o.a.suggester_url+"/"+e+"?cat=112").then(e=>e.json()).then(e=>{this.setState({suggestions:p(e)})},e=>{console.log("error")})}),g(this,"onSuggestionsClearRequested",()=>{this.setState({suggestions:[]})}),this.state={value:"",suggestions:[]}}render(){const{value:e,suggestions:t}=this.state,a={placeholder:"Search for an object",value:e,onChange:this.onChange};return s.a.createElement(h.a,{suggestions:t,onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,getSuggestionValue:b,renderSuggestion:f,inputProps:a})}};t.default=()=>s.a.createElement(r.a,null,s.a.createElement(c.a,{title:"Home"}),s.a.createElement("div",{className:"content"},s.a.createElement(E,null),s.a.createElement("div",{className:"scan-the-world"},s.a.createElement("div",{className:"intro"},s.a.createElement("h1",null,s.a.createElement("b",null,"scan")," the ",s.a.createElement("i",null,"world")),s.a.createElement("p",null,"Scan The World is a movement archive objects of cultural significance using 3D scanning technologies, producing an extensive platform of content suitable for 3D printing.")),s.a.createElement(u,null))))},56:function(e,t,a){e.exports=(e=>e&&e.default||e)(a(61))},57:function(e,t,a){"use strict";t.a={access_token:null,myminifactory_url:"https://www.myminifactory.com",logo_url:"https://www.myminifactory.com/images/logo_mobile.png",recent_objects_url:"https://www.myminifactory.com/api/v2/search?q=&cat=112&sort=date&per_page=16&light=1",suggester_url:"https://www.myminifactory.com/search/search-suggester",social_links:[{name:"Instagram",url:"https://www.instagram.com/scantheworld"},{name:"Twitter",url:"https://twitter.com/Scan_The_World"},{name:"Medium",url:"https://medium.com/scantheworld"}]}},58:function(e,t,a){"use strict";var n=a(59),s=a(0),r=a.n(s),c=a(3),o=a.n(c),i=a(64),l=a.n(i);function m({description:e,lang:t,meta:a,title:s}){const{site:c}=n.data,o=e||c.siteMetadata.description;return r.a.createElement(l.a,{htmlAttributes:{lang:t},title:s,titleTemplate:`%s | ${c.siteMetadata.title}`,meta:[{name:"description",content:o},{property:"og:title",content:s},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:o}].concat(a)})}m.defaultProps={lang:"en",meta:[],description:"",title:"Scan The World"},m.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=m},59:function(e){e.exports={data:{site:{siteMetadata:{title:"Scan The World",description:"",author:"Romain B."}}}}},60:function(e){e.exports={data:{site:{siteMetadata:{title:"Scan The World"}}}}},61:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(3),c=a.n(r),o=a(16),i=a(2);const l=({location:e})=>{const t=i.default.getResourcesForPathnameSync(e.pathname);return t?s.a.createElement(o.a,{location:e,pageResources:t,...t.json}):null};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=l},62:function(e){e.exports={data:{allMarkdownRemark:{totalCount:2,edges:[{node:{id:"7fec8a8e-e11a-51e5-bb89-d7462ee0496d",frontmatter:{title:"About",path:"about"},excerpt:"About page"}},{node:{id:"5f331e8c-73f0-5694-9f86-24a416580081",frontmatter:{title:"Contribute",path:"contribute"},excerpt:"contribute page"}}]}}}},63:function(e,t,a){"use strict";var n=a(60),s=a(0),r=a.n(s),c=a(3),o=a.n(c);a(9),a(56);const i=r.a.createContext({}),l=e=>r.a.createElement(i.Consumer,null,t=>e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)"));l.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func};a(65);var m=a(55),u=a(57);var d=class extends s.Component{constructor(e){super(e),this.state={links:e.links?e.links:u.a.social_links}}renderLinks(){return this.state.links.map((e,t)=>{let a=null;switch(e.name.toLowerCase()){case"twitter":a=r.a.createElement(m.c,null);break;case"medium":a=r.a.createElement(m.b,null);break;case"instagram":a=r.a.createElement(m.a,null);break;default:a=r.a.createElement(m.c,null)}return r.a.createElement("li",{key:t,className:"link-item",title:e.name},r.a.createElement("a",{href:e.url},a))})}render(){return r.a.createElement("div",{className:"social-bar"},r.a.createElement("p",{className:"social"},"social"),r.a.createElement("ul",{className:"links"},this.renderLinks()))}},h=a(62);a(66);const g="https://www.myminifactory.com",p="https://www.myminifactory.com/images/logo_mobile.png";var b=class extends s.Component{renderLinks(){return r.a.createElement(l,{query:"3776865759",render:e=>{let t=[r.a.createElement("li",{key:0,className:"link-item"},r.a.createElement("a",{href:"/"},"Home"))];return e.allMarkdownRemark.edges.map(({node:e},a)=>t.push(r.a.createElement("li",{key:a+1,className:"link-item"},r.a.createElement("a",{href:e.frontmatter.path},e.frontmatter.title)))),t},data:h})}render(){return r.a.createElement("div",{className:"top-bar"},r.a.createElement("a",{href:g},r.a.createElement("img",{className:"logo",src:p,alt:"MyMiniFactory Logo"})),r.a.createElement("ul",{className:"links"},this.renderLinks()))}};const f=({children:e})=>r.a.createElement(l,{query:"755544856",render:t=>r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),r.a.createElement(d,null),r.a.createElement("main",null,e)),data:n});f.propTypes={children:o.a.node.isRequired};t.a=f}}]);
//# sourceMappingURL=component---src-pages-index-js-f1f9bf5c7c970ef090ab.js.map