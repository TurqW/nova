(function(b){function j(){this.controls={bold:{groupIndex:0,visible:!0,tags:["b","strong"],css:{fontWeight:"bold"},tooltip:"Bold",hotkey:{ctrl:1,key:66}},copy:{groupIndex:8,visible:!1,tooltip:"Copy"},createLink:{groupIndex:6,visible:!0,exec:function(){var a=this;b.wysiwyg.controls&&b.wysiwyg.controls.link?b.wysiwyg.controls.link.init(this):b.wysiwyg.autoload?b.wysiwyg.autoload.control("wysiwyg.link.js",function(){a.controls.createLink.exec.apply(a)}):f.error("$.wysiwyg.controls.link not defined. You need to include wysiwyg.link.js file")},
tags:["a"],tooltip:"Create link"},cut:{groupIndex:8,visible:!1,tooltip:"Cut"},decreaseFontSize:{groupIndex:9,visible:!1,tags:["small"],tooltip:"Decrease font size"},h1:{groupIndex:7,visible:!0,className:"h1",command:b.browser.msie||b.browser.safari?"FormatBlock":"heading",arguments:b.browser.msie||b.browser.safari?"<h1>":"h1",tags:["h1"],tooltip:"Header 1"},h2:{groupIndex:7,visible:!0,className:"h2",command:b.browser.msie||b.browser.safari?"FormatBlock":"heading",arguments:b.browser.msie||b.browser.safari?
"<h2>":"h2",tags:["h2"],tooltip:"Header 2"},h3:{groupIndex:7,visible:!0,className:"h3",command:b.browser.msie||b.browser.safari?"FormatBlock":"heading",arguments:b.browser.msie||b.browser.safari?"<h3>":"h3",tags:["h3"],tooltip:"Header 3"},html:{groupIndex:10,visible:!1,exec:function(){this.viewHTML?(this.setContent(b(this.original).val()),b(this.original).hide(),this.editor.show(),this.ui.toolbar.find("li").each(function(){var a=b(this);a.hasClass("html")?a.removeClass("active"):a.attr("disabled",
"false")})):(this.saveContent(),b(this.original).css({width:this.element.outerWidth()-6,height:this.element.height()-this.ui.toolbar.height()-6,resize:"none"}).show(),this.editor.hide(),this.ui.toolbar.find("li").each(function(){var a=b(this);a.hasClass("html")?a.addClass("active"):!1===a.hasClass("fullscreen")&&(a.removeClass("active"),a.attr("disabled","true"))}));this.viewHTML=!this.viewHTML},tooltip:"View source code"},increaseFontSize:{groupIndex:9,visible:!1,tags:["big"],tooltip:"Increase font size"},
indent:{groupIndex:2,visible:!0,tooltip:"Indent"},insertHorizontalRule:{groupIndex:6,visible:!0,tags:["hr"],tooltip:"Insert Horizontal Rule"},insertImage:{groupIndex:6,visible:!0,exec:function(){var a=this;b.wysiwyg.controls&&b.wysiwyg.controls.image?b.wysiwyg.controls.image.init(this):b.wysiwyg.autoload?b.wysiwyg.autoload.control("wysiwyg.image.js",function(){a.controls.insertImage.exec.apply(a)}):f.error("$.wysiwyg.controls.image not defined. You need to include wysiwyg.image.js file")},tags:["img"],
tooltip:"Insert image"},insertOrderedList:{groupIndex:5,visible:!0,tags:["ol"],tooltip:"Insert Ordered List"},insertTable:{groupIndex:6,visible:!0,exec:function(){var a=this;b.wysiwyg.controls&&b.wysiwyg.controls.table?b.wysiwyg.controls.table(this):b.wysiwyg.autoload?b.wysiwyg.autoload.control("wysiwyg.table.js",function(){a.controls.insertTable.exec.apply(a)}):f.error("$.wysiwyg.controls.table not defined. You need to include wysiwyg.table.js file")},tags:["table"],tooltip:"Insert table"},insertUnorderedList:{groupIndex:5,
visible:!0,tags:["ul"],tooltip:"Insert Unordered List"},italic:{groupIndex:0,visible:!0,tags:["i","em"],css:{fontStyle:"italic"},tooltip:"Italic",hotkey:{ctrl:1,key:73}},justifyCenter:{groupIndex:1,visible:!0,tags:["center"],css:{textAlign:"center"},tooltip:"Justify Center"},justifyFull:{groupIndex:1,visible:!0,css:{textAlign:"justify"},tooltip:"Justify Full"},justifyLeft:{visible:!0,groupIndex:1,css:{textAlign:"left"},tooltip:"Justify Left"},justifyRight:{groupIndex:1,visible:!0,css:{textAlign:"right"},
tooltip:"Justify Right"},ltr:{groupIndex:10,visible:!1,exec:function(){this.getInternalRange();var a=this.dom.getElement("p");if(!a)return!1;b(a).attr("dir","ltr")},tooltip:"Left to Right"},outdent:{groupIndex:2,visible:!0,tooltip:"Outdent"},paragraph:{groupIndex:7,visible:!1,className:"paragraph",command:"FormatBlock",arguments:b.browser.msie||b.browser.safari?"<p>":"p",tags:["p"],tooltip:"Paragraph"},paste:{groupIndex:8,visible:!1,tooltip:"Paste"},redo:{groupIndex:4,visible:!0,tooltip:"Redo"},removeFormat:{groupIndex:10,
visible:!0,exec:function(){this.removeFormat()},tooltip:"Remove formatting"},rtl:{groupIndex:10,visible:!1,exec:function(){this.getInternalRange();var a=this.dom.getElement("p");if(!a)return!1;b(a).attr("dir","rtl")},tooltip:"Right to Left"},strikeThrough:{groupIndex:0,visible:!0,tags:["s","strike"],css:{textDecoration:"line-through"},tooltip:"Strike-through"},subscript:{groupIndex:3,visible:!0,tags:["sub"],tooltip:"Subscript"},superscript:{groupIndex:3,visible:!0,tags:["sup"],tooltip:"Superscript"},
underline:{groupIndex:0,visible:!0,tags:["u"],css:{textDecoration:"underline"},tooltip:"Underline",hotkey:{ctrl:1,key:85}},undo:{groupIndex:4,visible:!0,tooltip:"Undo"}};this.defaults={html:'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"></head><body style="margin: 0px;">INITIAL_CONTENT</body></html>',debug:!1,
controls:{},css:{},events:{},autoGrow:!1,autoload:{css:["jquery.wysiwyg.css","jquery.wysiwyg.modal.css"]},autoSave:!0,brIE:!0,formHeight:270,formWidth:440,i18n:!1,iFrameClass:null,initialContent:"<p>Initial content</p>",maxHeight:1E4,messages:{nonSelection:"Select the text you wish to link"},toolbarHtml:'<ul role="menu" class="toolbar"></ul>',removeHeadings:!1,replaceDivWithP:!1,resizeOptions:!1,rmMsWordMarkup:!1,rmUnusedControls:!1,rmUnwantedBr:!0,tableFiller:"Lorem ipsum"};this.availableControlProperties=
["arguments","callback","className","command","css","custom","exec","groupIndex","hotkey","icon","tags","tooltip","visible"];this.element=this.editorDoc=this.editor=null;this.options={};this.savedRange=this.original=null;this.timers=[];this.dom={ie:{parent:null},w3c:{parent:null}};this.dom.parent=this;this.dom.ie.parent=this.dom;this.dom.w3c.parent=this.dom;this.ui={};this.ui.self=this;this.ui.toolbar=null;this.ui.initialHeight=null;this.dom.getAncestor=function(a,b){for(b=b.toLowerCase();a&&"body"!==
a.tagName.toLowerCase();){if(b===a.tagName.toLowerCase())return a;a=a.parentNode}return null};this.dom.getElement=function(a){return window.getSelection?this.w3c.getElement(a):this.ie.getElement(a)};this.dom.ie.getElement=function(a){var b=this.parent,d=b.parent.getInternalSelection(),e=d.createRange();if("Control"===d.type)if(1===e.length)d=e.item(0);else return null;else d=e.parentElement();return b.getAncestor(d,a)};this.dom.w3c.getElement=function(a){var b=this.parent,d=b.parent.getInternalRange(),
e;if(!d)return null;e=d.commonAncestorContainer;if(3===e.nodeType)e=e.parentNode;e===d.startContainer&&(e=e.childNodes[d.startOffset]);return b.getAncestor(e,a)};this.ui.addHoverClass=function(){b(this).addClass("wysiwyg-button-hover")};this.ui.appendControls=function(){var a=this,c=this.self.parseControls(),d=!0,e=[],g={},f,h=function(b,c){if(c.groupIndex&&f!==c.groupIndex)f=c.groupIndex,d=!1;c.visible&&(d||(a.appendItemSeparator(),d=!0),c.custom?a.appendItemCustom(b,c):a.appendItem(b,c))};b.each(c,
function(a,b){var c="empty";void 0!==b.groupIndex&&(c=""===b.groupIndex?"empty":b.groupIndex);void 0===g[c]&&(e.push(c),g[c]={});g[c][a]=b});e.sort(function(a,b){if("number"===typeof a&&typeof a===typeof b)return a-b;else{a=""+a;b=""+b;if(a>b)return 1;if(a===b)return 0;return-1}});0<e.length&&(f=e[0]);for(c=0;c<e.length;c+=1)b.each(g[e[c]],h)};this.ui.appendItem=function(a,c){var d=this.self,e=c.className||c.command||a||"empty",g=c.tooltip||c.command||a||"";b.wysiwyg.i18n&&(g=b.wysiwyg.i18n.t(g,"controls"));
return b('<li role="menuitem" unselectable="on">'+e+"</li>").addClass(e).attr("title",g).hover(this.addHoverClass,this.removeHoverClass).click(function(){if("true"===b(this).attr("disabled"))return!1;d.triggerControl.apply(d,[a,c]);this.blur();d.ui.returnRange();d.ui.focus()}).appendTo(d.ui.toolbar)};this.ui.appendItemCustom=function(a,c){var d=this.self,e=c.tooltip||c.command||a||"";b.wysiwyg.i18n&&(e=b.wysiwyg.i18n.t(e,"controls"));c.callback&&b(window).bind("trigger-"+a+".wysiwyg",c.callback);
return b('<li role="menuitem" unselectable="on" style="background: url(\''+c.icon+"') no-repeat;\"></li>").addClass("custom-command-"+a).addClass("wysiwyg-custom-command").addClass(a).attr("title",c.tooltip).hover(this.addHoverClass,this.removeHoverClass).click(function(){if("true"===b(this).attr("disabled"))return!1;d.triggerControl.apply(d,[a,c]);this.blur();d.ui.returnRange();d.ui.focus();d.triggerControlCallback(a)}).appendTo(d.ui.toolbar)};this.ui.appendItemSeparator=function(){var a=this.self;
return b('<li role="separator" class="separator"></li>').appendTo(a.ui.toolbar)};this.autoSaveFunction=function(){this.saveContent()};this.ui.checkTargets=function(a){var c=this.self;b.each(c.options.controls,function(d,e){var g=e.className||e.command||d||"empty",f,h,i,j=function(a,b){"function"===typeof b?b(i.css(a).toString().toLowerCase(),c)&&c.ui.toolbar.find("."+g).addClass("active"):i.css(a).toString().toLowerCase()===b&&c.ui.toolbar.find("."+g).addClass("active")};"fullscreen"!==g&&c.ui.toolbar.find("."+
g).removeClass("active");if(e.tags||e.options&&e.options.tags){f=e.tags||e.options&&e.options.tags;for(h=a;h;){if(h.nodeType!==1)break;b.inArray(h.tagName.toLowerCase(),f)!==-1&&c.ui.toolbar.find("."+g).addClass("active");h=h.parentNode}}if(e.css||e.options&&e.options.css){f=e.css||e.options&&e.options.css;for(i=b(a);i;){if(i[0].nodeType!==1)break;b.each(f,j);i=i.parent()}}})};this.ui.designMode=function(){var a=this.self,b=function(d){if("on"===a.editorDoc.designMode)a.timers.designMode&&window.clearTimeout(a.timers.designMode),
a.innerDocument()!==a.editorDoc&&a.ui.initFrame();else{try{a.editorDoc.designMode="on"}catch(e){}d-=1;if(d>0)a.timers.designMode=window.setTimeout(function(){b(d)},100)}};b(3)};this.destroy=function(){var a,c=this.element.closest("form");for(a=0;a<this.timers.length;a+=1)window.clearTimeout(this.timers[a]);c.unbind(".wysiwyg");this.element.remove();b.removeData(this.original,"wysiwyg");b(this.original).show();return this};this.getRangeText=function(){var a=this.getInternalRange();if(a.toString)a=
a.toString();else if(a.text)a=a.text;return a};this.execute=function(a,b){typeof b==="undefined"&&(b=null);this.editorDoc.execCommand(a,!1,b)};this.extendOptions=function(a){var c={},d=[];if("object"===typeof a.controls)c=a.controls,delete a.controls;a=b.extend(!0,{},this.defaults,a);a.controls=b.extend(!0,this.controls,c);a.rmUnusedControls&&(b.each(a.controls,function(a){c[a]||d.push(a)}),b.each(d,function(b){delete a.controls[d[b]]}));return a};this.ui.focus=function(){var a=this.self;a.editor.get(0).contentWindow.focus();
return a};this.ui.returnRange=function(){var a=this.self,b;if(a.savedRange!==null){if(window.getSelection){b=window.getSelection();b.rangeCount>0&&b.removeAllRanges();try{b.addRange(a.savedRange)}catch(d){f.error(d)}}else window.document.createRange?window.getSelection().addRange(a.savedRange):window.document.selection&&a.savedRange.select();a.savedRange=null}};this.getContent=function(){return this.editorDoc.body.innerHTML};this.getElementByAttributeValue=function(a,c,d){var e,g=this.editorDoc.getElementsByTagName(a);
for(a=0;a<g.length;a+=1)if(e=g[a].getAttribute(c),b.browser.msie&&(e=e.substr(e.length-d.length)),e===d)return g[a];return!1};this.getInternalRange=function(){var a=this.getInternalSelection();if(!a)return null;if(a.rangeCount&&a.rangeCount>0)return a.getRangeAt(0);else if(a.createRange)return a.createRange();return null};this.getInternalSelection=function(){if(this.editor.get(0).contentWindow){if(this.editor.get(0).contentWindow.getSelection)return this.editor.get(0).contentWindow.getSelection();
if(this.editor.get(0).contentWindow.selection)return this.editor.get(0).contentWindow.selection}if(this.editorDoc.getSelection)return this.editorDoc.getSelection();if(this.editorDoc.selection)return this.editorDoc.selection;return null};this.getRange=function(){var a=this.getSelection();if(!a)return null;if(a.rangeCount&&a.rangeCount>0)a.getRangeAt(0);else if(a.createRange)return a.createRange();return null};this.getSelection=function(){return window.getSelection?window.getSelection():window.document.selection};
this.ui.grow=function(){var a=this.self,c=b(a.editorDoc.body),d=b.browser.msie?c[0].scrollHeight:c.height()+2+20;d=Math.max(d,a.ui.initialHeight);d=Math.min(d,a.options.maxHeight);a.editor.attr("scrolling",d<a.options.maxHeight?"no":"auto");c.css("overflow",d<a.options.maxHeight?"hidden":"");a.editor.get(0).height=d;return a};this.init=function(a,c){var d=this,e=b(a).closest("form"),g=a.width||a.clientWidth||0,f=a.height||a.clientHeight||0,h;this.options=this.extendOptions(c);this.original=a;this.ui.toolbar=
b(this.options.toolbarHtml);if(this.options.autoload&&b.wysiwyg.autoload&&this.options.autoload.css)for(h=0;h<this.options.autoload.css.length;h+=1)b.wysiwyg.autoload.css(this.options.autoload.css[h]);this.options.i18n&&b.wysiwyg.i18n&&b.wysiwyg.i18n.init(this,this.options.i18n);if(b.browser.msie&&parseInt(b.browser.version,10)<8)this.options.autoGrow=!1;g===0&&a.cols&&(g=a.cols*8+21);f===0&&a.rows&&(f=a.rows*16+16);this.editor=b(window.location.protocol==="https:"?'<iframe src="javascript:false;"></iframe>':
"<iframe></iframe>").attr("frameborder","0");this.options.iFrameClass?this.editor.addClass(this.options.iFrameClass):(this.editor.css({minHeight:(f-6).toString()+"px",width:g>50?(g-8).toString()+"px":""}),b.browser.msie&&parseInt(b.browser.version,10)<7&&this.editor.css("height",f.toString()+"px"));this.editor.attr("tabindex",b(a).attr("tabindex"));this.element=b("<div/>").addClass("wysiwyg");this.options.iFrameClass||this.element.css({width:g>0?g.toString()+"px":"100%"});b(a).hide().before(this.element);
this.viewHTML=!1;this.initialContent=b(a).val();this.ui.initFrame();this.options.resizeOptions&&b.fn.resizable&&this.element.resizable(b.extend(!0,{alsoResize:this.editor},this.options.resizeOptions));this.options.autoSave&&e.bind("submit.wysiwyg",function(){d.autoSaveFunction()});e.bind("reset.wysiwyg",function(){d.resetFunction()})};this.ui.initFrame=function(){var a=this.self,c;a.ui.appendControls();a.element.append(a.ui.toolbar).append(b("<div><\!-- --\></div>").css({clear:"both"})).append(a.editor);
a.editorDoc=a.innerDocument();a.ui.designMode();a.editorDoc.open();a.editorDoc.write(a.options.html.replace(/INITIAL_CONTENT/,function(){return a.wrapInitialContent()}));a.editorDoc.close();b(a.editorDoc).bind("click.wysiwyg",function(b){a.ui.checkTargets(b.target?b.target:b.srcElement)});b(a.original).focus(function(){b(this).filter(":visible")||a.ui.focus()});b(a.editorDoc).keydown(function(b){var c=/^<([\w]+)[^>]*>(<br\/?>)?<\/\1>/;if(b.keyCode===8&&c.test(a.getContent()))return b.stopPropagation(),
!1;return!0});b.browser.msie?a.options.brIE&&b(a.editorDoc).keydown(function(b){if(b.keyCode===13)return b=a.getRange(),b.pasteHTML("<br/>"),b.collapse(!1),b.select(),!1;return!0}):b(a.editorDoc).keydown(function(b){var c;if(b.ctrlKey||b.metaKey)for(c in a.controls)if(a.controls[c].hotkey&&a.controls[c].hotkey.ctrl&&b.keyCode===a.controls[c].hotkey.key)return a.triggerControl.apply(a,[c,a.controls[c]]),!1;return!0});a.options.rmMsWordMarkup&&b(a.editorDoc).bind("keyup.wysiwyg",function(c){if(c.ctrlKey||
c.metaKey)86===c.keyCode&&a.options.rmMsWordMarkup&&b.wysiwyg.rmFormat&&("object"===typeof a.options.rmMsWordMarkup?b.wysiwyg.rmFormat.run(a,{rules:{msWordMarkup:a.options.rmMsWordMarkup}}):b.wysiwyg.rmFormat.run(a,{rules:{msWordMarkup:{enabled:!0}}}))});a.options.autoSave&&b(a.editorDoc).keydown(function(){a.autoSaveFunction()}).keyup(function(){a.autoSaveFunction()}).mousedown(function(){a.autoSaveFunction()}).bind(b.support.noCloneEvent?"input.wysiwyg":"paste.wysiwyg",function(){a.autoSaveFunction()});
if(a.options.autoGrow)a.ui.initialHeight=b(a.editorDoc).height(),b(a.editorDoc.body).css("border","1px solid white"),c=function(){a.ui.grow()},b(a.editorDoc).keyup(c),b(a.editorDoc).bind("wysiwyg:refresh",c),a.ui.grow();if(a.options.css)String===a.options.css.constructor?b.browser.msie?(c=a.editorDoc.createStyleSheet(a.options.css),b(c).attr({media:"all"})):(c=b("<link/>").attr({href:a.options.css,media:"all",rel:"stylesheet",type:"text/css"}),b(a.editorDoc).find("head").append(c)):a.timers.initFrame_Css=
window.setTimeout(function(){b(a.editorDoc.body).css(a.options.css)},0);a.initialContent.length===0&&("function"===typeof a.options.initialContent?a.setContent(a.options.initialContent()):a.setContent(a.options.initialContent));b.each(a.options.events,function(c,e){b(a.editorDoc).bind(c+".wysiwyg",e)});b.browser.msie?b(a.editorDoc).bind("beforedeactivate.wysiwyg",function(){a.savedRange=a.getInternalRange()}):b(a.editorDoc).bind("blur.wysiwyg",function(){a.savedRange=a.getInternalRange()});b(a.editorDoc.body).addClass("wysiwyg");
if(a.options.events&&a.options.events.save)c=a.options.events.save,b(a.editorDoc).bind("keyup.wysiwyg",c),b(a.editorDoc).bind("change.wysiwyg",c),b.support.noCloneEvent?b(a.editorDoc).bind("input.wysiwyg",c):(b(a.editorDoc).bind("paste.wysiwyg",c),b(a.editorDoc).bind("cut.wysiwyg",c))};this.innerDocument=function(){var a=this.editor.get(0);if(a.nodeName.toLowerCase()==="iframe"){if(a.contentDocument)return a.contentDocument;else if(a.contentWindow)return a.contentWindow.document;f.error("Unexpected error in innerDocument")}return a};
this.insertHtml=function(a){var c;if(!a||a.length===0)return this;b.browser.msie?(this.ui.focus(),this.editorDoc.execCommand("insertImage",!1,"#jwysiwyg#"),(c=this.getElementByAttributeValue("img","src","#jwysiwyg#"))&&b(c).replaceWith(a)):this.editorDoc.execCommand("insertHTML",!1,a);return this};this.parseControls=function(){var a=this;b.each(this.options.controls,function(c,d){b.each(d,function(d){if(-1===b.inArray(d,a.availableControlProperties))throw c+'["'+d+'"]: property "'+d+'" not exists in Wysiwyg.availableControlProperties';
})});if(this.options.parseControls)return this.options.parseControls.call(this);return this.options.controls};this.removeFormat=function(){b.browser.msie&&this.ui.focus();this.options.removeHeadings&&this.editorDoc.execCommand("formatBlock",!1,"<p>");this.editorDoc.execCommand("removeFormat",!1,null);this.editorDoc.execCommand("unlink",!1,null);b.wysiwyg.rmFormat&&b.wysiwyg.rmFormat.enabled&&b.wysiwyg.rmFormat.run(this);return this};this.ui.removeHoverClass=function(){b(this).removeClass("wysiwyg-button-hover")};
this.resetFunction=function(){this.setContent(this.initialContent);this.saveContent()};this.saveContent=function(){if(this.original){var a;this.viewHTML&&this.setContent(b(this.original).val());a=this.getContent();this.options.rmUnwantedBr&&(a=a.replace(/<br\/?>$/,""));this.options.replaceDivWithP&&(newContent=b("<div/>").addClass("temp").append(a),newContent.children("div").each(function(){var a=b(this),d=a.find("p"),e;if(0===d.length){d=b("<p></p>");if(this.attributes.length>0)for(e=0;e<this.attributes.length;e+=
1)d.attr(this.attributes[e].name,a.attr(this.attributes[e].name));d.append(a.html());a.replaceWith(d)}}),a=newContent.html());b(this.original).val(a);this.options.events&&this.options.events.save&&this.options.events.save.call(this)}return this};this.setContent=function(a){this.editorDoc.body.innerHTML=a;return this};this.triggerControl=function(a,b){var d=b.command||a,e=b.arguments||[];if(b.exec)b.exec.apply(this);else{this.ui.focus();this.ui.withoutCss();try{this.editorDoc.execCommand(d,!1,e)}catch(g){f.error(g)}}this.options.autoSave&&
this.autoSaveFunction()};this.triggerControlCallback=function(a){b(window).trigger("trigger-"+a+".wysiwyg",[this])};this.ui.withoutCss=function(){var a=this.self;if(b.browser.mozilla)try{a.editorDoc.execCommand("styleWithCSS",!1,!1)}catch(c){try{a.editorDoc.execCommand("useCSS",!1,!0)}catch(d){}}return a};this.wrapInitialContent=function(){var a=this.initialContent;if(!a.match(/<\/?p>/gi))return"<p>"+a+"</p>";return a}}var f=window.console?window.console:{log:b.noop,error:function(a){b.error(a)}};
b.wysiwyg={addControl:function(a,c,d){if("object"!==typeof a||!a.context)a=this;a.each||f.error("Something goes wrong, check object");return a.each(function(){var a=b(this).data("wysiwyg"),g={};if(!a)return this;g[c]=b.extend(!0,{visible:!0,custom:!0},d);b.extend(!0,a.controls,g);g=b(a.options.toolbarHtml);a.ui.toolbar.replaceWith(g);a.ui.toolbar=g;a.ui.appendControls()})},clear:function(a){if("object"!==typeof a||!a.context)a=this;a.each||f.error("Something goes wrong, check object");return a.each(function(){var a=
b(this).data("wysiwyg");if(!a)return this;a.setContent("");a.saveContent()})},console:f,destroy:function(a){if("object"!==typeof a||!a.context)a=this;a.each||f.error("Something goes wrong, check object");return a.each(function(){var a=b(this).data("wysiwyg");if(!a)return this;a.destroy()})},document:function(a){if("object"!==typeof a||!a.context)a=this;a.each||f.error("Something goes wrong, check object");if(a=a.data("wysiwyg"))return b(a.editorDoc)},getContent:function(a){if("object"!==typeof a||
!a.context)a=this;a.each||f.error("Something goes wrong, check object");if(a=a.data("wysiwyg"))return a.getContent()},init:function(a,c){if("object"!==typeof a||!a.context)a=this;a.each||f.error("Something goes wrong, check object");return a.each(function(){var a=b.extend(!0,{},c),e;"textarea"!==this.nodeName.toLowerCase()||b(this).data("wysiwyg")||(e=new j,e.init(this,a),b.data(this,"wysiwyg",e))})},insertHtml:function(a,c){if("object"!==typeof a||!a.context)a=this;a.each||f.error("Something goes wrong, check object");
return a.each(function(){var a=b(this).data("wysiwyg");if(!a)return this;a.insertHtml(c)})},plugin:{exists:function(a){if("string"!==typeof a)return!1;a=this.parseName(a);if(!b.wysiwyg[a.name])return!1;if(!b.wysiwyg[a.name][a.method])return!1;return!0},parseName:function(a){if("string"!==typeof a)return!1;a=a.split(".");if(2>a.length)return!1;return{name:a[0],method:a[1]}},register:function(a){a.name||f.error("Plugin name missing");b.each(b.wysiwyg,function(b){b===a.name&&f.error("Plugin with name '"+
a.name+"' was already registered")});b.wysiwyg[a.name]=a;return!0}},removeFormat:function(a){if("object"!==typeof a||!a.context)a=this;a.each||f.error("Something goes wrong, check object");return a.each(function(){var a=b(this).data("wysiwyg");if(!a)return this;a.removeFormat()})},save:function(a){if("object"!==typeof a||!a.context)a=this;a.each||f.error("Something goes wrong, check object");return a.each(function(){var a=b(this).data("wysiwyg");if(!a)return this;a.saveContent()})},setContent:function(a,
c){if("object"!==typeof a||!a.context)a=this;a.each||f.error("Something goes wrong, check object");return a.each(function(){var a=b(this).data("wysiwyg");if(!a)return this;a.setContent(c);a.saveContent()})},triggerControl:function(a,c){if("object"!==typeof a||!a.context)a=this;a.each||f.error("Something goes wrong, check object");return a.each(function(){var a=b(this).data("wysiwyg");if(!a)return this;a.controls[c]||f.error("Control '"+c+"' not exists");a.triggerControl.apply(a,[c,a.controls[c]])})},
utils:{extraSafeEntities:[["<",">","'",'"'," "],[32]],encodeEntities:function(a){var c=this,d,e=[];this.extraSafeEntities[1].length===0&&b.each(this.extraSafeEntities[0],function(a,b){c.extraSafeEntities[1].push(b.charCodeAt())});d=a.split("");b.each(d,function(a){var f=d[a].charCodeAt();b.inArray(f,c.extraSafeEntities[1])&&(f<65||f>127||f>90&&f<97)?e.push("&#"+f+";"):e.push(d[a])});return e.join("")}}};b.fn.wysiwyg=function(a){var c=arguments,d;if("undefined"!==typeof b.wysiwyg[a])return c=Array.prototype.concat.call([c[0]],
[void 0],Array.prototype.slice.call(c,1)),b.wysiwyg[a].apply(this,Array.prototype.slice.call(c,1));else if("object"===typeof a||!a)return Array.prototype.unshift.call(c,void 0),b.wysiwyg.init.apply(this,c);else if(b.wysiwyg.plugin.exists(a))return d=b.wysiwyg.plugin.parseName(a),c=Array.prototype.concat.call([c[0]],[void 0],Array.prototype.slice.call(c,1)),b.wysiwyg[d.name][d.method].apply(this,Array.prototype.slice.call(c,1));else f.error("Method '"+a+"' does not exist on jQuery.wysiwyg.\nTry to include some extra controls or plugins")}})(jQuery);