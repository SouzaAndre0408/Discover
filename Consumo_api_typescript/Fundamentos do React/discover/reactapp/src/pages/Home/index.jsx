import React, { useState, useEffect } from 'react';
import './styles.css';
import { Card } from '../../components/Card';

export function Home() {
  const [studentName, setStudentName] = useState('')
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({ name: '', avatar: '' })

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      id: 1,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };


    setStudents(prevState => [...prevState, newStudent]);
  }

  useEffect(() => {
    // fetch('https://api.github.com/users/souzaandre0408')
    //   .then(response => response.json())
    //   .then(data => {
    //     setUser({
    //       name: data.name,
    //       avatar: data.avatar_url
    //     })
    //   })

    async function fetchData() {
      const response = await fetch(`https://api.github.com/users/souzaandre0408`)
      const data = await response.json()

      setUser({
        name: data.name,
        avatar: data.avatar_url
      })
    }

    fetchData()
  }, [])

  return (
    <div className='container'>
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil" />
        </div>
      </header>

      <input onChange={e => setStudentName(e.target.value)} type="text" placeholder="Digite o nome..." />
      <button
        type="button" onClick={handleAddStudent}>
        Adicionar
      </button>
      {
        students.map((student, i) => (
          <Card key={i} id={student.id = i} name={student.name} time={student.time} />
        ))
      }

    </div>
  )
}
