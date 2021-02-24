import gql from 'graphql-tag'

export const GET_TODOS = gql`
  query {
    todos {
      todo
      id
      createdAt
    }
  }
`

export const CREATE_TODOS = gql`
  mutation($newtodo: String!) {
    createTodo(data: { todo: $newtodo }) {
      todo
      createdAt
      id
    }
  }
`

export const UPDATE_TODO = gql`
  mutation($id: ID!, $renewtodo: String!) {
    updateTodo(where: { id: $id }, data: { todo: $renewtodo }) {
      id
      todo
    }
  }
`
export const DELETE_TODO = gql`
  mutation($id: ID!) {
    deleteTodo(where: { id: $id }) {
      id
    }
  }
`
