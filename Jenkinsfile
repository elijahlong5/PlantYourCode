pipeline {
    agent any

    stages {
        stage("Hello") {
            steps {
                echo "Hello Jenkins"
                echo "$GIT_BRANCH"
            }
        }
        stage("Install yarn") {
            steps {
                nodejs(nodeJSInstallationName: 'Node'){
                    sh 'yarn install'
                }
            }
        }
        stage("Run tests") {
            steps {
                nodejs(nodeJSInstallationName: 'Node'){
                    sh 'yarn test'
                }
            }
        }

    }
}
