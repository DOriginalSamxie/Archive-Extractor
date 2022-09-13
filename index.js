'use strict'

var $result = $('#result')
$('#file').on('change', function (evt) {
  // remove content
  $result.html('')
  // be sure to show the results
  $('#result_block').removeClass('hidden').addClass('show')

  // Closure to capture the file information.
  function handleFile(f) {
    var $title = $('<h4>', {
      text: f.name,
    })
    var $fileContent = $('<ul>')
    $result.append($title)
    $result.append($fileContent)
    $(function () {
      // 6 create an instance when the DOM is ready
      $('#jstree').jstree()
      // 7 bind to events triggered on the tree
      $('#jstree').on('changed.jstree', function (e, data) {
        console.log(data.selected)
      })
      // 8 interact with the tree - either way is OK
    })

    var dateBefore = new Date()
    JSZip.loadAsync(f) // 1) read the Blob
      .then(
        function (zip) {
          var dateAfter = new Date()

          $('#archive').hide()
          $('#result').show()
          $('#result1').show()

          //show the result UI div here.....$("result").show(200);
          //
          $title.append(
            $('<span>', {
              class: 'small',
              text: ' (loaded in ' + (dateAfter - dateBefore) + 'ms)',
            })
          )

          zip.forEach(function (relativePath, zipEntry) {
            // 2) print entries
            $fileContent.append(
              $('<li>', {
                text: zipEntry.name,
              })
            )
          })
        },
        function (e) {
          $result.append(
            $('<div>', {
              class: 'alert alert-danger',
              text: 'Error reading ' + f.name + ': ' + e.message,
            })
          )
        }
      )
  }

  var files = evt.target.files
  for (var i = 0; i < files.length; i++) {
    handleFile(files[i])
  }
})
function func1() {
  $('#archive').show()
  $('#result').show()
  $('#result1').hide()
}
$(function () {
  // 6 create an instance when the DOM is ready
  $('#jstree').jstree()
  // 7 bind to events triggered on the tree
  $('#jstree').on('changed.jstree', function (e, data) {
    console.log(data.selected)
  })
  // 8 interact with the tree - either way is OK
  $('#button').on('click', function () {
    $('#jstree').jstree(true).select_node('child_node_1')
    $('#jstree').jstree('select_node', 'child_node_1')
    $.jstree.reference('#jstree').select_node('child_node_1')
  })
})
