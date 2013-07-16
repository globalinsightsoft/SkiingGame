function Sound(nameFile){
	
	this.nameFile = nameFile;
	this.pathLocation = window.location.pathname;
	this.sound;
	this.stateLoops = true;
	this.canPlay = true;
	this.statusSong ;
	this.position = 0;
  	this.load();
}

Sound.prototype.load = function() {
	var fileLocation = this.getPathPhoneGap()+"sounds/"+this.nameFile;
    this.sound = new Media(fileLocation,this.onSoundSucess,this.onSoundError,this.onSoundStatus);
    
}


Sound.prototype.onSoundSucess = function() {}

Sound.prototype.onSoundError = function(e){}

Sound.prototype.onSoundStatus = function(statusCode){
    if(statusCode == 4){
        this.stateLoops = true;
    }
}

Sound.prototype.play = function(){
   if(this.sound){
		if(this.canPlay){
			this.sound.play();
		}
			
	}else{}
}

Sound.prototype.pause = function(){
	if(this.sound){
		this.sound.pause();
	}
}

Sound.prototype.setLoop = function(state){
	this.stateLoops = state;
}

Sound.prototype.getLoop = function() {
	return this.stateLoops;
}

Sound.prototype.getPathPhoneGap = function(){
    var phoneGapPath ;
    if(device.platform == "iOS"){
        phoneGapPath = "/"
    }else if(device.platform == "Android")
    {
        phoneGapPath = this.pathLocation.substring(0,this.pathLocation.lastIndexOf('/')+1);
    }        
	return phoneGapPath;
}

Sound.prototype.setCanPlay = function(state) {
	this.canPlay = state;
}
Sound.prototype.getCanPlay = function(){
    return this.canPlay;
}

Sound.prototype.stop = function(){
	if(this.sound){
		if(!this.canPlay){
			this.sound.stop();
		}		
	}
}


Sound.prototype.updatePosition = function () {
	this.sound.getCurrentPosition(this.onSucessPosition);
}

Sound.prototype.onSucessPosition  = function(position){
    if(position == -1){
        this.sound.play();
    }
}


//crearme lo que es un objeto

Sound.prototype.getPathSong = function(){
    var path = this.getPathPhoneGap()+"sounds/";    
    return path;
}

Sound.prototype.getMedia = function(){
    return this.sound;
}

