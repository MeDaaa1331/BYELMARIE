$directory = "c:\Users\bican\Desktop\BYELMARIE\original_site"
$replacementPath = "c:\Users\bican\Desktop\BYELMARIE\scratch\split_replacement.txt"

$replacement = [System.IO.File]::ReadAllText($replacementPath, [System.Text.Encoding]::UTF8)
$target = '(?s)<!-- Unified Localization Selector -->\s*<div class="nav-item loc-dropdown-wrap" id="loc-wrap">.*?</div>\s*</div>'

Get-ChildItem -Path "$directory\*.html" | ForEach-Object {
    $c = [System.IO.File]::ReadAllText($_.FullName, [System.Text.Encoding]::UTF8)
    $newContent = [System.Text.RegularExpressions.Regex]::Replace($c, $target, $replacement)
    
    if ($newContent -ne $c) {
        $utf8NoBOM = New-Object System.Text.UTF8Encoding($false)
        [System.IO.File]::WriteAllText($_.FullName, $newContent, $utf8NoBOM)
        Write-Output "Updated $($_.Name)"
    } else {
        Write-Output "Skipped or already updated: $($_.Name)"
    }
}
