 var composite_key1 = context.getVariable("request.header.key1");
 var composite_key2 = context.getVariable("request.header.key2");
 var composite_val2 = context.getVariable("request.header.composite_value");
 


 context.setVariable('key2_ev_policy', composite_key1 + '-' + composite_key2);

