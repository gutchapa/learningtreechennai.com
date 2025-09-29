

/*===============================
/templates/uber/js/jquery.inview.min.js
================================================================================*/;
(function(d){var p={},e,a,h=document,i=window,f=h.documentElement,j=d.expando;d.event.special.inview={add:function(a){p[a.guid+"-"+this[j]]={data:a,$element:d(this)}},remove:function(a){try{delete p[a.guid+"-"+this[j]]}catch(d){}}};d(i).bind("scroll resize",function(){e=a=null});!f.addEventListener&&f.attachEvent&&f.attachEvent("onfocusin",function(){a=null});setInterval(function(){var k=d(),j,n=0;d.each(p,function(a,b){var c=b.data.selector,d=b.$element;k=k.add(c?d.find(c):d)});if(j=k.length){var b;
if(!(b=e)){var g={height:i.innerHeight,width:i.innerWidth};if(!g.height&&((b=h.compatMode)||!d.support.boxModel))b="CSS1Compat"===b?f:h.body,g={height:b.clientHeight,width:b.clientWidth};b=g}e=b;for(a=a||{top:i.pageYOffset||f.scrollTop||h.body.scrollTop,left:i.pageXOffset||f.scrollLeft||h.body.scrollLeft};n<j;n++)if(d.contains(f,k[n])){b=d(k[n]);var l=b.height(),m=b.width(),c=b.offset(),g=b.data("inview");if(!a||!e)break;c.top+l>a.top&&c.top<a.top+e.height&&c.left+m>a.left&&c.left<a.left+e.width?
(m=a.left>c.left?"right":a.left+e.width<c.left+m?"left":"both",l=a.top>c.top?"bottom":a.top+e.height<c.top+l?"top":"both",c=m+"-"+l,(!g||g!==c)&&b.data("inview",c).trigger("inview",[!0,m,l])):g&&b.data("inview",!1).trigger("inview",[!1])}}},250)})(jQuery);


/*===============================
/templates/uber/js/jquery.parallax-1.1.3.js
================================================================================*/;
(function($){var $window=$(window);var windowHeight=$window.height();$window.resize(function(){windowHeight=$window.height();});$.fn.parallax=function(xpos,speedFactor,outerHeight){var $this=$(this);var getHeight;var firstTop;var paddingTop=0;$this.each(function(){firstTop=$this.offset().top;});if(outerHeight){getHeight=function(jqo){return jqo.outerHeight(true);};}else{getHeight=function(jqo){return jqo.height();};}
if(arguments.length<1||xpos===null)xpos="50%";if(arguments.length<2||speedFactor===null)speedFactor=0.1;if(arguments.length<3||outerHeight===null)outerHeight=true;function update(){var pos=$window.scrollTop();$this.each(function(){var $element=$(this);var top=$element.offset().top;var height=getHeight($element);if(top+height<pos||top>pos+windowHeight){return;}
$this.css('backgroundPosition',xpos+" "+Math.round((firstTop-pos)*speedFactor)+"px");});}
$window.bind('scroll',update).resize(update);update();};})(jQuery);


/*===============================
/templates/uber/js/jquery.placeholder.js
================================================================================*/;
;
/*! http://mths.be/placeholder v2.0.8 by @mathias */
(function(window,document,$){var isOperaMini=Object.prototype.toString.call(window.operamini)=='[object OperaMini]';var isInputSupported='placeholder'in document.createElement('input')&&!isOperaMini;var isTextareaSupported='placeholder'in document.createElement('textarea')&&!isOperaMini;var prototype=$.fn;var valHooks=$.valHooks;var propHooks=$.propHooks;var hooks;var placeholder;if(isInputSupported&&isTextareaSupported){placeholder=prototype.placeholder=function(){return this;};placeholder.input=placeholder.textarea=true;}else{placeholder=prototype.placeholder=function(){var $this=this;$this.filter((isInputSupported?'textarea':':input')+'[placeholder]').not('.placeholder').bind({'focus.placeholder':clearPlaceholder,'blur.placeholder':setPlaceholder}).data('placeholder-enabled',true).trigger('blur.placeholder');return $this;};placeholder.input=isInputSupported;placeholder.textarea=isTextareaSupported;hooks={'get':function(element){var $element=$(element);var $passwordInput=$element.data('placeholder-password');if($passwordInput){return $passwordInput[0].value;}
return $element.data('placeholder-enabled')&&$element.hasClass('placeholder')?'':element.value;},'set':function(element,value){var $element=$(element);var $passwordInput=$element.data('placeholder-password');if($passwordInput){return $passwordInput[0].value=value;}
if(!$element.data('placeholder-enabled')){return element.value=value;}
if(value==''){element.value=value;if(element!=safeActiveElement()){setPlaceholder.call(element);}}else if($element.hasClass('placeholder')){clearPlaceholder.call(element,true,value)||(element.value=value);}else{element.value=value;}
return $element;}};if(!isInputSupported){valHooks.input=hooks;propHooks.value=hooks;}
if(!isTextareaSupported){valHooks.textarea=hooks;propHooks.value=hooks;}
$(function(){$(document).delegate('form','submit.placeholder',function(){var $inputs=$('.placeholder',this).each(clearPlaceholder);setTimeout(function(){$inputs.each(setPlaceholder);},10);});});$(window).bind('beforeunload.placeholder',function(){$('.placeholder').each(function(){this.value='';});});}
function args(elem){var newAttrs={};var rinlinejQuery=/^jQuery\d+$/;$.each(elem.attributes,function(i,attr){if(attr.specified&&!rinlinejQuery.test(attr.name)){newAttrs[attr.name]=attr.value;}});return newAttrs;}
function clearPlaceholder(event,value){var input=this;var $input=$(input);if(input.value==$input.attr('placeholder')&&$input.hasClass('placeholder')){if($input.data('placeholder-password')){$input=$input.hide().next().show().attr('id',$input.removeAttr('id').data('placeholder-id'));if(event===true){return $input[0].value=value;}
$input.focus();}else{input.value='';$input.removeClass('placeholder');input==safeActiveElement()&&input.select();}}}
function setPlaceholder(){var $replacement;var input=this;var $input=$(input);var id=this.id;if(input.value==''){if(input.type=='password'){if(!$input.data('placeholder-textinput')){try{$replacement=$input.clone().attr({'type':'text'});}catch(e){$replacement=$('<input>').attr($.extend(args(this),{'type':'text'}));}
$replacement.removeAttr('name').data({'placeholder-password':$input,'placeholder-id':id}).bind('focus.placeholder',clearPlaceholder);$input.data({'placeholder-textinput':$replacement,'placeholder-id':id}).before($replacement);}
$input=$input.removeAttr('id').hide().prev().attr('id',id).show();}
$input.addClass('placeholder');$input[0].value=$input.attr('placeholder');}else{$input.removeClass('placeholder');}}
function safeActiveElement(){try{return document.activeElement;}catch(exception){}}}(this,document,jQuery));


/*===============================
/templates/uber/js/script.js
================================================================================*/;
(function($){$(document).ready(function(){if($('.acm-testimonials.style-6').length>0){var maxwidth=0;$('.word-wrap .carousel-inner .item').each(function(){if($(this).width()>maxwidth){maxwidth=$(this).width();}});$('.word-wrap').width(maxwidth);}
if($('.job-layout').length>0){$('.mod-articles-category-title').click(function(){$('.mod-articles-category-title').removeClass('active');$(this).toggleClass('active');});}
if($('.nav.nav-tabs').length>0){$('.nav.nav-tabs a:not(.toclink)').click(function(e){e.preventDefault();$(this).tab('show');});}
if($('.full-screen').length>0){var windowvideo=$(window).height()-$('.t3-header').height();$('.full-screen').outerHeight(windowvideo);$(window).resize(function(){var windowvideo=$(window).height()-$('.t3-header').height();$('.full-screen').outerHeight(windowvideo);});}
var iOS=parseFloat((''+(/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,''])[1]).replace('undefined','3_2').replace('_','.').replace('_',''))||false;if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||iOS)){if($('.bg-image').length>0||$('.style-tab-1').length>0){$('.bg-image').parallax("50%",0.05);}}else{$('.bg-image').css({"background-attachment":"scroll","background-size":"cover"});}
var formContact=$('.contact-form-1');if(formContact.length>0){$('#jform_contact_name',formContact).attr('placeholder','Name');$('#jform_contact_email',formContact).attr('placeholder','Mail');$('#jform_contact_emailmsg',formContact).attr('placeholder','Subject');$('#jform_contact_message',formContact).attr('placeholder','Write your message here');if($('.ie8').length>0){$("input[placeholder], textarea[placeholder]",formContact).each(function(i,e){if($(e).val()==""){$(e).val($(e).attr("placeholder"));}
$(e).blur(function(){if($(this).val()=="")
$(this).val($(e).attr("placeholder"));}).focus(function(){if($(this).val()==$(e).attr("placeholder"))
$(this).val("");});});}}
if($('.ie8').length>0){$('input, textarea').placeholder();}
$('.section, .feature-animate, .sections-wrap .t3-module').bind('inview',function(event,visible,visiblePartX,visiblePartY){if(visible){if(visiblePartY=='bottom'||visiblePartY=='both'){if(!$(this).hasClass('section-mask')){$(this).addClass('inview').trigger('inview');}}}});var carousel_items=$('.product-carousel-item');carousel_items.on('click',function(e){e.preventDefault();var $this=$(this);if($this.hasClass('first')){return false;}
var first=$this;carousel_items.removeClass('first')
if($this.hasClass('next')){var next=first.next().length>0?first.next():carousel_items.first();var last=first.prev().length>0?first.prev():carousel_items.last();}else if($this.hasClass('last')){var last=first.next().length>0?first.next():carousel_items.first();var next=first.prev().length>0?first.prev():carousel_items.last();}
carousel_items.removeClass('first next last');first.addClass('first');next.addClass('next');last.addClass('last');return false;});$('.nav-tabs a').each(function(){var t=$(this);var url=t.attr('href');if(url){url=url.split(' ');if(url.length>=2){t.attr('href',url.splice(1,1));}}});var elmWidth=$('.t3-sidebar').width(),elmHeight=$('.uber-footer').outerHeight()+40;if($('.t3-module.has-affix').length>0){$('.t3-module.has-affix').affix({offset:{top:$('.t3-module.has-affix').offset().top,bottom:elmHeight}});$('.t3-module.has-affix').css({"width":elmWidth});if($('.t3-module.affix-bottom').length>0){$('.t3-module.affix-bottom').css({"bottom":elmHeight});}}
setTimeout(function(){$('li .caret').on('tap',function(e){$item=$(this).parents('li').first();if($item.data('t3menu.item')){$item.data('t3menu.item').clickable=false;}});},200)});$(document).ready(function(){$('.loginDropDown').unbind().mouseover(function(e){$(this).parents('.dropdown_:first').addClass('open');e.stopPropagation();}).mousedown(function(e){$(this).parents('.dropdown_:first').addClass('open');e.stopPropagation();});});})(jQuery);