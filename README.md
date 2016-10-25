# Alexa-IFTTT-UK
Amazon Echo Alexa Integration with IFTTT  for UK 

![alt tag](http://puu.sh/rUyPJ/7bccb76299.png)

Since the Amazon Echo is not working with the IFTTT in the UK I made a hack to get around it by creating my own Echo Skill and AWS Service to interface with the Maker Channel of IFTTT. 

Heres an example of it working, I said "Alexa, tell trigger test this is data" to trigger an email to me in IFTTT with the data values as the body.

![alt tag](http://puu.sh/rUZx6/43bdf5fad5.png)

Alexa Skills Kit 

Create a new skill with the following parameters, you will need to come back and input your AWS ID into in the config section.

![alt tag](http://puu.sh/rUxUK/e48f2fff78.png)

AWS

Edit keys.py with your Amazon Skills Kit app ID and IFTTT key then 

![alt tag](http://puu.sh/rUxHd/8eb2e915e2.png)

![alt tag](http://puu.sh/rUxP2/839fe11b08.png)

Upload the contents of AWS Lambda Deployment Package as .zip in the code section.
