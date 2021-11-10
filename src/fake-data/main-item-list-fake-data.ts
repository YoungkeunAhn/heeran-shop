export type ImageListType = {
  title: string
  info: string
  image: string
  price: number
  sale?: number
}
export type MainItemListType = {
  title: string
  imageData: ImageListType[]
}

export const BestItemData: MainItemListType = {
  title: 'BEST ITEMS',
  imageData: [
    {
      title: '[새벽배송] ♡빼빼로데이♡ 플라워 꽃풍선 & 빼빼로 set',
      info: '연인, 부모님, 지인들에게 편하게 선물할 수 있는 상품입니다.',
      image: 'http://snowfoxflowers.com/web/product/small/202111/7143f108f277c4198ea089fe562e4a28.jpg',
      price: 30000,
    },
    {
      title: '[새벽배송] ♡빼빼로데이♡ 목화 꽃다발 & 빼빼로 4개 set',
      info: '연인, 부모님, 지인들에게 편하게 선물할 수 있는 상품입니다.',
      image: 'http://snowfoxflowers.com/web/product/small/202111/0806a13d156e4ee33c6526019bcf19f5.jpg',
      price: 40000,
      sale: 30000,
    },
    {
      title: '[새벽배송] ♡빼빼로데이♡ 플라워베어 M 빼빼로 or 꽃다발 set',
      info: '연인, 부모님, 지인들에게 편하게 선물할 수 있는 상품입니다.',
      image: 'http://snowfoxflowers.com/web/product/small/202111/1b5c606e0e954334253b40104949d274.jpg',
      price: 30000,
    },
    {
      title: '[새벽배송] ♡빼빼로데이♡ 플라워베어S & 빼빼로 set',
      info: '연인, 부모님, 지인들에게 편하게 선물할 수 있는 상품입니다.',
      image: 'http://snowfoxflowers.com/web/product/small/202111/eaea11d798cf130d1b801391db46a133.jpg',
      price: 35000,
      sale: 30000,
    },
  ],
}

export const NewItemData: MainItemListType = {
  title: 'NEW ITEMS',
  imageData: [
    {
      title: '[새벽배송] ♡빼빼로데이♡ 플라워 꽃풍선 & 빼빼로 set',
      info: '연인, 부모님, 지인들에게 편하게 선물할 수 있는 상품입니다.',
      image: 'http://snowfoxflowers.com/web/product/small/202111/7143f108f277c4198ea089fe562e4a28.jpg',
      price: 30000,
    },
    {
      title: '[새벽배송] ♡빼빼로데이♡ 목화 꽃다발 & 빼빼로 4개 set',
      info: '연인, 부모님, 지인들에게 편하게 선물할 수 있는 상품입니다.',
      image: 'http://snowfoxflowers.com/web/product/small/202111/0806a13d156e4ee33c6526019bcf19f5.jpg',
      price: 40000,
    },
    {
      title: '[새벽배송] ♡빼빼로데이♡ 플라워베어 M 빼빼로 or 꽃다발 set',
      info: '연인, 부모님, 지인들에게 편하게 선물할 수 있는 상품입니다.',
      image: 'http://snowfoxflowers.com/web/product/small/202111/1b5c606e0e954334253b40104949d274.jpg',
      price: 30000,
    },
    {
      title: '[새벽배송] ♡빼빼로데이♡ 플라워베어S & 빼빼로 set',
      info: '연인, 부모님, 지인들에게 편하게 선물할 수 있는 상품입니다.',
      image: 'http://snowfoxflowers.com/web/product/small/202111/eaea11d798cf130d1b801391db46a133.jpg',
      price: 35000,
    },
  ],
}
