//firebase.js
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  // firebase 설정과 관련된 개인 정보
  apiKey: 'AIzaSyBBI4gaFg0T4yZdpE-3EuTB-JA8thLSQXA',
  authDomain: 'sparta-react-53380.firebaseapp.com',
  projectId: 'sparta-react-53380',
  storageBucket: 'sparta-react-53380.appspot.com',
  messagingSenderId: '1073849689714',
  appId: '1:1073849689714:web:4df849a05c6878cd8704eb',
  measurementId: 'G-Y3NF3VNB4R',
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };
