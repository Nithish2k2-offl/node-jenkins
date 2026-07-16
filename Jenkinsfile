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
                        sh 'test -f server.js && test -f public/index.html'
                        sh 'echo " inside unix "'
                    } else {
                        bat 'if not exist server.js exit 1'
                        bat 'if not exist public\\index.html exit 1'
                        bat 'echo " inside windows "'
                    }
                }
            }
        }
        stage('Package App Artifacts') {
            steps {
                echo 'Archiving code files into a deployable bundle...'
                // This native Jenkins step safely records your specified application files
                archiveArtifacts artifacts: 'public\\index.html,server.js', fingerprint: true
            }
        }
    }
        post {
        success {
            echo 'Build successful! Artifacts securely archived.'
        }
        failure {
            echo 'Pipeline broke. Check recent commits.'
        }
    }
}
