# Exercise for Module 5 - Add a login form (answer)

**challenge**: Add a login form to your blog

You may use the blog you used in the earlier challenge or this demo code.

Create a login page, with a username and password form. The form should validate on both the server and the client.

You don't have to do any real authentication, just check for a hard-coded username password. We are learning forms, not auth.

The Demo has been set up with a simple (and insecure!) authorization method that simply checks the cookie `loggedInUser` for a name, and if it has one considers the user logged in.

On a successful login the root path cookie `loggedInUser` should be set to the `name` of the user, then the user should be redirected to the main page.

If everything is set up correctly the `Login` link should now be the users name and point to the `/profile` page where the user can log out (by deleteing the cookie).

Hint: you can check out the `/profile/+page.server.ts` for a reminder on how to work with form actions
