const Item = require('../models/Item');

const getAllItems = async () => {
  try {
    const items = await Item.find();
    return items;
  } catch (error) {
    throw error;
  }
};

const updatePrices = async (updatedPrices) =>{

  for (const _id of Object.keys(updatedPrices)) {
    const newPrice = updatedPrices[_id];

    const filter = { _id: _id };
    const update = { $set: { price: newPrice } };

    await Item.updateOne(filter, update);
    console.log(`Updated document with _id: ${_id} to new price: ${newPrice}`);
  }
   
    return 'success'
}





module.exports = {
  getAllItems,

  

  updatePrices
};
