   podTemplate(yaml: '''
                             apiVersion: v1
                             kind: Pod
                             spec:
                               containers:
                               - name: node
                                 image: node:latest-alpine
               ''') {
        node("myPod") {
            stage('Run shell') {
                sh 'node -v'
            }
        }
    }
