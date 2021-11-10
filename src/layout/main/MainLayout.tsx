import { Box, ButtonBase, Container, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import theme from '../../../theme'
import SideMenu from './components/side-menu/SideMenu'

type Props = {
  children: React.ReactElement
}

function MainLayout(props: Props) {
  const { children } = props
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))

  const _onClickMainLogo = () => {
    console.log('home으로')
  }

  return (
    <div>
      <Box pt={2} pb={2} style={{ borderBottom: '1px solid #eee' }}>
        <Container maxWidth="lg">
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <ButtonBase onClick={_onClickMainLogo}>
              <Typography variant="h5">HeeRan.mall</Typography>
            </ButtonBase>
            <Stack direction="row" spacing={2}>
              <ButtonBase>
                <Typography variant="subtitle2">로그인</Typography>
              </ButtonBase>
              <ButtonBase>
                <Typography variant="subtitle2">회원가입</Typography>
              </ButtonBase>
              <ButtonBase>
                <Typography variant="subtitle2">장바구니</Typography>
              </ButtonBase>
              <ButtonBase>
                <Typography variant="subtitle2">주문조회</Typography>
              </ButtonBase>
            </Stack>
          </Box>
        </Container>
      </Box>
      <Container>
        <Box display="flex">
          <SideMenu />
          <Box flex={1} p={2}>
            {children}
          </Box>
        </Box>
      </Container>
    </div>
  )
}
export default MainLayout
