import axios from 'axios';
import { createStore } from 'vuex'
import {chunk} from 'lodash';

export default createStore({
    state () {
      return {
        page:0,
        items: []
      }
    },
    mutations: {
        setToDos (state, items) {
            state.items = items
          }
    },
    actions:{
        getToDoList ({ commit }) {
            return axios.get("https://jsonplaceholder.typicode.com/todos/").then((r)=>{
                commit("setToDos",chunk(r.data,10))
                }).catch((e)=>{
                    window.Error('Failed to fetch Todo list: '+e);
                });
          }
    }
  });