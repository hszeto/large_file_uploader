;(function(global, $){
  // Create a new object
  var Lfu = function(file){
    if(file == undefined){
      alert("Missing a file object");
      return false;
    } else {
      return new Lfu.init(file);
    }
  }

  // The actual object creation
  Lfu.init = function(file){
    var self = this;

    // Set default value
    self.file = file || {};

    // Parce file by chunks
    (function(){
      var fileSize   = self.file.size;
      var chunkSize  = 64 * 1024; // bytes
      var offset     = 0;
      var chunkReaderBlock = null;

      var readEventHandler = function(event) {
        if (event.target.error == null) {
          offset += event.target.result.length;
        } else {
          console.log("Read error: " + event.target.error);
          return;
        };

        if (offset >= fileSize) {
          console.log("Done reading file");
          $('#progress').html("Finished reading...");

          var dismiss = setTimeout(function(){ // clear reading progress
            $('#progress').html("");
          }, 3000);
          return;
        };

        // Read next chunk
        $('#progress').html("Reading "+ offset + " bytes...");
        chunkReaderBlock(offset, chunkSize, self.file);
      }

      // Read a chunk of the file
      chunkReaderBlock = function(_offset, length, _file) {
        var r = new FileReader();
        var blob = _file.slice(_offset, length + _offset);
        r.onload = readEventHandler;
        r.readAsBinaryString(blob);
      }

      // Read the first block
      chunkReaderBlock( offset, chunkSize, self.file );
    })();
  }

  // Attach Lfu to the global object and provide a shorthand '$Lfu'
  global.Lfu = $Lfu = Lfu;

})(window, jQuery);