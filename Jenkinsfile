pipeline {
    agent any

    stages {
        stage("Hello") {
            steps {
                echo "Hello Jenkins"
                echo "$GIT_BRANCH"
            }
        }
        stage("Goodbye") {
            sh 'echo "see ya"'
        }
    }
}
