pipeline {
  agent {
    kubernetes {
      yamlFile 'pod.yaml'
    }
  }
  stages {
    stage('Build') {
        steps {
            container('node') {
                sh 'node -v'
            }
       }
    }
  }
}
