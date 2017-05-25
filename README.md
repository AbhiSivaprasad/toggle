# Project Skeleton

The project is divided into two parts: server and client (each are in their respective directories). 

Server is a Java server, using [spark](http://sparkjava.com/) for routing, [Velocity Template Engine](https://velocity.apache.org/) for tempates, and [Gradle](https://gradle.org/) for managing the build and dependecies. Use IntelliJ IDEA for development.

Client is a React based project, written in [TypeScript](https://www.typescriptlang.org/), which is compiled into JavaScript. Use WebStorm for development.

## Dependencies
* node (v7.7.1) - install using [nvm](https://github.com/creationix/nvm)
* Java 1.8 JDK

## QuickStart
```
# assuming we are in the root project directory

cd ./client
npm install
npm install -g gulp
gulp build
cd ../server
./gradlew run

# now navigate to http://localhost:8000 in your browser to see the page
```