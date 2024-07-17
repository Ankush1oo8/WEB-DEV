select name from user WHERE follower>2
limit 1;

select name,follower from user WHERE follower>2
ORDER BY follower DESC;

SELECT MAX(follower)
FROM user;

SELECT MIN(follower)
FROM user;

SELECT AVG(follower)
FROM user;

select count(id)
from user 
GROUP BY following;

select count(id)
from user 
GROUP BY following
HAVING MAX(follower) > 900;

SET SQL_SAFE_UPDATES=0;

UPDATE user
set follower=6000
where id=1;
SELECT * FROM user;

ALTER table user RENAME to insta_USER;

drop table posts;
drop TABLE insta_USER;

