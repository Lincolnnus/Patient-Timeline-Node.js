GSOC 2013 Patient Timeline Viewer Using Node.js
===============================================
This project is a Node.js implementation of the Patient Timeline Viewer

-------------------------------------------
The whole system consists of three parts:


**First part** is a data warehouse implemented using project bindaas(http://imaging.cci.emory.edu/wiki/display/BDS/Introduction) developed by Emory University. The repository can be found here https://github.com/Lincolnnus/Timeline-Bindaas. Please edit the bindaas api urls in

<code> routes/index.js </code>. 

-----------------------------------

**Second part** is the timeline server which is based on node.js and the express MVC framework. In this server, we used mongodb for user authentication. The database information can be found in 

<code>settings.js</code>

To make an auto-increment user id field, another mongodb collection named counters should be created in your database before further configuration.

<code>
db.counters.insert(
   {
      _id: "uid",
      seq: 0
   }
)
</code>

-------------------------------------
The node server is dependent on the following packages

```
"express": "3.3.3",
"express-partials":"*",
"ejs": "~0.7.1",
"underscore":">=1.5.1",
"jsdom":">=0.7.0",
"mongodb": ">= 0.9.9",
"mongojs": "*",
"connect-mongo": ">= 0.1.9",
"connect": ">=1.8.5",
"connect-flash":">=0.1.1",
"jsdom":"0.7.0",
"request":"2.25.0"
```

To install these packages, simply type 

<code>npm install</code> 

in your project directory, node package manager will automatically install these packages for you.

After installing the dependent packages, you should be able to run the node server by typing:

<code> node app </code>

And you should be accessible to the node server via http://localhost:3000. You can configure the port number and other enviroment information in 

<code> app.js </code>

One major function for the node server is to upload the ccda xml documents.
You should be a valid registered user and logged in to the system in order to upload the ccda xml files.

When you're uploading the xml file, make sure that you have opened up the bindaas server and chosen the right database collection. The bindaas uploading API urls can be found in <code> routes/index.js</code>, please make sure they are all correct. 

**Be sure to make the <code>public/uploads</code> folder readable/writable.**

---------------------------------

Another very important function for the node server is to get/post data from/to the data warehouse in bindaas via http request and the bindaas API.

To access the datas, another application interface has been created for the current logged in user.

<code>/demographics.json </code> To get the demographics of the current logged in user
<code>/allergy.json</code> To get the allergies of the current logged in user
<code>/encounter.json</code>
<code>/immunization.json</code>
<code>/lab.json</code>
<code>/medication.json</code>
<code>/problem.json</code>
<code>/procedure.json</code>
<code>/vital.json</code>

** Third Part ** is the web client, which is integrated as the express.js view in this case. However, The web client can also be seperated from the node server. 

The web client data is retrieved via ajax through the above APIs. It is accessible via 

<code>/timeline</code>
Once again, you need to ensure that the bindaas server is running and the corresponding database collection is selected.
You may edit the 

<code> public/javascripts/bindaas.js</code> 

api key and the API urls in the 

<code>routes/index.js</code>

To make asyncronize api calls and efficient data updating, we used ajax for commnications between the client and the node server.The codes can be found in <code> public/javascripts/bindaas.js</code> 

To make the data updating cleaner, we used a template engine named ejs(embeddedjs) for templating. The templetes can be found in public/templates.

Besides the ajax timeline view, we also used a simple view which reads the xml file and then render the whole page directly in the views/index.ejs and views/ccda/*

For testing purposes, you may use the ccda files in the public/uploads/ folder.
