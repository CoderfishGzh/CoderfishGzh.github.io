Object.assign(window.search, {"doc_urls":["index.html#个人简介","基础知识.html#mysql","基础知识/MySQL/索引.html#索引失效的几种情况","基础知识/MySQL/锁.html","基础知识/MySQL/SQL语句.html#连表查询"],"index":{"documentStore":{"docInfo":{"0":{"body":0,"breadcrumbs":0,"title":0},"1":{"body":0,"breadcrumbs":2,"title":1},"2":{"body":11,"breadcrumbs":1,"title":0},"3":{"body":30,"breadcrumbs":1,"title":1},"4":{"body":6,"breadcrumbs":2,"title":0}},"docs":{"0":{"body":"","breadcrumbs":"个人简介 » 个人简介","id":"0","title":"个人简介"},"1":{"body":"","breadcrumbs":"MySQL » MySQL","id":"1","title":"MySQL"},"2":{"body":"1）左模糊或者左右模糊： like %xx 或者 like %xx% 2）对查询条件使用了函数或者表达式计算 select * from xxx where (age + 1) = 1; 3）字符串和数字进行比较 MySQL在进行比较时，会将字符串自动转换成数字再进行比较。如果字符串是索引列，条件参数是数字，会发生隐式转换，即对字段使用了函数，因此索引会失效。 4）联合索引要能够正确遵循最左匹配原则 5）where子句中，or前的条件列是索引列，or后的条件不是索引列","breadcrumbs":"MySQL » 索引 » 索引失效的几种情况","id":"2","title":"索引失效的几种情况"},"3":{"body":"行级锁： Record Lock 记录锁：锁定一条记录 Gap Lock 间隙锁： 锁定id为（3，5)间隙锁，无法插入id=4的记录 Next-Key Lock 临键锁，锁定一个范围，并锁定记录本身。有一个(3, 5]的next-key lock，其他事务不能插入id = 4的事务，也不能修改和删除id=5的记录 MySQL是怎么加行级锁的 唯一索引等值查询 记录存在：在索引树定位到该记录后，将该记录的索引中的next-key lock退化成记录锁 记录不存在：在索引树找到第一条大于该查询记录的记录时，将next-key lock退化成间隙锁 非唯一索引等值查询 记录存在：由于不是唯一索引，所以肯定存在索引值相同的记录，于是非唯一索引等值查询的过程是一个扫描的过程，直到扫描到第一个不符合条件的二级索引记录就停止扫描，然后 在扫描的过程中，对扫描到的二级索引记录加的是 next-key 锁，而对于第一个不符合条件的二级索引记录，该二级索引的 next-key 锁会退化成间隙锁。同时，在符合查询条件的记录的主键索引上加记录锁 。 记录不存在： 扫描到第一条不符合条件的二级索引记录，该二级索引的 next-key 锁会退化成间隙锁。因为不存在满足查询条件的记录，所以不会对主键索引加锁 。 非唯一索引和主键索引范围查询加锁规则的不同 唯一索引在满足一些条件的时候，索引的 next-key lock 退化为间隙锁或者记录锁。 非唯一索引范围查询，索引的 next-key lock 不会退化为间隙锁和记录锁。","breadcrumbs":"MySQL » 锁","id":"3","title":"MySQL"},"4":{"body":"INNER JOIN(内连接、等值连接):获取两个表中字段匹配关系的记录。 LEFT JOIN(左连接): 获取左表所有记录，即使右表没有对应匹配的记录。 RIGHT JOIN(右连接): 用于获取右表所有记录、即使坐标没有对应匹配的记录。","breadcrumbs":"MySQL » SQL语句 » 连表查询","id":"4","title":"连表查询"}},"length":5,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"1":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}},"2":{"df":1,"docs":{"2":{"tf":1.0}}},"3":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}},"4":{"df":1,"docs":{"2":{"tf":1.0}},"的":{"df":0,"docs":{},"事":{"df":0,"docs":{},"务":{"df":0,"docs":{},"，":{"df":0,"docs":{},"也":{"df":0,"docs":{},"不":{"df":0,"docs":{},"能":{"df":0,"docs":{},"修":{"df":0,"docs":{},"改":{"df":0,"docs":{},"和":{"df":0,"docs":{},"删":{"df":0,"docs":{},"除":{"df":0,"docs":{},"i":{"d":{"=":{"5":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}}}}}},"5":{"]":{"df":0,"docs":{},"的":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"p":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"i":{"d":{"df":0,"docs":{},"为":{"df":0,"docs":{},"（":{"3":{"df":0,"docs":{},"，":{"5":{")":{"df":0,"docs":{},"间":{"df":0,"docs":{},"隙":{"df":0,"docs":{},"锁":{"df":0,"docs":{},"，":{"df":0,"docs":{},"无":{"df":0,"docs":{},"法":{"df":0,"docs":{},"插":{"df":0,"docs":{},"入":{"df":0,"docs":{},"i":{"d":{"=":{"4":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"j":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}}}}},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"y":{"df":1,"docs":{"3":{"tf":3.0}}}}},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}},"o":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":2.6457513110645907}},"，":{"df":0,"docs":{},"其":{"df":0,"docs":{},"他":{"df":0,"docs":{},"事":{"df":0,"docs":{},"务":{"df":0,"docs":{},"不":{"df":0,"docs":{},"能":{"df":0,"docs":{},"插":{"df":0,"docs":{},"入":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}}}}}},"df":0,"docs":{}}},"m":{"df":0,"docs":{},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"q":{"df":0,"docs":{},"l":{"df":2,"docs":{"1":{"tf":1.0},"3":{"tf":1.4142135623730951}}}}}}},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":2.449489742783178}}}}}},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}}},"x":{"df":0,"docs":{},"x":{"df":1,"docs":{"2":{"tf":1.4142135623730951}},"x":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"breadcrumbs":{"root":{"1":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}},"2":{"df":1,"docs":{"2":{"tf":1.0}}},"3":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}},"4":{"df":1,"docs":{"2":{"tf":1.0}},"的":{"df":0,"docs":{},"事":{"df":0,"docs":{},"务":{"df":0,"docs":{},"，":{"df":0,"docs":{},"也":{"df":0,"docs":{},"不":{"df":0,"docs":{},"能":{"df":0,"docs":{},"修":{"df":0,"docs":{},"改":{"df":0,"docs":{},"和":{"df":0,"docs":{},"删":{"df":0,"docs":{},"除":{"df":0,"docs":{},"i":{"d":{"=":{"5":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}}}}}},"5":{"]":{"df":0,"docs":{},"的":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"p":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"i":{"d":{"df":0,"docs":{},"为":{"df":0,"docs":{},"（":{"3":{"df":0,"docs":{},"，":{"5":{")":{"df":0,"docs":{},"间":{"df":0,"docs":{},"隙":{"df":0,"docs":{},"锁":{"df":0,"docs":{},"，":{"df":0,"docs":{},"无":{"df":0,"docs":{},"法":{"df":0,"docs":{},"插":{"df":0,"docs":{},"入":{"df":0,"docs":{},"i":{"d":{"=":{"4":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"j":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}}}}},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"y":{"df":1,"docs":{"3":{"tf":3.0}}}}},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}},"o":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":2.6457513110645907}},"，":{"df":0,"docs":{},"其":{"df":0,"docs":{},"他":{"df":0,"docs":{},"事":{"df":0,"docs":{},"务":{"df":0,"docs":{},"不":{"df":0,"docs":{},"能":{"df":0,"docs":{},"插":{"df":0,"docs":{},"入":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}}}}}},"df":0,"docs":{}}},"m":{"df":0,"docs":{},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"q":{"df":0,"docs":{},"l":{"df":4,"docs":{"1":{"tf":1.7320508075688772},"2":{"tf":1.0},"3":{"tf":1.7320508075688772},"4":{"tf":1.0}}}}}}},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":2.449489742783178}}}}}},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}},"q":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}}},"x":{"df":0,"docs":{},"x":{"df":1,"docs":{"2":{"tf":1.4142135623730951}},"x":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"title":{"root":{"df":0,"docs":{},"m":{"df":0,"docs":{},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"q":{"df":0,"docs":{},"l":{"df":2,"docs":{"1":{"tf":1.0},"3":{"tf":1.0}}}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});