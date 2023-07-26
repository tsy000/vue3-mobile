// 物料状态
export const DeliveryState = {
  // 1: '待确认',
  '-1': '异常',
  2: '待出库',
  3: '已出库',
  // 4: '已收货',
}
// 配送方式
export const DeliveryMethod = {
  1: '安吉配送',
  2: '直投配送',
  3: '装胎点配送',
}

// 订单类型
export const DeliveryType = {
  1: '日料单',
  2: '看板件',
  3: '补料单',
}
export const NoautoDeliveryType = {
  4: '售后调拨',
  5: '试制调拨',
  6: '退回厂家',
}
// 产线
export const ProductionLine = {
  KC02: '总装二线',
}
// ASN送货单 -- 库存地点
export const StorageLocation = {
  Z115: '京深当日库',
  Z101: '总装当日库',
}
// 补料类别
export const ReplenishType = {
  供应商操作错误: '供应商操作错误',
  BOM不准: 'BOM不准',
  厂家少打: '厂家少打',
  设计临时要货: '设计临时要货',
  '跨日补料/补结': '跨日补料/补结',
  批量领料: '批量领料',
  排程错误: '排程错误',
  质量问题: '质量问题',
  料损: '料损',
  试装: '试装',
}
