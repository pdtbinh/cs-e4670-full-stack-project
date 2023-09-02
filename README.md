# Project intro: CollabConnect

Have you ever had an amazing idea for your project, but you have no idea where and how to find a perfect project partner? 

This full stack web application aims to provide a platform for you to share your project ideas and find the most suitable partners. In short, it helps connect collaborators.

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