podTemplate(yaml: readTrusted('pod.yaml')) {
    node('myPod') {
        stage('test'){
            container('node'){
                sh 'node -v'
            }
        }
    }
}
