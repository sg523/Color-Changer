function callMe()
	{
		v = mytext1.value
		colours.innerHTML+="<option value="+v+">"+v+"</option>"
		mytext1.value=""
	}
	function dochange1()
	{
		mywebpage.bgColor=colours.value
	}
	function doclear()
	{
		colours.innerHTML=""
		mywebpage.bgColor="white"
		mytext1.value=""
	}
