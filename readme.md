# large_file_uploader.js
___   
Allow the browser to upload a large file by breaking the file into chunks using Javascript and jQuery.
___
#### Usage:
1. Add script tag for jQuery in the html head.
2. Add script tag for large_file_uploader.js in html head. (after jQuery)
3. Use '$Lfu' to define ajax_downlader. 

##### Example:
###### In index.html:
```
<input type="file" name="upload-file" id="upload-file">   

<div id='progress'></div>
```
###### In javascript file:
```javascript
$('#upload-file').change(function(){   
var file = this.files[0];   
$Lfu(file);   
console.log( $('#upload-file')[0].files[0] );   
});
```   
___
#### Demo:  
Visit https://jsfiddle.net/hszeto/mjtjzdwg/
