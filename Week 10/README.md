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

A database is an organized collection of structured information, or data, typically stored electronically in a computer system. A database is usually controlled by a database management system (DBMS). The data can then be easily accessed, managed, modified, updated, controlled, and organized. Most databases use <b>structured query language</b> (SQL) for writing and querying data. SQL is a programming language used by nearly all relational databases to query, manipulate, and define data, and to provide access control.

You can see [here](https://www.oracle.com/database/what-is-database/) types of databases.

* SQLite
SQLite is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine. SQLite is the most used database engine in the world. SQLite is built into all mobile phones and most computers and comes bundled inside countless other applications that people use every day.

* Schema Creation

Every SQLite database contains a single "schema table" that stores the schema for that database. The schema for a database is a description of all of the other tables, indexes, triggers, and views that are contained within the database. The schema table looks like this:

```sql
CREATE TABLE sqlite_schema(
  type text,
  name text,
  tbl_name text,
  rootpage integer,
  sql text
);
```
The schema table can always be referenced using the name "sqlite_schema", especially if qualifed by the schema name like "main.sqlite_schema" or "temp.sqlite_schema".

* Tables

Tables are used to organize the most closely related data together. A very basic example of a table could be a dataset about people that contains a bunch of people’s names, job titles, manager numbers, hiring dates, salaries, and commissions.

Columns are used to differentiate the information we have on a single observable entity. If a Table, as mentioned above, contains people’s names, job titles, manager numbers, hiring dates, salaries, and commissions, then that table will have 6 columns plus a Primary Key column that we will discuss in later sections.

Rows of a table represent the number of observable entities we are looking at. To put it simply, if the people table has 3 rows, it means it has the data of 3 different people. Each row represents an individual person and the columns will display their respective information.

* Queries

A query is a request for data or information from a database table or combination of tables. This data may be generated as results returned by Structured Query Language (SQL) or as pictorials, graphs or complex results. 

* Database Connection

In order for you application whether a web application, native or mobile to utilize the data stored in a database it must be able to connect and communicate with it. the SQL has many difference from programming languages. 

Connection Pool: is a cache of db connections maintained so that the connecitons can be reused when future request to the database are required. 

Cursor: is a control strucutre that enables traversal over the records in a db. Akin to the programming language concept of iterator. The cursor can only reference one row at a time, but can move to other rows of the results set as needed. 

Methods of communicating: Embedded SQL, Stored Procedures, Driver / Provider (CLI) 