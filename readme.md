
# test ap1.js

## TEST TOKEN BY postman 
	
	{login(user:"reco",password:"rita")}

## result
	{
	    "Authorization": "Bearer eyJh..."
}

## then put is on HTTP HEADER in graphql playground

	{
	    "Authorization": "Bearer eyJh..."
	}

## then visit 

	{szone1}

## result

	"secret garden"

# test app.js

## TEST TOKEN BY postman 
	
		post http://localhost:3000/get-token
		body / raw & json
		{"email":"email@email.com","password":"Somebody123!"}
## result
	{
	    "success": true,
	    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI..."
	}
## then put is on HTTP HEADER in graphql playground

	{
	    "Authorization": "Bearer eyJhbGciOiJIUzI..."
	}
