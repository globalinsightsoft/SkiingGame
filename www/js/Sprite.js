function Sprite(img){
    this.img= new Image();
    this.img.src = img;
    this.direcciones=[];
}
Sprite.prototype.setDireccion=function(direccion,coordenadas){
    this.direcciones[direccion]=coordenadas;
};

Sprite.prototype.getNumSprites=function(direccion){
    return this.direcciones[direccion].length;
};

Sprite.prototype.dibujarSki = function(ctx,positionX,positionY,ancho,alto,direccion,indice) {
	ctx.drawImage(this.img,this.direcciones[direccion],positionX,positionY,50,50);
};