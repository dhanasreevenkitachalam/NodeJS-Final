# Project Name- Restaurant Management System Backend

	This is a NodeJS as backend application and MongoDB for data storage and access.

## Why?
	This backend application was developed as a part of Full Stack Specilization.
	This application provide REST API services for React Frontend.
	Various Resources are exposed using different endpoints.
 
## Role 

	The entire Backend course consists of 4 modules. Each module consists of 1 week of study.
	At the end of each week, we have to submit the assignment based on the topic covered in that particular week
    Each assignment consists of  3 or 4 tasks to be completed that were part of restaurant Backend Application.
	Once an assignment is submitted , it is reviewed by peers and graded by the review criteria.
	We have to get a grade of 80% or above to move on to next module.



	
## Software Requirements for running the Web Application

* Node

	To install Node on your machine, go to https://nodejs.org and click on the Download button. 
	Depending on your computer's platform (Windows, MacOS or Linux), the appropriate installation package is downloaded.
	Follow along the instructions to install Node on your machine.

* Text Editor
	Please install visual studio code 

* Postman
	http://getpostman.com
	Please use this website to download and install postman app for specific OS

* Downloading and Installing MongoDB

	1. Go to http://www.mongodb.org,click on try free
	2. Go to On premises,select MongoDB Community server
	3. Download the mongoDB
	4. The below website gives installation steps in detail
		https://docs.mongodb.com/manual/installation/
	5.Click on Install MongoDb Community Edition
	6.Create a folder named mongodb on your computer and create a subfolder under it named data.
	7. In the command prompt,Move to the mongodb folder and then start the MongoDB server by typing the following at the prompt:

    			 mongod --dbpath=data --bind_ip 127.0.0.1

	8. Open another command window and then type the following at the command prompt to start the mongo REPL shell:

		mongo

	9. The Mongo REPL shell will start running and give you a prompt to issue commands to the MongoDB server. At the Mongo REPL prompt,
 	   	 db
	   	  use conFusion
	   	  db
    		 db.help() 
	Please check that database name 'conFusion' matches with name specified in the config.js file in NodeJS folder.

	10. Please keep mongoDB running throughout the entire application.

* Obtaining the source Code from the GIT Repository and setting up backend 


	1. Clone Frontend folder and Backend folder from  GitHub 


	2. Open Backend folder in visual studio code, to install node_modules, 
	go to terminal,open a terminal,make sure that it is the backend folder and type command 
	
	npm install

    3. navigate to cors.js inside routes folder in NodeJS ,Updating cors.js

	const whitelist = ['http://localhost:3000', 'https://localhost:3443','http://Dhanasree-venkitachalam1:3001',"http://localhost:3001" ];
 
	eg : Instead of http://Dhanasree-venkitachalam1:3001, replace it with your systems name  'http://<Your Computer's Name>:3001'


## Configuring the HTTPS Server

*  Open Backend folder in visual studio code.Using a terminal tab ,open  a new terminal.To start the NodeJS application,type the below command in the terminal

	npm start

* if MongoDB is not up and running,follow below steps

	1. In the second command prompt,Move to the mongodb folder and then start the MongoDB server by typing the following at the prompt:
  		   mongod --dbpath=data --bind_ip 127.0.0.1
	2. Open third command window and then type the following at the command prompt to start the mongo REPL shell:
		 mongo



* Adjusting Postman to use self signed Certificate

	In Postman, since we using self signed certificate, postname wont let you use self signed certificate.
	For nodeJs application to work, please go to settings on Postman
	Turn Off SSL certificate verification

* Adjusting Browser settings for secure communication
	1. Go to https://localhost:3443
	2. The Page displays the message ,'Your connection isnt private'
	3. Click on 'Advanced' Button
	4.Click on the link 'Continue to localhost'
	5. On the localhost page, IT will display the message "Express, Welcome to Express"

## Setting up Admin account

* Inorder use the application ,we need an admin account. For registering admin users, follow below steps:

Make sure NODEJS application and mongoDB is up and running

* Open Backend folder in visual studio code.Using a terminal tab ,open  a new terminal.To start the NodeJS application,type the below command in the terminal

	npm start

* if MongoDB is not up and running,follow below steps

	* In the second command prompt,Move to the mongodb folder and then start the MongoDB server by typing the following at the prompt:
  		   mongod --dbpath=data --bind_ip 127.0.0.1
	* Open third command window and then type the following at the command prompt to start the mongo REPL shell:
		 mongo


* creating admin account


    1. Go to visual studio code,File ->open Folder, select the folder conFusionServer inside NodeJS application
	2. Go to Terminal tab inside visual Studio code, once we are inside conFusionServer folder, type command  
       		 npm start
                		this will start the nodeJS backend.. 
    3. Please make up mongoDb is up and running as well
	4. Go to Postman
        .	We need to send a POST request to, localhost:3000/users/signup.Select 'POST' from  the droplist and add 
                	  localhost:3000/users/signup
                      in the request URL
	5. Go to Body of the POST request.Chose 'raw' and JSON from dropdownlist
                    6.Add this javascript object to text editor
       			  {
    		     "username:"admin",
     		     "password":"password"
    		      "admin":true
 		         }



Once you send this request to backend, the server will respond with a registration successful.

## Adding Dishes,Promotions and Leaders into the Database through sending POST request from POSTMAN.

RESTAPI receives these requests and then inserts details into corresponding tables in Database. Once inserted into Database, this is used by Front end Application for rendering Views.

1.  Make sure NodeJS backend and MongoDB is up and running
2.  we need to send a POST request to localhost:3000/users/login.For that go to POstman, select POST from dropdownlist and request URL is

		localhost:3000/users/login

3. Go to Body of the Post request.
	.Chose 'raw' and JSON from dropdownlist
    	    .Add this javascript object to text editor
    	     {
     	    "username:"admin",
      	    "password":"password"
 
      	    }

4. Once successfully loggedin , server sends back a token
5. copy the token, received  from the server without the quotes.
6. For every PUT,POST AND DELETE request when need to add this token in the header

7. TO ADD TOKEN

	--Go to Headers section , 
	--add Key , inside key type, Authorization   
	--inside value tab , we should add the token
	bearer [token you copied without quotes]

	example:
	Key
		Authorization
	Value
		bearer gvdshsvdbgjsbdfjisbdfjkdnfkjnkewlbhgio4yrg8eyr89uiwnjwdhwsjdhj

### ADD PROMOTIONS

1. We need to send a Post request and request URL is
	 localhost:3000/promotions
2. add the below javascript code to the body of the post message

	    {
   	   "id": 0,
   	   "name": "Weekend Grand Buffet",
  	    "image": "images/buffet.png",
  	    "label": "New",
   	   "price": "19.99",
    	  "featured": true,
    	  "description": "Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. 
	Free flowing bubbly and soft drinks. All for just $19.99 per person "
	    }

3. Go to Headers section , 
4. add Key , inside key type, Authorization   
5. inside value tab , we should add the token
	bearer [token you copied without quotes]

	example:
	Key
	Authorization
	Value
	bearer gvdshsvdbgjsbdfjisbdfjkdnfkjnkewlbhgio4yrg8eyr89uiwnjwdhwsjdhj
	--Now send the POST request to server


### ADD DISHES

1. To send a Post request and request URL is  localhost:3000/dishes
2. add the below javascript code to the body of the post message

	      {
	      "id": 0,
	      "name": "Uthappizza",
	      "image": "images/uthappizza.png",
  	    "category": "mains",
   	   "label": "Hot",
   	   "price": "4.99",
 	     "featured": true,
 	     "description": "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes,
	 Vidalia onion, Guntur chillies and Buffalo Paneer."
	     }

3. Go to Headers section , 
4. add Key , inside key type, Authorization   
5. inside value tab , we should add the token
	bearer [token you copied without quotes]

	example:
	Key
	Authorization
	Value
	bearer gvdshsvdbgjsbdfjisbdfjkdnfkjnkewlbhgio4yrg8eyr89uiwnjwdhwsjdhj

6. Send post request to server...server will reply successful
	
	--Repeat the above steps for each of the dishes
	    {
	      "id": 1,
	      "name": "Zucchipakoda",
	      "image": "images/zucchipakoda.png",
	      "category": "appetizer",
	      "label": "",
   	   "price": "1.99",
   	   "featured": false,
    	  "description": "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"
 	   }
	 {
   	   "id": 2,
     	 "name": "Vadonut",
    	  "image": "images/vadonut.png",
    	  "category": "appetizer",
    	  "label": "New",
     	 "price": "1.99",
   	   "featured": false,
    	  "description": "A quintessential ConFusion experience, is it a vada or is it a donut?"
	    },
	    {
   	   "id": 3,
   	   "name": "ElaiCheese Cake",
    	  "image": "images/elaicheesecake.png",
     	 "category": "dessert",
    	  "label": "",
    	  "price": "2.99",
   	   "featured": false,
    	  "description": "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"
	    }

    
### ADD Leaders

1. To send a Post request to localhost:3000/leaders
2. add the below javascript code to the body of the post message

	    {
   	   "id": 0,
     	 "name": "Peter Pan",
     	 "image": "images/alberto.png",
     	 "designation": "Chief Epicurious Officer",
    	  "abbr": "CEO",
     	 "featured": false,
     	 "description": "Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey 
	to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with 
	whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known.
	 He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."
	    }
3. Go to Headers section , 
4. add Key , inside key type, Authorization   
5. inside value tab , we should add the token
	bearer [token you copied without quotes]

	example:
	Key
	Authorization
	Value
	bearer gvdshsvdbgjsbdfjisbdfjkdnfkjnkewlbhgio4yrg8eyr89uiwnjwdhwsjdhj

	Send post request to server...server will reply successful



	Now repeast the above steps, for each javascript objects mentioned below... 
	     {
	      "id": 1,
 	     "name": "Dhanasekaran Witherspoon",
    	  "image": "images/alberto.png",
 	     "designation": "Chief Food Officer",
 	     "abbr": "CFO",
    	  "featured": false,
      	"description": "Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce.
	 His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. 
	As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"
	    }

  	  {
    	  "id": 2,
   	   "name": "Agumbe Tang",
    	  "image": "images/alberto.png",
     	 "designation": "Chief Taste Officer",
     	 "abbr": "CTO",
     	 "featured": false,
     	 "description": "Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. 
	Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick."
	    }

	    {
 	     "id": 3,
  	    "name": "Alberto Somayya",
    	  "image": "images/alberto.png",
    	  "designation": "Executive Chef",
     	 "abbr": "EC",
   	   "featured": true,
   	   "description": "Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, 
	he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!"
	    }




## Registering end user to view list of users favorites dishes, add a favorite dish and delete a favorite dish 

1. Inorder to view the functionality for the end client,first we need to register a user with backend node application
           If NODEJS application and mongoDB not running
2. Go to visual studio code,File ->open Folder, select the folder NodeJS-Final.
3. Go to Terminal tab inside visual Studio code, once we are inside  folder, type command  
  	 	     npm start
        this will start the nodeJS backend.. 
        Please make sure mongoDb is up and running as well
4. Once they are up and running
	*  Go to Postman
    * We need to send a Post request , and request URL is localhost:3000/users/signup
	* Go to Body of the Post request.
	* Chose 'raw' and JSON from dropdownlist
                     -- Add this javascript object to text editor
	         {
 	        "username:" your name",
 	         "password":"password"
 	         }

	For eg : the credentials i used was 
	{
	"username":"dhanasree",
	"password":"password"
	}
5. Once you send this request to backend, the server will respond with a registration successful..

Now the backend is ready to serve response to front end.




