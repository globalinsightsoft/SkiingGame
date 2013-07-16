
var APP = APP || {}; 

document.addEventListener("deviceready",onDeviceReady,false);

function onDeviceReady(){
	APP.start();
}


APP.start = function(){
	PKUTIL.include(["./framework/ui-core.js",
	                "./framework/device.js",
	                "./framework/localization.js",
	                "./js/Jugador.js",
	                "./js/Sprite.js",
	                "./js/Niveles.js",
	                "./js/ObstaculosPantalla.js",
	                "./js/Obstaculo.js",
	                "./js/Espectadores.js",
	                "./js/Sounds.js"],function (){
														APP.initLocalization();
													});
}


APP.initLocalization = function() {
	PKLOC.initializeGlobalization(
			function() {
				PKLOC.loadLocales(["en-US","en-AU","en-GB","es-ES","es-MX","es-US","es"],function(){
					APP.init();
				});
			}
	);
}

APP.init = function() {
		
	PKLOC.addTranslation("en", "APP_TITLE", "Cave Runner");
	PKLOC.addTranslation("en", "PLAY", "Play!");
	PKLOC.addTranslation("en", "START", "Start");
	PKLOC.addTranslation("en", "START_OVER", "Try Again");
	PKLOC.addTranslation("en", "CONTINUE", "Continue");
	PKLOC.addTranslation("en", "OPTIONS", "Options");
	PKLOC.addTranslation("en", "BACK", "Back");
	PKLOC.addTranslation("en", "TAP_TO_START", "Tap to Start");
	PKLOC.addTranslation("en", "CRASHED", "*Crash*");
	PKLOC.addTranslation("en", "NEXT_LEVEL", "Level Up!");
	PKLOC.addTranslation("en", "SLIDE", "Slide");
	PKLOC.addTranslation("en", "TILT", "Tilt");
	PKLOC.addTranslation("en", "WIN", "YOU WIN");
	PKLOC.addTranslation("en","AMATEUR","Amateur");
	PKLOC.addTranslation("en","MEDIUM","Medium");
	PKLOC.addTranslation("en","EXPERT","Expert");
	PKLOC.addTranslation("en","LOOSE","GAME OVER");
	
	PKUI.CORE.initializeApplication();	
	
	PKUTIL.loadHTML("./views/gameViewSki.html",
					{
						id: "gameViewSki",
						className: "container",
						attachTo: $ge("rootContainer"),
						aSync: true
					},function(success){
						if(success){
							gameViewSki.initializeView();
						}
					});
	
	PKUTIL.loadHTML("./views/optionsView.html",
					{
						id: "optionsView",
						className: "container",
						attachTo: $ge("rootContainer"),
						aSync: true
					},function(success){
						if(success){
							
							optionsView.initializeView();
						}
					});
	
	PKUTIL.loadHTML("./views/startView.html",
					{
						id: "startView",
						className: "container",
						attachTo: $ge("rootContainer"),
						aSync: true
					},function(success){
						if(success){
							
							startView.initializeView();
							PKUI.CORE.showView(startView);
							
						}
					});
	
	PKUTIL.loadHTML("./views/startLevel.html",
					{
						id:"startLevel",
						className:"container",
						attachTo:$ge("rootContainer"),
						aSync:true
					},function(sucess){
						if(sucess){
							
							startLevel.initializeView();
													
						}
						
					});
	
	
}