# kitu-coding-challenge
Random User API


## Installation ##
1. Clone the repository.
2. Move into the kitu-coding-challenge directory.
3. Run **npm install** to install the necessary dependencies.
4. Run **node app.js** to run the app locally.

## Requirements ##
- Node version 10.15.1
- Express version 4.17.1
- Request version 2.88
- Asynchronous handling using callbacks
- Postman and Firefox browser to perform requests

## Thoughts ##
I used callbacks for simplicity since readability issues and general messiness from too many nested callbacks weren't a concern here.

The endpoint for creating a new user assumes the data will be sent in the same format as users fetched from the randomuser API. For the purposes of this app I can assume that, but in a real world application, I would probably want to perform some validation/sanitization to prevent any errors being thrown and make sure the data being stored is what I expect.

Sorting the users by first name would improve lookup speed (at the cost of some write speed) since it's the only field they are searched on. However, I decided not to overcomplicate things, especially since the improvement in search speed would be negligible, given the assumedly small number of users in memory.

I generally just tried to keep things simple and clean!
