"use strict";(self.webpackChunkcomponent_library=self.webpackChunkcomponent_library||[]).push([[288],{5288:(z,h,s)=>{s.r(h),s.d(h,{PagesModule:()=>Z});var f=s(8583),C=s(6772),a=s(9763),t=s(7716),r=s(3928),c=s(2078);let u=(()=>{class n{constructor(){this.position={x:10,y:10,left:0,top:0,width:400,height:400},this.barconfig={width:"400px",height:"300px",left:"0",top:"0"};const o=localStorage.getItem("comPos");o&&(this.position=JSON.parse(o))}ngOnInit(){}ngOnDestroy(){}onResizeStop(o){this.position.width=o.size.width,this.position.height=o.size.height,this.position.top=o.position.top,this.position.left=o.position.left,localStorage.setItem("comPos",JSON.stringify(this.position)),this.barconfig.width=`${this.position.width}px`,this.barconfig.height=`${this.position.height}px`,setTimeout(()=>{this.barconfig=JSON.parse(JSON.stringify(this.barconfig))},100)}onMoveEnd(o){this.position.x=o.x,this.position.y=o.y,localStorage.setItem("comPos",JSON.stringify(this.position)),this.barconfig.width=`${this.position.width}px`,this.barconfig.height=`${this.position.height}px`,setTimeout(()=>{this.barconfig=JSON.parse(JSON.stringify(this.barconfig))},100)}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-bs0"]],decls:4,vars:11,consts:[["ngDraggable","","ngResizable","","rzHandles","all",1,"main",3,"position","handle","rzStop","endOffset"],[1,"drag-block-handle"],["myHandle",""],[3,"config"]],template:function(o,i){if(1&o&&(t.TgZ(0,"div",0),t.NdJ("rzStop",function(l){return i.onResizeStop(l)})("endOffset",function(l){return i.onMoveEnd(l)}),t._UZ(1,"div",1,2),t._UZ(3,"app-basicbar",3),t.qZA()),2&o){const g=t.MAs(2);t.Udp("top",i.position.top,"px")("left",i.position.left,"px")("width",i.position.width,"px")("height",i.position.height,"px"),t.Q6J("position",i.position)("handle",g),t.xp6(3),t.Q6J("config",i.barconfig)}},directives:[r.Zc,r.OI,c.P],styles:[".main[_ngcontent-%COMP%]{width:600px;height:600px;left:10px;top:10px}.drag-block-handle[_ngcontent-%COMP%]{position:absolute;opacity:.2;top:10px;left:10px;width:12px;height:12px;border-top:12px solid #aaa;border-right:12px solid transparent;box-sizing:border-box;cursor:move}"]}),n})();var O=s(7577),d=s(3262);const p={Bs0Component:u,Bs1Component:(()=>{class n{constructor(){this.title="\u7f51\u7edc\u76d1\u63a7\u53ef\u89c6\u5316\u5927\u5c4f",this.barconfig={width:"400px",height:"300px",left:"unset",top:"100px",right:"20px"},this.treeconfig={width:"1000px",height:"600px",left:"10px",top:"50px"}}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-bs1"]],decls:16,vars:3,consts:[[1,"back"],[3,"config"],[3,"title"],[2,"position","absolute","left","20px","height","100px"],[1,"zpsl-box"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"app-basicbar",1),t._UZ(2,"app-head1",2),t._UZ(3,"app-usertree",1),t.TgZ(4,"div",3),t.TgZ(5,"ul",4),t.TgZ(6,"li"),t.TgZ(7,"span"),t._uU(8,"\u4eca\u65e5\u6293\u62cd"),t.qZA(),t.TgZ(9,"span"),t._uU(10,"1245\u6761"),t.qZA(),t.qZA(),t.TgZ(11,"li"),t.TgZ(12,"span"),t._uU(13,"\u6293\u62cd\u603b\u6570"),t.qZA(),t.TgZ(14,"span"),t._uU(15,"3421\u6761"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(1),t.Q6J("config",i.barconfig),t.xp6(1),t.Q6J("title",i.title),t.xp6(1),t.Q6J("config",i.treeconfig))},directives:[c.P,O.J,d.L],styles:['.back[_ngcontent-%COMP%]{width:100%;height:100%;background:url(/assets/images/background/b1.png);background-repeat:no-repeat;background-size:100% 100%}.clock[_ngcontent-%COMP%]{position:absolute;right:0;top:0}.zpsl-box[_ngcontent-%COMP%]{width:100%;height:155px}.zpsl-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:155px;height:155px;float:left;margin:0 35px;position:relative}.zpsl-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(2):before{width:155px;height:155px;content:"";position:absolute;top:0;left:0;background:url(/assets/img/bqzlbg002.png) no-repeat;background-size:100% 100%;animation:animation-rotate1 4s linear infinite}.zpsl-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(1):before{width:155px;height:155px;content:"";position:absolute;top:0;left:0;background:url(/assets/img/bqzlbg001.png) no-repeat;background-size:100% 100%;animation:animation-rotate 4s linear infinite}@keyframes animation-rotate{0%{transform:rotate(360deg)}to{transform:rotate(0)}}@keyframes animation-rotate1{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.zpsl-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;width:100%;text-align:center;color:#fff;font-size:14px}.zpsl-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(1){font-size:18px;font-weight:bold;margin-top:50px}.zpsl-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(2){margin-top:10px}.zpsl-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(1)   span[_ngcontent-%COMP%]:nth-of-type(1){color:#9df9fc}.zpsl-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(2)   span[_ngcontent-%COMP%]:nth-of-type(1){color:#d3fca0}']}),n})(),Bs2Component:(()=>{class n{constructor(){this.treeconfig={width:"1000px",height:"600px",left:"10px",top:"50px"}}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-bs2"]],decls:2,vars:1,consts:[[1,"back"],[3,"config"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"app-usertree",1),t.qZA()),2&o&&(t.xp6(1),t.Q6J("config",i.treeconfig))},directives:[d.L],styles:[".back[_ngcontent-%COMP%]{width:100%;height:100%;background:url(/assets/images/background/b2.png);background-repeat:no-repeat;background-size:100% 100%}"]}),n})(),Bs3Component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-bs3"]],decls:2,vars:0,consts:[[1,"back"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"app-basicbar"),t.qZA())},directives:[c.P],styles:[".back[_ngcontent-%COMP%]{width:100%;height:100%;background:url(/assets/images/background/b3.png);background-repeat:no-repeat;background-size:100% 100%}"]}),n})()};function P(n,e){if(1&n&&(t.TgZ(0,"button",3),t.TgZ(1,"a",4),t._uU(2),t.qZA(),t.qZA()),2&n){const o=e.$implicit;t.xp6(1),t.s9C("routerLink",o.href),t.xp6(1),t.hij(" ",o.text," ")}}const y=[{path:"",component:(()=>{class n{constructor(){this.pages=[{href:"./bs0",text:"bs0"},{href:"./bs1",text:"bs1"},{href:"./bs2",text:"bs2"},{href:"./bs3",text:"bs3"}]}ngOnInit(){}ngOnDestroy(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-pages"]],decls:4,vars:1,consts:[[1,"but"],["class","button",4,"ngFor","ngForOf"],[1,"rout"],[1,"button"],[3,"routerLink"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0),t.YNc(1,P,3,2,"button",1),t.qZA(),t.TgZ(2,"div",2),t._UZ(3,"router-outlet"),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngForOf",i.pages))},directives:[f.sg,a.lC,a.yS],styles:[".button[_ngcontent-%COMP%]{background-color:#509a80;border:none;color:#fff;padding:5px 15px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:4px 2px;cursor:pointer}.but[_ngcontent-%COMP%]{bottom:3px;position:absolute;z-index:999}.rout[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;background-color:#000;color:#fff}"]}),n})(),children:[{path:"bs0",component:p.Bs0Component},{path:"bs1",component:p.Bs1Component},{path:"bs2",component:p.Bs2Component},{path:"bs3",component:p.Bs3Component},{path:"**",component:p.Bs0Component}]}];let M=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[a.Bz.forChild(y)],a.Bz]}),n})(),Z=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[M,f.ez,C.SharedModule,r.YY]]}),n})()}}]);