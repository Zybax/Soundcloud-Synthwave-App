(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),i=a(1),l=a(2),u=a(4),s=a(3),m=a(5);function d(e){return r.a.createElement("div",{className:"container"},e.children)}function p(){return r.a.createElement("header",{className:"header d-flex justify-content-center flex-wrap align-items-start align-content-arround"},r.a.createElement("div",{className:"text-container d-flex justify-content-center flex-wrap align-items-center "},r.a.createElement("div",{className:"logo-container d-flex flex-column align-items-center"},r.a.createElement("h1",{className:"logo"},"RETRO"),r.a.createElement("h3",{className:"dreams"},"Dreams")),r.a.createElement("h4",{className:"header__sub-title"},"Listen To Some Rad Synthwave Tracks ",r.a.createElement("br",null)," Search by Album, Artist or Track Name ")))}function v(e){return r.a.createElement("div",{className:"row grid"},e.children)}function f(){return r.a.createElement("div",{className:"not-found d-flex justify-content-center"},r.a.createElement("p",{className:"not-found-message"},"Not results found... remember you can only search synthwave related tracks here ;)"))}function y(e){return r.a.createElement("div",{className:"pagination-container d-flex justify-content-center"},r.a.createElement("ul",{className:"pagination-list d-flex justify-content-center"},e.pageNumbers.map(function(t){return r.a.createElement("li",{className:"pagination-list-item"+(e.currentPage===t?" pagination-list-current":""),key:t,id:t,onClick:e.handlePageClick},t)})))}var h=Object(n.lazy)(function(){return a.e(3).then(a.bind(null,17))}),g="d02c42795f3bcac39f84eee0ae384b00",E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).apiRequest=function(){fetch("https://api.soundcloud.com/tracks?genres=".concat(a.props.genre,"&client_id=").concat(g,"&q=").concat(a.props.query,"&limit=100")).then(function(e){return e.json()}).then(function(e){return a.setState({data:e})}).catch(function(e){console.error(e.message)})},a.componentDidMount=function(){a.apiRequest()},a.componentDidUpdate=function(e,t){e.query!==a.props.query&&(a.setState({currentPage:1}),a.apiRequest())},a.handlePageClick=function(e){a.setState({currentPage:parseInt(e.target.id)})},a.paginationItemsSetup=function(){var e=a.state.currentPage*a.state.itemsPerPage,t=e-a.state.itemsPerPage;return a.state.data.slice(t,e)},a.pageNumbersSetup=function(){for(var e=[],t=1;t<=Math.ceil(a.state.data.length/a.state.itemsPerPage);t++)e.push(t);return e},a.state={data:[],currentPage:1,itemsPerPage:18},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"grid-container"},r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},0!==this.state.data.length?r.a.createElement(v,null,this.paginationItemsSetup().map(function(t){var a=t.artwork_url,n=t.user.username,o=t.title,c="".concat(t.stream_url,"?client_id=").concat(g);return r.a.createElement(h,{key:c,background:a,artist:n,name:o,url:c,currentTrackhandler:e.props.currentTrackHandler})})):r.a.createElement(f,null)),r.a.createElement(y,{pageNumbers:this.pageNumbersSetup(),handlePageClick:this.handlePageClick,currentPage:this.state.currentPage}))}}]),t}(n.Component);function k(e){return r.a.createElement("div",{className:"search-form-container d-flex justify-content-center flex-wrap align-items-center"},r.a.createElement("form",{className:"search-form d-flex justify-content-center  align-items-center",action:""},r.a.createElement("input",{onChange:e.searchValueHandler,onKeyPress:e.searchKeyPressHandler,className:"form-control input-search",type:"text",placeholder:"Search","aria-label":"Search"}),r.a.createElement("button",{onClick:e.searchSubmitHandler,type:"button",className:"btn custom-btn btn-primary"},"Search")))}var b=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).componentDidUpdate=function(e){a.props.url!==e.url&&a.toogleAudio()},a.componentDidMount=function(){a.audioTrack=document.querySelector("#audio-player"),a.playButton=document.querySelector("#playButton"),a.timeline=document.querySelector("#timeline"),a.progressionBar=document.querySelector("#progression-bar "),a.playhead=document.querySelector("#playhead"),a.totalTime=document.querySelector("#timer-total-time"),a.currentTime=document.querySelector("#timer-current-time"),a.volumeIcon=document.querySelector("#volume-icon"),a.volumeBar=document.querySelector("#volume-bar"),a.volumeLine=document.querySelector("#volume-line"),a.volumeHead=document.querySelector("#volume-head"),a.duration="",window.onload=a.addListeners()},a.toogleAudio=function(){""!==a.audioTrack.getAttribute("src")&&(a.audioTrack.paused?(a.playButton.classList.replace("fa-play","fa-pause"),a.audioTrack.play()):(a.playButton.classList.replace("fa-pause","fa-play"),a.audioTrack.pause()))},a.timeUpdate=function(){a.duration===a.getTrackDuration()&&a.getTrackDuration(),a.audioTrack.currentTime===a.duration&&a.playButton.classList.replace("fa-pause","fa-play"),a.timerUpdate(),a.progressionUpdate()},a.timerUpdate=function(){var e=parseInt(a.duration/60,10),t=parseInt(a.duration%60),n=parseInt(a.audioTrack.currentTime/60,10),r=parseInt(a.audioTrack.currentTime%60);a.totalTime.innerHTML=a.formatTime(e,t),a.currentTime.innerHTML=a.formatTime(n,r)},a.progressionUpdate=function(){var e=a.audioTrack.currentTime/a.duration*100;a.timeline.style.width=e+"%",a.playhead.style.marginLeft=e-1.2+"%"},a.getTrackDuration=function(){a.audioTrack.readyState>0&&(a.duration=a.audioTrack.duration)},a.getPosition=function(e){return e.offsetLeft},a.setProgressionPosition=function(e){a.duration||a.getTrackDuration(),a.audioTrack.currentTime=a.clickPercent(e,a.progressionBar)*a.duration},a.toogleVolume=function(){a.audioTrack.muted?(a.volumeIcon.classList.replace("fa-volume-mute","fa-volume-up"),a.volumeLine.style.display="block",a.volumeHead.style.display="block",a.audioTrack.muted=!1):(a.volumeIcon.classList.replace("fa-volume-up","fa-volume-mute"),a.volumeLine.style.display="none",a.volumeHead.style.display="none",a.audioTrack.muted=!0)},a.volumeUpdate=function(e){a.volumeLine.style.display="block",a.volumeHead.style.display="block",a.setVolume(e),a.volumeBarUpdate()},a.setVolume=function(e){var t=a.clickPercent(e,a.volumeBar);a.audioTrack.volume=t<=0?0:t>=1?1:t},a.volumeBarUpdate=function(){var e=a.audioTrack.volume/1*100;a.volumeLine.style.width=e+"%",a.volumeHead.style.marginLeft=e-6+"%"},a.clickPercent=function(e,t){return(e.clientX-a.getPosition(t))/t.offsetWidth},a.mouseUpEventRemove=function(){window.removeEventListener("mousemove",a.playHeadMove,!0),window.removeEventListener("mousemove",a.volumeHeadMove,!0)},a.mouseDown=function(e,t){window.addEventListener("mousemove",t,!0)},a.playHeadMove=function(e){a.setProgressionPosition(e)},a.volumeHeadMove=function(e){a.volumeUpdate(e)},a.addListeners=function(){a.audioTrack.addEventListener("timeupdate",a.timeUpdate,!1),a.playButton.addEventListener("click",a.toogleAudio,!1),a.progressionBar.addEventListener("click",a.setProgressionPosition,!1),a.progressionBar.addEventListener("mousedown",function(e){a.mouseDown(e,a.playHeadMove)},!1),a.playhead.addEventListener("mousedown",function(e){a.mouseDown(e,a.playHeadMove)},!1),a.volumeBar.addEventListener("click",a.volumeUpdate,!1),a.volumeBar.addEventListener("mousedown",function(e){a.mouseDown(e,a.volumeHeadMove)},!1),a.volumeIcon.addEventListener("click",a.toogleVolume,!1),a.volumeHead.addEventListener("mousedown",function(e){a.mouseDown(e,a.volumeHeadMove)},!1),window.addEventListener("mouseup",a.mouseUpEventRemove,!1)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"formatTime",value:function(e,t){var a=1===e.toString().length?"0".concat(e):e,n=1===t.toString().length?"0".concat(t):t;return"".concat(a,":").concat(n)}},{key:"render",value:function(){return r.a.createElement("div",{className:"audio-container"},r.a.createElement("div",{className:"audio-player"},r.a.createElement("div",{className:"audio-player__controls"},r.a.createElement("div",{className:"audio-player__button-container"},r.a.createElement("i",{id:"playButton",className:"fas fa-play play-button"})),r.a.createElement("div",{className:"audio-player__timer-container"},r.a.createElement("span",{id:"timer-current-time",className:"timer-current-time"}," 00:00 "),r.a.createElement("span",{className:"timer-divider"}," / "),r.a.createElement("span",{id:"timer-total-time",className:"timer-total-time"}," 00:00 ")),r.a.createElement("div",{className:"audio-player__range-container"},r.a.createElement("div",{id:"progression-bar",className:"progression-bar"},r.a.createElement("div",{id:"timeline",className:"progression-bar__timeline"}),r.a.createElement("div",{id:"playhead",className:"progression-bar__playhead"}))),r.a.createElement("div",{className:"audio-player__volume-container"},r.a.createElement("div",{className:"volume-icon-container"},r.a.createElement("i",{id:"volume-icon",className:"fas fa-volume-up"})),r.a.createElement("div",{className:"volume-range"},r.a.createElement("div",{id:"volume-bar",className:"volume-bar"},r.a.createElement("div",{id:"volume-line",className:"volume-bar__line"}),r.a.createElement("div",{id:"volume-head",className:"volume-bar__head"})))),r.a.createElement("audio",{id:"audio-player",src:this.props.url}))))}}]),t}(n.Component),T=(a(14),a(15),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).searchSubmitHandler=function(e){e.preventDefault(),a.setState({query:a.state.searchInput})},a.searchKeyPressHandler=function(e){"Enter"===e.key&&a.searchSubmitHandler(e)},a.searchValueHandler=function(e){e.preventDefault(),a.setState({searchInput:e.target.value})},a.currentTrackHandler=function(e){a.setState({currentTrack:e})},a.state={currentTrack:"",searchInput:"",query:"*"},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(d,null,r.a.createElement(p,null),r.a.createElement(k,{searchKeyPressHandler:this.searchKeyPressHandler,searchValueHandler:this.searchValueHandler,searchSubmitHandler:this.searchSubmitHandler}),r.a.createElement(E,{genre:"synthwave",query:this.state.query,currentTrackHandler:this.currentTrackHandler}),r.a.createElement(b,{url:this.state.currentTrack})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.74e71de1.chunk.js.map