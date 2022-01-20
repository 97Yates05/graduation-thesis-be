podTemplate(yaml: readTrusted('pod.yaml')) {
    node(POD_LABEL) {
        container('node'){
            stage('准备'){
                steps('拉取仓库'){
                    checkout scm
                }
                steps('安装依赖'){
                    sh 'ls'
                }
            }
            stage('构建'){
            }
            stage('发布'){
            }
        }
    }
}
