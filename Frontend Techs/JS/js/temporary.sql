select * from order_items  order by points desc limit 3
  
select * from customers where last_name REGEXP 'EY$|ON$'
select * from customers where last_name REGEXP '^MY|SE'
select * from customers where first_name REGEXP 'B[rU]' --'br|bu'
select * from customers where first_name REGEXP 'ELKA|AMBUR'