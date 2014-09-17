Conditional Flow
================


Simple policy to show how conditional flows can be used to look at JSON data and execute specific policies within a API processing pipeline.

One flow will return 401 and the other 200 OK.

401 return
==========

Request
-------
POST /conditional_flow HTTP/1.1
Host: <your apigee org>-<environment>.apigee.net
Content-Type: application/json
Cache-Control: no-cache

{ "action" : "janet" } 


Response
--------
     
     hi, you sent in |jsonData=|janet|
     

200 OK return
==========

Request
-------
POST /conditional_flow HTTP/1.1
Host: <your apigee org>-<environment>.apigee.net
Content-Type: application/json
Cache-Control: no-cache

{ "action" : "jackson" } 


Response
--------

Yay! Yay!  Found Action Jackson
          Carl Weathers rocks - http://www.imdb.com/title/tt0094612/
          


