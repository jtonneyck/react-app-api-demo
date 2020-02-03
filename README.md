# API React Deploy Demo

This is the API that belongs to the demo about deploying a React app as separate client and back-end. You need to create a .env file with the following variable:
```
client=originWhereYourClientIsHostedOn
```

Note, that your application probably also has a mongodb database connected to it. The database could be hosted on Atlas. In that case, the connection string for this database would also be in your .env file, like all other environment dependend variables and all confidential information.

Note, that it's assumed that you know how to deploy backend app with Heroku. If you don't, refer to the deployment lesson of Week 6 (Project 2).