<?php
/**
 * API ligera para escanear y servir noticias en formato JSON.
 * Lee archivos .docx, .rtf y .txt de la carpeta /noticias/
 * 
 * Modos compatibles:
 * 1. Subcarpetas: /noticias/mi-noticia/ (contiene .docx/.rtf/.txt y una foto .jpg/.png/.webp)
 * 2. Archivos sueltos: /noticias/mi-noticia.docx y /noticias/mi-noticia.jpg
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

$noticiasDir = __DIR__ . '/../noticias';

if (!is_dir($noticiasDir)) {
    echo json_encode([]);
    exit;
}

function parseDocxText($filename) {
    $content = '';
    $zip = new ZipArchive();
    if ($zip->open($filename) === true) {
        $xmlContent = $zip->getFromName('word/document.xml');
        $zip->close();
        if ($xmlContent !== false) {
            // Reemplazar saltos de párrafo en Word <w:p> por saltos de línea
            $xmlContent = str_replace(['</w:p>', '</w:tr>'], "\n\n", $xmlContent);
            $xmlContent = str_replace('</w:r>', '', $xmlContent);
            $content = strip_tags($xmlContent);
            $content = html_entity_decode($content, ENT_QUOTES | ENT_XML1, 'UTF-8');
        }
    }
    return $content;
}

function parseRtfText($filename) {
    $text = file_get_contents($filename);
    if (!$text) return '';
    // Eliminar encabezado y tablas RTF
    $text = preg_replace('/\{\\\*\[^}]+}/', '', $text);
    $text = preg_replace('/\\\par[d]?\b/i', "\n\n", $text);
    $text = preg_replace('/\\\[a-z0-9\-]+/i', ' ', $text);
    $text = preg_replace('/[{}]/', '', $text);
    // Convertir secuencias de escape de caracteres especiales \'xx
    $text = preg_replace_callback("/\\\\'([0-9a-fA-F]{2})/", function($m) {
        return chr(hexdec($m[1]));
    }, $text);
    // Asegurar UTF-8
    if (!mb_check_encoding($text, 'UTF-8')) {
        $text = mb_convert_encoding($text, 'UTF-8', 'ISO-8859-1');
    }
    return $text;
}

function parseTxtText($filename) {
    $text = file_get_contents($filename);
    if (!$text) return '';
    if (!mb_check_encoding($text, 'UTF-8')) {
        $text = mb_convert_encoding($text, 'UTF-8', 'ISO-8859-1');
    }
    return $text;
}

$items = scandir($noticiasDir);
$articles = [];

foreach ($items as $item) {
    if ($item === '.' || $item === '..' || strpos($item, '.') === 0) continue;
    $fullPath = $noticiasDir . '/' . $item;

    $title = '';
    $body = '';
    $image = '';
    $date = filemtime($fullPath);
    $docFile = null;

    if (is_dir($fullPath)) {
        // Modo subcarpeta
        $subFiles = scandir($fullPath);
        $imgFile = null;

        foreach ($subFiles as $sf) {
            if ($sf === '.' || $sf === '..' || strpos($sf, '.') === 0) continue;
            $ext = strtolower(pathinfo($sf, PATHINFO_EXTENSION));
            if (in_array($ext, ['docx', 'rtf', 'txt']) && !$docFile) {
                $docFile = $fullPath . '/' . $sf;
                $date = filemtime($docFile);
            }
            if (in_array($ext, ['jpg', 'jpeg', 'png', 'webp', 'gif', 'svg']) && !$imgFile) {
                $imgFile = 'noticias/' . $item . '/' . $sf;
            }
        }
        $image = $imgFile ? $imgFile : 'assets/img/brand/banner-img10.png';
    } else {
        // Modo archivo suelto
        $ext = strtolower(pathinfo($item, PATHINFO_EXTENSION));
        if (in_array($ext, ['docx', 'rtf', 'txt'])) {
            $docFile = $fullPath;
            $date = filemtime($docFile);
            $baseName = pathinfo($item, PATHINFO_FILENAME);
            // Buscar imagen asociada con el mismo nombre base
            foreach (['jpg', 'jpeg', 'png', 'webp', 'gif'] as $imgExt) {
                if (file_exists($noticiasDir . '/' . $baseName . '.' . $imgExt)) {
                    $image = 'noticias/' . $baseName . '.' . $imgExt;
                    break;
                }
            }
            if (!$image) {
                $image = 'assets/img/brand/banner-img10.png';
            }
        }
    }

    if ($docFile && file_exists($docFile)) {
        $ext = strtolower(pathinfo($docFile, PATHINFO_EXTENSION));
        $rawText = '';
        if ($ext === 'docx') {
            $rawText = parseDocxText($docFile);
        } elseif ($ext === 'rtf') {
            $rawText = parseRtfText($docFile);
        } else {
            $rawText = parseTxtText($docFile);
        }

        $lines = preg_split("/\r\n|\n|\r/", trim($rawText));
        $cleanLines = [];
        foreach ($lines as $line) {
            $trimmed = trim($line);
            if ($trimmed !== '') {
                $cleanLines[] = $trimmed;
            }
        }

        if (!empty($cleanLines)) {
            $title = array_shift($cleanLines);
            $body = implode("\n\n", $cleanLines);
            $excerpt = count($cleanLines) > 0 ? (mb_substr($cleanLines[0], 0, 140) . (mb_strlen($cleanLines[0]) > 140 ? '...' : '')) : '';

            $articles[] = [
                'id' => md5($item),
                'title' => $title,
                'excerpt' => $excerpt,
                'content' => $body,
                'image' => $image,
                'date' => date('d M Y', $date),
                'timestamp' => $date
            ];
        }
    }
}

// Ordenar de más reciente a más antiguo
usort($articles, function($a, $b) {
    return $b['timestamp'] - $a['timestamp'];
});

echo json_encode($articles, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
