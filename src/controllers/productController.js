exports.getProducts = async (req, res)=>{
    res.send(`Get all Products`);
};

exports.getProductById = async (req,res)=>{
    res.send(`Product Name : ${req.params.name}`);
};

exports.getProductByName = async (req , res)=>{
    res.send(`Product Name : ${req.params.name}`);
};

exports.getProductByName = async (req , res)=>{
    res.send(`Product Name : ${req.params.name}`);
};

exports.getProductPrice = async (req , res)=>{
    res.send(`Product Price : ${req.params.price}`);
};

exports.getProductAdd = async (req , res)=>{ 
    res.send(`Add a product id: ${req.body.id}, name ${req.body.name}`);
};

exports.getProductPut = async (req , res)=>{
    res.send(`Edit a product id: ${req.params.id}, name ${req.params.name}`);
};


exports.getProductPatch = async (req , res)=>{
    res.send(`Edit a product id: ${req.params.id}, name ${req.params.name}`);
};

exports.getProductDelete = async (req , res)=>{
    res.send(`Delte a product id: ${req.params.id}, name ${req.params.name}`);
};


