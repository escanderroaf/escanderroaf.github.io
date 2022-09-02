	const tableHidden=document.getElementById('idTableHidden');
	//tableHidden.style.display = 'none';
	const butHidden=document.getElementById('idButHidden');
	
	function caption()
	{
		
		tableHidden.style.display = 'contents'
	}
	function dataType(data)
	{
		if(data==="")
		{
			return 0;
		}else if(data>=0&&data<=100)
		{
			return 1;
		}else
		{
			return 2;
		}
	}
	var textInput=document.getElementById('idTextInput');
	textInput.addEventListener("keypress",function(event)
	{
		
		const sourceInnerHTML=document.getElementById('screen');
		const sourceHIDDEN=document.getElementById('HIDDEN');
		const textInput=document.getElementById('idTextInput');
		
		//const textValue=document.getElementById('#idTextValue');
		const textValue=document.querySelector('#idTextValue');
		const textOut=document.querySelector('#idTextOut');
		const textNum=document.querySelector('#idTextNum');
		if(event.key==="Enter")
		{
			var data= textInput.value;
			var f= dataType(data);
			if(f===0)
			{
				alert("يجب ادخال رقم [0 - 100]");
			}else if(f===1)
			{
				sourceInnerHTML.innerHTML=sourceHIDDEN.textContent+textInput.value;
				textValue.value=textInput.value;
				textOut.value+=textInput.value;
				textNum.value+=textInput.value;
				butHidden.style.display='contents';
			}else
			{
				alert("خطاء الادخال رقم من 0 الى 100 فقط");
			}
		} 
	});