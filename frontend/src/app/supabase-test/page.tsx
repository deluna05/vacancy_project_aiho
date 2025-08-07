"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function SupabaseTestPage() {
  const supabase = createClientComponentClient();

  const checkConnection = async () => {
    try {
      // 1. Test basic connection by reading from the table
      const { data: existingData, error: readError } = await supabase
        .from('test_table')
        .select('*');

      if (readError) {
        console.error("Read error:", readError);
        throw new Error(`Database connection failed: ${readError.message}`);
      }

      console.log("Successfully connected to database!");
      console.log("Existing records:", existingData?.length || 0);

      // 2. Insert test data
      const { error: insertError } = await supabase
        .from('test_table')
        .insert([{
          test_name: `Test at ${new Date().toLocaleTimeString()}`
        }]);

      if (insertError) {
        console.error("Insert error:", insertError);
        throw new Error(`Failed to insert data: ${insertError.message}`);
      }

      // 3. Read updated data
      const { data: newData } = await supabase
        .from('test_table')
        .select('*');

      alert(`✅ Success! Database connection working.\nRecords before: ${existingData?.length || 0}, after: ${newData?.length}`);
    } catch (error) {
      console.error("Error details:", error);
      alert(`❌ Failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Supabase Connection Test</h1>
      <p className="mb-4 text-gray-600">
        This page tests your Supabase database connection and the test_table.
      </p>
      <button 
        onClick={checkConnection}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Test Database Connection
      </button>
    </div>
  );
}