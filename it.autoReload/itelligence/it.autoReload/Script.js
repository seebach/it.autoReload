// Torben Seebach 4C Management Consulting tse@4cmc.dk - All Rights Reserved 2013
// Thanks to Brian Munz for the extensions template
var template_path = Qva.Remote + "?public=only&name=Extensions/itelligence/it.autoReload/";
function extension_Init()
{
	// Use QlikView's method of loading other files needed by an extension. These files should be added to your extension .zip file (.qar)
	if (typeof jQuery == 'undefined') {
	    Qva.LoadScript(template_path + 'jquery.js', extension_Done);
	}
	else {
	    extension_Done();
	}        
}

function extension_Done(){
	//Add extension
	Qva.AddExtension('itelligence/it.autoReload', function(){

		var _this = this;		
		var refreshMilliSeconds =  Number(_this.Layout.Text0.text.toString());
		console.info(refreshMilliSeconds);
		
		// avoid having page refresh immediatly
		if( isNaN(refreshMilliSeconds) ||  refreshMilliSeconds<1) {
			console.info('no auto refresh interval is set or its less than a millisecond');
		}else{
			setTimeout(function(){
				window.location.reload() // location = ''
			  },refreshMilliSeconds*1000)
		 } 
	});
}
//Initiate extension
extension_Init();
