pipeline {
  agent {
    kubernetes {
      yamlFile 'pod.yaml'
    }
  }
  stages {
    stage('Build') {
        steps {
            sh 'node -v'
       }
    }
  }
}
