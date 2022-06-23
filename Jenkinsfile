pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                sh 'docker-compose run test'
            }
        }
    }
}
