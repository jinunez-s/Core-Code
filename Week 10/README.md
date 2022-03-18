<div align="center">
  <img src="https://uploads-ssl.webflow.com/5eb2f56932c3562feab232e3/5f73550d00249e7e96c9f3de_Logo.png">
</div>
<h2 align="center">Software Development from scratch 🤖</h2>

## Topics
### Endpoint Routes

An Endpoint is a remote computing device that communicates back and forth with a network to whcih it is connected. Example include: Desktops, Laptops, Smartphones, Tablets, Servers, Worksatations, IOT devices. Enpoints are functions available through the API, this can be things like retrieving the API index, updating a post, or deleting a comment. Endpoints perform a specific function, taking some number of parameters and return data to the client. 

A route is the "name" you use to access endpoints, used in the URL. A route can have multiple endpoints associated with it, and which is used dependes on the HTTP verb. 

In this [link](https://medium.com/@wlodarczyk_j/tutorial-handling-endpoints-in-node-js-and-express-ce26cb550c28) we can see how to handle endpoints in nodejs and Express, in summarize the frist step is to set basic configuration.

Here are some example of endpoints where can handle different HTTP request.
```javascript
app.get('/', (err, res) => {
	res.status(200);
	res.json({ working: true });
	res.end();
});

app.post('/', (err, res) => {
	res.status(200);
	res.send('working');
	res.end();
});

app.put('/', (err, res) => {
	res.status(200);
	res.send('working');
	res.end();
});
```
### Request Handlers

The endpoint handler is a watcher and verifier of all the incoming request to the server. It runs important security validations on every incoming request for any endpoint. Some example are: Authentications Check, Captcha Token Check, JWT Verify.

If the reguests is processed by the server it will have status 200, otherwise a 400/403 forbidden error is thrown based on the validations results to the client. 

Example of a request handler where it is used to obtain different validations and send a response with the specific request. 
```javascript
const EndpointHandler = async(endpoint, validations)=>{
    return async(req,res) =>{
     
     //Only Authenticated Users
     if(validations.onlyAuthenticated){
     const response = await checkAuth(req)
     if(response.status !== 200)
     return res.status(403).json({message: 'Unauthenticated User"})
    }

     //Cat Lovers Only Allowed
     if(validations.onlyCatLovers)
     {
      const response = await CheckCatLovers(req.cookies)
      if(response.status !== 200)
      return res.status(403).json({message:"You are not a cat lover"})
     }
     // Banned Users Check
     if(validations.bannedUsersNotAllowed){
         const response = await checkUserisBanned(req.cookies);
         if(response.status !== 200)
         return res.status(403).json({message:"You have been banned. Contact Group Admin"});
}
    }
}
export default EndpointHandler
```

### Database basics



* SQLite

* Schema Creation

* Tables

Tables are used to organize the most closely related data together. A very basic example of a table could be a dataset about people that contains a bunch of people’s names, job titles, manager numbers, hiring dates, salaries, and commissions.

Columns are used to differentiate the information we have on a single observable entity. If a Table, as mentioned above, contains people’s names, job titles, manager numbers, hiring dates, salaries, and commissions, then that table will have 6 columns plus a Primary Key column that we will discuss in later sections.

Rows of a table represent the number of observable entities we are looking at. To put it simply, if the people table has 3 rows, it means it has the data of 3 different people. Each row represents an individual person and the columns will display their respective information.

* Queries

* Database Connection

