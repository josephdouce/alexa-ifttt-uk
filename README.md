# Alexa-IFTTT-UK
## Amazon Echo Alexa Integration with IFTTT  for UK 

![alt tag](http://puu.sh/rUyPJ/7bccb76299.png)

Since the Amazon Echo is not working with the IFTTT in the UK I made a hack to get around it by creating my own Echo Skill and AWS Service to interface with the Maker Channel of IFTTT. 

IFTTT Maker accepts POST in the form

![alt tag](http://puu.sh/rV5bD/36787206bb.png)

Heres an example of it working, I said "Alexa, tell trigger test this is data" to trigger an email to me in IFTTT with the data values as the body.

![alt tag](http://puu.sh/rUZx6/43bdf5fad5.png)

### The UI 

```
Command >> Launch Maker 
  Response >> Welcome to if this then that, please tell me the trigger you would like to activate.

Command >> {trigger} {dataone} {datatwo} {datathree} using Maker
 Response >> I have triggered {trigger} or 
 or
 Response >> I'm not sure what you would like to do, please try again
 
  Reprompt >> Is that everything, say stop to end.
    Command >> {trigger} 
     Response >> I have triggered {trigger}
     or
     Response >> I'm not sure what you would like to do, please try again
       Reprompt >> Is that everything, say stop to end.
         Command >> Stop
          Response >> Thanks for trying IFTTT, have a nice day.
```

### Alexa Skills Kit 

Create a new skill with the following parameters, you will need to come back and input your AWS ID into in the config section.

![alt tag](http://puu.sh/rUZCd/7a1cdc5a4a.png)

### AWS

Edit keys.py with your Amazon Skills Kit app ID and IFTTT key then 

![alt tag](http://puu.sh/rUxHd/8eb2e915e2.png)

![alt tag](http://puu.sh/rUxP2/839fe11b08.png)

Upload the contents of AWS Lambda Deployment Package as .zip in the code section.
