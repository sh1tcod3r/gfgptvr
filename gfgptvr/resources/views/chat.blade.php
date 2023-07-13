<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    <title>GfGPTVR</title>
    <style>
        body {
            margin: 0;
            font-family: Figtree, serif;
        }
        #record {
            position: absolute;
            color: white;
            font-size: 1.5em;
            left: 0.5em;
            top: 0.5em;
        }
        #topLink {
            position: absolute;
            font-size: 1em;
            left: 1em;
            top: 3em;
            color: black;
        }
        .txt {
            display: inline-block;
            position: absolute;
            color: white;
            opacity: 0.7;
            font-size: 1.5em;
            left: 50%;
            transform: translateX(-50%);
            background: red;
            bottom: 4em;
        }
    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script type="module" crossorigin src="/index-4eebe0eb.js"></script>
    <script>window.rUrl = '/r'</script>
</head>
<body>


<div id="record">press R to record</div>
<a href="{{route('dashboard')}}" id="topLink"> <- back</a>
<div id="interim" class="txt"></div>
<div id="final" class="txt"></div>

<script src="https://code.responsivevoice.org/responsivevoice.js?key=03cTnKPM"></script>


</body>
</html>
