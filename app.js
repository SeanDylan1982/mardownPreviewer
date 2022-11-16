function updatePreview() {
  document.getElementById('preview').innerHTML = marked.parse(document.getElementById('editor').value);
}