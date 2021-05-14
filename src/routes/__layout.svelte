<script lang="ts">
    import Header from "$lib/Header/index.svelte";
    import Footer from "$lib/Footer/index.svelte";

    import "../style/css/main.minify.css";
    import "../style/css/style.minify.css";
    import "../style/css/vendors/animateit/css3-animate-it.css";
</script>

<div id="main-body" class="dark" data-spy="scroll" data-target="#mainmenu" data-offset="80">
    <Header />

    <main>
        <slot />
    </main>

    <Footer />

    <!-- Preloader  -->
    <div id="preloader">
        <ul class="loader">
            <li>
                <span class="cssload-loading cssload-one" />
                <span class="cssload-loading cssload-two" />
                <span class="cssload-loading-center" />
            </li>
        </ul>
        <div class="loader-section loader-top" />
        <div class="loader-section loader-bottom" />
    </div>
</div>
