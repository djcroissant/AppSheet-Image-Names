function renameFile(filepath, newName) {
  
  // Relative filepath is in the following format: folder_name/file_name.ext
  // Split on the slash and grab the file_name
  // Then split on the dot and grab the extension type
  var path = filepath.split('/')[0];
  var filename = filepath.split('/')[1];
  var ext = filename.split('.').pop();

  // Get the file object based on its name
  // Update the file name
  // Then return the new name back to AppSheet
  var file = DriveApp.getFilesByName(filename).next();
  file.setName(newName + '.' + ext);
  return path + '/' + newName + '.' + ext;
}
