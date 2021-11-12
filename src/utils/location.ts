type commonObject = {
  name: string,
  value: string | number | null
}
export const taiwanLocation: commonObject[] = [
  {
    name: '所有縣市',
    value: ''
  },
  {
    name: '臺北市',
    value: 'Taipei'
  },
  {
    name: '新北市',
    value: 'NewTaipei'
  },
  {
    name: '桃園市',
    value: 'Taoyuan'
  },
  {
    name: '臺中市',
    value: 'Taichung'
  },
  {
    name: '臺南市',
    value: 'Tainan'
  },
  {
    name: '高雄市',
    value: 'Kaohsiung'
  },
  {
    name: '基隆市',
    value: 'Keelung'
  },
  {
    name: '新竹市',
    value: 'Hsinchu'
  },
  {
    name: '新竹縣',
    value: 'HsinchuCounty'
  },
  {
    name: '苗栗縣',
    value: 'MiaoliCounty'
  },
  {
    name: '彰化縣',
    value: 'ChanghuaCounty'
  },
  {
    name: '南投縣',
    value: 'NantouCounty'
  },
  {
    name: '雲林縣',
    value: 'YunlinCounty'
  },
  {
    name: '嘉義縣',
    value: 'ChiayiCounty'
  },
  {
    name: '嘉義市',
    value: 'Chiayi'
  },
  {
    name: '屏東縣',
    value: 'PingtungCounty'
  },
  {
    name: '宜蘭縣',
    value: 'YilanCounty'
  },
  {
    name: '花蓮縣',
    value: 'HualienCounty'
  },
  {
    name: '臺東縣',
    value: 'TaitungCounty'
  },
  {
    name: '金門縣',
    value: 'KinmenCounty'
  },
  {
    name: '澎湖縣',
    value: 'PenghuCounty'
  },
  {
    name: '連江縣',
    value: 'LienchiangCounty'
  },
];

export const sightSubCategory: commonObject[] = [
  {
    name: '所有類別',
    value: 0
  },
  {
    name: '文化類',
    value: 1
  },
  {
    name: '自然風景類',
    value: 2
  },
  {
    name: '生態類',
    value: 3
  },
  {
    name: '國家風景區類',
    value: 4
  }, 
  {
    name: '遊憩類',
    value: 5
  },
  {
    name: '古蹟類',
    value: 6
  },
  {
    name: '觀光工廠類',
    value: 7
  },
  {
    name: '廟宇類',
    value: 8
  },
  {
    name: '休閒農業類',
    value: 9
  },
  {
    name: '體育健身類',
    value: 10
  }
];

export const eventSubCategory: commonObject[] = [
  {
    name: '所有類別',
    value: 0
  },
  {
    name: '年度活動',
    value: 1
  },
  {
    name: '藝文活動',
    value: 2
  },
  {
    name: '節慶活動',
    value: 3
  },
  {
    name: '其他',
    value: 4
  },
];