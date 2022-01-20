pipeline {
  agent {
    kubernetes {
      yamlFile 'pod.yaml'
    }
  }
  stages {
    stage('配置依赖') {
        steps {
            container('node') {
                sh 'npm install'
                sh 'ls'
            }
       }
    }
    stage('打包构建') {
        steps {
            container('node'){
                sh 'npm run build'
                sh 'ls'
            }
        }
    }
  }
}
