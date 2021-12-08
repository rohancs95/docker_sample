# mongo and nodejs

# mongo : setting up and configuring

- https://www.bmc.com/blogs/mongodb-docker-container/
- https://levelup.gitconnected.com/load-balance-and-scale-node-js-containers-with-nginx-and-docker-swarm-9fc97c3cff81

- mongodb cluster mode in docker
- docker swarm

- docker node is single instance of docker. One physical machine can have multiple nodes of docker i.e. instances. They can be manager or worker nodes.

## GENERAL COMMANDS

- docker ps a
- docker compose up -d
- docker compose down
- docker image ls
- docker rmi <image_name>
- docker service ls
- docker network ls
- docker network rm <network_id>
- docker image build -t rohancs95/nginx_node .
- docker image push rohancs95/nginx_node

## Docker-swarm commands

- docker swarm init
- docker swarm leave, use --force for last node or manager node
- docker stack deploy -c docker-compose.yml swarmnodeapp
- docker stack rm swarmnodeapp
- docker stack ls
- docker service rm <service_id> : removing a service. [service refers to a microservice or any service]
- docker service scale swarmnodeapp_node-app=50

## NGINX

- Get into container  
  `docker exec -it <container_id> /bin/bash`
- restart nginx container:  
  `docker exec <nginx_container_id> nginx -s reload`
