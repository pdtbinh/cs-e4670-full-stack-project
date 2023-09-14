## *** Please note that since I used the free-tier of Fly to deploy, if the backend is idle for too long, it might be suspended (same for MongoDB). Hence, if the grading takes long, you might encounter some errors. In case you encounter any error, let me know so I can reactivate the backend and database.

# Project branches

The project repo has 2 repositories: `backend` (default) and `frontend`. The `backend` branch is for the backend code. The `frontend` branch is for the frontend code. The time-tracking document is in the `backend` branch.

# Project intro: CollabConnect

Have you ever had an amazing idea for your project, but you have no idea where and how to find a perfect project partner? Or you want to join some project but know nowhere to find?

This full stack MERN web application aims to provide a platform for you to share your project ideas and contacts so that other users, if interested, can reach out and ask to collaborate on the project. That is why it is called CollabConnect.

# Backend host

Deployed app (frontend) hosted at:

https://comforting-puppy-923af9.netlify.app

(The reason behind the name in the link is explained in `frontend` README.md)

Backend hosted at:

https://collabconnect.fly.dev/

# Hour keeping

Link to hour keeping file (frontend and backend combined):

https://github.com/pdtbinh/cs-e4670-full-stack-project/blob/backend/hourkeeping.md

Or you can manually find the `hourkeeping.md` file in the `backend` branch.

# Backend routes

This is the backend part of <b>Project Partner App</b>.

|Entity|Method|Route|Purpose|
|-|-|-|-|
|User|GET|`/api/users`|Get all users|
||POST|`/api/users/:user_id`|Create a new user|
||PUT|`/api/users/:user_id`|Update a specified user|
||DELETE|`/api/users/:user_id`|Delete a specified user|
|Project|GET|`/api/projects`|Get all projects|
||POST|`/api/projects/:project_id`|Create a new project|
||PUT|`/api/projects/:project_id`|Update a specified project|
||DELETE|`/api/projects/:project_id`|Delete a specified project|
|Authentication|POST|`/api/auth/login`|Login user|