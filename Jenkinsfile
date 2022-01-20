podTemplate(yaml: readTrusted('pod.yaml')) {
    node(POD_LABEL) {
        stage('安装依赖'){
            container('node'){
                sh 'ls'
            }
        }
        stage('构建'){
             container('node'){
                 sh 'ls'
             }
        }
    }
}
