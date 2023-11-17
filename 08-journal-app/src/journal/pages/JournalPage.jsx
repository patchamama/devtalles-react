import { JournalLayout } from '../layout/JournalLayout'
import { Typography } from '@mui/material'
import { NothingSelectedView } from '../views/NothingSelectedView'
import { NoteView } from '../views'

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Sint id officia amet velit do aliqua aliqua est ea velit minim voluptate
        duis laboris. Esse esse consectetur ullamco excepteur ullamco amet.
        Mollit est nostrud nisi irure magna dolor eiusmod aliquip aliqua nostrud
        incididunt enim. Velit ipsum laborum Lorem anim laboris aute ullamco
        ipsum do adipisicing irure.
      </Typography> */}
      {/* <NothingSelectedView /> */}
      <NoteView />
    </JournalLayout>
  )
}
