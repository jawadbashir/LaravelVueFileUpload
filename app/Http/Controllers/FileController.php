<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

class FileController extends Controller
{
    //
    public function upload(Request $request)
    {
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $path = $file->store('uploads');
            
            // Save file details to the database
            // Example: File::create(['path' => $path, 'user_id' => $request->user()->id]);
            
            return response()->json(['message' => 'File uploaded successfully']);
        }
        
        return response()->json(['error' => 'No file found in the request'], 400);
    }
   
}
