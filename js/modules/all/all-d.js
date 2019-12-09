(function (factory) {
 'use strict';

 factory(jQuery,theApp);
}(function($,mgr){
 mgr.utils.extendData({
  obj:mgr.data,
  field:'all',
  data:{
   user:{
    tabs:{
     callers:'.the-tabs a',
     pops:'.u-block',
     options:{
      alone:true
     }
    },
    logForm:{
     form:'.u-block.log',
     sender:'.u-a-btns a:nth-child(2)',
     options:{
      url:null,
      type:'POST'
     },
     extra:{
      err:'error',
      clrPh:true
     }
    },
    regForm:{
     form:'.u-block.reg',
     sender:'.u-a-btns a:nth-child(3)',
     options:{
      url:null,
      type:'POST'
     },
     extra:{
      err:'error',
      clrPh:true
     }
    }
   },
   masked:{
    $fields:'.phone-mask',
    mask:'',
    settings:{

    }
   }
  }
 });
 
 return mgr.data;
}));