pipeline {
    agent any

  parameters {
    choice(name: 'Server', choices: ["google","yahoo"], description: 'Select the server to test') 
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
     
       publishHTML([allowMissing: false, alwaysLinkToLastBuild: true, keepAll: true, reportDir: '\\cypress\\reports\\', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])				} 
      cleanWs()
    }



}

}

