<script>
    import '../../app.css';

	export let data;
</script>

<h1>blog</h1>


<div class="grid grid-flow-row-dense grid-cols-3 ...">
    {#each data.summaries as { slug, title, reads, src, visited }}
        <div class="col-span-2">
            <div class="grid flex-grow card bg-base-300 rounded-box place-items-center">
                <div class="card bg-base-100 shadow-xl">
                    <figure><img src={src} alt="Shoes" /></figure>
                    <div class="card-body">
                      <h2 class="card-title">
                        <ul>
                            <li><a href="/blog/{slug}">{title}</a></li>
                        </ul>
                        <div class="badge badge-secondary">NEW</div>
                      </h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions justify-end">
                        <div class="badge badge-outline">{visited}</div> 
                        <div class="badge badge-outline">{reads} Reads</div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    {/each}
</div>

