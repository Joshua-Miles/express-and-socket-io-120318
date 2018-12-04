# Real Time Apps with Express and Socket.io

## Vocabulary

* Client/Server

* HTTP/WS

* Express

* `app`

  * `.get`

* The DOM

  * `document.addEventListener`

* Socket.io

* `socket / io`

  * `.emit`

  * `.on`

  * `respond`


## Outline

* Introduction
  * The internet is made up of 
    * Clients
    * Servers
    * Requests
    * Responses
    * **Emissions**
  * Intro to JavaScript
    * Loosly typed
    * Functional
    * Node.js lets us run JavaScript on the server
  * The Map
    * Create a server using Node.js
    * Serve an application from our server using HTTP
    * Listen for user input in the app
    * Send user input via WS back to the server
    * Propogate user input to other clients
* Responding to HTTP requests
  * Express 
    * is a tool which helps us respond to HTTP requests
* Responding to User Input
  * The DOM
    * 10.185.5.75
    * is a tool which helps us respond to user input
    * CDN Link for Character include: https://drive.google.com/a/flatironschool.com/uc?authuser=1&id=1GLopWUMqawyaCfWxvIpiGn9_BZEZt_WV&export=download
* Responding to WS Requests
  * Socket.io
    * is a tool which helps us respond to (and make) WS requests

    * Installing Socket.io on the server is tricky: 

      ```
      var express = require('express');
      var app = express()
      var server = require('http').Server(app);
      var io = require('socket.io')(server);
      ```

    * CDN Link for client: https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.js
* Finale