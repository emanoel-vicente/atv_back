import { Query } from "pg"
import pool from "../config/db"

const getall= async()=>{
    const result= await pool.query('SELECT*FROMtipos');
    return result.rows;
};