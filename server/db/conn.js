
const mongoose=require('mongoose');
const MONGODB_URL='mongodb+srv://root:anandkush123@cluster0.we96occ.mongodb.net/student?retryWrites=true&w=majority'
mongoose.connect(MONGODB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
}).then(()=>{
    console.log(`Db connceted sucessfully`)
}).catch((err)=>console.log(`no connect err=`,`${err}`))