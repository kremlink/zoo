(function(factory){
  factory(jQuery,theApp);
}(function($,mgr){
 'use strict';

 mgr.overrideData();

 $(function(){
  mgr.set({data:'shared.shiftPop',object:{
    show:function(e,opts){
     var u=this.get('data').extra;

     opts.pop.css('top',mgr.helpers.win.scrollTop()+u.shift);
    },
    hide:function(e,opts){
     var u=this.get('data').extra;

     opts.pop.css('top',0);
    }
   },lib:false});

  //----
  $('#logo img,.additional-header-logo img').attr('src',(function(){
   var l,
   s=location.href.match(/(\d+)\.html/)[1];

   switch(s){
    case '1':
     l=2;
     break;
    case '11':
     l=3;
     break;
    case '2':
     l='';
     break;
    case '22':
     l=1;
   }

   return 'images/logo'+l+'.png';
  })());

  mgr.trigger('app:ready',[mgr.get('shared.modules')]);
 });
}));