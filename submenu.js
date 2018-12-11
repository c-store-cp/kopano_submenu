Ext.namespace('Zarafa.plugins.submenu');

Zarafa.plugins.submenu.SP = Ext.extend(Zarafa.core.Plugin, {


  initPlugin : function()
  {
    this.registerInsertionPoint('main.maintabbar.left', this.SPButton, this);

  },

SPButton:function()
{
        return {
			text: this.getDisplayName(),
			tabOrderIndex: 9,
			handler : this.onClick_SPButton,
			context: this.getName()
		};
},
  onClick_SPButton: function (btn) {
	  
	//Add links and description for your menu here into the array
	
	var menuitems = [
	"/link1.htm", "Link1",
	"/link2.htm", "Link2"
	];
	
	window.addEventListener("click", function(event){
		if(document.getElementById("breakout-1") && event.target.innerText != "FORMULARE"){
			if (document.getElementById("breakout-1").style.display === "block") {
						var op = 1;  // initial opacity
						var timer = setInterval(function () {
							if (op <= 0.1){
								clearInterval(timer);
								document.getElementById("breakout-1").style.display = 'none';
							}
						document.getElementById("breakout-1").style.opacity = op;
						document.getElementById("breakout-1").style.filter = 'alpha(opacity=' + op * 100 + ')';
						op -= op * 0.1;
					}, 10);
			} 
		}
	});
	
	window.addEventListener("resize", function(event) {
	var offsets1 = document.getElementById('ext-comp-1008').getBoundingClientRect();
	var offsets2 = document.getElementById('zarafa-mainmenu').getBoundingClientRect();
	var fontsize = window.getComputedStyle(document.getElementById('ext-gen293'),null).getPropertyValue('font-size');
	var height = parseFloat (fontsize)+21;
	fontsize = height - 19 + "px";
	divsize = height - 10 + "px";
	var left = offsets1.left; 
    document.getElementById("breakout-1").style.top = height+"px";
	document.getElementById("breakout-1").style.left = left+"px";
	document.getElementById("breakout-1").style.fontSize = divsize;
	for (i = 0; i < menuitems.length; i+=2) {
	document.getElementById("breakoutmenulink"+i).setAttribute("style", "text-decoration: none; color: rgb(255, 255, 255);opacity: 0.7; font-size : "+ fontsize +" !important;");
	}
	});
	
	var offsets1 = document.getElementById('ext-comp-1008').getBoundingClientRect();
	var offsets2 = document.getElementById('zarafa-mainmenu').getBoundingClientRect();
	var fontsize = window.getComputedStyle(document.getElementById('ext-gen293'),null).getPropertyValue('font-size');
	var height = parseFloat (fontsize)+21;
	fontsize = height - 19 + "px";
	divsize = height - 10 + "px";
	var left = offsets1.left;  

	if(!document.getElementById("breakout-1")){
	var div = document.createElement("div");
	div.style.top = height+"px";
	div.style.left = left+"px";
	div.style.fontSize = divsize;
	div.style.marginBottom = "-100%";
	div.style.position = "fixed";
	div.style.display = "block";
	var bgcolor = window.getComputedStyle(document.getElementById('zarafa-mainmenu'),null).getPropertyValue('border-top-color');
	if(bgcolor=="rgb(230, 230, 230)" || bgcolor == "rgb(207, 210, 220)"){
		bgcolor = "rgb(56, 112, 190)";
	}
	div.style.backgroundColor = bgcolor;
	div.style.borderBottom = "thick solid "+bgcolor;
	div.className = "x-toolbar-cell";
	div.setAttribute("id", "breakout-1");
	div.style.opacity = 0;
	div.style.filter = 'alpha(opacity=0)';
	var menuitemshtml = "";
	for (i = 0; i < menuitems.length; i+=2) {
	menuitemshtml += '&nbsp; <a id="breakoutmenulink'+i+'" href="'+ menuitems [i] +'" style="text-decoration: none; color: rgb(255, 255, 255);opacity: 0.7; font-size : '+ fontsize + ' !important;" target="_blank" rel="noopener">'+ menuitems [i+1] +'</a> &nbsp;<br>';
	}
	div.innerHTML = menuitemshtml;
	document.getElementById("ext-gen3").appendChild(div);
	var op = 0.01;  // initial opacity
	var timer = setInterval(function () {
       if (op >= 0.9){
            clearInterval(timer);
        }
        document.getElementById("breakout-1").style.opacity = op;
        document.getElementById("breakout-1").style.filter = 'alpha(opacity=' + op * 100 + ')';
        op += op * 0.2;
    }, 2);
} else {
	document.getElementById("breakout-1").style.top = height+"px";
	document.getElementById("breakout-1").style.left = left+"px";
	document.getElementById("breakout-1").style.fontSize = divsize;
	for (i = 0; i < menuitems.length; i+=2) {
	document.getElementById("breakoutmenulink"+i).setAttribute("style", "text-decoration: none; color: rgb(255, 255, 255);opacity: 0.7; font-size : "+ fontsize +" !important;");
	}
    if (document.getElementById("breakout-1").style.display === "none") {
		document.getElementById("breakout-1").style.opacity = 0;
		document.getElementById("breakout-1").style.filter = 'alpha(opacity=0)';
		document.getElementById("breakout-1").style.display = 'block';
		var op = 0.01;  // initial opacity
		var timer = setInterval(function () {
        if (op >= 0.9){
            clearInterval(timer);
        }
        document.getElementById("breakout-1").style.opacity = op;
        document.getElementById("breakout-1").style.filter = 'alpha(opacity=' + op * 100 + ')';
        op += op * 0.2;
    }, 2);
    } else {    
		var op = 1;  // initial opacity
		var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            document.getElementById("breakout-1").style.display = 'none';
        }
        document.getElementById("breakout-1").style.opacity = op;
        document.getElementById("breakout-1").style.filter = 'alpha(opacity=' + op * 100 + ')';
        op -= op * 0.1;
    }, 10);
    }
}	
}
});


Zarafa.onReady(function() {
    container.registerPlugin(new Zarafa.core.PluginMetaData({
        name: "submenu",
        displayName : _('SubMenu'),
        pluginConstructor: Zarafa.plugins.submenu.SP
    }))
});
