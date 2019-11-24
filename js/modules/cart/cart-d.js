(function (factory) {
 'use strict';

 factory(jQuery,theApp);
}(function($,mgr){
 mgr.utils.extendData({
  obj:mgr.data,
  field:'cart',
  data:{
   tabs:{
    callers:'.cart-block .the-tabs a',
    pops:'.cart-block .c-form',
    options:{
     alone:true
    }
   },
   delivery:{
    callers:'.cart-block .in-choose',
    pops:'.standard-pop.cart',
    overlay:'.overlay',
    closers:'.standard-pop.cart .close,.standard-pop.cart .btn',
    options:{
     esc:true
    },
    extra:{
     shift:mgr.get('shared.pk')?200:100
    }
   },
   deliveryTabs:{
    callers:'.standard-pop.cart .the-tabs a',
    pops:'.standard-pop.cart .form',
    options:{
     alone:true
    }
   }
  }
 });
 
 return mgr.data;
}));