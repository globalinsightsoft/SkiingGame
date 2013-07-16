function Jugador(){
	this.positionx = 0;
	this.positiony = 0;
	this.lastpositionx=0;
	this.lastpositiony=0;
	this.velocidad = 0.8;
	
	this.dx = 0;
	this.dy = 0;
	
	this.image = new Image();
	this.choque = false;

	
	this.spriteJugador = null;
	
	this.vidas = 3;
	this.animar = false;
	
	this.ancho = 26;
	this.alto = 40;
    this.lapsoVelocidad = 0;
}

Jugador.prototype.dibujarImageSprite = function(ctx){
	if(!this.getChoque()){
		if(this.dx == 0){
			ctx.drawImage(this.image,70,16,26,40,this.positionx,this.positiony,this.ancho,this.alto);
			
		}else if(this.dx < 0){		
			ctx.drawImage(this.image,110,16,26,40,this.positionx,this.positiony,this.ancho,this.alto);
					
		}else if(this.dx > 0){
			
			ctx.drawImage(this.image,147,16,26,40,this.positionx,this.positiony,this.ancho,this.alto);
		}else if(this.dx  == 0){
			ctx.drawImage(this.image,70,16,20,40,this.positionx,this.positiony,this.ancho,this.alto);
		}
	}else{
		this.dibujarExpl(ctx);
	}
	
}


Jugador.prototype.dibujarImage = function(ctx){
	ctx.drawImage(this.image,70,16,20,40,this.positionx,this.positiony,40,35);	
}


Jugador.prototype.setX = function (positionX){
	this.lastpositionx = this.positionx;
	this.positionx = positionX ;	//-20
	this.dx = (this.positionx - this.lastpositionx);
	
}

Jugador.prototype.setY = function(positionY){
	if(positionY >= 180){
		this.positiony = 180;
        this.dy = (this.positiony - this.lastpositiony);
	}else{
		this.positiony = positionY ;
		this.dy = (this.positiony - this.lastpositiony);
	}
	
}
Jugador.prototype.updateSpeed = function() {
    if(this.lapsoVelocidad == 15){
        
        this.positiony += this.velocidad;
        this.lapsoVelocidad = 0;
        this.setY(this.positiony);
    }else{
        this.lapsoVelocidad++;
    }
	
	
}

Jugador.prototype.getX = function(){
	return this.positionx;
}

Jugador.prototype.getY = function(){
	return this.positiony;
}

Jugador.prototype.setImage = function (pathImage){
	this.image.src = pathImage;	
}


Jugador.prototype.mover = function(ctx,ini_posx,ini_posy,fin_posx,fin_posy){
	
	do{		
		ini_posx +=this.velocidad;
		ctx.drawImage(this.image,110,16,26,40,ini_posx,ini_posy,40,40);
	}while(ini_posx != fin_posx)
	
}


Jugador.prototype.dibujarStone = function(ctx) {
	ctx.drawImage(this.image,this.positionx,this.positiony,40,35);
}

Jugador.prototype.getAlto = function() {
	return this.alto;
}

Jugador.prototype.getAncho = function() {
	return this.ancho;
}

Jugador.prototype.dibujarExplosion = function(ctx) {
	this.dibujarExpl(ctx);
	var i = 0;
	
	this.resetPosition();
}


Jugador.prototype.getVidas = function() {
	return this.vidas;
}

Jugador.prototype.reiniciarVidas = function() {
	this.vidas = 3;
}

Jugador.prototype.sinVidas = function() {
	this.vidas =0;
}

Jugador.prototype.setAnimar = function(animado){
	this.animar = animado;
}

Jugador.prototype.getAnimar = function() {
	return this.animar;
}

Jugador.prototype.getChoque = function() {
	return this.choque;
}

Jugador.prototype.setChoque = function(choque) {
	this.choque = choque;
}


Jugador.prototype.resetPosition = function(){
	this.positionx = 150;
	this.positiony = 0;
	this.vidas--;
	this.choque = true;
	//this.image.src = "./images/sprite_ski.png";
}

Jugador.prototype.dibujarExpl = function(ctx){
    this.image.src = "images/bobola_de_nieve.png";
	ctx.drawImage(this.image,13,0,86,82,this.positionx,this.positiony,40,40);
}




