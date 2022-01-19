   podTemplate(cloud: 'kubernetes', yaml: '''
                             apiVersion: v1
                             kind: Pod
                             spec:
                               containers:
                               - name: node
                                 image: node:latest-alpine
               ''') {
        node("myPod") {
            ontainer('node') {
                sh 'node -v'
            }
        }
    }
