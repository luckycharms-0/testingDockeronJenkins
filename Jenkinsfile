pipeline {
    agent any

    stages {
        stage('google') {
            steps {
                bat 'docker-compose run google'
            }
        }
    }
}
