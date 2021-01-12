The database that I will be building will have four different tables: users, friends, posts, and comments. 
The users table will include seven columns: name (string), DOB (string), username (string), password (string),
bio (string), username (string), occupation (string), id (int). The friends column will include 
4 columns: requestor_id (int),requested_id (int), date_requested (string), status [of friendship] (str). 
The posts table will include five columns: text (string), date_posted (string), num_of_likes (int), id (int), 
user_id (int). The comments table will include 4 columns: post_id (int), text (string), user_id (int),
id (int). The tables will relate with each other through the users' ids. The id column from the users
table will relate to the user_id from the posts table and will connect to the requestor_id and requested_id.
The id from users will also connect to user_id from comments, and the id from posts will connect to post_id
from the comments table as well.