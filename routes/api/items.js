const express = require('express');
const router = express.Router();

//Item Model

const Item= require('../../models/Item');

//@route GET api/items
//@desc GET all items
//@access Public 

router.get('/', (req,res) =>{
Item.find()
.then(items => res.json(items))

});


//@route Post api/items
//@desc create a post 
//@access Public 

router.post('/', (req,res) =>{
   const newitem = new Item({
       name: req.body.name
   })

   newitem.save()
   .then(item => res.json(item));
    });


//@route DELETE api/items
//@desc Delete a item 
//@access Public 

router.delete('/:id', (req,res) =>{
   Item.findById(req.params.id)
   .then(item => item.remove().then(()=> res.json({success: true})))
   .catch(err => res.status(404).json({success:false}));
})
     

    
module.exports = router;