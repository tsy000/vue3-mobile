// 收货状态
export const InboundState = {
  1: '待入库',
  2: '已入库',
  3: '待收货',
  4: '已收货',
}

// 需求来源类型
export const PlanType = {
  1: '采购订单',
  // 2: '采购计划',
  2: '日料单',
}
// SRM删除标识
export const DeleteFlag = {
  0: '未删除',
  1: '已删除',
}
// 结案标识
export const CloseFlag = {
  0: '未结案',
  1: '已结案',
}
export const consignEnum = {
  0: '否',
  1: '是',
}
// export const consignEnum = [
//   {
//     label: '否',
//     value: 0,
//   },
//   {
//     label: '是',
//     value: 1,
//   },
// ]
// 生产阶段
export const ProductionPhase = {
  PRODUCTION_STAGE_1: '试制件',
  PRODUCTION_STAGE_2: '量产-JAC',
  PRODUCTION_STAGE_3: '售后配件',
}
// 订单类型
export const OrderType = {
  1: '普通订单',
  2: '寄售订单',
}

// 工作中心
export const WorkCenter = {
  ZK01Z5: '京深深向',
}
// 配送单来源
export const DeliveryOrigin = {
  1: '去掉',
}
// 入库类型
export const InboundType = {
  1: '入库',
}
