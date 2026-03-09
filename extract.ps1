Add-Type -AssemblyName System.IO.Compression.FileSystem
$path = "C:\Users\jjimerod\OneDrive - NTT DATA EMEAL\Desktop\PRESENTACION SEVILLA\metodologia-Native AI.docx"
$zip = [System.IO.Compression.ZipFile]::OpenRead($path)
$entry = $zip.Entries | Where-Object { $_.FullName -eq 'word/document.xml' }
$reader = New-Object System.IO.StreamReader($entry.Open())
$xml = $reader.ReadToEnd()
$reader.Close()
$zip.Dispose()
[xml]$doc = $xml
$ns = New-Object System.Xml.XmlNamespaceManager($doc.NameTable)
$ns.AddNamespace('w','http://schemas.openxmlformats.org/wordprocessingml/2006/main')
$doc.SelectNodes('//w:p', $ns) | ForEach-Object {
    $t = ($_.SelectNodes('.//w:t', $ns) | ForEach-Object { $_.InnerText }) -join ''
    if ($t.Trim()) { Write-Output $t }
}
