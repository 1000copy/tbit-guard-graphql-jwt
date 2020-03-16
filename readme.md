
# test ap1.js

## TEST TOKEN BY postman 
	
	{login(user:"reco",password:"rita")}

## header

	{
	    "Authorization": "Bearer eyJh..."
	}

## then put is on HTTP HEADER in graphql playground

	{
	    "Authorization": "Bearer eyJh..."
	}

## then visit 

	{szone1}

## extensions

 "errors": [
    {
      "message": "not login",
      "path": [
        "szone1"
      ],
      "extensions": {
        "code": "UNAUTHENTICATED",
    }

## result

	"secret garden"

