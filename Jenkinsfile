properties([parameters([choice(choices: 'yahoo', name: 'test')])])
pipeline {
	agent any
	stages {
		  stage('param check'){
        when {
            expression{
                params.test == 'yahoo'
            }
        }
        steps{
            echo "testing"
    }
    }
}
