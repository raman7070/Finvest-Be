const express = require('express');
const router = express.Router();
const itemService = require('../services/itemService');

router.get('/', async (req, res) => {
  try {
    const items = await itemService.getAllItems();
    res.status(200).json(items);
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
});

router.put('/',async(req,res)=>{
  try{
    const {updatedPrices} = req?.body
    const addRecords = await itemService.updatePrices(updatedPrices)
    res.status(200).send(addRecords);
  }
  catch(error){
    console.log(error)
    res.status(500).json(error);

  }
})
module.exports = router;
