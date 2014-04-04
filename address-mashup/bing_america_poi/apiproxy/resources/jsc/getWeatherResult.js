var name='wunderGroundRequest';
var exchange = context.session[name];
	 exchange.waitForComplete();
	 if (exchange.isSuccess()) {
		var resp = exchange.getResponse();
		// check the status code
		if (resp.status==200) {
          var newResponse= new Object();
          newResponse.poi = JSON.parse(context.getVariable('response.content'));
          newResponse.weather = JSON.parse(resp.content);
		  context.setVariable('weatherResult', resp.content);
		  context.setVariable('newResponse', JSON.stringify(newResponse));
        } else {
			throw "Failed to connect to "+name+". Status code is " + resp.status;
        }
     } else {
       	throw "Failed to connect to " + name + ". Error is {" + exchange.getError() + "} ";
     }
