pipeline {
    agent any

  parameters {
    choice(name: 'ENVIRONMENT', choices: "google", description: 'The enviroment to run this test') 
	}

    stages {
        stage('google') {
            steps {
                echo "${PARAMETERS_ENVIRONMENT}"
            }
        }
    }
}
