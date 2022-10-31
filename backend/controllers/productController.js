import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'

//retrive food items
// const getFoods = asyncHandler(async (req, res) => {
//   const food = await Food.find({})
//   res.json(food)
// })


//retrive food items by ID
const getProductbyID = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json({
      _id: product._id,
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      image: product.image,

    })
  } else {
    res.status(404)
    throw new Error('product not found')
  }
})
//create food items
/*const createFood = asyncHandler(async (req, res) => {
  const food = new Food({
      name: 'Sample name',
      description: 'must have an alt prop, either with meaningful text, or an empty string for decorative ima',
      price: 0,
      category: 'Sample category',
      image: '/images/las.jpg',
  })

  const createdFood = await food.save()
  res.status(201).json(createdFood)
})*/


// const createFood = asyncHandler(async (req, res) => {
//   const {
//     name,
//     description,
//     price,
//     category,
//     image,

//   } = req.body
//   const newfood = await Food({
//     name,
//     description,
//     price,
//     category,
//     image,

//   })
//   try {
//     await newfood.save()
//     res.send('Food Added Successfully')
//   } catch (error) {
//     return res.status(400).json({ error });
//   }
// })


// const deleteFood = asyncHandler(async (req, res) => {
//   const food = await Food.findById(req.params.id)

//   if (food) {
//     await food.remove()
//     res.json({ message: 'item removed' })
//   } else {
//     res.status(404)
//     throw new Error('Item not found')
//   }
// })

// const updateFood = asyncHandler(async(req,res) => {
//   const {
//     name,
//     description,
//     price,
//     category,
//     image,

//   } = req.body

//   const foods = await Food.findById(req.params.id)

//   if (foods) {
//     foods.name = name,
//     foods.description = description,
//     foods.price = price,
//     foods.category = category,
//     foods.image = image

//     const updateFood = await foods.save()
//     res.json(updateFood)
//   } else {
//     res.status(404)
//     throw new Error('Food Item Not found')
//   }


// })



export { getProductbyID }