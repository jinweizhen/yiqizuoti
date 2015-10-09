/**
 * Created by jinjin on 15/10/9.
 */
!function($17){"use strict";function getTimeArray(array,index){return $.grep(array,function(val,key){return val>=index})}function resetStartTime(){var nowDate=defaults.startMinDate,startDate=$(defaults.startDateId).val();_sh=getTimeArray(h,defaults.startTime.split(":")[0]),_sm=getTimeArray(m,defaults.startTime.split(":")[1]),startDate==nowDate?($17.setSelect(defaults.startHourId,_sh,_sh,$(defaults.startHourId).val()),$(defaults.startHourId).val()==defaults.startTime.split(":")[0]?$17.setSelect(defaults.startMinuteId,_sm,_sm,$(defaults.startMinuteId).val()):$17.setSelect(defaults.startMinuteId,m,m,$(defaults.startMinuteId).val())):($17.setSelect(defaults.startHourId,h,h,$(defaults.startHourId).val()),$17.setSelect(defaults.startMinuteId,m,m,$(defaults.startMinuteId).val()))}function resetEndTime(){var nowDate=defaults.startMinDate,endDate=$(defaults.endDateId).val();$17.isBlank(defaults.startHourId)?(_eh=getTimeArray(h,defaults.endTime.split(":")[0]),_em=getTimeArray(m,defaults.endTime.split(":")[1]),endDate==nowDate?($17.setSelect(defaults.endHourId,_eh,_eh,$(defaults.endHourId).val()),$(defaults.endHourId).val()==defaults.endTime.split(":")[0]?$17.setSelect(defaults.endMinuteId,_em,_em,$(defaults.endMinuteId).val()):$17.setSelect(defaults.endMinuteId,m,m,$(defaults.endMinuteId).val())):($17.setSelect(defaults.endHourId,h,h,"23"),$17.setSelect(defaults.endMinuteId,m,m,"00"))):$(defaults.startDateId).val()==$(defaults.endDateId).val()?(_eh=getTimeArray(h,$(defaults.startHourId).val()),_em=$(defaults.startHourId).val()==$(defaults.endHourId).val()?getTimeArray(m,$(defaults.startMinuteId).val()):getTimeArray(m,0),$17.setSelect(defaults.endHourId,_eh,_eh,"23"),$17.setSelect(defaults.endMinuteId,_em,_em,"00")):(_em=getTimeArray(m,defaults.endTime.split(":")[1]),_eh=getTimeArray(h,defaults.endTime.split(":")[0]),$17.setSelect(defaults.endHourId,h,h,"23"),$17.setSelect(defaults.endMinuteId,m,m,"00")),checkTime()}function checkTime(){if(!$17.isBlank(defaults.startHourId)&&$(defaults.startDateId).val()==$(defaults.endDateId).val()&&$(defaults.startHourId).val()==$(defaults.endHourId).val())if(1*$(defaults.startMinuteId).val()+defaults.differ<60)_em=getTimeArray(m,1*$(defaults.startMinuteId).val()+defaults.differ),$17.setSelect(defaults.endMinuteId,_em,_em,_em[0]);else if(_em=getTimeArray(m,1*$(defaults.startMinuteId).val()+defaults.differ-60),$17.setSelect(defaults.endMinuteId,_em,_em,_em[0]),1*$(defaults.startHourId).val()+1<24)_eh=getTimeArray(h,1*$(defaults.startHourId).val()+1),$17.setSelect(defaults.endHourId,_eh,_eh,_eh[0]);else{$17.setSelect(defaults.endHourId,h,h,h[0]);var newDate=$17.DateUtils("%Y-%M-%d",1,"d",new Date($(defaults.endDateId).val()));$(defaults.endDateId).val(newDate)}}function timepicker(option){$17.extend(defaults,option),$(function(){$(defaults.startDateId).datepicker({dateFormat:defaults.dateFormat,defaultDate:defaults.startDefaultDate,numberOfMonths:defaults.numberOfMonths,minDate:defaults.startMinDate,maxDate:defaults.startMaxDate,onSelect:function(selectedDate){null==defaults.endMaxDate&&$(defaults.endDateId).datepicker("option","minDate",selectedDate),null!=defaults.startHourId&&(resetStartTime(),resetEndTime(),checkTime())}}),$(defaults.endDateId).datepicker({dateFormat:defaults.dateFormat,defaultDate:defaults.endDefaultDate,numberOfMonths:defaults.numberOfMonths,minDate:defaults.endMinDate,maxDate:defaults.endMaxDate,onSelect:function(){resetEndTime(),checkTime()}}),null!=defaults.startHourId&&resetStartTime(),resetEndTime(),null!=defaults.startHourId&&($(defaults.startHourId).on("change",function(){$(defaults.startDateId).val(),getTimeArray(m,defaults.startTime.split(":")[1]);startDate=$(defaults.startDateId).val(),_now=defaults.endMinDate,startDate==_now&&$(defaults.startDateId).val()==defaults.startTime.split(":")[0]?$17.setSelect(defaults.startMinuteId,_sm,_sm,_sm[0]):$17.setSelect(defaults.startMinuteId,m,m,m[0]),resetEndTime()}),$(defaults.startMinuteId).on("change",function(){$(defaults.endHourId).val("23"),resetEndTime()})),$(defaults.endHourId).on("change",function(){endDate=$(defaults.endDateId).val(),_now=defaults.endMinDate,_em=getTimeArray(m,defaults.endTime.split(":")[1]),endDate==_now&&$(defaults.endHourId).val()==defaults.endTime.split(":")[0]?$17.setSelect(defaults.endMinuteId,_em,_em,_em[0]):$17.setSelect(defaults.endMinuteId,m,m,m[0]),checkTime()})})}var defaults={startDateId:null,startHourId:null,startMinuteId:null,startDefaultDate:null,startMinDate:null,startMaxDate:null,startTime:"",endDateId:null,endHourId:null,endMinuteId:null,endDefaultDate:null,endMinDate:null,endMaxDate:null,endTime:"",dateFormat:"yy-mm-dd",numberOfMonths:2,differ:5},h=["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],m=["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59"],startDate=null,endDate=null,_now=null,_sh=null,_sm=null,_eh=null,_em=null;$17.include(timepicker,{getStartDate:function(){return $(defaults.startDateId).val()},getStartTime:function(){return $(defaults.startDateId).val()+" "+$(defaults.startHourId).val()+":"+$(defaults.startMinuteId).val()+":00"},getEndTime:function(){return $(defaults.endDateId).val()+" "+$(defaults.endHourId).val()+":"+$(defaults.endMinuteId).val()+":00"}}),$17.modules=$17.modules||{},$17.extend($17.modules,{timepicker:timepicker})}($17),function($17){"use strict";function littleBoy(checkboxTarget){$(checkboxTarget).die().live("click",function(){var $self=$(this),eventData=[];$self.hasClass(defaults.style)?($self.removeClass(defaults.style),$self.attr(defaults.values[0],"false"),eventData.push("false")):($self.addClass(defaults.style),$self.attr(defaults.values[0],"true"),eventData.push("true")),$(defaults.parent).trigger({type:"$17.modules.checkboxs.click",eventData:eventData})})}function bigBoy(parent,checkboxAllTarget,checkboxTarget){var $allTarget=$(parent+" "+checkboxAllTarget),$nodeTarget=$(parent+" "+checkboxTarget);$allTarget.die().live("click",function(){var $self=$(this),eventData=[];if($self.hasClass(defaults.style))$self.removeClass(defaults.style),$self.attr(defaults.values[0]+"s",""),$nodeTarget.removeClass(defaults.style);else{$self.addClass(defaults.style),$nodeTarget.addClass(defaults.style);var __values=[];$nodeTarget.each(function(index,value){__values.push($(value).attr(defaults.values[0]))}),$self.attr(defaults.values[0]+"s",__values),eventData.push(__values)}$self.trigger({type:"$17.modules.checkboxs.click",eventData:eventData})}),$nodeTarget.die().live("click",function(){$(this).toggleClass(defaults.style);var __count=0,__values=[],eventData=[];$nodeTarget.each(function(index,value){$(value).hasClass(defaults.style)&&(__count++,__values.push($(value).attr(defaults.values[0])))}),$nodeTarget.length==__count?$allTarget.addClass(defaults.style):$allTarget.removeClass(defaults.style),$allTarget.attr(defaults.values[0]+"s",__values),eventData.push(__values),$(this).trigger({type:"$17.modules.checkboxs.click",eventData:eventData})})}function superBoy(obj){obj=obj||{},$17.extend(defaults,obj);var $allTarget=$(defaults.parent+" "+defaults.checkboxAllTarget),$nodeTarget=$(defaults.parent+" "+defaults.checkboxTarget);$allTarget.die().live("click",function(){var $self=$(this),eventData=[];if($self.hasClass(defaults.style)){$self.removeClass(defaults.style);for(var i=0,l=defaults.values.length;l>i;i++)$self.attr(defaults.values[i]+"s","");$nodeTarget.removeClass(defaults.style)}else{$self.addClass(defaults.style),$nodeTarget.addClass(defaults.style);for(var i=0,l=defaults.values.length;l>i;i++){var __values=[];$nodeTarget.each(function(index,value){__values.push($(value).attr(defaults.values[i]))}),$self.attr(defaults.values[i]+"s",__values),eventData.push(__values)}}$(this).trigger({type:"$17.modules.checkboxs.click",eventData:eventData})}),$nodeTarget.die().live("click",function(){$(this).toggleClass(defaults.style);for(var eventData=[],i=0,l=defaults.values.length;l>i;i++){var __count=0,__values=[];$nodeTarget.each(function(index,value){$(value).hasClass(defaults.style)&&(__count++,__values.push($(value).attr(defaults.values[i])))}),0==i&&($nodeTarget.length==__count?$allTarget.addClass(defaults.style):$allTarget.removeClass(defaults.style)),$allTarget.attr(defaults.values[i]+"s",__values),eventData.push(__values)}$(this).trigger({type:"$17.modules.checkboxs.click",eventData:eventData})})}function checkboxs(){return 1==arguments.length&&"string"==typeof arguments[0]?(littleBoy.apply(this,arguments),!1):3==arguments.length?(bigBoy.apply(this,arguments),!1):1==arguments.length&&"object"==typeof arguments[0]?(superBoy.apply(this,arguments),!1):!1}var defaults={parent:null,checkboxTarget:null,checkboxAllTarget:null,style:"w-checkbox-current",values:["data-value"]};$17.modules=$17.modules||{},$17.extend($17.modules,{checkboxs:checkboxs})}($17),function($17){"use strict";function bigBoy(parent,targets){var $target=$(parent+" "+targets);return $target.die().live("click",function(){var $self=$(this);$target.removeClass(defaults.style),$self.addClass(defaults.style);var __values=$self.attr("data-value");$(parent).attr("data-value",__values),$self.trigger("$17.modules.radios.click")}),!1}function superBoy(obj){obj=obj||{},$17.extend(defaults,obj);var $target=$(defaults.parent+" "+defaults.targets);return $target.die().live("click",function(){var $self=$(this),$parent=$(obj.parent);$target.removeClass(defaults.style),$self.addClass(defaults.style);for(var i=0,l=defaults.values.length;l>i;i++)$parent.attr(defaults.values[i],$self.attr(defaults.values[i]));$self.trigger("$17.modules.radios.click")}),!1}function radios(){return 2==arguments.length?(bigBoy.apply(this,arguments),!1):1==arguments.length&&"object"==typeof arguments[0]?(superBoy.apply(this,arguments),!1):!1}var defaults={parent:null,targets:null,style:"w-radio-current",values:["data-value"]};$17.modules=$17.modules||{},$17.extend($17.modules,{radios:radios})}($17),function($17){"use strict";function forInTree(node){var k='<li><a href="javascript:void(0);">';if(defaults.canClose&&!$17.isBlank(node[defaults.children])&&(k+=defaults.allOpen?'<span class="v-close w-icon-arrow"></span>':'<span class="v-open w-icon-arrow w-icon-arrow-gRight"></span>'),defaults.allChecked){k+=$17.isBlank(node[defaults.children])?'<span class="w-checkbox w-checkbox-current v-left" ':'<span class="w-checkbox w-checkbox-current v-node" ';for(var i=0,l=defaults.values.length;l>i;i++)k+="data-"+defaults.values[i]+'="'+node[defaults.values[i]]+'" ';k+="></span>"}else{k+=$17.isBlank(node[defaults.children])?'<span class="w-checkbox v-left" ':'<span class="w-checkbox v-node" ';for(var i=0,l=defaults.values.length;l>i;i++)k+="data-"+defaults.values[i]+'="'+node[defaults.values[i]]+'" ';k+="></span>"}if(k+='<span class="w-icon-md">'+defaults.setText(node[defaults.text])+"</span></a>",!$17.isBlank(node[defaults.children])){k+=defaults.allOpen?"<ul>":'<ul style="display: none;">';for(var i=0,l=node[defaults.children].length;l>i;i++)k+=forInTree(node[defaults.children][i]);k+="</ul>"}return k+"</li>"}function checkTreeState($self){var $ul=$self.closest("ul"),$parent=$ul.parent("li");return 0==$parent.length?!1:($ul.find(".w-checkbox").size()==$ul.find(".w-checkbox.w-checkbox-current").size()?$parent.children("a").find("span.w-checkbox").addClass("w-checkbox-current"):$parent.children("a").find("span.w-checkbox").removeClass("w-checkbox-current"),void checkTreeState($parent.children("a").find("span.w-checkbox")))}function setValues(){for(var $target=$(defaults.target),datas=$target.find(".w-checkbox.w-checkbox-current"),eventData=[],i=0,l=defaults.values.length;l>i;i++){for(var _values=[],j=0,jl=datas.length;jl>j;j++){var $this=$(datas[j]);if(defaults.justLeaf){if($this.hasClass("v-node"))continue;_values.push($this.attr("data-"+defaults.values[i]))}else _values.push($this.attr("data-"+defaults.values[i]))}$target.attr("data-"+defaults.values[i]+"s",_values.toString()),eventData.push(_values)}$target.trigger({type:"$17.modules.tree.setValueDone",eventData:eventData})}function tree(obj){obj=obj||{},$17.extend(defaults,obj),$(defaults.target).html("<ul>"+forInTree(defaults.data)+"</ul>"),defaults.showRoot||$(defaults.target).find("a:first").remove(),$(defaults.target+" .v-open").die().live("click",function(){return $(this).removeClass("v-open w-icon-arrow-gRight").addClass("v-close").closest("li").children("ul").show(),!1}),$(defaults.target+" .v-close").die().live("click",function(){return $(this).removeClass("v-close").addClass("v-open w-icon-arrow-gRight").closest("li").children("ul").hide(),!1}),$(defaults.target+" .w-checkbox").die().live("click",function(){var $self=$(this);return $self.hasClass("w-checkbox-current")?$self.closest("li").find(".w-checkbox").removeClass("w-checkbox-current"):$self.closest("li").find(".w-checkbox").addClass("w-checkbox-current"),checkTreeState($self),setValues(),!1}),setValues()}var defaults={data:null,showRoot:!0,target:null,allChecked:!1,allOpen:!1,canClose:!0,justLeaf:!1,text:null,children:"children",values:[],setText:function(text){return text}};$17.modules=$17.modules||{},$17.extend($17.modules,{tree:tree})}($17),function($17){"use strict";function select(target){var selectModel=new $17.Model({target:target,$target:$(target)});return selectModel.extend({set:function(key,text){var $dark=this.$target.find("span.content");return $dark.attr("data-value",key),$dark.text(text),!1},get:function(){return this.$target.find("span.content").attr("data-value")},getContents:function(){return $(this).children("ul")},init:function(){var $self=this;$self.$target.on({click:function(){$self.getContents.apply(this).show().parent().css({zIndex:12}).closest("li").css({zIndex:12})},mouseleave:function(){$self.getContents.apply(this).hide().parent().css({zIndex:10}).closest("li").removeAttr("style")}})}}).init(),selectModel}function selectTree(target,treeTarget){var littleTree=select(target);return littleTree.extend({getContents:function(){return $(treeTarget).children("ul")}}),littleTree}$17.modules=$17.modules||{},$17.extend($17.modules,{select:select,selectTree:selectTree})}($17),jQuery.fn.rebound=function(count){function rebound($former,$anmt,_count){$anmt.animate({top:"+=0"},1e3).animate({top:"-=20","font-size":"+=3px"},80).animate({top:"+=20","font-size":"-=3px"},50).animate({top:"-=15","font-size":"+=2px"},100).animate({top:"+=15","font-size":"-=2px"},50).animate({top:"-=10","font-size":"+=1px"},50).animate({top:"+=10","font-size":"-=1px"},30).animate({top:"+=0"},500,function(){1==_count?$former.trigger("vox.animate.rebound.done"):rebound($former,$anmt,_count-1)})}return this.each(function(){var $target=$(this),$offset=$target.offset(),anmt=$target.clone(),guid=$17.guid("xxxx-xxxx-xxxx");anmt.attr("id",guid),$target.parent().append(anmt),anmt.css({position:"absolute",top:$offset.top,left:$offset.left}),$target.css("visibility","hidden"),rebound($target,anmt,count),$target.on("vox.animate.rebound.done",function(){$target.css("visibility","visible"),anmt.remove()})})};
//# sourceMappingURL=$17Modules.min.js.map