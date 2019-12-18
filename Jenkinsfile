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
        stage('Deploy docker image') {
            when{
                branch 'master'
            }
            steps {
                script {
                    dockerImage = docker.build registry + ":latest"
                }
                script {
                    docker.withRegistry( '', registryCredential ) {
                        dockerImage.push()
                    }
                }
            }
        }
        stage('Deploy to AWS') {
            when{
                branch 'master'
            }
            steps {
                withAWS(credentials:'malachite1 ', region: 'eu-central-1') {
                sh 'aws s3 cp ./Dockerrun.aws.json \
                s3://$S3_BUCKET/$BUILD_ID/Dockerrun.aws.json'
                sh 'aws elasticbeanstalk create-application-version \
                --application-name "$APP_NAME" \
                --version-label greeter-$BUILD_ID \
                --source-bundle S3Bucket="$S3_BUCKET",S3Key="$BUILD_ID/Dockerrun.aws.json" \
                --auto-create-application'
                sh 'aws elasticbeanstalk update-environment \
                --application-name "$APP_NAME" \
                --environment-name $ENV_NAME \
                --version-label devma-Dev-$BUILD_ID'
                }
            }
        }
    }
}