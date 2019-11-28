(function (factory) {
 'use strict';

 factory(jQuery,theApp);
}(function($,mgr){
 mgr.utils.extendData({
  obj:mgr.data,
  field:'profile',
  data:{
   delivery:{
    callers:'.profile-block .a-add',
    pops:'.standard-pop.cart',
    overlay:'.overlay',
    closers:'.standard-pop.cart .close',
    extra:{
     shift:mgr.get('shared.pk')?200:100
    }
   }
  }
 });
 
 return mgr.data;
}));