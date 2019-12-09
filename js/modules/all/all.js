(function (factory){
 factory(jQuery,theApp);
}(function($,mgr){
 'use strict';

 mgr.on('app:ready',function(e,modules){
  if(~modules.indexOf('all'))
  {
   var masked=function(opts){
     opts.data.$fields.mask(opts.data.mask,opts.data.settings);
    },
    formPop=mgr.get('shared.formPop');
   //-------------
   mgr.set({data:'all.user.tabs',object:'Toggle'});
   //mgr.set({data:'all.user.logForm',object:'Form',on:formPop.form.events,add:{options:{funcs:{validate:formPop.form.validate}}}});
   //mgr.set({data:'all.user.regForm',object:'Form',on:formPop.form.events,add:{options:{funcs:{validate:formPop.form.validate}}}});
   delete $.mask.definitions['9'];
   $.mask.definitions['x']='[0-9]';
   mgr.set({data:'all.masked',object:masked,call:true});
  }
 });
}));