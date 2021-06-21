// time picker 
new Picker(document.querySelector('.js-time-picker'), {
	format: 'HH:mm',
	headers: true,
	text: {
	  title: 'Pick a time',
	},
	container:document.querySelector('.container')
      });

//weather type picker
document.querySelector(".img_list").onclick = function(e) {
	// console.log(e.target);
	if(e.target.classList.contains("sunny"))
	{
		document.querySelector('#sunny').checked = true;
		
	}
	if(e.target.classList.contains("cloudy"))
	{
		document.querySelector("#cloudy").checked = true;
	}
	if(e.target.classList.contains("rainy"))
	{
		document.querySelector("#rainy").checked = true;
	}
	if(e.target.classList.contains("stormy"))
	{
		document.querySelector("#stormy").checked = true;
	}
	e.target.style.backgroundColor="#f2f2eb";
}

// buttons control
var start = document.querySelector(".group_start");
var type = document.querySelector(".group_type");
var time = document.querySelector(".time"); 
var finish = document.querySelector(".group_finish");


document.querySelectorAll("button").forEach(element=>element.onclick = function(e){
	if(e.target.className == "start")
	{
		e.target.parentElement.classList.remove("active");
		type.classList.add("active");
		
	}
	if(e.target.className == "pre")
	{
		if(e.target.parentElement.parentElement.classList.contains("group_type"))
		{
			
			e.target.parentElement.parentElement.classList.remove("active");
			start.classList.add("active");
		}
		else if(e.target.parentElement.parentElement.classList.contains("time"))
		{
			e.target.parentElement.parentElement.classList.remove("active");
			type.classList.add("active");
		}
		else if(e.target.parentElement.parentElement.classList.contains("group_finish"))
		{
			e.target.parentElement.parentElement.classList.remove("active");
			time.classList.add("active");
		}
	}
	if(e.target.className == "next"){
		// console.log(e.target.parentElement.parentElement);

		if(e.target.parentElement.parentElement.classList.contains("group_type"))
		{
			e.target.parentElement.parentElement.classList.remove("active");
			time.classList.add("active");
		}
		else if(e.target.parentElement.parentElement.classList.contains("time"))
		{
			e.target.parentElement.parentElement.classList.remove("active");
			finish.classList.add("active");
		}
		
	}
	if(e.target.className == "finish")
	{

	}
});