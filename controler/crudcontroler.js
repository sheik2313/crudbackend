var crudschema=require('../model/crudeschema')

var crudregister=async(req,res)=>{
    const registerdetail=new crudschema({
        studentname:req.body.studentname,
        coursename:req.body.coursename,
        duration:req.body.duration

    });
    await registerdetail.save()
    .then((data)=>{
        res.json({
            status:200,
            msg:"course detail saved",
            data:data
        })
    })
    .catch((err)=>{
        res.json({
            status:400,
            msg:"detail not saved",
            err:err
        })
        
    })

}

var curdregdetailfind=(req,res)=>{
    crudschema.find({})
    .then((data)=>{
        res.json({
            status:200,
            msg:"details found",
            data:data

        })
    })
    .catch((err)=>{
        res.json({
            status:400,
            msg:"not found",
            err:err
        })
    })

}
var detaildelete=(req,res)=>{
    const id=req.params.id
    crudschema.findByIdAndDelete(id)
    .then((res)=>{
        res.json({
            status:200,
            msg:"detail deleted",
            data:data
        })
    })
    .catch((err)=>{
        res.json({
            status:400,
            msg:"not deleted",
            err:err
        })
    })

}
var coursedetailid=(req,res)=>{
    const id=req.params.id
    crudschema.findById(id)
    .then((data)=>{
        res.json({
            status:200,
            msg:"id found",
            data:data
        })
    })
    .catch((err)=>{
        res.json({
            status:400,
            msg:"id not found",
            err:err
        })
    })
}
const courseupdate=(req,res)=>{
   const id=req.params.id
    const{studentname,coursename,duration}=req.body
   crudschema.findByIdAndUpdate(id,{studentname,coursename,duration})
    .then((data)=>{
        res.json({
             status:200,
           msg:"profile updated",
            data:data
         })
    })
   .catch((err)=>{
         res.json({
             status:200,
            msg:"not updated",
            err:err
       })
   })

 }

    module.exports= { crudregister,curdregdetailfind,detaildelete,coursedetailid,courseupdate };


