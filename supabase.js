
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  "https://tofaesmlnwwqvoyxqykg.supabase.co",
  "sb_publishable_2lgsYpjtGYdnes-18kNoHA_WdP9oW7W"
);

module.exports = supabase;
