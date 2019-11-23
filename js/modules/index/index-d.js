(function (factory) {
 'use strict';

 factory(jQuery,theApp);
}(function($,mgr){
 mgr.utils.extendData({
  obj:mgr.data,
  field:'index',
  data:{
   bnr:{
    container:'.bnr-block',
    elements:'.item',
    prev:'.bnr-block .prev-arr',
    next:'.bnr-block .next-arr',
    options:{
     circular:true,
     helpers:{swipe:mgr.get('lib.utils.swipe')}
    },
    extra:{
     cls:'loaded'
    }
   }
  }
 });
 
 return mgr.data;
}));