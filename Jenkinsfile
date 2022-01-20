podTemplate(yaml: readTrusted('pod.yaml')) {
    node(POD_LABEL) {
        stage('test'){
            container('node'){
                sh 'node -v'
            }
        }
    }
}
