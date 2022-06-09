
const express = require('express');
const router = require('./routes/controller').router;
//console.log(router)
//console.log(express);
const app=express();
app.use(express.json());
const PORT=process.env.PORT || 5000;
app.use("/User", router);
app.use("/*",(req,res)=>{
    res.statusCode=404;
    res.send({msg:"wrong Url..."})
})
app.listen(PORT, (req, res) => {
    console.log(`Server is listening on port ${PORT} ... http://localhost:${PORT}/`);
});
