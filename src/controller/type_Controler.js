import typeModel from '../config/model/typeModel.js';

const getAll = async (req, res)=>{
    const types =await typeModel.getAll;
    res.json(types);
};
 export default{getAll};