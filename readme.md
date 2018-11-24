# WDI-Project2
# General Assembly Project 2 : A Full-stack Application

## Goal: To create a blogging platform

## Technologies used

* HTML5/CSS/JS
* Node.js
* Express
* EJS
* MongoDB/Mongoose
* BCrypt
* Session Auth
* Bulma

## My Platform - Sew & Sews

<img width="1164" alt="screen shot 2018-09-20 at 13 55 10" src="https://user-images.githubusercontent.com/32750083/45819769-0e638e80-bcdd-11e8-867e-afa8a090ba18.png">

### Platform overview
A blogging platform for the sewing community.

### Platform Instructions
1. Users will first see the homepage which shows a hero image and the 3 most recent posts. On the nav at the top they can select to view all posts, register an account or login.

<img width="1298" alt="screen shot 2018-09-20 at 13 59 41" src="https://user-images.githubusercontent.com/32750083/45820270-520ac800-bcde-11e8-956d-dccb70ccbcb6.png">

2. To create an account, users will need to fill out their username, email and password. They can also choose a profile but this is not mandatory. Once they have registered they will be taken back to the homepage as a logged in user.

<img width="1298" alt="screen shot 2018-09-20 at 13 59 59" src="https://user-images.githubusercontent.com/32750083/45820374-8aaaa180-bcde-11e8-84c6-793f22fd247e.png">

3. When a user is logged in, they are able to post their own articles as well as commenting on other users' posts. The nav at the top also changes for logged in users, giving them 'Logout' and 'Create post' options.

<img width="1298" alt="screen shot 2018-09-20 at 14 20 53" src="https://user-images.githubusercontent.com/32750083/45821141-664fc480-bce0-11e8-87be-da50580e0066.png">

4. A logged in user can navigate to the My Account page by clicking on the option in the nav which shows their username and a small icon of their profile picture. On the My Account page, users can edit their personal details and view all the posts they have created. They also have the option to delete their account.

<img width="1298" alt="screen shot 2018-09-20 at 14 23 20" src="https://user-images.githubusercontent.com/32750083/45821314-c7779800-bce0-11e8-85d5-114917a27dc3.png">

### Process

I started by making models and seeds for my posts, as well as the basic beginning of a layout page. Once I could display my posts as necessary I began making the controllers so that posts could be created and updated.

I then started on the registrations process, so that new users could be created and then log in. After this was implemented, I specified which pages and functionality would only be used by logged in users.

Next I worked on giving users the ability to comment on posts. After this was functioning, I made it so that users could only delete their own comments.

I then started to create a My Account page so that logged in users could view and amend their personal information as well as viewing all of the posts they had created. The can also delete their account from there.

The last few things I worked on included getting the 3 most recent posts to show on the homepage and tweaking my code so that after users had deleted their account, their posts and comments could still be used as 'account deleted'.

Finally I began using Bulma to style the blogging platform. I then used my own CSS to tweak the styling so that it would look less like I had used Bulma!

### Challenges

I found quite a lot of the process challenging on this project. Almost every part of the process required teamwork or help or research to get things working. Many parts of the code generally were just quite difficult to understand quickly.

Understanding how all the files we use operate together was a bit difficult but I think I have a better understanding of it now. I also struggled with understanding how user/post information needs to be pulled in to different pages across the platform, in order to display properly and not show errors.

### Wins

I'm happy that after struggling, I have a functioning blogging platform that has slightly exceeded the MVP. I think that this process has taught me a lot.

I'm also very happy with the presentation and styling, particularly as I wasn't very comfortable with Bulma before we started this project. I now feel I have a much better understanding of Bulma and can use it to create the styles I want.

## Future features

I'd like to work on getting comments moderated before being displayed, as well as implementing greater search functionality. I'd like to make it so that you can search by user or you can click on a username (from a comment, for example) and be shown all the blog posts from that particular user.
