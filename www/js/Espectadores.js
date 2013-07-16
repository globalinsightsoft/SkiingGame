function Espectadores(){
	this.imageDer = new Image();
	this.imageIzq = new Image();
	this.positionX=0;
	this.positionDerx = 0;
	this.positionY=0;
	this.height = 370;
	this.width = 56;
	this.soundPeople = new Sound("aplause.mp3");
	this.loadImage();
}

Espectadores.prototype.loadImage = function(){
	this.imageDer.src = "./images/espec_Der.png";
	this.imageIzq.src = "./images/espec_Izq.png";
}

Espectadores.prototype.dibujar = function(ctx) {
	ctx.drawImage(this.imageDer,this.positionDerx,this.positionY,70,350);
	ctx.drawImage(this.imageIzq,this.positionX,this.positionY,70,350);	
}

Espectadores.prototype.setX = function(posX) {
	this.positionX = posX;
	this.positionDerx = 250;
}

Espectadores.prototype.setY = function(posY) {	
	this.positionY = posY;
}

Espectadores.prototype.updatePositionY = function(velocidad_Y) {
	this.positionY = this.positionY - velocidad_Y;
	
}

Espectadores.prototype.play = function() {
	this.soundPeople.play();
}