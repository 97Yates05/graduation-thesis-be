podTemplate(yaml: readTrusted('pod.yaml')) {
    node(POD_LABEL) {
        stage('安装依赖'){
            container('node'){
                sh 'npm install'
            }
        }
        stage('构建'){
             container('node'){
                 sh 'npm run build'
                 sh 'ls'
             }
        }
    }
}
