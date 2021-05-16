<script context="module" lang="ts">
    export const prerender = true;
</script>

<script lang="ts">
    import { contractAddress, contractDecimal, contractSymbol } from "$lib/contract-info";
    import Airdrop from "$lib/Airdrop/index.svelte";
    import BuyToken from "$lib/BuyToken/index.svelte";
    import Referral from "$lib/Referral/index.svelte";
    import { WEB_DOMAIN, TOTAL_RAISED } from "$lib/Env.svelte";
    import { ethStore, web3, connected, selectedAccount } from "$lib/web3";
    import { onMount } from "svelte";

    let referralAddress = ""; // $page.query.get("ref");
    $: validReferralAddress = $web3.utils && $web3.utils.isAddress(referralAddress) ? referralAddress : "0x0000000000000000000000000000000000000000";
    onMount(() => {
        const urlParams = new URLSearchParams(window.location.search);
        referralAddress = urlParams.get("ref");
    });

    const setWatchWallet = async () => {
        await ethStore
            .setWatchAsset({
                address: contractAddress,
                symbol: contractSymbol,
                decimals: contractDecimal,
                image: `${WEB_DOMAIN}/img/icon.png`,
            })
            .catch((e) => console.log(e));
    };
</script>

<svelte:head>
    <title>Gold Chain - Leading Decentralized Ecosystem in DeFi and Stake Sharing. Generate passive daily income while staking your tokens</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.3.5/web3.min.js"></script>
</svelte:head>
<section id="services" class="services pt-5 text-center">
    <!--Banner/Hero Slider-->
    <div class="banner">
        <!--Banner Container-->
        <div class="container">
            <div class="bnr-cnt">
                <div class="row">
                    <div class="col-lg-6 animatedParent animateOnce" data-sequence="250">
                        <!--bnr-head-->
                        <!--End bnr-head-->
                        <!--ico-countdown-->
                        <div class="ico-countdown text-center px-5 py-4 my-5 animated fadeInLeftShort go" data-id="2">
                            <h4>ICO Ends in</h4>
                            <div class="countdown my-4">
                                <div class="row" data-date="2021/09/05"><!--Append timer--></div>
                            </div>
                            <div class="ico-progress">
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 80%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" />
                                    <span class="level-1" style="left:20%">Phase 1</span>
                                    <span class="level-2" style="left:50%">Phase 2</span>
                                    <span class="level-3" style="left:80%">Phase 3</span>
                                </div>
                            </div>
                            <div class="ico-totalr pt-2 text-white">Total Raised : {TOTAL_RAISED} $</div>
                        </div>

                        <!--End ico-countdown-->

                        <div class="form">
                            <div>
                                <div>
                                    <p>
                                        <i
                                            id="connector"
                                            class="fa fa-circle mr-1 {$connected ? 'txt-success' : 'text-danger'}"
                                            title=""
                                            data-toggle-second="tooltip"
                                            data-original-title={$connected ? "Connected" : "Connect to Web3"}
                                        />
                                        {#if $connected}
                                            Connected - Web3 [{$selectedAccount}]
                                            <button class="btn btn-ico btn-block" on:click={setWatchWallet}>Add {contractSymbol} to your Wallet</button>
                                        {:else}
                                            <button class="btn btn-ico btn-block" on:click={ethStore.setBrowserProvider}>Connect to Web3</button>
                                        {/if}
                                    </p>
                                </div>
                                <Referral />
                                <div class="form-group">
                                    <input
                                        class={"form-control ico-form"}
                                        name="text"
                                        bind:value={referralAddress}
                                        aria-label="Referral Address"
                                        placeholder="Invite By (BEP20 Address)"
                                    />
                                </div>
                                <Airdrop referralAddress={validReferralAddress} />
                                <BuyToken referralAddress={validReferralAddress} />
                            </div>
                        </div>
                    </div>
                    <!--End ico-countdown-->

                    <div class="col-lg-6 bnr-image-wrap animatedParent animateOnce">
                        <!--bnr-image-->
                        <div class="bnr-image animated fadeInRightShort delay-250 go">
                            <img src="img/banner1.webp" />
                        </div>
                        <!--End bnr-image-->
                    </div>
                </div>
            </div>
        </div>

        <!--End Banner Container-->
    </div>
    <!--End Banner/Hero Slider-->
</section>
<!-- End features Section -->

<!-- End features Section -->
<section id="services" class="services pt-5 text-center">
    <div class="container">
        <div class="animatedParent animateOnce">
            <h2 class="animated fadeInUpShort">We ensure best services = In short, here is the Deal!</h2>
            <div class="service-des py-1 animated fadeInUpShort delay-250">
                <p>

                </p>
            </div>
        </div>
        <div class="service-items row py-2  animatedParent animateOnce" data-sequence="250">
            <div class="col-sm-6 col-md-4 py-5 animated fadeInUpShort delay-250" data-id="1">
                <div class="icon"><img src="img/ftIcon-1.webp" alt="Mobile app" /></div>
                <h5 class="pt-5">Decentralised</h5>
                <p class="small"></p>
            </div>
            <div class="col-sm-6 col-md-4 py-5 animated fadeInUpShort delay-250" data-id="2">
                <div class="icon"><img src="img/ftIcon-2.webp" alt="Mobile app" /></div>
                <h5 class="pt-5">No DEV coin dumping. 100% community powered</h5>
                <p class="small"></p>
            </div>
            <div class="col-sm-6 col-md-4 py-5 animated fadeInUpShort delay-250" data-id="3">
                <div class="icon"><img src="img/ftIcon-3.webp" alt="Mobile app" /></div>
                <h5 class="pt-5">Safe and sound</h5>
                <p class="small">Smart contract. Immutable source code.</p>
            </div>
            <div class="col-sm-6 col-md-4 py-5 animated fadeInUpShort delay-250" data-id="4">
                <div class="icon"><img src="img/ftIcon-4.webp" alt="Mobile app" /></div>
                <h5 class="pt-5">Chain of Gold. Chain of Wealth</h5>
                <p class="small">By holding GoldChain, you are doing your part to create, build, grow and accumulate wealth for life with a juicy airdrop right from the start.</p>
            </div>
            <div class="col-sm-6 col-md-4 py-5 animated fadeInUpShort delay-250" data-id="5">
                <div class="icon"><img src="img/ftIcon-5.webp" alt="Mobile app" /></div>
                <h5 class="pt-5">Credit Card Use</h5>
                <p class="small">Coming soon...</p>
            </div>
            <div class="col-sm-6 col-md-4 py-5 animated fadeInUpShort delay-250" data-id="6">
                <div class="icon"><img src="img/ftIcon-6.webp" alt="Mobile app" /></div>
                <h5 class="pt-5">Multicurrency Wallet</h5>
                <p class="small">Coming soon...</p>
            </div>
        </div>
    </div>
</section>
<!-- End features Section -->

<section id="faqs" class="faq py-4 text-center">
    <div class="container">
        <div class="animatedParent animateOnce">
            <h2 class="animated fadeInUpShort">GoldChain Chain of Gold. Chain of Wealth</h2>
        </div>
        <div class="accordion py-4 animatedParent animateOnce" data-sequence="250">
            <div class="faq-item animated fadeInUpShort delay-250" data-id="1">
                <h6 class="collapsed" data-toggle="collapse" data-target="#faq1" aria-expanded="true">Before we begin, why are we here?</h6>
                <div id="faq1" class="collapse">
                    <p>
                        We all want to be rich. We all want to taste the sweetness of the rewards of being rich. Or even if you are already wealthy; more than that, you want to enjoy the sustainable wealth. No matter where we are, climbing that money tree, we all want to have the chain of wealth that keeps on generating and accumulating value while we are doing our stuff. Whatever that “stuff” is!
                    </p>
                </div>
            </div>
            <div class="faq-item animated fadeInUpShort" data-id="2">
                <h6 data-toggle="collapse" data-target="#faq2" aria-expanded="true">Who we are</h6>
                <div id="faq2" class="collapse show">
                    <p>
                        GoldChain is a wealth generating and accumulating decentralised community-based cryptocurrency, which aims to create a chain of value to coin holders.
                    </p>
                </div>
            </div>

            <div class="faq-item animated fadeInUpShort" data-id="4">
                <h6 class="collapsed" data-toggle="collapse" data-target="#faq4" aria-expanded="true">Sneak peek!!! Do you know that there is the term “money tree” for a reason?</h6>
                <div id="faq4" class="collapse">
                    <p>
                        Tree grows leaves. Leaves pull in CO2 and release Oxygen in the process (Sure! Sure! Primary school knowledge, who doesn’t know that!)
Think about creating and accumulating wealth as our money trees grow leaves. One leaf does not mean much, yet a tree full of leaves and a forest full of trees will create and accumulate worthwhile value. 
What’s best! We don’t use tree as a metaphor. Through our confirmed partnership program, coinholders are members of the community that will contribute to grow more trees for every more dollar we make. Our community prospers with GoldChain and the world we live in will be happier with more trees. We meant it when we said “money tree”; and do stay long enough to be a part of that. Guarantee, we will all feel better in this journey.

                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- End features Section -->
<!-- roadmap Section -->
<section id="roadmap" class="roadmap py-4">
    <div class="container">
        <div class="animatedParent animateOnce">
            <h2 class=" animated fadeInUpShort">Our Strategy and Project Plan <span>Road Map</span></h2>
        </div>
        <div class="rmap-wrap">
            <div class="animatedParent animateOnce"><div class="rmap-year finished animated fadeInUpShort">2021</div></div>
            <div class="rmap-items row no-gutters animatedParent animateOnce" data-sequence="250">
                <div class="col-md-6 rmap-item finished animated fadeInUpShort delay-250" data-id="1">
                    <div class="rmap-item-details row no-gutters">
                        <div class="col-md"><h6>Wealth Creation</h6></div>
                        <div class="col-md-5"><span class="date"> January, 2021 </span></div>
                        <p class="small">
                            Website Launch <br/>
                            Social Media: Telegram, Twitter, Facebook, Instagram, Tiktok, Discord, Subreddit <br/>
                            Pancake Swap Listing <br/>
                            CoinGecko Listing <br/>
                            CoinMarketCap Listing <br/>
                            5,000 Holders <br/>
                        </p>
                        <div class="rmap-item-sets">
                            <span class="rmap-circle"><span /></span>
                        </div>
                    </div>
                </div>
                <!--rmap-item-->
                <div class="col-md-6 rmap-item finished animated fadeInUpShort" data-id="2">
                    <div class="rmap-item-details row no-gutters">
                        <div class="col-md"><h6>Private Presale</h6></div>
                        <div class="col-md-5"><span class="date"> January, 2021 </span></div>
                        <p class="small">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                        <div class="rmap-item-sets">
                            <span class="rmap-circle"><span /></span>
                        </div>
                    </div>
                </div>
                <!--rmap-item-->
                <div class="col-md-6 rmap-item finished animated fadeInUpShort" data-id="3">
                    <div class="rmap-item-details row no-gutters">
                        <div class="col-md"><h6>Private Presale</h6></div>
                        <div class="col-md-5"><span class="date"> January, 2021 </span></div>
                        <p class="small">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                        <div class="rmap-item-sets">
                            <span class="rmap-circle"><span /></span>
                        </div>
                    </div>
                </div>
                <!--rmap-item-->
                <div class="col-md-6 rmap-item active animated fadeInUpShort" data-id="3">
                    <div class="rmap-item-details row no-gutters">
                        <div class="col-md"><h6>Private Presale</h6></div>
                        <div class="col-md-5"><span class="date"> January, 2021 </span></div>
                        <p class="small">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                        <div class="rmap-item-sets">
                            <span class="rmap-circle"><span /></span>
                        </div>
                    </div>
                </div>
                <!--rmap-item-->
                <div class="col-md-6 rmap-item animated fadeInUpShort" data-id="5">
                    <div class="rmap-item-details row no-gutters">
                        <div class="col-md"><h6>Private Presale</h6></div>
                        <div class="col-md-5"><span class="date"> January, 2021 </span></div>
                        <p class="small">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                        <div class="rmap-item-sets">
                            <span class="rmap-circle"><span /></span>
                        </div>
                    </div>
                </div>
                <!--rmap-item-->
                <div class="col-md-6 rmap-item animated fadeInUpShort" data-id="6">
                    <div class="rmap-item-details row no-gutters">
                        <div class="col-md"><h6>Private Presale</h6></div>
                        <div class="col-md-5"><span class="date"> January, 2021 </span></div>
                        <p class="small">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                        <div class="rmap-item-sets">
                            <span class="rmap-circle"><span /></span>
                        </div>
                    </div>
                </div>
                <!--rmap-item-->

                <div class="col-md-12 invisible" />
                <div class="col-md-12 rmap-item animated fadeInUpShort" data-id="7"><div class="rmap-year finished">2021</div></div>

                <div class="col-md-6 rmap-item animated fadeInUpShort" data-id="8">
                    <div class="rmap-item-details row no-gutters">
                        <div class="col-md"><h6>Private Presale</h6></div>
                        <div class="col-md-5"><span class="date"> January, 2021 </span></div>
                        <p class="small">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                        <div class="rmap-item-sets">
                            <span class="rmap-circle"><span /></span>
                        </div>
                    </div>
                </div>
                <!--rmap-item-->
                <div class="col-md-6 rmap-item animated fadeInUpShort" data-id="9">
                    <div class="rmap-item-details row no-gutters">
                        <div class="col-md"><h6>Private Presale</h6></div>
                        <div class="col-md-5"><span class="date"> January, 2021 </span></div>
                        <p class="small">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                        <div class="rmap-item-sets">
                            <span class="rmap-circle"><span /></span>
                        </div>
                    </div>
                </div>
                <!--rmap-item-->
                <div class="col-md-6 rmap-item animated fadeInUpShort" data-id="10">
                    <div class="rmap-item-details row no-gutters">
                        <div class="col-md"><h6>Private Presale</h6></div>
                        <div class="col-md-5"><span class="date"> January, 2021 </span></div>
                        <p class="small">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                        <div class="rmap-item-sets">
                            <span class="rmap-circle"><span /></span>
                        </div>
                    </div>
                </div>
                <!--rmap-item-->
            </div>
            <!-- End rmap-items -->
            <a href="#roadmap" class="rmap-end-btn"><i class="fas fa-angle-up" /></a>
        </div>
        <!--rmap-wrap-->
    </div>
    <!--container-->
</section>
<!-- End roadmap Section -->
<!-- faq Section -->
<!-- End faq Section -->
<!-- contact Section -->
<section id="contact" class="contact py-4 animatedParent animateOnce">
    <div class="container">
        <h2 class="animated fadeInUpShort">Get In Touch <span>Contact</span></h2>
        <div class="row py-4 animated fadeInUpShort delay-500">
            <div class="contact-form col-lg-12">
                <form id="contactForm" action="mail/contact.php" method="post">
                    <div class="formReturn" />
                    <div class="form-group">
                        <input name="contactName" type="text" class="form-control ico-form" placeholder="Name" required />
                    </div>
                    <div class="form-group">
                        <input name="contactEmail" type="email" class="form-control ico-form" placeholder="Email" required />
                    </div>
                    <div class="form-group">
                        <input name="contactSubject" type="text" class="form-control ico-form" placeholder="Subject" required />
                    </div>
                    <div class="form-group">
                        <textarea name="contactName" class="form-control ico-form" rows="3" required placeholder="Brief" />
                    </div>

                    <button type="submit" class="btn btn-ico btn-block my-5">Submit</button>
                </form>
            </div>
        </div>
    </div>
</section>
<!-- End contact Section -->
