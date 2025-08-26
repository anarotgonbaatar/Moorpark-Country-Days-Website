import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

// Singleton client for the browser
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        persistSession: true,          // keeps user logged in
        autoRefreshToken: true,        // refresh JWT automatically
        detectSessionInUrl: true       // handle magic-link callbacks
    },
    global: {
        fetch: fetch                    // Vite/Browser fetch
    }
})
