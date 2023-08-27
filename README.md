Link to hour keeping file (frontend and backend combined):
https://github.com/pdtbinh/cs-e4670-full-stack-project/blob/backend/hourkeeping.md 

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
||POST|`/api/login`|Login user|