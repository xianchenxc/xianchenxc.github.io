"use strict";(self.webpackChunkhello_blog=self.webpackChunkhello_blog||[]).push([[293],{2966:function(e,t,a){var l=a(6540),i=a(1015),r=a(3973);t.A=()=>{var e,t;const n=(0,i.useStaticQuery)("3257411868"),s=null===(e=n.site.siteMetadata)||void 0===e?void 0:e.author,o=null===(t=n.site.siteMetadata)||void 0===t?void 0:t.social;return l.createElement("div",{className:"bio"},l.createElement(r.S,{className:"bio-avatar",layout:"fixed",formats:["AUTO","WEBP","AVIF"],src:"../images/profile-pic.png",width:50,height:50,quality:95,alt:"Profile picture",__imageData:a(5897)}),(null==s?void 0:s.name)&&l.createElement("p",null,"Personal Blog by"," ",l.createElement("a",{href:"https://twitter.com/"+((null==o?void 0:o.twitter)||"")},l.createElement("strong",null,s.name)),".",l.createElement("br",null),(null==s?void 0:s.summary)||null))}},5608:function(e,t,a){a.r(t);var l=a(6540),i=a(1015),r=a(2966),n=a(1864),s=a(5252);t.default=e=>{var t;let{data:a,location:o}=e;const c=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",d=a.allMarkdownRemark.nodes;return 0===d.length?l.createElement(n.A,{location:o,title:c},l.createElement(s.A,{title:"All posts"}),l.createElement(r.A,null),l.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):l.createElement(n.A,{location:o,title:c},l.createElement(s.A,{title:"All posts"}),l.createElement(r.A,null),l.createElement("ol",{style:{listStyle:"none"}},d.map((e=>{var t;const a=e.frontmatter.title||e.fields.slug;return l.createElement("li",{key:e.fields.slug},l.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement("h2",null,l.createElement(i.Link,{to:e.fields.slug,itemProp:"url"},l.createElement("span",{itemProp:"headline"},a))),l.createElement("p",{className:"post-list-item-tags"},null===(t=e.frontmatter.tags)||void 0===t?void 0:t.map((e=>l.createElement("span",{key:e,className:"post-list-item-tag"},e)))),l.createElement("small",null,e.frontmatter.date)),l.createElement("section",null,l.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}},5897:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8e8d8","images":{"fallback":{"src":"/static/75aa0a8d6e0a683f2b1a66c8d1d8ea97/d24ee/profile-pic.jpg","srcSet":"/static/75aa0a8d6e0a683f2b1a66c8d1d8ea97/d24ee/profile-pic.jpg 50w,\\n/static/75aa0a8d6e0a683f2b1a66c8d1d8ea97/64618/profile-pic.jpg 100w","sizes":"50px"},"sources":[{"srcSet":"/static/75aa0a8d6e0a683f2b1a66c8d1d8ea97/d4bf4/profile-pic.avif 50w,\\n/static/75aa0a8d6e0a683f2b1a66c8d1d8ea97/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/75aa0a8d6e0a683f2b1a66c8d1d8ea97/3faea/profile-pic.webp 50w,\\n/static/75aa0a8d6e0a683f2b1a66c8d1d8ea97/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=component---src-pages-index-js-d02e4c0bde4d0d2bd0b6.js.map