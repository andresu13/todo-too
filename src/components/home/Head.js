import React, { useState } from 'react'
import { Input, Space } from 'antd'
const { Search } = Input

function Head({ todoListItems, setTodoListItems }) {
  const [newTodo, setNewTodo] = useState(null)
  function addTodo() {    
    setTodoListItems([...todoListItems, newTodo])
    localStorage.setItem('todoList', JSON.stringify([...todoListItems, newTodo]))
    setNewTodo('')
  }
  return (
    <header style={{ textAlign: 'center' }}>
      <h1>Welcome Guest</h1>
      <h2>Todo:</h2>
      <Space direction="vertical">
        <Search
          placeholder="New Todo Item"
          allowClear
          enterButton="ADD"
          size="large"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onSearch={addTodo}
        />
      </Space>
    </header>
  )
}

export default Head