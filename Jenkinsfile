pipeline {
    agent any

    stages {
        stage('Instal') {
            steps {
                bat 'npm install'
            }
        }
        stage('Test') {
            steps {
                bat 'npm run cy:run'
            }
        }
    }
}