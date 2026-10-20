import { createClient } from "@supabase/supabase-js";
import dotenv from 'dotenv/config';

const conn = createClient({
    host: process.env.SUPABASE_URL,
    credential: process.env.SUPABASE_KEY
});

export default conn;