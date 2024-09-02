import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    level:'第一周', //活动周数
    itemNum:1, // 第几题
    allTime:0,
    timer:0,
    answerIdArray: [],
    itemDetail:[
      {
        "topic_id": 20,
        "active_topic_id": 4,
        "type": "ONE",
        "topic_name": '题目一',
        "active_id": 1,
        "active_title": '欢乐星期五标题',
        "active_topic_phase":'第一周',
        "active_start_time":'1479139200',
        "active_end_time": '1482163200',
        "topic_answer":[
          {
            "topic_answer_id": 1,
            "topic_id": 20,
            "answer_name": "答案aaaaa",
            "is_standard_answer":0
          },
          {
            "topic_answer_id": 2,
            "topic_id": 20,
            "answer_name": "正确答案",
            "is_standard_answer": 1
          },
          {
            "topic_answer_id": 3,
            "topic_id": 20,
            "answer_name": "答案cccc",
            "is_standard_answer": 0
          },
          {
            "topic_answer_id": 4,
            "topic_id": 20,
            "answer_name": "答案dddd",
            "is_standard_answer": 0
          }
        ]
      },
      {
        "topic_id": 21,
        "active_topic_id": 4,
        "type": "MORE",
        "topic_name": "题目二",
        "active_id": 1,
        "active_title": "欢乐星期五标题",
        "active_topic_phase": "第一周",
        "active_start_time": "1479139200",
        "active_end_time": "1482163200",
        "topic_answer":[
          {
            "topic_answer_id": 5,
            "topic_id": 21,
            "answer_name": "答案A",
            "is_standard_answer": 0
          },
          {
            "topic_answer_id": 6,
            "topic_id": 21,
            "answer_name": "答案B",
            "is_standard_answer": 0
          },
          {
            "topic_answer_id": 7,
            "topic_id": 21,
            "answer_name": "正确答案",
            "is_standard_answer": 1
          },
          {
            "topic_answer_id": 8,
            "topic_id": 21,
            "answer_name": "答案D",
            "is_standard_answer": 0
          }
        ]
      },
      {
        "topic_id": 22,
        "active_topic_id": 4,
        "type": "MORE",
        "topic_name": "题目三",
        "active_id": 1,
        "active_title": "欢乐星期五标题",
        "active_topic_phase": "第一周",
        "active_start_time": "1479139200",
        "active_end_time": "1482163200",
        "topic_answer":[
          {
            "topic_answer_id": 9,
            "topic_id": 22,
            "answer_name": "测试A",
            "is_standard_answer": 0
          },
          {
            "topic_answer_id": 10,
            "topic_id": 22,
            "answer_name": "BBBBBB",
            "is_standard_answer": 0
          },
          {
            "topic_answer_id": 11,
            "topic_id": 22,
            "answer_name": "CCCCCC",
            "is_standard_answer": 0
          },
          {
            "topic_answer_id": 12,
            "topic_id": 22,
            "answer_name": "正确答案",
            "is_standard_answer": 1
          }
        ]
      },
      {
        "topic_id": 23,
        "active_topic_id": 4,
        "type": "MORE",
        "topic_name": "题目四",
        "active_id": 1,
        "active_title": "欢乐星期五标题",
        "active_topic_phase": "第一周",
        "active_start_time": "1479139200",
        "active_end_time": "1482163200",
        "topic_answer":[
          {
            "topic_answer_id": 13,
            "topic_id": 23,
            "answer_name": "正确答案",
            "is_standard_answer": 1
          },
          {
            "topic_answer_id": 14,
            "topic_id": 23,
            "answer_name": "A是错的",
            "is_standard_answer": 0
          },
          {
            "topic_answer_id": 15,
            "topic_id": 23,
            "answer_name": "B是对的",
            "is_standard_answer": 0
          },
          {
            "topic_answer_id": 16,
            "topic_id": 23,
            "answer_name": "C是对的",
            "is_standard_answer": 0
          }
        ]
      },
      {
        "topic_id": 24,
        "active_topic_id": 4,
        "type": "MORE",
        "topic_name": "题目五",
        "active_id": 1,
        "active_title": "欢乐星期五标题",
        "active_topic_phase": "第一周",
        "active_start_time": "1479139200",
        "active_end_time": "1482163200",
        "topic_answer":[
          {
            "topic_answer_id": 17,
            "topic_id": 24,
            "answer_name": "错误答案",
            "is_standard_answer": 0
          },
          {
            "topic_answer_id": 18,
            "topic_id": 24,
            "answer_name": "正确答案",
            "is_standard_answer": 1
          },
          {
            "topic_answer_id": 19,
            "topic_id": 24,
            "answer_name": "错误答案",
            "is_standard_answer": 0
          },
          {
            "topic_answer_id": 20,
            "topic_id": 24,
            "answer_name": "错误答案",
            "is_standard_answer": 0
          }
        ]
      }
    ],
  },
  getters: {

  },
  mutations: {
    ADD_ITEMNUM(state,num){
      state.itemNum += num;
    },
    REMENBER_ANSER(state,id){
      state.answerIdArray.push(id);
    },
    INITIAL_DATA(state){
      state.itemNum = 1;
      state.alltime = 0;
      state.answerIdArray = [];
      console.log('已经初始化了')
    },
    // 记录做题时间
    REMENBER_TIME(state) {
      state.timer = setInterval(() => {
        state.allTime++
      },1000)
    }
  },
  actions: {
    addNum(context,id){
      // 点击下一题，并判断是否为最后一题
      context.commit('REMENBER_ANSER',id)
      console.log(id)
      if(context.state.itemNum < context.state.itemDetail.length){
        context.commit('ADD_ITEMNUM',1)
      }
    },
    initializeData(context){
      context.commit('INITIAL_DATA')
    }
  },
  modules: {

  }
})
