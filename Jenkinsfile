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


post {
    always {
      script {
     
       publishHTML([allowMissing: false, alwaysLinkToLastBuild: true, keepAll: false, reportDir: '\\cypress\\reports\\', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])				} 
      
    }



}

}

