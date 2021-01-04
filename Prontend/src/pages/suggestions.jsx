import React from 'react'

const Suggestions = (props) => {
  const options = props.employees.map(r => (
    <li key={r.id}>
      {r.lastName}
    </li>
  ))
  return <ul>{options}</ul>
}

export default Suggestions