import pool from '../config/mysql.js';
import { RowDataPacket } from 'mysql2';
export interface Comment extends RowDataPacket {
  id?: number;
  recipe_id: string;
  name: string;
  comment: string;
  created_at?: string;
}

export const getCommentById = async(id:string): Promise<Comment | null> => {
    const [rows] = await pool.execute<Comment[]>("SELECT * FROM comments WHERE id = ?" , [id]);
    return rows[0] || null;
}
