<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Vuebnb</title>
  <link rel="stylesheet" href="node_modules/open-sans-all/css/open-sans.css">
  <link rel="stylesheet" href="node_modules/font-awesome/css/font-awesome.css">
  <link rel="stylesheet" href="{{asset('css/app.css')}}" type="text/css">
  <link rel="stylesheet" href="{{asset('css/vue-style.css')}}" type="text/css">

</head>
<body>



<div id="app">
  <listing></listing>
</div>

<script type="text/javascript">
  // console.log(($data));
  window.vuebnb_server_data = "{!! addslashes(json_encode($data)) !!}"
  // console.log(window.vuebnb_server_data);
</script>
<script src="{{ asset('js/app.js') }}"></script></body>
</html>
