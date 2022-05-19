FROM openjdk:8-jdk-alpine
WORKDIR /dev/ucb
COPY . .
VOLUME [ "/data" ]
EXPOSE 8080
ENTRYPOINT ["java", "-jar","/app.jar"]