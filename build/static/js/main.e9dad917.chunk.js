(this["webpackJsonpreact-frontend-dev-portfolio"]=this["webpackJsonpreact-frontend-dev-portfolio"]||[]).push([[0],{12:function(e,a,t){e.exports=t(26)},17:function(e,a,t){},18:function(e,a,t){},26:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(11),c=t.n(i),o=(t(17),t(1)),s=t(2),l=t(4),m=t(3),u=t(7),d=t.n(u),f=(t(18),function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){if(this.props.sharedBasicInfo)var e=this.props.sharedBasicInfo.social.map((function(e){return r.a.createElement("span",{key:e.name,className:"m-4"},r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:e.class})))}));return r.a.createElement("footer",{id:"about",style:{background:"linear-gradient(to bottom, #234a8c, #183d7c )",marginBottom:"-15px",marginTop:"-10px"}},r.a.createElement("div",{className:"mx-auto mb-5"},r.a.createElement("h1",null,r.a.createElement("span",null,"Abhi Balijepalli")),r.a.createElement("div",{className:"social-links"},e)))}}]),t}(n.Component)),p=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){if(this.props.sharedBasicInfo)this.props.sharedBasicInfo.social.map((function(e){return r.a.createElement("span",{key:e.name,className:"m-4"},r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:e.class})))}));return r.a.createElement("footer",null,r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"copyright py-4 text-center"},r.a.createElement("div",{className:"container"},r.a.createElement("small",null,"Copyright \xa9"," ",this.props.sharedBasicInfo?this.props.sharedBasicInfo.name:"???")))))}}]),t}(n.Component),h=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){if(this.props.sharedBasicInfo);if(this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.about,a=this.props.resumeBasicInfo.description_header,t=this.props.resumeBasicInfo.description;return r.a.createElement("section",{id:"about"},r.a.createElement("div",{className:"row center mx-auto mb-5"},r.a.createElement("h1",{style:{color:"black"}},r.a.createElement("span",null,e)),r.a.createElement("div",{className:"row center mx-auto mb-5"},r.a.createElement("div",{className:"col-md-8 center"},r.a.createElement("div",{className:"col-md-10"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("span",{className:"iconify","data-icon":"emojione:red-circle","data-inline":"false"})," ","\xa0"," ",r.a.createElement("span",{className:"iconify","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",r.a.createElement("span",{className:"iconify","data-icon":"twemoji:green-circle","data-inline":"false"})),r.a.createElement("div",{className:"card-body font-trebuchet text-justify ml-3 mr-3",style:{height:"auto",fontSize:"165%",lineHeight:"200%"}},r.a.createElement("br",null),r.a.createElement("span",{className:"wave"},a," \ud83d\udc4b  "),r.a.createElement("br",null),r.a.createElement("br",null),t)))))))}}]),t}(n.Component),b=t(6),v=(t(24),t(8)),E=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){if(this.props.resumeExperience&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.experience,a=this.props.resumeExperience.map((function(e,a){var t=e.technologies,n=e.mainTech.map((function(e,a){return r.a.createElement(v.a,{pill:!0,className:"main-badge mr-2 mb-2",key:a},e)})),i=t.map((function(e,a){return r.a.createElement(v.a,{pill:!0,className:"experience-badge mr-2 mb-2",key:a},e)}));return r.a.createElement(b.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:e.years,iconStyle:{background:"#2a6b2d",color:"#fff",textAlign:"center"},key:a},r.a.createElement("div",{style:{textAlign:"left",marginBottom:"4px"}},n),r.a.createElement("h3",{className:"vertical-timeline-element-title",style:{textAlign:"left"}},e.title),r.a.createElement("h4",{className:"vertical-timeline-element-subtitle",style:{textAlign:"left"}},e.company),r.a.createElement("div",{style:{textAlign:"left",marginTop:"15px"}},i))}));return r.a.createElement("section",{id:"resume",className:"pb-5"},r.a.createElement("div",{className:"col-md-12 mx-auto"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h1",{className:"section-title",style:{color:"black"}},r.a.createElement("span",{className:"text-black",style:{textAlign:"center"}},e)))),r.a.createElement("div",{className:"col-md-8 mx-auto"},r.a.createElement(b.VerticalTimeline,null,a,r.a.createElement(b.VerticalTimelineElement,{iconStyle:{background:"#2a6b2d",color:"#fff",textAlign:"center"},icon:r.a.createElement("i",{className:"fas fa-hourglass-start mx-auto experience-icon"})}))))}}]),t}(n.Component),g=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this)).state={foo:"bar",resumeData:{},sharedData:{}},n}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.loadSharedData(),this.loadResumeFromPath("res_primaryLanguage.json")}},{key:"loadResumeFromPath",value:function(e){d.a.ajax({url:e,dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){alert(t)}})}},{key:"loadSharedData",value:function(){d.a.ajax({url:"portfolio_shared_data.json",dataType:"json",cache:!1,success:function(e){this.setState({sharedData:e}),document.title="".concat(this.state.sharedData.basic_info.name)}.bind(this),error:function(e,a,t){alert(t)}})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,{sharedBasicInfo:this.state.sharedData.basic_info}),r.a.createElement(h,{resumeBasicInfo:this.state.resumeData.basic_info,sharedBasicInfo:this.state.sharedData.basic_info}),r.a.createElement(E,{resumeExperience:this.state.resumeData.experience,resumeBasicInfo:this.state.resumeData.basic_info}),r.a.createElement(p,{sharedBasicInfo:this.state.sharedData.basic_info}))}}]),t}(n.Component),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(25);window.$primaryLanguage="en",window.$secondaryLanguage="pl",window.$primaryLanguageIconId="primary-lang-icon",window.$secondaryLanguageIconId="secondary-lang-icon",c.a.render(r.a.createElement(g,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat(".","/service-worker.js");y?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):w(a,e)}))}}()}},[[12,1,2]]]);
//# sourceMappingURL=main.e9dad917.chunk.js.map