import React from 'react'
import {
  ListItem,
  ListItemText
} from '@material-ui/core'

function MiscList() {
  return (
    <>
      <ListItem>
        <ListItemText
          primary="bot"
          secondary="Use para ver informações sobre o bot"
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="effects"
          secondary="Use para ver a configuração do player"
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="help"
          secondary="Use para obter ajuda"
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="shards"
          secondary="Veja as informações sobre as Shards"
        />
      </ListItem>
    </>
  )
}

export default MiscList;