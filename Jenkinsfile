pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'pwd'
        sh 'ls -la'
      }
    }
    stage('Test') {
      steps {
        sh 'find .'
      }
    }
    stage('Aprova��o') {
      steps {
        input 'Voc� aprova?'
      }
    }
  }
}