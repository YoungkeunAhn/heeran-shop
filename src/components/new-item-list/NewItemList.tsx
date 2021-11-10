import React from 'react'
import { NewItemData } from '../../fake-data/main-item-list-fake-data'
import MainItemList from '../main-item-list/MainItemList'

export default function NewItemList() {
  return <MainItemList title={NewItemData.title} imageList={NewItemData.imageData} />
}
