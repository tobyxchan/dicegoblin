# DnD Style RPG Character Database
This is a Node.js and MongoDB powered app that implements CRUD functionalities to manage information about characters of RPG games, or just to experiment with characters!

# Contents
- [Technology](#tech-used)
- [Authentication](#authentication)
- [Characters](#characters)

<a name="tech-used"></a>
## Technology
- Node.JS
- Express
- Google OAuth
- HTML
- CSS
- JavaScript
- Mongoose
- MongoDB
  
<a name="authentication"></a>
## Authentication
To make certain requests such as creating characters, you will need to be logged in via Google's OAuth.

<a name="characters"></a>
## Characters
<a name="adding-characters"></a>
### Adding characters
You must be logged in to create characters, edit characters and add a backstory/description for the character.
Characters may be created, edited, viewed and deleted if logged in.

Icons are generated based on the race selected at character creation.
Stats can be rolled randomly between a range or simply typed in upon creation.

<a name="running-the-program"></a>
## Running the Program
To run the application, simply browse to "localhost:3000" after running the 'nodemon' command.

<a name="future-improvements"></a>
## Future Improvements
- Allow users to upload custom icons through Cloudinary
- Deploy through Heroku
- Calculate ability modifiers based on ability scores and display
- Only allow user which created the character to edit or delete
- Improve CSS / rewrite



