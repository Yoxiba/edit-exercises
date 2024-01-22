import { FC, SetStateAction, useState, ChangeEvent, Dispatch } from 'react'
import { Event } from './tp'

const initialForm = {
  date: '',
  title: '',
}

export const AddEvent = () => {
  const [form, setForm] = useState(initialForm)

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <div>
        <label>Date</label>
        <input type="date" />
        onChange={handleFormChange}
      </div>
      <div>
        <label>Title</label>
        <input type="text" />
      </div>
      <button
        onClick={() => {
          const newEvent = { date: new Date(form.date), title: form.title }
          setList((prevList) => [...prevList, newEvent])
        }}
      >
        add
      </button>
    </div>
  )
}
