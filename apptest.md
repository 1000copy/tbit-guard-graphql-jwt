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

