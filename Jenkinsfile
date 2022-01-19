    def label = "mypod-${UUID.randomUUID().toString()}"
    podTemplate(label: label, cloud: 'kubernetes') {
        node(label) {
            stage('Run shell') {
                sh 'echo hello world.'
            }
        }
    }
