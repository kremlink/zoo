(function (factory){
 factory(jQuery,theApp);
}(function($,mgr){
 'use strict';

 mgr.on('app:ready',function(e,modules){
  if(~modules.indexOf('profile'))
  {
   mgr.set({data:'profile.delivery',object:'Toggle',on:mgr.get('shared.shiftPop')});
  }
 });
}));