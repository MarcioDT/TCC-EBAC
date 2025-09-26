pipeline {
    agent any

    stages {
        stage('Dependencias') {
            steps {
                bat 'npm install'
            }
        }
        stage('Testes') {
            steps {
                bat 'npm run cy:run'
            }
        }
    }
}