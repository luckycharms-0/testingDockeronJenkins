pipeline {
    agent any

stage('Install Dependencies'){
				steps{
					sh 'npm install'
				}
		}

stage('Move Files'){
				steps{
					sh 'npm run setup'
				}
		}    

stage('Run Tests'){
				steps{
					sh 'npm run test'
				}
		}
}
