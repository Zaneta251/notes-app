(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},118:function(e,t,a){e.exports=a(203)},130:function(e,t,a){},131:function(e,t,a){},177:function(e,t,a){},183:function(e,t,a){},189:function(e,t,a){},200:function(e,t,a){},203:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),i=a(19),s=a(9),l=a(10),u=a(13),d=a(11),p=a(14),m=a(207),f=a(82),h=a.n(f),v=a(114),E=a.n(v),N=(a(127),a(129),a(113)),b=a(34),g=a(6),y=(a(130),a(23)),j=(a(131),a(61)),O=a(35),w=a(22),C=a.n(w),k=a(36),S=a(206),x=a(104),T=new(a.n(x).a)({en:{title:"Application for creating and managing notes",addNew:"Add a new note",add:"Add",BSC:"BSC",cancel:"Cancel",delete:"Delete",edit:"Edit",save:"Save",editSuccess:"Note successfully edited!",createSuccess:"Note successfully created!"},cz:{title:"Aplikace pro vytv\xe1\u0159en\xed a spr\xe1vu pozn\xe1mek",addNew:"P\u0159idat novou pozn\xe1mku",add:"P\u0159idat",BSC:"BSC",cancel:"Zru\u0161it",delete:"Vymazat",edit:"Upravit",save:"Ulo\u017eit",editSuccess:"Pozn\xe1mka \xfasp\u011b\u0161n\u011b upravena!",createSuccess:"Pozn\xe1mka \xfasp\u011b\u0161n\u011b vytvo\u0159ena!"}}),L=function(){return function(){var e=Object(k.a)(C.a.mark(function e(t){var a,n;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://private-9aad-note10.apiary-mock.com/notes",{headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:if(!(a=e.sent).ok){e.next=10;break}return e.next=7,a.json();case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=[];case 11:n=e.t0,t({type:"GET_NOTES_LIST",payload:n}),e.next=20;break;case 15:throw e.prev=15,e.t1=e.catch(0),t({type:"GET_NOTES_LIST",payload:[]}),S.a.error("Load notes failed"),e.t1;case 20:case"end":return e.stop()}},e,null,[[0,15]])}));return function(t){return e.apply(this,arguments)}}()},A=function(e){return{type:"SET_SELECTED_NOTE",payload:e}},_=function(e){return{type:"SET_CREATE_FLAG",payload:e}},F=function(e){return function(){var t=Object(k.a)(C.a.mark(function t(a,n){var r,c,o;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().main.notesList,c=r[r.length-1].id,o=Object(O.a)({},r,Object(j.a)({},c,{id:c+1,title:e})),t.prev=3,t.next=6,fetch("http://private-9aad-note10.apiary-mock.com/notes",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify(o)});case 6:if(!t.sent.ok){t.next=12;break}return S.a.success(T.createSuccess),a({type:"SET_CREATE_FLAG",payload:!1}),t.next=12,L()(a);case 12:t.next=18;break;case 14:throw t.prev=14,t.t0=t.catch(3),S.a.error("Load notes failed"),t.t0;case 18:case"end":return t.stop()}},t,null,[[3,14]])}));return function(e,a){return t.apply(this,arguments)}}()},G=function(e){return function(){var t=Object(k.a)(C.a.mark(function t(a){return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://private-9aad-note10.apiary-mock.com/notes/".concat(e),{headers:{Accept:"application/json","Content-Type":"application/json"},method:"PUT"});case 3:if(!t.sent.ok){t.next=9;break}return S.a.success(T.editSuccess),a({type:"SET_CREATE_FLAG",payload:!1}),t.next=9,L()(a);case 9:t.next=15;break;case 11:throw t.prev=11,t.t0=t.catch(0),S.a.error("Edit note failed"),t.t0;case 15:case"end":return t.stop()}},t,null,[[0,11]])}));return function(e){return t.apply(this,arguments)}}()},R=function(e){return function(){var t=Object(k.a)(C.a.mark(function t(a){return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://private-9aad-note10.apiary-mock.com/notes/".concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}});case 2:return t.next=4,L()(a);case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},z=function(e){return{type:"SET_LANGUAGE",payload:e}},P=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).openDetail=function(e){a.props.setSelectedNote(e),a.props.setCreateFlag(!1)},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"note-list-layout"},r.a.createElement("div",{style:{overflowY:"auto",maxHeight:"100vh"},className:"scrollable-container"},this.props.notes.map(function(t){return r.a.createElement("div",{key:"area-".concat(t.id)},r.a.createElement("div",{className:"hoverable-list-item note",onClick:function(){return e.openDetail(t)}},r.a.createElement("div",{style:{padding:"2px"}},r.a.createElement(y.a,{style:{margin:"10px"},type:"edit"}),t.title)))})))}}]),t}(r.a.Component),B=Object(i.b)(function(e){return{notes:e.main.notesList}},function(e){return Object(g.b)({loadNotesList:L,setSelectedNote:A,setCreateFlag:_},e)})(P),D=a(204),U=a(65),I=(a(177),D.a.TextArea),J=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).editNote=function(e){a.setState({editedNote:e.title}),a.props.setCreateFlag(!0)},a.addNewNote=function(){0!==a.state.newNote.length&&a.props.addNewNote(a.state.newNote)},a.onCancel=function(){a.props.setCreateFlag(!1),a.setState({newNote:"",editedNote:""})},a.deleteNote=function(){a.props.deleteNote(a.props.selectedNote.id),a.props.setSelectedNote(null)},a.saveEditedNote=function(){a.state.editedNote!==a.props.selectedNote.title&&a.props.editNote(a.props.selectedNote.id)},a.state={newNote:"",editedNote:""},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.selectedNote,n=t.createFlag;return r.a.createElement("div",{className:"note-detail-layout"},a?n?r.a.createElement("div",{className:"text-area"},r.a.createElement(I,{style:{height:"90%",width:"100%"},placeholder:"Add new note ... ",value:this.state.editedNote,onChange:function(t){return e.setState({editedNote:t.target.value})}}),r.a.createElement("div",{className:"action-buttons"},r.a.createElement(U.a,{onClick:this.onCancel},T.cancel),r.a.createElement(U.a,{onClick:this.deleteNote},T.delete),r.a.createElement(U.a,{onClick:this.saveEditedNote},T.save))):r.a.createElement("div",null,r.a.createElement("div",{className:"note-detail"},a.title),r.a.createElement("div",{className:"action-buttons"},r.a.createElement(U.a,{onClick:function(){return e.props.setSelectedNote(null)}},T.cancel),r.a.createElement(U.a,{onClick:this.deleteNote},T.delete),r.a.createElement(U.a,{onClick:function(){return e.editNote(a)}},T.edit))):n?r.a.createElement("div",{className:"text-area"},r.a.createElement(I,{style:{height:"95%",width:"100%"},placeholder:"Add a new note ... ",value:this.state.newNote,onChange:function(t){return e.setState({newNote:t.target.value})}}),r.a.createElement("div",{className:"action-buttons"},r.a.createElement(U.a,{onClick:this.onCancel},T.cancel),r.a.createElement(U.a,{onClick:this.addNewNote},T.add))):r.a.createElement("div",{className:"bsc-text"},T.BSC))}}]),t}(r.a.Component),V=Object(i.b)(function(e){return{selectedNote:e.main.selectedNote,notes:e.main.notesList,createFlag:e.main.newNote}},function(e){return Object(g.b)({setCreateFlag:_,setSelectedNote:A,addNewNote:F,deleteNote:R,editNote:G},e)})(J),Z=a(205),H=(a(183),Z.a.Button),M=Z.a.Group,Y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).addNote=function(){a.props.setCreateFlag(!0),a.props.setSelectedNote(null)},a.changeLanguage=function(e){a.props.setLanguage(e.target.value)},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.language||navigator.language||navigator.userLanguage;return r.a.createElement("div",{className:"header row"},r.a.createElement("div",{className:"title"},r.a.createElement("h1",{className:"flex-grow"},T.title)),r.a.createElement("div",{className:"add-button"},r.a.createElement(U.a,{block:!0,type:"primary",onClick:this.addNote},T.addNew)),r.a.createElement("div",{className:"language"},r.a.createElement(M,{onChange:this.changeLanguage,defaultValue:e,buttonStyle:"solid"},r.a.createElement(H,{style:{padding:"0 5px"},value:"en"},"EN"),r.a.createElement(H,{style:{padding:"0 5px"},value:"cz"},"CZ"))))}}]),t}(r.a.Component),q=Object(i.b)(function(e){return{language:e.main.language}},function(e){return Object(g.b)({setCreateFlag:_,setSelectedNote:A,setLanguage:z},e)})(Y),K=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.loadNotesList()}},{key:"render",value:function(){return r.a.createElement("div",{className:"flex-container"},r.a.createElement(q,null),r.a.createElement("div",{className:"wrapper"},r.a.createElement(B,null),r.a.createElement(V,null)))}}]),t}(n.Component),Q=Object(i.b)(function(e){return{notesList:e.main.notesList}},function(e){return Object(g.b)({loadNotesList:L,setSelectedNote:A},e)})(K),W=a(112),X=a.n(W),$=(a(189),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log("redirect"),r.a.createElement("div",{className:"Redirect"},r.a.createElement("header",{className:"Redirect-header"},r.a.createElement("img",{src:X.a,className:"Redirect-logo",alt:"logo"})))}}]),t}(n.Component)),ee=a(16),te=Object(ee.a)(),ae=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(N.a,{history:te},r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(Q,e)}}),r.a.createElement(b.a,{exact:!0,path:"/redirect",render:function(e){return r.a.createElement($,e)}}),r.a.createElement(b.a,{render:function(){return r.a.createElement("h1",null,"Page not found")}})))}}]),t}(r.a.Component),ne=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.language||navigator.language||navigator.userLanguage,t="en"===e&&h.a||"cz"===e&&E.a||h.a;return T.setLanguage(e),r.a.createElement(m.a,{locale:t},r.a.createElement(ae,null))}}]),t}(r.a.Component),re=Object(i.b)(function(e){return{language:e.main.language||""}})(ne),ce={notesList:[],selectedNote:null,newNote:!1,language:"cz"},oe=Object(g.c)({main:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"GET_NOTES_LIST":return Object(O.a)({},e,{notesList:n});case"SET_SELECTED_NOTE":return Object(O.a)({},e,{selectedNote:n});case"SET_CREATE_FLAG":return Object(O.a)({},e,{newNote:n});case"SET_LANGUAGE":return Object(O.a)({},e,{language:n});default:return e}}}),ie=a(115),se=(a(198),[]);se.push(function(){return function(e){return function(){var t=Object(k.a)(C.a.mark(function t(a){return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Promise.resolve(e(a));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.error(t.t0),e({type:"ERROR"});case 10:case"end":return t.stop()}},t,null,[[0,6]])}));return function(e){return t.apply(this,arguments)}}()}}),se.push(ie.a);var le=g.a.apply(void 0,se),ue=(a(200),a(201),a(202),Object(g.d)(oe,le));o.a.render(r.a.createElement(i.a,{store:ue},r.a.createElement(re,null)),document.getElementById("root"))}},[[118,1,2]]]);
//# sourceMappingURL=main.b0fff4b6.chunk.js.map