import express from 'express';

const router=express.Router();
router.get('/',(req,res)=>{
    res.json({Mensagem:'Rota de plantas funcionamento'});
});
export default router;