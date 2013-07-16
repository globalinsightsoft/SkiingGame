
function Obstaculo(){
	this.positionx = 0;
	this.positiony = 0;
	this.alto = 50;
	this.ancho =70;
	this.image = new Image();
	this.amDibujar = false;
	this.isObstaculo = true;
}

Obstaculo.prototype.dibujar = function(ctx) {
	
	ctx.drawImage(this.image,this.positionx,this.positiony,this.ancho,this.alto);	
}
Obstaculo.prototype.dibujarArbol = function() {
	ctx.drawImage(this.image,100,20,220,200,this.positionx,this.positiony,this.ancho,this.alto);
}

Obstaculo.prototype.dibujarPeople = function(ctx) {}

Obstaculo.prototype.setX = function(positionX){
	this.positionx = positionX;
}

Obstaculo.prototype.setY = function(positionY){
	this.positiony = positionY;
}

Obstaculo.prototype.getX = function(){
	return this.positionx;
}

Obstaculo.prototype.getY = function(){
	return this.positiony;
}
Obstaculo.prototype.setImage = function(pathImagen){
	this.image.src = pathImagen;	
}

Obstaculo.prototype.setAlto = function(alto){
	this.alto = alto;
}

Obstaculo.prototype.setAncho = function(ancho){
	this.ancho = ancho;
}

Obstaculo.prototype.updatePositionY = function(velocidad_Y) {
	this.positiony = this.positiony - velocidad_Y;	
}

Obstaculo.prototype.getDibujado = function() {
	return this.amDibujar;
}

Obstaculo.prototype.setDibujado = function(dibujarme){
	this.amDibujar = dibujarme;
}

Obstaculo.prototype.getAlto = function(){
	return this.alto;
}

Obstaculo.prototype.getAncho = function() {
	return this.ancho;
}

Obstaculo.prototype.setIsObstaculo = function(obstaculo) {
	this.isObstaculo = obstaculo;
}

Obstaculo.prototype.getIsObstaculo = function() {
	return this.isObstaculo;
}