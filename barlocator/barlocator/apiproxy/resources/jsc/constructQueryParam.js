var address="address="+context.getVariable("request.queryparam.address")+"+"+context.getVariable("request.queryparam.city")+"+"+context.getVariable("request.queryparam.zip");
address+="&sensor=false";
context.setVariable("GeoCode.queryparams",address);
