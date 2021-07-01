// word.js
import { firestore } from '../../firebase';

const dict_db = firestore.collection('dict');

/**
 * 액션 타입을 정해주고,
 * 액션 생성자를 만들고,
 * 리듀서를 만들어줘요!
 *
 * 그리고 나면, configureStore.js에서 rootReducer로 묶어주고 -> 미들웨어랑 엮어서 -> 스토어를 만들어줍니다.
 */

// Actions
const LOAD = 'word/LOAD';
const CREATE = 'word/CREATE';

// wordList에 있던 가짜 데이터를 initialState로 옮겨옵니다.
const initialState = {
  word_list: [
    {
      id: 'list_0',
      word: 'ㅎ1ㅎ1',
      desc: "히히를 변형한 단어. 숫자 1을 'ㅣ'로 쓴다.",
      example: '저 친구가 초콜릿을 줬어. ㅎ1ㅎ1',
    },
    {
      id: 'list_1',
      word: 'ㅎ1ㅎ1',
      desc: "히히를 변형한 단어. 숫자 1을 'ㅣ'로 쓴다.",
      example: '저 친구가 초콜릿을 줬어. ㅎ1ㅎ1',
    },
    {
      id: 'list_2',
      word: 'ㅎ1ㅎ1',
      desc: "히히를 변형한 단어. 숫자 1을 'ㅣ'로 쓴다.",
      example: '저 친구가 초콜릿을 줬어. ㅎ1ㅎ1',
    },
    {
      id: 'list_3',
      word: 'ㅎ1ㅎ1',
      desc: "히히를 변형한 단어. 숫자 1을 'ㅣ'로 쓴다.",
      example: '저 친구가 초콜릿을 줬어. ㅎ1ㅎ1',
    },
  ],
};
// Action Creators
export const loadWord = (word_list) => {
  return { type: LOAD, word_list };
};

export const createWord = (word) => {
  return { type: CREATE, word };
};

// 파이어베이스랑 통신하는 부분
export const loadDictFB = () => {
  return function (dispatch) {
    dict_db.get().then((docs) => {
      let bucket_data = [];
      docs.forEach((doc) => {
        if (doc.exists) {
          bucket_data = [...bucket_data, { id: doc.id, ...doc.data() }];
        }
      });

      console.log(bucket_data);
      // 이제 액션 생성 함수한테 우리가 가져온 데이터를 넘겨줘요! 그러면 끝!
      // dispatch(loadWord(bucket_data));
    });
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case 'word/LOAD':
      return state;

    case 'word/CREATE':
      // 받아온 데이터를 추가한 새 리스트 만들기
      const new_word_list = [...state.word_list, action.word];

      //   state를 갈아끼워요
      return { ...state, word_list: new_word_list };

    default:
      return state;
  }
}
