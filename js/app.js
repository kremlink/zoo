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

  mgr.trigger('app:ready',[mgr.get('shared.modules')]);
 });
}));