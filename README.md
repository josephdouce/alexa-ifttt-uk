# Alexa-IFTTT-UK
Amazon Echo Alexa Integration with IFTTT  for UK 

Since the Amazon Echo is not working with the IFTTT in the UK I made a hack to get around it by creating my own Echo Skill and AWS Service to interface with the Maker Channel of IFTTT.

Currently it only sends the trigger command but the structure is there already to add the 3 data values (it actually already sends them they are just static data1, data2, data3)

Alexa Skills Kit 

Create a new skill with the following parameters, you will need to come back and input your AWS ID into in the config section.

![alt tag](http://puu.sh/rUxUK/e48f2fff78.png)

AWS

Edit keys.py with your Amazon Skills Kit app ID and IFTTT key then 

![alt tag](http://puu.sh/rUxHd/8eb2e915e2.png)

![alt tag](http://puu.sh/rUxP2/839fe11b08.png)

Upload the contents of AWS Lambda Deployment Package as .zip in the code section.
