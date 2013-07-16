function ObstaculosPantalla(cantidadObstaculos) {
	
	this.obstaculo = new Array(cantidadObstaculos+1);
	this.createObstaculos();
	this.positionX = 0;
	this.positionY = 0;
	
	this.velocidad_Y = 0;
	this.objetosFaltantes = cantidadObstaculos;
	this.canDibujar = true;
	this.score = 0;
	this.espectadores = new Espectadores();	
}

ObstaculosPantalla.prototype.createObstaculos = function() {
	this.loadMeta();
	for ( var i = 1; i < this.obstaculo.length; i++) {
		if(Math.random() < 0.6){
			this.obstaculo[i] = new Obstaculo();
			this.obstaculo[i].setImage("./images/obstaculo_pino.png");
			this.obstaculo[i].setAlto(90);
			this.obstaculo[i].setAncho(60);
			this.obstaculo[i].setX(this.getX());
			this.obstaculo[i].setY(this.getY());
			if(i == this.objetosFaltantes-1){
				this.obstaculo[i].setDibujado(true);
			}			
			
		}else{
			this.obstaculo[i] = new Obstaculo();
			this.obstaculo[i].setImage("./images/obstaculo_stone.png");
			this.obstaculo[i].setAlto(50);
			this.obstaculo[i].setAncho(70);
			this.obstaculo[i].setX(this.getX());
			this.obstaculo[i].setY(this.getY());
			if(i == this.objetosFaltantes-1){
				this.obstaculo[i].setDibujado(true);
			}
		}
	}
}

ObstaculosPantalla.prototype.loadMeta = function() {
	this.obstaculo[0] = new Obstaculo();
	this.obstaculo[0].setIsObstaculo(false);
	this.obstaculo[0].setImage("./images/meta.png");
	this.obstaculo[0].setAlto(40);
	this.obstaculo[0].setAncho(380);
	this.obstaculo[0].setX(0);
	this.obstaculo[0].setY(this.getY());
		
}


ObstaculosPantalla.prototype.dibujarObstaculos = function(ctx,jugador) {		
	jugador.updateSpeed();
	for (var i = this.obstaculo.length-1; i >= 0; i--) {
				
		if(this.obstaculo[i].getDibujado()){
					
			if(this.obstaculo[i].getIsObstaculo()){
                console.log(this.velocidad_Y);
				this.obstaculo[i].updatePositionY(this.velocidad_Y);
				this.obstaculo[i].dibujar(ctx);
				
				if( this.obstaculo[i].getY() < (jugador.getY()+ jugador.getAlto()) && (jugador.getY()+ jugador.getAlto()) < (this.obstaculo[i].getY()+this.obstaculo[i].getAlto()) ){ 
					
					if(this.obstaculo[i].getX() < jugador.getX() && jugador.getX() < (this.obstaculo[i].getX()+this.obstaculo[i].getAncho())){
						jugador.dibujarExplosion (ctx);		
					}else if( (this.obstaculo[i].getX() < (jugador.getX()+jugador.getAncho())) && ((jugador.getX()+jugador.getAncho()) < (this.obstaculo[i].getX()+this.obstaculo[i].getAncho())) ){
						jugador.dibujarExplosion (ctx);	
					}			
								
				}else if( this.obstaculo[i].getY() < (jugador.getY()) && (jugador.getY()) < (this.obstaculo[i].getY()+this.obstaculo[i].getAlto()) ){ 
					if(this.obstaculo[i].getX() < jugador.getX() && jugador.getX() < (this.obstaculo[i].getX()+this.obstaculo[i].getAncho())){
						jugador.dibujarExplosion (ctx);				
					}else if( (this.obstaculo[i].getX() < (jugador.getX()+jugador.getAncho())) && ((jugador.getX()+jugador.getAncho()) < (this.obstaculo[i].getX()+this.obstaculo[i].getAncho())) ){
						jugador.dibujarExplosion (ctx);	
					}								
				}
			}else{
				if(i==0){
					this.obstaculo[i].updatePositionY(this.velocidad_Y);
					this.obstaculo[i].dibujar(ctx);
					this.espectadores.setX(0);
					this.espectadores.setY(this.obstaculo[i].getY()+50);
					this.espectadores.dibujar(ctx);
					if(jugador.getY()>this.obstaculo[i].getY()){
						this.espectadores.play();
					}
				}
			}
			
		}else		
			if(this.canDibujar){
				
				this.obstaculo[i].setDibujado(this.canDibujar);
				if(0.4<Math.random()<0.7&& this.obstaculo[i].getIsObstaculo()){
					this.obstaculo[i].setX(jugador.getX());
					
				}
				
				this.canDibujar = false;	 		
		}
		
		if( (this.obstaculo[i].getY()+this.obstaculo[i].getAlto()) < 0){
 			this.objetosFaltantes--;
 			this.obstaculo.pop();
 			this.score+=100;
 			
 		}
		
	}
	
}


ObstaculosPantalla.prototype.getX = function() {
	return Math.floor((Math.random()*(250-(50-1)))+50);
}

ObstaculosPantalla.prototype.getY = function() {
	return Math.floor((Math.random()*(750-(700-1)))+700);
}

ObstaculosPantalla.prototype.setX = function(posX) {
	this.positionX = posX;
}

ObstaculosPantalla.prototype.setY = function(posY) {
	this.positionY = posY;
}		
	
ObstaculosPantalla.prototype.updatePosY = function(velo_Y){
	this.velocidad_Y = velo_Y;
}

ObstaculosPantalla.prototype.mustDibujar = function(booldibu) {
	this.canDibujar = booldibu;
}

ObstaculosPantalla.prototype.getObstaculosFaltantes = function() {
	return this.obstaculo.length;
}

ObstaculosPantalla.prototype.getScore = function() {
	return this.score;
}

ObstaculosPantalla.prototype.setScore = function(lastScore) {
	this.score = lastScore;
}

ObstaculosPantalla.prototype.reiniciarObstaculos = function() {
	this.createObstaculos();
}

ObstaculosPantalla.prototype.dibujarEspectadores= function(ctx) {
	
}



