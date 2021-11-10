import { Box, Container } from '@mui/material'
import type { NextPage } from 'next'
import React from 'react'
import BestItemList from '../src/components/best-item-list/BestItemList'
import NewItemList from '../src/components/new-item-list/NewItemList'
import MainLayout from '../src/layout/main/MainLayout'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div>
        <Box style={{ border: '1px solid black', background: '#74c0fc' }}>슬라이더</Box>
        <Container>
          <BestItemList />
          <NewItemList />
        </Container>
      </div>
    </MainLayout>
  )
}

export default Home
