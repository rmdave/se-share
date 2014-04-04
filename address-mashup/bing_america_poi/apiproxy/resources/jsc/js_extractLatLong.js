var resp=context.getVariable('ipLookUpResponse.content');
var elements=resp.split(';');

context.setVariable('zip', elements[7]);
context.setVariable('lat', elements[8]);
context.setVariable('long',elements[9]);