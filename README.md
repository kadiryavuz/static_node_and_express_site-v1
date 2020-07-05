# static_node_and_express_site-v1
Portfolio Sample with Node, Express, Pug

npm start to start server on port 3000
- package.json file is customized with npm "start" command to start the server on port 3000
- Error handling to display friendly message to the user when requester url is not existed
  - error template seperately handled by not extending layout template with following data
    error.message
    error.status
    error.stack
  - logs out a user friendly message the error before rendering error page
- In order to complete customizing style task, seperate css is provided to provide error template's styles - layout, border, font styling etc.
  
