import React from 'react'
import {
  ListItem,
  ListItemText,
  Divider
} from '@material-ui/core'

function EffectsList() {
  return (
    <>
      <ListItem>
        <ListItemText
          primary="bassboost"
          secondary="Ativa o filtro BassBoost na música"
        />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText
          primary="distortion"
          secondary="Ativa o filtro Distortion na música"
        />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText
          primary="nightcore"
          secondary="Ativa o filtro NightCore na música"
        />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText
          primary="vaporwave"
          secondary="Ativa o filtro VaporWave na música"
        />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText
          primary="speed"
          secondary="Muda a velocidade da música"
        />
      </ListItem>
    </>
  )
}

export default EffectsList;