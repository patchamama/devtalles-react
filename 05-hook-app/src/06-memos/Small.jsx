import { memo } from 'react'
// import React from 'react'
// export const Small = React.memo(({ value }) => {...

export const Small = memo(({ value }) => {
  console.log('Me volví a llamar :(')
  return <small>{value}</small>
})
