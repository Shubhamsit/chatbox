### HTTP (HYPER TEXT TRANSFER PROTOCOL)

```

1. HEADERS ->  METADATA (KEY VALUE PAIRS)
  headers req, res dono me milenge

  2. types of headers  
  
#1.  request headers  -> from client
#2  response headers => fromserver
#3 representation headers => encoding /compression

#4 payload header => data

```

### most common Headers 
```
#1. Accept : application/json ( ye batata hai ki sever kon sa data accept karega )

#2. User : Agent ( ye batata hai kon si application se data aaaay h like postman, borowser info etc )

#3 Authorisation : Bearer jwttoken   ( for authorisation token)

#4 Content: Type ( kon si type ka data bhej rahe ho like image, pdf etc)

#5 cookies:

#6 cache: Control 

```

### HTTP METHODS  (BASIC SET OF OPERATION THAT CAN PE USED TO INTERACT WITH SERVER)

```
GET: retrieve a resource 
HEAD: No message body (response headers only)
OPTIONS: what operations are avilable 
TRACE: for testing (get some data)
DELETE: remove a resource 
PUT: replace a resource (whole)
PATCH: change a particular part of resource 
POST: interact with resource (basically add)

```



### HTTP STATUS CODE 

```
. 1** -> INFORMATION

. 2** -> SUCCESS

. 3** -> REDIRECTION

. 4** -> CLIENT ERROR 

. 5** -> SERVER ERROR

```



```
100 -> CONTINUE
102 -> PROCESING
200-> OK
201 -> CREATED 
202-> ACCEPTED 
307-> TEMP REDIRECT
308 -> PERMANENT REDIRECT

400 -> BAD REQUEST
401->UNAUTHORISED 
402 -> PAYMENT REQUIRED
404 -> NOT FOUND

500-> INTERNAL SERVER ERROR 
504-> GATEWAY TIMEOUT



````