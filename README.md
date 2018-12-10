# Cluckr a simple twitter clone in Express, Postgres, and Bootstrap built Hackathon style in 10 hours.

Build an Express app with the following:

Logging Middleware installed & setup.
Nodemon tool installed & setup as a dev. dependency.
Bootstrap installed and served with static assets middleware (Do not use a CDN.)

Create a sign in page that shows a form with a single field for a username. When a user submits the form, store the username in cookies. Also, add the ability for users to sign out as well.

Use a Knex migration to a create table to hold clucks in the Postgres database, Cluckr's equivalent of tweets. Clucks should have the following fields:

A username
An image_url
A content
A self-increment unique id
created_at and updated_at timestamps

Create a form page for users to create their Clucks and the following fields.

Routes related to clucks must be in one file.
When submitted, Cluckr should add a new cluck to the database.
A user should be able to give a link to an image url.
Use Bootstrap to build it.
The cluck should get its username field from the username in the cookies.
A successfully submitted cluck should redirect the user to the index page.

Create a page to list and show all clucks index.

Order them by their creation date.
Display thumbnails of the images only if an image was submitted for the cluck. 
Use Bootstrap to build the list where appropriate.
Both path, / and /clucks, should send the user to this index page.

Add a navigation bar.

There should be a "chicken" icon for the brand. Feel free to use any chicken image.
Clicking the brand sends the user to the index.
The "Cluck!" button should link to the new cluck form.
It should have a "Sign In" button that links to the /sign_in page.
When the user is signed in, display their name instead of the "Sign In" button.
You must use a Bootstrap styled navbar.

Display the created_at date for clucks in a human friendly readable way.

Display the created_at date besides the username as show in any wireframe with clucks.
Use plain language to show the date relative to the current date. (e.g. yesterday would appear as 1 day ago, 22 minutes ago, 2 hours ago, etc)
Anything less than a minute ago should show as Just now
