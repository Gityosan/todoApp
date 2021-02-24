<template>
  <div>
    <h2>TodoApp</h2>
    <v-data-table
      :headers="headers"
      :items="todos"
      no-data-text="顧客が登録されておりません。"
      class="elevation-1"
    >
      <tr v-for="item in todos" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.todo }}</td>
      </tr>
      <template slot="todos" slot-scope="props">
        <td>{{ props.todo.todo }}</td>
        <td>{{ props.todo.id }}</td>
      </template>
    </v-data-table>
    <div v-for="todo in todos" :key="todo.id" class="inputStyle">
      <input
        v-model="renewOne"
        type="text"
        :placeholder="todo.todo"
        class="inputStyle"
      />
      <v-btn outlined @click="updateTodo(todo.id, renewOne)">update</v-btn>
      <v-btn outlined @click="deleteTodo(todo.id)">delete</v-btn>
    </div>
    <div>
      <input
        v-model="newOne"
        type="text"
        placeholder="todo新規作成"
        class="inputStyle"
      />
      <v-btn outlined @click="createTodo(newOne)">CREATE</v-btn>
    </div>
  </div>
</template>

<script lang="js">
import { GET_TODOS, CREATE_TODOS, UPDATE_TODO, DELETE_TODO } from "../graphql/tags/Todo";

export default {
  name: "Todo",
  data() {
    return {
      todos: {},
      headers: [
        { text: 'Todo', value: 'todo' },
        { text: 'ID', value: 'id' },
        { text: 'CreatedAt', value: 'createdAt' },
      ],
    };
  },
  apollo: {
    todos: {
      prefetch:true,
      query: GET_TODOS
    }
  },
  methods: {
    createTodo( newtodo ) {
      const { error } = this.$apollo.mutate({
        mutation: CREATE_TODOS,
        variables: {
          newtodo
        },

        refetchQueries: [
          {
            query: GET_TODOS
          }
        ]
      });

      if (error) {
        console.log(error);
      }
    },
    updateTodo(id,renewtodo) {
      const { error } = this.$apollo.mutate({
        mutation: UPDATE_TODO,
        variables: {
          id,
          renewtodo
        },
        refetchQueries: [{
          query: GET_TODOS
        }]
      });

      if (error) {
        console.log(error);
      }
    },
    deleteTodo(id) {
      const { error } = this.$apollo.mutate({
        mutation: DELETE_TODO,
        variables: {
          id
        },
        refetchQueries: [{
          query: GET_TODOS
        }]
      });

      if (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
.inputStyle {
  color: white;
}
</style>
