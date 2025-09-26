pipeline {
    agent any

    stages {
        stage('Instal') {
            steps {
                git branch: 'master', url: 'https://github.com/MarcioDT/TCC-EBAC.git'
                bat 'npm install'
            }
        }
        stage('Test') {
            steps {
                bat '''set NO_COLOR=1
                npm test'''
            }
        }
    }
}