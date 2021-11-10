import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { ImageListType } from '../../fake-data/main-item-list-fake-data'
import { ImageItemBox } from './styles'

type Props = {
  title: string
  imageList: ImageListType[]
}

export default function MainItemList(props: Props) {
  const { title, imageList } = props
  return (
    <div>
      <Typography variant="h5">{title}</Typography>
      <Grid container>
        {imageList.map((imageInfo, idx) => (
          <Grid key={idx} item xs={6} sm={4} md={3} lg={3}>
            <ImageItemBox>
              <Box>
                <img src={imageInfo.image} alt="img" />
              </Box>
              <Typography variant="subtitle1">{imageInfo.title}</Typography>
              <Typography variant="body2">{imageInfo.info}</Typography>
            </ImageItemBox>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
