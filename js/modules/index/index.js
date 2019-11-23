(function (factory){
 factory(jQuery,theApp);
}(function($,mgr){
 'use strict';

 mgr.on('app:ready',function(e,modules){
  if(~modules.indexOf('index'))
  {
   var slider=function(opts){
    var cont=$(opts.data.container);

    cont.find('img').imagesLoaded(function(){
     var obj=mgr.set({data:opts.name,object:'Slider',add:{options:{helpers:{swipe:mgr.get('lib.utils.swipe')}}}});

     cont.addClass(obj.get('data').extra.cls);
    });
   };

   mgr.set({data:'index.bnr',object:slider,call:true});
  }
 });
}));