import React from 'react'
import {
  ListItem,
  ListItemText,
  Divider
} from '@material-ui/core'

function MusicList() {
  return (
    <>
      <ListItem>
        <ListItemText
          primary="join"
          secondary="Use para adicionar o bot na chamada"
        />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText
          primary="loop"
          secondary="Ativa/desativa o loop da música/queue"
        />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText
          primary="lyrics"
          secondary="Busque pela letra de uma música"
        />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText
          primary="move"
          secondary="Mova a posição das músicas"
        />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText
          primary="nowplaying"
          secondary="Veja a música que está tocando no servidor"
        />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText
          primary="pause"
          secondary="Pausa/resume a música"
        />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText
          primary="play"
          secondary="Coloque músicas na fila para serem reproduzidas"
        />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText
          primary="queue"
          secondary="Veja a fila de músicas do servidor"
        />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText
          primary="remove"
          secondary="Remova músicas da queue"
        />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText
          primary="search"
          secondary="Procure por músicas/artistas no YouTube"
        />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText
          primary="shuffle"
          secondary="Embaralhe a queue"
        />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText
          primary="skip"
          secondary="Avançe para a próxima música da queue"
        />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText
          primary="stop"
          secondary="Faça o bot parar de tocar músicas"
        />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText
          primary="volume"
          secondary="Altere o volume da música"
        />
      </ListItem>
    </>
  )
}

export default MusicList;