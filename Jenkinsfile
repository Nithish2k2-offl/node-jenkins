pipeline {
    agent any

    stages {
        stage('Code Checkout') {
            steps {
                echo 'Successfully pulled code from GitHub repository!'
            }
        }

        stage('Verify App Files') {
            steps {
                echo 'Checking if files exist inside the Jenkins workspace...'
                script {
                    if (isUnix()) {
                        sh 'test -f server.js && test -f index.html'
                    } else {
                        bat 'if not exist server.js exit 1'
                        bat 'if not exist index.html exit 1'
                    }
                }
            }
        }
    }
}
