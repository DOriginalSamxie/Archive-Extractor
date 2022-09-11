document.querySelector('#open_file_button').addEventListener('click', check)
function check() {
  const hiddenInput = document.querySelector('#input-file')
}
// let file = new File(...FileSystem)

// // Open the file archive for reading
// Unarchiver.open(file).then(async function (archive) {
//   for (let entry of archive.entries) {
//     if (entry.is_file) {
//       // File object for archive entry
//       let entry_file = await entry.read()
//     }
//   }
// })
