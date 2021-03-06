const express = require("express")
const dealcontroller = require('../controller/dcontroller');
const router = express.Router();
const axios = require('axios')
// const middleware = require('../middleware/middle');

/**
 * @swagger
 * /dealer:
 *   get:
 *     responses:
 *       200:
 *         description: "all dealer"
 */
 router.get('/', dealcontroller.dealerAll);


//  router.get('/crop', dealcontroller.cropdetails);

 /**
  * @swagger
  * /dealer/register:
  *   post:
  *     requestBody:
  *       content:
  *         application/json: 
  *             schema:
  *                type: object
  *     responses:
  *       200:
  *         description: post
  */
 
 router.post("/register", dealcontroller.postDeal);

 router.get('/crop/get',(req,res)=>{
    axios.get('http://localhost:7000/crop/').then((response)=>{
        res.send(response.data)
    }).catch((error)=>{
        console.log(error);
    })
})

 router.get('/crop/:id',(req,res)=>{
    const id = req.params.id
    axios.get('http://localhost:7000/crop/'+id).then((response)=>{
        res.send(response.data);
    }).catch((error)=>{
        console.log(error);
    })
})

 
 /**
  * @swagger
  * /dealer/login:
  *   post:
  *     requestBody:
  *       content:
  *         application/json: 
  *             schema:
  *                type: object
  *     responses:
  *       200:
  *         description: post
  */

 router.post("/login",dealcontroller.deallogin);

 router.post("/cropcart",dealcontroller.cartpost);
 
 /**
  * @swagger
  * /dealer/{id}:
  *   get:
  *     parameters:
  *       - in: path
  *         name: id
  *         type: string
  *     description: dealer get by id
  *     responses:
  *        "200":
  *         description: get dealer by id
  */
 
router.get('/:id', dealcontroller.dealerbyid);
 
// router.get('/getcrop',dealcontroller.viewallcrop);


 
 /**
  * @swagger
  * /dealer/{id}:
  *   patch:
  *     parameters:
  *      - in: path
  *        name: id
  *        type: string
  *     requestBody:
  *       content:
  *         application/json: 
  *             schema:
  *                type: object
  *     responses:
  *       200:
  *         description: patch dealer by id
  */
 router.patch('/:id', dealcontroller.deal_patch);
 
 /**
  * @swagger
  * /dealer/{id}:
  *   delete:
  *     summary: delete a dealer
  *     parameters:
  *       - in: path
  *         name: id
  *         type: string
  *     responses:
  *         200:
  *           description: delete by id
  */
 router.delete('/:id', dealcontroller.deal_delete);
 
 // router.get('/', (req, res) => {
 //     res.send('Hello dealer here');
 //   })
 
 module.exports = router;