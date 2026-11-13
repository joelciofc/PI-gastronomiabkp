import { createClient } from "@supabase/supabase-js";
import 'dotenv/config';

const connAdimin = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY,
    {
        auth:{
            autoRefreshToken: false,
            detectSessionInUrl: false,
            persistSession: false
        }
    }
);

const conn = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
);

export {
    connAdimin
};

export default conn;