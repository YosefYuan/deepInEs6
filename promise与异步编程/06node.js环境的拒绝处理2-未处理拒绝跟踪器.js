let possiblyUnhandlerejections = new Map()

//如果一个拒绝没被处理，则将它添加到Map集合中
process.on("unhandledRejection",function (resson,promise) {

})