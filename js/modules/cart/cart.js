(function (factory){
 factory(jQuery,theApp);
}(function($,mgr){
 'use strict';

 mgr.on('app:ready',function(e,modules){
  if(~modules.indexOf('cart'))
  {
   mgr.set({data:'cart.tabs',object:'Toggle'});
   mgr.set({data:'cart.delivery',object:'Toggle',on:mgr.get('shared.shiftPop')});
   mgr.set({data:'cart.deliveryTabs',object:'Toggle'});
  }
 });
}));