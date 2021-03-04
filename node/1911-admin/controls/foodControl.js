//将数据库相关的操作抽离处理
const FoodModel = require('../db/model/foodModel')
//插入食品
let insertFood = async (obj)=>{
   let result = await FoodModel.insertMany(obj)
}
//查询全部菜品
let findFood = async (_id)=>{
    let result = await FoodModel.find({_id})
    return result
}
//删除某个菜品
let delFood = async (_id)=>{
    let result = await FoodModel.deleteOne({_id})
    return result
}
//修改数据
let updateFood = async (_id,updateInfo)=>{
    let result = FoodModel.updateOne({_id},updateInfo)
    return result
}
//分页查询
let findFoodByPage = async (page,pageSize)=>{
    let allFood = await FoodModel.find();
    //总的数据条数
    let allCount = allFood.length
    //每一页数据
    let result = await FoodModel.find().skip((Number(page)-1)*pageSize).limit(Number(pageSize))
    return {result,allCount}
}

//分类查询
let findFoodByType = async (foodType,page,pageSize)=>{
    
    let allFood = await FoodModel.find({foodType});
    //总的数据条数
    let allCount = allFood.length
    //每一页数据
    let result = await FoodModel.find({foodType}).skip((Number(page)-1)*pageSize).limit(Number(pageSize))
    return {result,allCount}
}
//关键字查询
let findFoodByKw = async (kw,page,pageSize)=>{
    //通过正则表达式匹配关键字
    let regex = new RegExp(kw)
    //满足条件的所有数据
    let allFood =await FoodModel.find({$or:[{desc:{$regex:regex}},{name:{$regex:regex}}]})
    let allCount = allFood.length
    //分页后满足关键字的数据
    let result = await FoodModel.find({$or:[{desc:{$regex:regex}},{name:{$regex:regex}}]})
    .skip(Number(page-1)*pageSize).limit(Number(pageSize))
    return {result,allCount}
}
module.exports = {findFoodByKw,findFoodByType,insertFood,findFood,delFood,updateFood,findFoodByPage}