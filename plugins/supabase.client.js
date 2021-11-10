import { createClient } from '@supabase/supabase-js'

export default async function( { store } ) {
  const supabaseUrl = 'https://oohowwwejqolkdzhbpjy.supabase.co'
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjE5NzkwNywiZXhwIjoxOTUxNzczOTA3fQ.wwbz_Lt-5qs8r5gEHp0TqJcxS7l1OkKCN8SU-XoIjUw' /* process.env.SUPABASE_KEY */
  const supabase = createClient(supabaseUrl, supabaseKey)
  await store.dispatch("initializeSupaBase", supabase);
}
