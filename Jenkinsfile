pipeline {
    agent {
        docker {
            image 'node:alpine3.10'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
        registry = "akijakya/docker-single-test"
        registryCredential = 'akijakya-docker'
        dockerImage = ''
        ENV_NAME = "Greeter-env"
        S3_BUCKET = "elasticbeanstalk-eu-central-1-124429370407"
        APP_NAME = 'greeter'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        // stage('Deliver') {
        //     steps {
        //         sh 'npm start'
        //     }
        // }
    }
}