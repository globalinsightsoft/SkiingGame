function Niveles(cantidadNiveles,levelPlayer){
	
	this.obstaculosPantalla = new Array(cantidadNiveles);
	this.soundHit;
	this.soundBack;
	
	this.numeroObstaculos = 0;
	this.nivel = 0;
	this.levelPlayer = levelPlayer;
    
    this.velocidadAmateur = 0;
    this.velocidadMedium = 0;
    this.velocidadExpert = 0;
    this.lapsoDibujar = 0;
    
	this.velocidad_Y =0;
	this.empezarAnimacion = false;
	this.contadorEspera = 0;
	this.lapsoCanDibujar = 0;
	
	this.scoreNivel = 0;
	
	this.nextLevel = false;
    var media;
	this.configDispositivo();
    this.loadNivel();
	this.loadSound();
}

Niveles.prototype.loadNivel = function(){
	this.configVelocidad();
	for ( var i = 0; i < this.obstaculosPantalla.length; i++) {
		var cantidadObstaculos = this.getCantidadObstaculos(); 
		this.obstaculosPantalla[i] = new ObstaculosPantalla(cantidadObstaculos);		
	}
}

Niveles.prototype.getCantidadObstaculos = function(){
	
	if(this.levelPlayer == "amateur"){
		this.numeroObstaculos = this.beginDatas(10,15,20);
	}else if(this.levelPlayer == "medium"){
		this.numeroObstaculos = this.beginDatas(15,20,25);
	}else if(this.levelPlayer== "expert"){
		this.numeroObstaculos = this.beginDatas(20,25,30);
	}
	
	return this.numeroObstaculos;
		
}

Niveles.prototype.beginDatas = function(obst_min,obst_middle,obst_max) {
	var cantObstaculos = 0;
	if(Math.random()<0.3){
		cantObstaculos = obst_min;
	}else if(Math.random()<0.6){
		cantObstaculos = obst_middle;
	}else{
		cantObstaculos = obst_max;
	}
	return cantObstaculos;
}

Niveles.prototype.configVelocidad = function() {
	
	if(this.levelPlayer == "amateur"){
		this.velocidad_Y = this.velocidadAmateur;
	}else if(this.levelPlayer == "medium"){
		this.velocidad_Y = this.velocidadMedium;
	}else if(this.levelPlayer == "expert"){
		this.velocidad_Y = this.velocidadExpert;
	}	
}

Niveles.prototype.getCantidadNiveles = function() {
	return this.obstaculosPantalla.length;
}

Niveles.prototype.loadSound = function(){
	
	this.soundHit = new Sound("hit.mp3");
	this.soundBack = new Sound("back.mp3");
    media = this.soundBack.getMedia();
    media.play();
   
	
    
}

Niveles.prototype.dibujarWithCollision = function(ctx,jugador){
    this.updatePosition();
    
    if(!this.nextLevel)
	if(this.obstaculosPantalla[this.nivel].getObstaculosFaltantes() == 0){
		
		this.scoreNivel = this.obstaculosPantalla[this.nivel].getScore();
		
		this.nivel+=1;
		
		if(this.nivel < this.obstaculosPantalla.length){
            
			this.obstaculosPantalla[this.nivel].setScore(this.scoreNivel);
			this.velocidad_Y+=0.5;
			this.nextLevel = true;            
			$ge("gameView_nextButton").innerHTML = __T("CONTINUE");
	        showMessage (__T("NEXT_LEVEL"));			
			jugador.setX(150);
			jugador.setY(50);
			this.imagenFondo();
			
		}else{
                this.imagenFondo();
                this.nivel--;
				jugador.sinVidas();
				$ge("gameView_nextButton").innerHTML = __T("START_OVER");
		        showMessage (__T("WIN"));
            
		}
	}else{
		
		if(jugador.getVidas()>0 ){
			
			if(this.lapsoCanDibujar == this.lapsoDibujar){
				this.obstaculosPantalla[this.nivel].mustDibujar(true);
				this.lapsoCanDibujar = 0;
			}			
					
			if(!jugador.getChoque()){
				this.soundHit.stop();
				this.soundHit.setCanPlay(true);
				this.obstaculosPantalla[this.nivel].dibujarObstaculos(ctx,jugador);
				this.obstaculosPantalla[this.nivel].updatePosY(this.velocidad_Y); 
				this.lapsoCanDibujar++;
			}else{
				this.soundHit.play();
				this.soundHit.setCanPlay(false);
				this.reiniciarNivel();
				showMessage (__T("CRASHED"));
                this.imagenFondo();
			}
			
		}else{
            this.imagenFondo();
			this.soundHit.play();
			this.soundHit.setCanPlay(false);
			showMessage (__T("LOOSE"));
             this.imagenFondo();
		}
	}
		
}

Niveles.prototype.reiniciarNivel = function() {
	this.obstaculosPantalla[this.nivel].reiniciarObstaculos();
}

Niveles.prototype.setNextLevel = function(state) {
	this.nextLevel = state;
}

Niveles.prototype.getNextLevel = function() {
	return this.nextLevel;
}

Niveles.prototype.updatePosition = function () {
	if(device.platform == "iOS"){
		media.getCurrentPosition(this.onSucessPosition);
	}else if(device.platform == "Android"){
        media.play();	
    }
}

Niveles.prototype.onSucessPosition  = function(position){
    if(position == -1){
        media.play();
    }
}

Niveles.prototype.configDispositivo = function(){
    if(device.platform == "iOS"){
        this.velocidadAmateur = 1;
        this.velocidadMedium = 2;
        this.velocidadExpert = 2.8;
        this.lapsoDibujar = 60;
    }else{
        if(device.platform == "Android"){
            this.velocidadAmateur = 5;
            this.velocidadMedium = 7;
            this.velocidadExpert = 8;
            this.lapsoDibujar = 20;
        }
    }
}

Niveles.prototype.imagenFondo = function(){
    var  image = new Image();
    image.src = "./images/ski_area.png";
    ctx.drawImage(image,0,0,300,500);
}

