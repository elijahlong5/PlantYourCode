pipeline {
    agent any

    stages {
        stage("Hello") {
            steps {
                echo "Hello Jenkins"
                echo "$GIT_BRANCH"
            }
        }
        stage("Run tests") {
            steps {
                sh 'yarn install && yarn test'
            }
        }
    }
}
