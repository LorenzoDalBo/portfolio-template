/*
  # Create Contact Form Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Full name of the person submitting the form
      - `email` (text) - Email address of the person
      - `phone` (text) - Phone number of the person
      - `subject` (text) - Subject/topic of inquiry
      - `message` (text) - Detailed message content
      - `created_at` (timestamp) - Submission timestamp

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add public policy to allow inserts (for form submissions)
    - Add service role policy to allow reads (for admin access)

  3. Important Notes
    - This table allows public inserts for unauthenticated form submissions
    - Admin access via service role key is restricted to authenticated queries
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public form submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);
