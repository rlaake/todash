(function(t){function e(e){for(var i,o,c=e[0],r=e[1],l=e[2],u=0,f=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);d&&d(e);while(f.length)f.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],i=!0,c=1;c<s.length;c++){var r=s[c];0!==a[r]&&(i=!1)}i&&(n.splice(e--,1),t=o(o.s=s[0]))}return t}var i={},a={app:0},n=[];function o(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=i,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(s,i,function(e){return t[e]}.bind(null,i));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/todash/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=r;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var i=s("85ec"),a=s.n(i);a.a},"261b":function(t,e,s){},3914:function(t,e,s){},"423a":function(t,e,s){"use strict";var i=s("261b"),a=s.n(i);a.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Navigation"),s("div",{staticClass:"columns is-mobile is-marginless"},[s("ProjectList"),s("TaskList",{class:{"is-hidden":!t.haveProjects||t.navActive}})],1)],1)},n=[],o=s("5530"),c=s("2f62"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar"},[s("div",{staticClass:"navbar-brand"},[t._m(0),s("a",{staticClass:"navbar-burger burger",class:{"is-active":t.navActive,"is-hidden":!t.haveProjects},attrs:{role:"button"},on:{click:t.toggleNav}},[s("span"),s("span"),s("span")])]),s("div",{staticClass:"navbar-menu is-paddingless",attrs:{id:"navbarInfo"}},[s("div",{staticClass:"navbar-end"},[s("div",{staticClass:"navbar-item"},[t._v(t._s(t.today)+" ")])])])])},l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"navbar-item"},[i("img",{attrs:{src:s("e347"),width:"50",height:"100"}}),t._v(" Todash ")])}],d={name:"Navigation",computed:Object(o["a"])({},Object(c["c"])(["haveProjects","navActive","today"])),methods:Object(o["a"])({},Object(c["b"])(["toggleNav"]))},u=d,f=s("2877"),h=Object(f["a"])(u,r,l,!1,null,"3cf8397f",null),v=h.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column is-paddingless",class:t.projectListClasses},[s("nav",{staticClass:"panel scroll-container"},[s("div",{staticClass:"panel-heading"},[t._v("Projects "),s("a",[s("i",{staticClass:"fas fa-plus",class:{"is-hidden":t.UIIsEditing},on:{click:function(e){t.setUIStatus(),t.toggleUIIsEditing(),t.addProject()}}})])]),t._l(t.allProjects,(function(t){return s("Project",{key:t.id,attrs:{project:t}})}))],2)])},p=[],j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.project.editing?s("div",{attrs:{id:"project"}},[s("a",{staticClass:"panel-block editing"},[s("div",[t._v("Color: "),s("br"),s("input",{directives:[{name:"model",rawName:"v-model",value:t.editColor,expression:"editColor"}],attrs:{type:"color",placeholder:t.project.color},domProps:{value:t.editColor},on:{input:function(e){e.target.composing||(t.editColor=e.target.value)}}}),s("br"),t._v("Title: "),s("br"),s("input",{directives:[{name:"model",rawName:"v-model",value:t.editTitle,expression:"editTitle"}],staticClass:"edit-title",attrs:{placeholder:t.project.title,size:"5"},domProps:{value:t.editTitle},on:{input:function(e){e.target.composing||(t.editTitle=e.target.value)}}})]),s("br"),s("div",{staticClass:"buttons"},[s("button",{staticClass:"button is-text",attrs:{disabled:!t.hasTitle},on:{click:function(e){t.toggleProjectIsEditing(t.project),t.toggleUIIsEditing(),t.submitEdit()}}},[s("i",{staticClass:"fas fa-check"})]),t.project.newProject?s("button",{staticClass:"button is-text",on:{click:function(e){t.deleteProject(t.project),t.toggleUIIsEditing()}}},[s("i",{staticClass:"fas fa-trash-alt"})]):s("button",{staticClass:"button is-text",on:{click:function(e){t.toggleProjectIsEditing(t.project),t.toggleUIIsEditing(),t.cancelEdit()}}},[s("i",{staticClass:"fas fa-times"})])])])]):s("div",{attrs:{id:"project"},on:{mouseover:t.toggleButtons,mouseout:t.toggleButtons}},[s("a",{staticClass:"panel-block"},[s("span",{staticClass:"panel-icon"},[s("i",{staticClass:"far fa-dot-circle",style:t.projectColor})]),s("span",{attrs:{id:"project-title"},on:{click:function(e){t.setProjectActive(t.project),t.UIWidthCheck(),t.resetDate()}}},[t._v(t._s(t.project.title))]),t.isMobile?s("div",{staticClass:"buttons",class:{"is-hidden":t.UIIsEditing}},[s("button",{staticClass:"button is-text",on:{click:function(e){t.toggleProjectIsEditing(t.project),t.toggleUIIsEditing()}}},[s("i",{staticClass:"fas fa-edit"})]),s("button",{staticClass:"button is-text",on:{click:function(e){return t.deleteProject(t.project)}}},[s("i",{staticClass:"fas fa-trash-alt"})])]):s("div",{staticClass:"buttons",class:{"is-hidden":!t.showButtons||t.UIIsEditing}},[s("button",{staticClass:"button is-text",on:{click:function(e){t.toggleProjectIsEditing(t.project),t.toggleUIIsEditing()}}},[s("i",{staticClass:"fas fa-edit"})]),s("button",{staticClass:"button is-text",on:{click:function(e){return t.deleteProject(t.project)}}},[s("i",{staticClass:"fas fa-trash-alt"})])])])])},m=[],b={name:"Project",props:["project"],data:function(){return{showButtons:!1,editTitle:this.project.title,editColor:this.project.color}},computed:Object(o["a"])(Object(o["a"])({},Object(c["c"])(["UIIsEditing","isMobile"])),{},{projectColor:function(){return"color: "+this.project.color},hasTitle:function(){return""!==this.editTitle}}),methods:Object(o["a"])(Object(o["a"])({},Object(c["b"])(["setNavActive","setProjectListClasses","resetDate","toggleUIIsEditing","setProjectActive","editProject","deleteProject","toggleProjectIsEditing"])),{},{toggleButtons:function(){this.showButtons=!this.showButtons},submitEdit:function(){this.editProject({title:this.editTitle,color:this.editColor,id:this.project.id}),this.showButtons=!0},cancelEdit:function(){this.editTitle=this.project.title,this.editColor=this.project.color},UIWidthCheck:function(){window.innerWidth<1023&&(this.setNavActive(!1),this.setProjectListClasses("is-2 is-hidden-touch"))}})},P=b,C=(s("c07a"),Object(f["a"])(P,j,m,!1,null,"66aef280",null)),k=C.exports,I={name:"ProjectList",components:{Project:k},computed:Object(o["a"])({},Object(c["c"])(["projectListClasses","UIIsEditing","allProjects","activeProject","haveProjects"])),methods:Object(o["a"])(Object(o["a"])({},Object(c["b"])(["setProjectListClasses","setNavActive","toggleUIIsEditing","updateProjects","deleteProject","setProjectActive","addProject"])),{},{setUIStatus:function(){!this.haveProjects&&window.innerWidth<=1023?(this.setProjectListClasses(""),this.setNavActive(!0)):this.haveProjects||(this.setProjectListClasses("is-2 is-hidden-touch"),this.setNavActive(!1))}})},E=I,T=(s("5b7f"),Object(f["a"])(E,g,p,!1,null,"c8a3a67a",null)),_=T.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column is-paddingless"},[t.haveActiveProject?s("div",{staticClass:"scroll-container"},[s("nav",{staticClass:"level is-mobile"},[s("div",{staticClass:"level-left"},[s("div",{staticClass:"level-item"},[s("span",{staticClass:"is-size-3"},[t._v(t._s(t.activeProject.title))])]),s("span",{staticClass:"level-item"},[s("span",{staticClass:"icon is-size-5"},[s("i",{staticClass:"fas fa-calendar"}),s("input",{attrs:{id:"date-picker",type:"date"},on:{change:t.handleDate}})])])])]),t._l(t.activeProject.tasks,(function(t){return s("Task",{key:t.id,attrs:{task:t}})})),s("div",{staticClass:"panel-heading",class:{"is-hidden":t.UIIsEditing}},[t._v(" Add Task "),s("a",[s("i",{staticClass:"fas fa-plus",on:{click:function(e){t.toggleUIIsEditing(),t.addTask()}}})])])],2):t.dateHasTasks?s("div",{staticClass:"scroll-container"},[s("nav",{staticClass:"level is-mobile"},[s("div",{staticClass:"level-left"},[s("div",{staticClass:"level-item"},[s("span",{staticClass:"is-size-3"},[t._v(t._s(t.formattedDate))])]),s("span",{staticClass:"level-item"},[s("span",{staticClass:"icon is-size-5"},[s("i",{staticClass:"fas fa-calendar"}),s("input",{attrs:{id:"date-picker",type:"date"},on:{change:t.handleDate}})])])])]),t._l(t.tasksByDate(t.date),(function(t,e){return s("Task",{key:e,attrs:{task:t}})}))],2):s("div",{staticClass:"scroll-container"},[s("nav",{staticClass:"level is-mobile"},[s("div",{staticClass:"level-left"},[s("div",{staticClass:"level-item"},[s("span",{staticClass:"is-size-3"},[t._v(t._s(t.formattedDate))])]),s("a",{staticClass:"level-item"},[s("span",{staticClass:"icon is-size-5"},[s("i",{staticClass:"fas fa-calendar"}),s("input",{attrs:{id:"date-picker",type:"date"},on:{change:t.handleDate}})])])])]),s("span",{staticClass:"is-size-5 no-tasks"},[t._v("Nothing planned for this date. Add a new project or tasks.")])])])},D=[],w=(s("b64b"),s("ac1f"),s("1276"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.task.editing?s("article",{attrs:{id:"edit-task"}},[s("div",{staticClass:"media-content"},[s("div",{staticClass:"content"},[s("label",{staticClass:"label"},[t._v("Title")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.editTitle,expression:"editTitle"}],attrs:{placeholder:"Enter title"},domProps:{value:t.editTitle},on:{input:function(e){e.target.composing||(t.editTitle=e.target.value)}}}),s("label",{staticClass:"label"},[t._v("Due Date")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.editDueDate,expression:"editDueDate"}],attrs:{type:"date"},domProps:{value:t.editDueDate},on:{input:function(e){e.target.composing||(t.editDueDate=e.target.value)}}}),s("label",{staticClass:"label"},[t._v("Important")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.editImportant,expression:"editImportant"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.editImportant=e.target.multiple?s:s[0]}}},[s("option",{domProps:{value:t.options.true}},[t._v("True")]),s("option",{domProps:{value:t.options.false}},[t._v("False")])])])]),s("div",{staticClass:"buttons media-right editButtons"},[s("button",{staticClass:"button is-text editButton",attrs:{disabled:!t.hasTitle},on:{click:function(e){t.toggleTaskIsEditing(t.task),t.toggleUIIsEditing(),t.submitEdit()}}},[s("i",{staticClass:"fas fa-check"})]),t.task.newTask?s("button",{staticClass:"button is-text editButton",on:{click:function(e){t.deleteTask(t.task),t.toggleUIIsEditing()}}},[s("i",{staticClass:"fas fa-trash-alt"})]):s("button",{staticClass:"button is-text editButton",on:{click:function(e){t.toggleTaskIsEditing(t.task),t.toggleUIIsEditing(),t.cancelEdit()}}},[s("i",{staticClass:"fas fa-times"})])])]):s("article",{staticClass:"media",on:{mouseover:t.showButtons,mouseout:t.hideButtons}},[s("figure",{staticClass:"media-left is-size-4"},[s("i",{staticClass:"far fa-dot-circle",class:{"is-hidden":t.task.finished},style:{color:t.task.color}}),s("i",{staticClass:"fas fa-check-circle",class:{"is-hidden":!t.task.finished},style:{color:t.task.color}})]),s("div",{staticClass:"media-content"},[t.task.finished?s("div",{staticClass:"content"},[s("p",[s("small",[t._v("Finished")]),s("br"),s("span",{staticClass:"finished-text"},[t._v(t._s(t.task.title))])])]):s("div",{staticClass:"content"},[s("p",[s("small",{staticClass:"warn",class:{"is-hidden":!t.task.important}},[t._v("!! Important ")]),s("small",{class:{"is-hidden":!t.task.important}},[t._v(" • ")]),s("small",[t._v(" Due: "+t._s(this.date))]),s("br"),t._v(" "+t._s(t.task.title)+" ")])]),t.isMobile?s("div",{staticClass:"content"},[t.task.finished?s("button",{staticClass:"button is-text",on:{click:function(e){return t.toggleTaskFinished(t.task)}}},[s("i",{staticClass:"fas fa-undo-alt"})]):s("button",{staticClass:"button is-text",on:{click:function(e){return t.toggleTaskFinished(t.task)}}},[s("i",{staticClass:"fas fa-check"})]),t.task.finished?t._e():s("button",{staticClass:"button is-text",on:{click:function(e){t.toggleTaskIsEditing(t.task),t.toggleUIIsEditing()}}},[s("i",{staticClass:"fas fa-edit"})]),s("button",{staticClass:"button is-text",on:{click:function(e){return t.deleteTask(t.task)}}},[s("i",{staticClass:"fas fa-trash-alt"})])]):t._e()]),t.isMobile?t._e():s("div",{staticClass:"buttons media-right",class:{"is-hidden":!t.buttonsVisible||t.UIIsEditing}},[t.task.finished?s("button",{staticClass:"button is-text",on:{click:function(e){return t.toggleTaskFinished(t.task)}}},[s("i",{staticClass:"fas fa-undo-alt"})]):s("button",{staticClass:"button is-text",on:{click:function(e){t.toggleTaskFinished(t.task),t.hideButtons()}}},[s("i",{staticClass:"fas fa-check"})]),t.task.finished?t._e():s("button",{staticClass:"button is-text",on:{click:function(e){t.toggleTaskIsEditing(t.task),t.toggleUIIsEditing()}}},[s("i",{staticClass:"fas fa-edit"})]),s("button",{staticClass:"button is-text",on:{click:function(e){return t.deleteTask(t.task)}}},[s("i",{staticClass:"fas fa-trash-alt"})])])])])}),S=[],A={name:"Task",props:["task"],data:function(){return{buttonsVisible:!1,editTitle:this.task.title,editDueDate:this.task.dueDate,editImportant:this.task.important,options:{true:!0,false:!1}}},computed:Object(o["a"])(Object(o["a"])({},Object(c["c"])(["UIIsEditing","isMobile"])),{},{date:function(){var t=this.task.dueDate.split(/\D+/);return t[1]+"/"+t[2]+"/"+t[0]},hasTitle:function(){return""!==this.editTitle}}),methods:Object(o["a"])(Object(o["a"])({},Object(c["b"])(["toggleTaskFinished","toggleUIIsEditing","toggleTaskIsEditing","deleteTask","editTask"])),{},{showButtons:function(){this.buttonsVisible=!0},hideButtons:function(){this.buttonsVisible=!1},submitEdit:function(){this.editTask({title:this.editTitle,dueDate:this.editDueDate,important:this.editImportant,id:this.task.id,projectId:this.task.projectId}),this.buttonsVisible=!1},cancelEdit:function(){this.editTitle=this.task.title,this.editDueDate=this.task.dueDate,this.editImportant=this.task.important,this.buttonsVisible=!1}})},y=A,U=(s("6914"),Object(f["a"])(y,w,S,!1,null,"407e0b34",null)),x=U.exports,L={name:"TaskList",components:{Task:x},computed:Object(o["a"])(Object(o["a"])({},Object(c["c"])(["UIIsEditing","activeProject","haveProjects","tasksByDate","date"])),{},{dateHasTasks:function(){return this.tasksByDate(this.date).length>0},haveActiveProject:function(){return Object.keys(this.activeProject).length>0},formattedDate:function(){var t=this.date.split(/\D+/);return t[1]+"/"+t[2]+"/"+t[0]}}),methods:Object(o["a"])(Object(o["a"])({},Object(c["b"])(["toggleNav","toggleUIIsEditing","addTask","setDate","resetProjectActive"])),{},{handleDate:function(t){this.setDate(t.target.value),this.resetProjectActive()}}),mounted:function(){if(!(Object.keys(this.activeProject)>0)&&""===this.date){var t=(new Date).toLocaleDateString().split("/");this.setDate(t[2]+"-"+t[0]+"-"+t[1])}}},N=L,J=(s("423a"),Object(f["a"])(N,O,D,!1,null,"d5330b62",null)),B=J.exports,R={name:"App",components:{Navigation:v,ProjectList:_,TaskList:B},computed:Object(o["a"])({},Object(c["c"])(["navActive","projectListClasses","haveProjects","projectIsEditing"])),methods:Object(o["a"])(Object(o["a"])({},Object(c["b"])(["toggleNav","setProjectListClasses","setNavActive","toggleUIIsEditing","getProjects","checkForProjects"])),{},{resizeListenerCB:function(){window.innerWidth>1023&&this.haveProjects&&!this.projectIsEditing?(this.setProjectListClasses("is-2 is-hidden-touch"),this.setNavActive(!1)):window.innerWidth<=1023&&this.projectIsEditing&&(this.setProjectListClasses(""),this.setNavActive(!0))}}),created:function(){this.getProjects(),this.checkForProjects()},mounted:function(){window.addEventListener("resize",this.resizeListenerCB)},updated:function(){this.haveProjects||(this.setProjectListClasses(""),this.setNavActive(!1))}},M=R,G=(s("034f"),Object(f["a"])(M,a,n,!1,null,null,null)),V=G.exports,z=(s("7db0"),s("c740"),s("a434"),s("b85c")),F={seedData:[]},$={UPDATE_PROJECT:function(t,e){t.seedData[t.seedData.findIndex((function(t){return t.id===e.id}))]=e},UPDATE_PROJECTS:function(t,e){t.seedData=e}},W={getProjects:function(t){var e=t.commit,s=window.localStorage.getItem("projects");s&&e("UPDATE_PROJECTS",JSON.parse(s))},checkForProjects:function(t){var e=t.commit;0===this.getters.allProjects.length&&(e("UPDATE_PROJECTS",[{id:0,title:"First Project",color:"#000000",active:!0,editing:!1,newProject:!1,tasks:[]}]),window.localStorage.setItem("projects",JSON.stringify(this.getters.allProjects)))},setProjectActive:function(t,e){var s=t.dispatch,i=t.commit;s("getProjects");var a=this.getters.activeProject,n=this.getters.allProjects.find((function(t){return t.id===e.id}));a&&(a.active=!1),n.active=!0,i("UPDATE_PROJECT",a),i("UPDATE_PROJECT",n),window.localStorage.setItem("projects",JSON.stringify(this.getters.allProjects))},resetProjectActive:function(t){var e=t.dispatch,s=t.commit;e("getProjects");var i=this.getters.activeProject;Object.keys(i).length>0&&(i.active=!1,s("UPDATE_PROJECT",i),window.localStorage.setItem("projects",JSON.stringify(this.getters.allProjects)))},addProject:function(t){var e=t.dispatch,s=t.commit;e("getProjects");var i=this.getters.allProjects;i.sort((function(t,e){return t.id-e.id}));var a=0===i.length,n=a,o=a?0:i[i.length-1].id+1;i.push({id:o,title:"",color:"#000000",active:n,editing:!0,tasks:[],newProject:!0}),s("UPDATE_PROJECTS",i),window.localStorage.setItem("projects",JSON.stringify(this.getters.allProjects))},editProject:function(t,e){var s=t.dispatch,i=t.commit;s("getProjects");var a=this.getters.project(e.id);if(a.title=e.title,a.color=e.color,a.newProject=!1,a.tasks.length){var n,o=Object(z["a"])(a.tasks);try{for(o.s();!(n=o.n()).done;){var c=n.value;c.color=e.color}}catch(r){o.e(r)}finally{o.f()}}i("UPDATE_PROJECT",a),window.localStorage.setItem("projects",JSON.stringify(this.getters.allProjects))},deleteProject:function(t,e){var s=t.dispatch,i=t.commit;s("getProjects");var a=this.getters.allProjects,n=a.findIndex((function(t){return t.id===e.id}));-1!==n&&(a[n].active&&a.length>1?(a.splice(n,1),a[0].active=!0,i("UPDATE_PROJECTS",a),window.localStorage.setItem("projects",JSON.stringify(this.getters.allProjects))):(a.splice(n,1),i("UPDATE_PROJECTS",a),window.localStorage.setItem("projects",JSON.stringify(this.getters.allProjects))))},toggleProjectIsEditing:function(t,e){var s=t.dispatch,i=t.commit;s("getProjects");var a=this.getters.project(e.id);a.editing=!a.editing,i("UPDATE_PROJECT",a),window.localStorage.setItem("projects",JSON.stringify(this.getters.allProjects))},addTask:function(t){var e=t.dispatch,s=t.commit;e("getProjects");var i=this.getters.activeProject;i.tasks.sort((function(t,e){return t.id-e.id}));for(var a=0===i.tasks.length,n=a?0:i.tasks[i.tasks.length-1].id+1,o=(new Date).toLocaleDateString().split(/\D+/),c=0;c<o.length;c++)1===o[c].length&&(o[c]="0"+o[c]);o=o[2]+"-"+o[0]+"-"+o[1],i.tasks.push({title:"",dueDate:o,important:!1,finished:!1,color:i.color,projectId:i.id,id:n,editing:!0,newTask:!0}),i.tasks.sort((function(t,e){return t.id-e.id})),i.tasks.sort((function(t,e){return t.important&&!e.important?-1:t.important&&e.important||!t.important&&!e.important?0:1})),i.tasks.sort((function(t,e){return!t.finished&&e.finished?-1:t.finished&&e.finished||!t.finished&&!e.finished?0:1})),s("UPDATE_PROJECT",i),window.localStorage.setItem("projects",JSON.stringify(this.getters.allProjects))},editTask:function(t,e){var s=t.dispatch,i=t.commit;s("getProjects");var a=this.getters.task({projectId:e.projectId,taskId:e.id});a.title=e.title,a.dueDate=e.dueDate,a.important=e.important;var n=this.getters.project(e.projectId);n.tasks.sort((function(t,e){return t.id-e.id})),n.tasks.sort((function(t,e){return t.important&&!e.important?-1:t.important&&e.important||!t.important&&!e.important?0:1})),n.tasks.sort((function(t,e){return!t.finished&&e.finished?-1:t.finished&&e.finished||!t.finished&&!e.finished?0:1})),i("UPDATE_PROJECT",n),window.localStorage.setItem("projects",JSON.stringify(this.getters.allProjects))},toggleTaskFinished:function(t,e){var s=t.dispatch,i=t.commit;s("getProjects");var a=this.getters.task({projectId:e.projectId,taskId:e.id});a.finished=!a.finished;var n=this.getters.project(e.projectId);n.tasks.sort((function(t,e){return t.id-e.id})),n.tasks.sort((function(t,e){return t.important&&!e.important?-1:t.important&&e.important||!t.important&&!e.important?0:1})),n.tasks.sort((function(t,e){return!t.finished&&e.finished?-1:t.finished&&e.finished||!t.finished&&!e.finished?0:1})),a.showButtons=!0,i("UPDATE_PROJECT",n),window.localStorage.setItem("projects",JSON.stringify(this.getters.allProjects))},deleteTask:function(t,e){var s=t.dispatch,i=t.commit;s("getProjects");var a=this.getters.project(e.projectId),n=a.tasks.findIndex((function(t){return t.id===e.id}));a.tasks.splice(n,1),i("UPDATE_PROJECT",a),window.localStorage.setItem("projects",JSON.stringify(this.getters.allProjects))},toggleTaskIsEditing:function(t,e){var s=t.dispatch,i=t.commit;s("getProjects");var a=this.getters.project(e.projectId),n=a.tasks.find((function(t){return t.id===e.id}));n.editing=!n.editing,i("UPDATE_PROJECT",a),window.localStorage.setItem("projects",JSON.stringify(this.getters.allProjects))}},H={allProjects:function(t){return t.seedData},task:function(t){return function(e){return t.seedData.find((function(t){return t.id===e.projectId})).tasks.find((function(t){return t.id===e.taskId}))}},project:function(t){return function(e){return t.seedData.find((function(t){return t.id===e}))}},activeProject:function(t){var e=t.seedData.find((function(t){return t.active}));return e?(e.tasks.sort((function(t,e){return t.id-e.id})),e.tasks.sort((function(t,e){return t.important&&!e.important?-1:t.important&&e.important||!t.important&&!e.important?0:1})),e.tasks.sort((function(t,e){return!t.finished&&e.finished?-1:t.finished&&e.finished||!t.finished&&!e.finished?0:1})),e):{}},haveProjects:function(t){return t.seedData.length>0},projectIsEditing:function(t){var e,s=Object(z["a"])(t.seedData);try{for(s.s();!(e=s.n()).done;){var i=e.value;if(i.editing)return!0}}catch(a){s.e(a)}finally{s.f()}return!1},tasksByDate:function(t){return function(e){var s=[];if(""===e)return s;var i,a=Object(z["a"])(t.seedData);try{for(a.s();!(i=a.n()).done;){var n,o=i.value,c=Object(z["a"])(o.tasks);try{for(c.s();!(n=c.n()).done;){var r=n.value;r.dueDate===e&&s.push(r)}}catch(l){c.e(l)}finally{c.f()}}}catch(l){a.e(l)}finally{a.f()}return s}}},q={state:F,mutations:$,actions:W,getters:H},K=q,Q={projectListClasses:"is-2 is-hidden-touch",navActive:!1,today:(new Date).toLocaleDateString(),UIIsEditing:!1,date:""},X={TOGGLE_PROJECT_LIST_CLASSES:function(t){t.projectListClasses=""===t.projectListClasses?"is-2 is-hidden-touch":""},TOGGLE_NAV_ACTIVE:function(t){t.navActive=!t.navActive},SET_PROJECT_LIST_CLASSES:function(t,e){t.projectListClasses=e},SET_NAV_ACTIVE:function(t,e){t.navActive=e},TOGGLE_IS_EDITING:function(t){t.UIIsEditing=!t.UIIsEditing},RESET_DATE:function(t){t.date=""},SET_DATE:function(t,e){t.date=e}},Y={toggleNav:function(t){var e=t.commit;e("TOGGLE_PROJECT_LIST_CLASSES"),e("TOGGLE_NAV_ACTIVE")},setProjectListClasses:function(t,e){var s=t.commit;s("SET_PROJECT_LIST_CLASSES",e)},setNavActive:function(t,e){var s=t.commit;s("SET_NAV_ACTIVE",e)},toggleUIIsEditing:function(t){var e=t.commit;e("TOGGLE_IS_EDITING")},resetDate:function(t){var e=t.commit;e("RESET_DATE")},setDate:function(t,e){var s=t.commit;s("SET_DATE",e)}},Z={projectListClasses:function(t){return t.projectListClasses},navActive:function(t){return t.navActive},today:function(t){return t.today},UIIsEditing:function(t){return t.UIIsEditing},date:function(t){return t.date},isMobile:function(){var t=!1;if("maxTouchPoints"in navigator)t=navigator.maxTouchPoints>0;else if("msMaxTouchPoints"in navigator)t=navigator.maxTouchPoints>0;else{var e=window.matchMedia&&matchMedia("(pointer:coarse)");if(e&&"(pointer:coarse)"===e.media)t=!!e.matches;else if("orientation"in window)t=!0;else{var s=navigator.userAgent;t=/\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(s)||/\b(Android|Windows Phone|iPad|iPod)\b/i.test(s)}}var i=window.matchMedia&&matchMedia("(max-width: 767px), (max-height: 767px)");return!0===t&&!0===i.matches}},tt={state:Q,mutations:X,actions:Y,getters:Z},et=tt;i["a"].use(c["a"]);var st=new c["a"].Store({modules:{seed:K,ui:et}});s("15f5");s("9299"),i["a"].config.productionTip=!1,new i["a"]({store:st,render:function(t){return t(V)}}).$mount("#app")},"5b7f":function(t,e,s){"use strict";var i=s("a7cf"),a=s.n(i);a.a},6914:function(t,e,s){"use strict";var i=s("3914"),a=s.n(i);a.a},"85ec":function(t,e,s){},9299:function(t,e,s){},a7cf:function(t,e,s){},b47e:function(t,e,s){},c07a:function(t,e,s){"use strict";var i=s("b47e"),a=s.n(i);a.a},e347:function(t,e,s){t.exports=s.p+"img/logo.b96c54c5.svg"}});
//# sourceMappingURL=app.597e56c0.js.map