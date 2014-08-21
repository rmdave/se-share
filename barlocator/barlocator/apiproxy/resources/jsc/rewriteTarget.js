try {

	// change path to backend service
	var latitude = context.getVariable("lat");
	var longitude=context.getVariable("lng");
	var pkg=context.getVariable("request.queryparam.package");
	var team=context.getVariable("request.queryparam.team");
	var cityteam=context.getVariable("request.queryparam.city-team");
	var contenttype=context.getVariable("request.header.Accept");

	if(latitude==null)
	{
		latitude="33.9187010";
	}
	if(longitude==null)
	{
		longitude="-118.3883010";
	}
	var distance=context.getVariable("request.queryparam.radius");
	if(distance==null){
		distance="1000";
	}
	var url= "http://api.usergrid.com/rmd_trainer/sandbox/bars?ql=";
	url +=  "location%20within%20"+distance+"%20of%20"+ latitude + "%2C"+ longitude;
	if(pkg!=null){
		url+= " and "+"packages.sport='"+pkg+ "'";
	}
	if(team!=null){
		url+=" and "+"extras.team='"+team+ "'";
	}
	if(cityteam!=null){
		url+=" and "+"extras.city='"+cityteam+ "'";
	}
    // url+= "location%20within%20"+distance+"%20of%20"+ latitude + "%2C"+ longitude;

	context.setVariable("target.url",url);

	context.setVariable("accept.contenttype",contenttype);
	context.setVariable("request.header.Accept","application/json");
} catch(err){

	context.setVariable("errorResult", "true");
	context.setVariable("errorContent", err);
}