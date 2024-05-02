import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://aiwsvtubgvbtyjbaadvx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpd3N2dHViZ3ZidHlqYmFhZHZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ2MTI1MTAsImV4cCI6MjAzMDE4ODUxMH0.9yXURt8WsTsBlx8heylSRtN-gIJsyZWaTqCNu5qpfCY'
const supabase = createClient(supabaseUrl, supabaseKey)
// password: UijYZCp7wVWLf73Y 

export default supabase