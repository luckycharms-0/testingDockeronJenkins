pipeline {
	agent any
	stages {
		stage('Install Dependencies'){
				steps{
					bat 'npm install'
				}
		}
		stage('Move Files'){
				steps{
					bat 'npm run setup'
				}
		}
		stage('Run Tests'){
				steps{
					bat 'npm run test'
				}
		}
	}
}
