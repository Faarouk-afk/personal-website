<script>
    import '../../app.css';
    import cuteData from '$lib/assets/cute-data.jpg';
    import cuteStudyTools from "$lib/assets/cute-study-tools.jpg";
</script>

<!-- real hero -->
<div class="hero min-h-screen" style="background-image: url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg);">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">Apply state of the art methods to your business</h1>
        <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <button class="btn btn-primary">Get Started</button>
      </div>
    </div>
</div>


<!-- after hero -->
<div class="grid grid-cols-2 gap-0.5">
    <div class="grid flex-grow card bg-base-300 rounded-box place-items-center">
        <div><img src={cuteData} alt="cute data" class="max-w-l rounded-lg shadow-2xl" /></div>
        Analytics and data driven startegy
    </div>
    <div class="grid flex-grow card bg-base-300 rounded-box place-items-center">
        <div><img src={cuteStudyTools} alt="cute data" class="max-w rounded-lg shadow-2xl" /></div>
        Developp your website or App like its 2099
    </div>
</div>