import React from 'react'
import MainItemList from '../main-item-list/MainItemList'
import { BestItemData } from '../../fake-data/main-item-list-fake-data'

export default function BestItemList() {
  return <MainItemList title={BestItemData.title} imageList={BestItemData.imageData} />
}
