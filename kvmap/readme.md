Key Value Maps in Apigee
========================

KV Maps are typically used to store configuration parameters and not run time variables
.  Strongly recommend that using cache or BaaS for run time variables

The best example of KV Maps - store which backend system should be accessed by the API 
proxy based on the environment where this API proxy is running.  So, the destination of
 the API proxy is unchanged as it is promoted from development to test to QA to stage 
 to production environments.
 
So, what's here?
=================

This dir has an API Proxy bundle (the unzipped bundle).  I have the bundle loaded 
currently (2015.04.27) where you can issue the follow commands.

You want to read this to understand the policies better - http://community.apigee.com/articles/3384/keyvaluemap-kvmap-operations.html



Create a new key
----------------

PUT http://demo23-test.apigee.net/kv_map/key2/brandNew

Response:

        key2 = brandNew

Update the new key
------------------

PUT http://demo23-test.apigee.net/kv_map/key2/UPDATED

Response 

key2 = UPDATED
      

Update using composite key
--------------------------

PUT http://demo23-test.apigee.net/kv_map/composite

HTTP Headers:

        key1:key1_1
        key2:key2_1
        composite_value:comp_val1


Delete a key
------------

DELETE http://demo23-test.apigee.net/kv_map/key2

Response

key2 = 


