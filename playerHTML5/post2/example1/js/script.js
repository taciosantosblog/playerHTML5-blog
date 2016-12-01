
$(document).ready(function(){
	audio = document.getElementById('audio');
	time = document.getElementById('time');
	
	$("#play-pause").click(function(){
		time.max = audio.duration;
		timeInterval = setInterval("atualizaTime()", 700);
		if(audio.paused){
			audio.play();
			$("#play-pause").text("pause")
		} else {
			audio.pause();
			$("#play-pause").text("play")
		}
	});
	$("#time").change(function(){
		audio.currentTime = $("#time").val();
	});
	$("#mudo").click(function(){
		if(audio.muted){
			audio.muted = false;
			$("#mudo").removeClass("fa-volume-off").addClass("fa-volume-up");
			
		} else {
			audio.muted = true;
			$("#mudo").removeClass("fa-volume-up").addClass("fa-volume-off");
			$("#vol").val(0);
		}


	});
	$("#vol").change(function(){
		if(audio.muted)
			muted();
		
		audio.volume = $("#vol").val();
		
	});
	
	
atualizaTime = function(){
	$("#time").val(audio.currentTime);
}
});

