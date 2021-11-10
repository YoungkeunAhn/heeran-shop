import { Box, ButtonBase, Collapse, Stack, styled, Typography, useMediaQuery } from '@mui/material'

import React from 'react'
import theme from '../../../../../theme'

const DEFAULT_MENU_LIST = ['신상품', '베스트상품', '꽃다발', '꽃바구니', '무드등']

export default function SideMenu() {
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  const _onClickMenu = (menu: string) => {
    console.log(`${menu} 페이지로 이동`)
  }
  return (
    <Collapse orientation="horizontal" in={!smDown}>
      <Box p={2} style={{ borderRight: '1px solid #eee' }}>
        <Stack spacing={2}>
          {DEFAULT_MENU_LIST.map((menu, idx) => (
            <ButtonBase key={idx} onClick={() => _onClickMenu(menu)}>
              <Typography>{menu}</Typography>
            </ButtonBase>
          ))}
        </Stack>
      </Box>
    </Collapse>
  )
}
