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
		
		stage('Run Docker') {
            steps {
       publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: '\\cypress\\reports\\', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])				} 
            }
        }
    }

}

