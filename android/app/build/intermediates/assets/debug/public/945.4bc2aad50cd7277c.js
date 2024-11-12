"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[945],{945:(F,d,l)=>{l.r(d),l.d(d,{AgregarnuevoPageModule:()=>C});var p=l(177),u=l(4341),n=l(4742),m=l(70),e=l(4438),h=l(3656),c=l(5266);const v=[{path:"",component:(()=>{var r;class t{constructor(a,o){this.navCtrl=a,this.localdbService=o,this.primerNombre="",this.primerApellido="",this.password="",this.rol="alumno",this.emailPrefix="",this.dominio="@duocuc.cl",this.universidad="DuocUC"}onSubmit(){this.primerNombre&&this.primerApellido&&this.password&&this.emailPrefix&&this.rol&&this.universidad?(this.localdbService.guardarUsuario({nombre:`${this.primerNombre} ${this.primerApellido}`,email:`${this.emailPrefix}${this.dominio}`,password:this.password,rol:this.rol}),this.navCtrl.navigateBack("/home")):alert("Por favor, rellena todos los campos obligatorios.")}onUniversidadChange(){this.updateDominio()}onRolChange(){this.updateDominio()}updateDominio(){"DuocUC"===this.universidad?this.dominio="alumno"===this.rol?"@duocuc.cl":"@profesor.duocuc.cl":"Inacap"===this.universidad?this.dominio="alumno"===this.rol?"@inacap.cl":"@profesor.inacap.cl":"Otra"===this.universidad&&(this.dominio="alumno"===this.rol?"@otroalumno.cl":"@otroprofesor.cl")}}return(r=t).\u0275fac=function(a){return new(a||r)(e.rXU(h.q9),e.rXU(c.z))},r.\u0275cmp=e.VBU({type:r,selectors:[["app-agregarnuevo"]],decls:55,vars:7,consts:[["color","tertiary"],["slot","start"],["defaultHref","/home"],[1,"titulo"],[1,"ion-padding"],["position","floating"],["required","",3,"ngModelChange","ngModel"],["type","password","required","",3,"ngModelChange","ngModel"],[3,"ngModelChange","ionChange","ngModel"],["value","alumno"],["value","profesor"],["required","",3,"ngModelChange","ionChange","ngModel"],["value","DuocUC"],["value","Inacap"],["value","Otra"],[1,"button-wrapper"],["expand","full","shape","round",3,"click"]],template:function(a,o){1&a&&(e.j41(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),e.nrm(3,"ion-back-button",2),e.k0s(),e.j41(4,"ion-title")(5,"span",3),e.EFF(6,"Agregar Nuevo Usuario"),e.k0s()()()(),e.j41(7,"ion-content",4)(8,"ion-card")(9,"ion-card-header")(10,"ion-card-title"),e.EFF(11,"Formulario de Registro"),e.k0s(),e.j41(12,"ion-card-subtitle"),e.EFF(13,"Por favor, rellena todos los campos obligatorios"),e.k0s()(),e.j41(14,"ion-card-content")(15,"ion-list")(16,"ion-item")(17,"ion-label",5),e.EFF(18,"Primer Nombre"),e.k0s(),e.j41(19,"ion-input",6),e.mxI("ngModelChange",function(i){return e.DH7(o.primerNombre,i)||(o.primerNombre=i),i}),e.k0s()(),e.j41(20,"ion-item")(21,"ion-label",5),e.EFF(22,"Primer Apellido"),e.k0s(),e.j41(23,"ion-input",6),e.mxI("ngModelChange",function(i){return e.DH7(o.primerApellido,i)||(o.primerApellido=i),i}),e.k0s()(),e.j41(24,"ion-item")(25,"ion-label",5),e.EFF(26,"Contrase\xf1a"),e.k0s(),e.j41(27,"ion-input",7),e.mxI("ngModelChange",function(i){return e.DH7(o.password,i)||(o.password=i),i}),e.k0s()(),e.j41(28,"ion-item")(29,"ion-label"),e.EFF(30,"Rol"),e.k0s(),e.j41(31,"ion-select",8),e.mxI("ngModelChange",function(i){return e.DH7(o.rol,i)||(o.rol=i),i}),e.bIt("ionChange",function(){return o.updateDominio()}),e.j41(32,"ion-select-option",9),e.EFF(33,"Alumno"),e.k0s(),e.j41(34,"ion-select-option",10),e.EFF(35,"Profesor"),e.k0s()()(),e.j41(36,"ion-item")(37,"ion-label"),e.EFF(38,"Universidad"),e.k0s(),e.j41(39,"ion-select",11),e.mxI("ngModelChange",function(i){return e.DH7(o.universidad,i)||(o.universidad=i),i}),e.bIt("ionChange",function(){return o.updateDominio()}),e.j41(40,"ion-select-option",12),e.EFF(41,"Duoc UC"),e.k0s(),e.j41(42,"ion-select-option",13),e.EFF(43,"Inacap"),e.k0s(),e.j41(44,"ion-select-option",14),e.EFF(45,"Otra Instituci\xf3n"),e.k0s()()(),e.j41(46,"ion-item")(47,"ion-label",5),e.EFF(48,"Email"),e.k0s(),e.j41(49,"ion-input",6),e.mxI("ngModelChange",function(i){return e.DH7(o.emailPrefix,i)||(o.emailPrefix=i),i}),e.k0s(),e.j41(50,"ion-label"),e.EFF(51),e.k0s()()(),e.j41(52,"div",15)(53,"ion-button",16),e.bIt("click",function(){return o.onSubmit()}),e.EFF(54,"Agregar Usuario"),e.k0s()()()()()),2&a&&(e.R7$(19),e.R50("ngModel",o.primerNombre),e.R7$(4),e.R50("ngModel",o.primerApellido),e.R7$(4),e.R50("ngModel",o.password),e.R7$(4),e.R50("ngModel",o.rol),e.R7$(8),e.R50("ngModel",o.universidad),e.R7$(10),e.R50("ngModel",o.emailPrefix),e.R7$(2),e.JRh(o.dominio))},dependencies:[u.BC,u.YS,u.vS,n.Jm,n.QW,n.b_,n.I9,n.ME,n.HW,n.tN,n.W9,n.eU,n.$w,n.uz,n.he,n.nf,n.Nm,n.Ip,n.BC,n.ai,n.Je,n.Gw,n.el]}),t})()}];let f=(()=>{var r;class t{}return(r=t).\u0275fac=function(a){return new(a||r)},r.\u0275mod=e.$C({type:r}),r.\u0275inj=e.G2t({imports:[m.iI.forChild(v),m.iI]}),t})(),C=(()=>{var r;class t{}return(r=t).\u0275fac=function(a){return new(a||r)},r.\u0275mod=e.$C({type:r}),r.\u0275inj=e.G2t({imports:[p.MD,u.YN,n.bv,f]}),t})()}}]);