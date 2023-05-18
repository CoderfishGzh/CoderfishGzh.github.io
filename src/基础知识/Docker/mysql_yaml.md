MySQL docker 容器启动
```
version: '3.1'

services: 
    db:
        image:mysql
        container_name: default-name
        ports:
            # 使用宿主机的3306端口映射到容器的3306端口
            # 宿主机:容器
            - "3306:3306"
        restart: always
        environment:
            MYSQL_ROOT_PASSWORD: root_password
```
执行命令：
```
docker compose up -d 
```
进入MySQL：
```
mysql -P 3306 -u root - p
```
