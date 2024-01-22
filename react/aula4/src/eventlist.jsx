import { FC } from 'react'
import { Event } from './tp'

const initialCalendar = [
  {
    date: new Date('16/12/1997'),
    title: 'Bodas',
  },
  {
    date: new Date('16/12/1997'),
    title: 'Bodas',
  },
]

export const Eventlist = () => {
  const [list, setlist] = useState(initialCalendar)

  return (
    <div>
      {list.map((ev) => (
        <Event key={ev.date} date={String(ev.Date)} title={ev.title} />
      ))}
    </div>
  )
}
