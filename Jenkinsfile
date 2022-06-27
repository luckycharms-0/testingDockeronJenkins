pipeline {
    agent any

  parameters {
    choice(name: 'ENVIRONMENT', choices: ["google","yahoo"], description: 'Select the server to test') 
	}

    stages {
        stage('Run Docker') {
            steps {
                bat "docker-compose run ${ENVIRONMENT}"
            }
        }
    }
}
