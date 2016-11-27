$(document).ready(function(){
  // Read file
  $('#upload-file').change(function(){
    var file = this.files[0];

    // Fire up large_file_uploader.js
    $Lfu(file);

    // Log the file object
    console.log( $('#upload-file')[0].files[0] );
  });

  
});
