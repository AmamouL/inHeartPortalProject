# inHeartPortalProject
inHEART Portal is a secured web platform for the management of customers’ orders and the transfer of data between inHEART and its customers. 
inHEART Portal is compatible with the following web browsers : 
- Google Chrome 87 and later, 
- Microsoft Edge 88 and later

The project ensures that bellow requirements are respected:

- REQ1: A home page allows to log in Portal by entering a username and a password
- REQ2: User is warned on the login page when he uses an unsupported browser
- REQ3: After six repeated failed password attempts, user ID is locked out for 30 minutes
- REQ4: Website footer notifies the use of cookie on Portal
- REQ5: Software version is displayed in the footer
- REQ6: Footer contains Copyright, a link to licences and Terms of Use (available if user is logged in)

###  Testing Steps

1. Clone the repo to a local directory

   git clone https://github.com/<your-username>/cypress-example-kitchensink.git

   cd into the cloned repo: cd ..kkkk

2. install dependencies

   npm install

   npm install --save-dev  rimraf mochawesome mochawesome-merge mochawesome-report-generator

   See [this link](https://docs.cypress.io/guides/tooling/reporters#Examples) for more information
   
   
   ### Generate report
   npm run cy:run:report
   
   ### File Location:
   
   ###### Data feeder in: cypress/fixtures directory

   Use Case Descritpion in Gherkin languag in : cypress/features directory
   Test Suite in : cypress/integration
   Results:
   
   Videos are in cypress/videos directory
   HTML Report in: inHeartPortalProject/mochawesome-report/mochawesome.html 