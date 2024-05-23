var express=require('express')
var router=express.Router();


var crudcontroler=require('./controler/crudcontroler')

router.post('/courseregister',crudcontroler.crudregister)
router.get('/coursedetail',crudcontroler.curdregdetailfind)
router.post('/coursedetaildelete/:id',crudcontroler.detaildelete)
router.get('/courseonedetailfind/:id',crudcontroler.coursedetailid)
router.put('/updatecoursedetail/:id',crudcontroler.courseupdate)
module.exports=router

