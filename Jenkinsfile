pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git branch: 'master', url: 'https://github.com/MarcioDT/TCC-EBAC.git'               
            }
        }
        stage('Dependencias') {
            steps {
               bat 'npm install'
            }
        }        
        stage('Teste') {
            steps {
                bat '''set NO_COLOR=1
                npx cypress run'''              
            }
        }

    }
}