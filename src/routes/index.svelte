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
    <title>GoldChainX is a wealth generating and accumulating decentralised community-based cryptocurrency, which aims to create a chain of value to token holders.</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.3.5/web3.min.js"></script>
</svelte:head>


<section id="intro" class="faq py-4 text-center">
    <div class="container">
        <div class="accordion py-4 animatedParent animateOnce">
            <div class="faq-item animated fadeInUpShort" data-id="1">
                <h6 class="collapsed" data-toggle="collapse" data-target="#faq1" aria-expanded="true">Before we begin, why are we here?</h6>
                <div id="faq1" class="collapse">
                    <p>
                        We all want to be rich. We all want to taste the sweetness of the rewards of being rich. Or even if you are already wealthy; more than that, you want to enjoy the sustainable wealth. No matter where we are, climbing that money tree, we all want to have the chain of wealth that keeps on generating and accumulating value while we are doing our stuff. Whatever that “stuff” is!
                    </p>
                </div>
            </div>
            <div class="faq-item animated fadeInUpShort" data-id="2">
                <h6 data-toggle="collapse" data-target="#faq2" aria-expanded="true">GoldChainX Token</h6>
                <div id="faq2" class="collapse show">
                    <p>
                        GoldChainX is a wealth generating and accumulating decentralised community-based cryptocurrency, which aims to create a chain of value to token holders.
                    </p>
                </div>
            </div>

            <div class="faq-item animated fadeInUpShort" data-id="3">
                <h6 class="collapsed" data-toggle="collapse" data-target="#faq3" aria-expanded="true">Do you know that there is the term “money tree” for a reason?</h6>
                <div id="faq3" class="collapse">
                    <p>
                        Tree grows leaves. Leaves pull in CO2 and release Oxygen in the process (Sure! Sure! Primary school knowledge, who doesn’t know that!). Think about creating and accumulating wealth as our money trees grow leaves. One leaf does not mean much, yet a tree full of leaves and a forest full of trees will create and accumulate worthwhile value. 
                    </p>
                </div>
            </div>
            <div class="faq-item animated fadeInUpShort" data-id="4">
                <h6 class="collapsed" data-toggle="collapse" data-target="#faq4" aria-expanded="true">Sneak peek!!!</h6>
                <div id="faq4" class="collapse">
                    <p>
                        What’s best! We don’t use tree as a metaphor. Through our confirmed joint venture program, coinholders are members of the community that will contribute to grow more trees for every more dollar we make. Our community prospers with GoldChainX and the world we live in will be happier with more trees. We meant it when we said “money tree”; and do stay long enough to be a part of that. Guarantee, we will all feel better in this journey.
                    </p>
                </div>
            </div>
            <div class="animated fadeInUpShort">
                Learn more about the changes, detail of the tokenomics, and trade flow for GoldChainX on our <a href="https://goldchainfinance.medium.com/goldchainx-tokenomics-c6377ff6c213" target="_blank">Medium article</a> 
            </div>

            <div class="animated fadeInUpShort">
                <br/><br/>
                <h5><a href="https://app.unicrypt.network/amm/pancake-v2/pair/0x27bAA77A4A5F61948128A880D61e796B9f35182e" target="_blank">Liquidity is locked by unicrypt.network <br/>https://app.unicrypt.network/amm/pancake-v2/pair/0x27bAA77A4A5F61948128A880D61e796B9f35182e</a></h5>
            </div>
        </div>
    </div>
</section>
<!-- End features Section -->

<!-- End features Section -->
<section id="services" class="services pt-5 text-center">
    <div class="container">
        <div class="animatedParent animateOnce">
            <h2 class="animated fadeInUpShort">In short, here is the Deal!</h2>
        </div>
        <div class="service-items row py-2  animatedParent animateOnce" data-sequence="250">

            <div class="col-sm-6 col-md-4 py-5 animated fadeInUpShort" data-id="1">
                <div class="icon"><img src="img/ftIcon-4.webp" alt="Chain of Gold. Chain of Wealth" /></div>
                <h5 class="pt-5">Wealth Accumulation</h5>
                <p class="small">Active token holders will be invited to <a href="https://goldchainfinance.medium.com/the-wealthhunting-program-182b5a58a632" target="_blank">special groups</a> to enjoy superior trading calls, quality knowledge sharing and skill upgrading.</p>
            </div>
            <div class="col-sm-6 col-md-4 py-5 animated fadeInUpShort" data-id="2">
                <div class="icon"><img src="img/ftIcon-5.webp" alt="Money Tree Partnership" /></div>
                <h5 class="pt-5">Money Tree Partnership</h5>
                <p class="small">Faciliate lucrative business deals.</p>
                <p class="small">More private sales and more airdrops.</p>
                <p class="small">Potential profit sharing. A real Launch Pad.</p>
            </div>
            <div class="col-sm-6 col-md-4 py-5 animated fadeInUpShort" data-id="3">
                <div class="icon"><img src="img/ftIcon-2.webp" alt="Hold and Earn. Simple" /></div>
                <h5 class="pt-5">Hold and Earn. Simple.</h5>
                <p class="small">Simply hold GoldChainX and earn passive rewards. 2% of each transaction will be distributed among all golden hands holders.</p>
            </div>
            <div class="col-sm-6 col-md-4 py-5 animated fadeInUpShort" data-id="4">
                <div class="icon"><img src="img/ftIcon-6.webp" alt="Safe and sound" /></div>
                <h5 class="pt-5">Auto Lock LP</h5>
                <p class="small">8% of every transaction is locked away into PancakeSwap’s liquidity pool to create a steadily rising price floor and more LP for GoldChainX.</p>
            </div>
            <div class="col-sm-6 col-md-4 py-5 animated fadeInUpShort" data-id="5">
                <div class="icon"><img src="img/ftIcon-3.webp" alt="Safe and Sound" /></div>
                <h5 class="pt-5">Safe and Sound</h5>
                <p class="small">Contract locked, Liquidity locked, Unruggable</p>
                <p class="small">Anti whales & bots manipulation, trades of more than 1% of the total supply will be rejected</p>
                
            </div>
            <div class="col-sm-6 col-md-4 py-5 animated fadeInUpShort" data-id="6">
                <div class="icon"><img src="img/ftIcon-1.webp" alt="Mobile Wallet" /></div>
                <h5 class="pt-5">Mobile Wallet</h5>
                <p class="small">Coming soon...</p>
            </div>
        </div>
    </div>
</section>
<!-- End features Section -->




<!-- End features Section -->
<section id="tokenmetrics" class="services pt-5 text-center">
    <div class="container">
        <div class="bnr-cnt">
            <div class="row">
                <div class="col-lg-6 animatedParent animateOnce">
                    <h2 class="animated fadeInUpShort">GoldChainX Tokenmetrics</h2>
                    <div class="service-des py-1 animated fadeInUpShort">
                        <img src="img/tokenmetrics.png" alt="GoldChainX Tokenmetrics" />
                    </div>
                    <br/>
                    <h4 class="animated fadeInUpShort">Total Supply: 50,000,000,000,000 GoldChainX</h4>
                </div>

                <div class="col-lg-6 bnr-image-wrap animatedParent animateOnce">
                    <div class="bnr-image animated fadeInRightShort go">
                        <img src="img/banner1.webp" alt="Banner"/>
                    </div>
                </div>
            </div>
            <br/>
            <div class="animatedParent animateOnce">
                <h2 class="animated fadeInUpShort">GoldChainX Transaction Flow</h2>
                <div class="service-des py-1 animated fadeInUpShort">
                    <img src="img/flow.png" alt="GoldChainX Transaction Flow" />
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
            <h2 class=" animated fadeInUpShort">Our Pathway together</h2>
        </div>
        <div class="rmap-wrap">
            <div class="animatedParent animateOnce"><div class="rmap-year finished animated fadeInUpShort">2021</div></div>
            <div class="rmap-items row no-gutters animatedParent animateOnce" data-sequence="250">
                <div class="col-md-6 rmap-item finished animated active fadeInUpShort" data-id="1">
                    <div class="rmap-item-details row no-gutters">
                        <div class="col-md"><h6>Phase 1: Wealth Creation</h6></div>
                        <div class="col-md-5"><span class="date"> Q2, 2021 </span></div>
                        <p class="small">
                            Website Launch<br/>
                            Airdrop and Public Sale<br/>
                            Social Media: Telegram, Twitter, Instagram, Tiktok, Subreddit <br/>
                            Marketing Campaign <br/>
                            PancakeSwap Listing<br/>
                            1,000 Holders <br/>
                        </p>
                        <div class="rmap-item-sets">
                            <span class="rmap-circle"></span>
                        </div>
                    </div>
                </div>
                <!--rmap-item-->
                <div class="col-md-6 rmap-item finished animated fadeInUpShort" data-id="2">
                    <div class="rmap-item-details row no-gutters">
                        <div class="col-md"><h6>Phase 2: Wealth Accumulation</h6></div>
                        <div class="col-md-5"><span class="date"> Q3, 2021 </span></div>
                        <p class="small">
                            Open <a href="https://goldchainfinance.medium.com/the-wealthhunting-program-182b5a58a632" target="_blank">Wealth Hunting Group</a> for active Token Holders <br/>
                            CoinGecko Listing <br/>
                            CoinMarketCap Listing <br/>
                            Initial CEX Listings <br/>
                            Celebrity & Brand Partnerships <br/>
                            Introduce lucrative business deals and more airdrops<br/>
                            Coin Design Campaign for loyalty members<br/>
                            5,000 Holders <br/>
                        </p>
                        <div class="rmap-item-sets">
                            <span class="rmap-circle"></span>
                        </div>
                    </div>
                </div>
                <!--rmap-item-->
                <div class="col-md-6 rmap-item finished animated fadeInUpShort" data-id="3">
                    <div class="rmap-item-details row no-gutters">
                        <div class="col-md"><h6>Phase 3: Wealth Preservation</h6></div>
                        <div class="col-md-5"><span class="date"> Q4, 2021 </span></div>
                        <p class="small">
                            Major CEX Listings <br/>
                            Trading Automation <br/>
                            Research and application of AI and Deep Learning in trading<br/>
                            Money Tree partnership kickstart <br/>
                            10,000 Holders <br/>
                        </p>
                        <div class="rmap-item-sets">
                            <span class="rmap-circle"></span>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 rmap-item finished animated fadeInUpShort" data-id="4">
                    <div class="rmap-item-details row no-gutters">
                        <div class="col-md"><h6>Phase 4: Wealth For Life</h6></div>
                        <div class="col-md-5"><span class="date">  Q1, 2022 </span></div>
                        <p class="small">
                            Utility coin linked to business.  <br/>
                            Stay tune for more exciting activities!!!<br/>
                            <br/>
                            <br/>
                            <br/>
                        </p>
                        <div class="rmap-item-sets">
                            <span class="rmap-circle"></span>
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

<section id="partners" class="blogs py-4 animatedParent animateOnce">
    <div class="container">
        <h2 class="animated fadeInUpShort">Partners in Wealth</h2>
        <div style="text-align:center">
            Our founders and advisers are market experts, leaders, business owners and shareholders <br/>
            in the fields of crypto-currency, fund management and digital marketing
        </div>
        <div class="blog-items row mt-5" style="text-align:center">

            <div class="col-md-3">
                <div class="blog-item my-3 animated fadeInUpShort">
                    <div class="sqr-img"> <img src="img/MH.jpg" style="width:150px;height:150px" alt="blog1"></div>
                    <div class="blog-meta row small py-3">
                        <div class="col-6 name"></div>
                        <div class="col-6 date text-right font-italic"> </div>
                    </div>
                    <h5><a href="http://moonhunter.net/" target="_blank">MoonHunter<br/>
                            @moonhunter85
                        </a>
                    </h5>
                    
                </div>
            </div>

            <div class="col-md-3">
                <div class="blog-item my-3 animated fadeInUpShort">
                    <div class="sqr-img"> <img src="img/beasts.jpg" style="width:150px;height:150px" alt="blog1"></div>
                    <div class="blog-meta row small py-3">
                        <div class="col-6 name"></div>
                        <div class="col-6 date text-right font-italic"> </div>
                    </div>
                    <h5><a href="https://t.me/realcryptobeasts" target="_blank">Crypto Beasts<br/>
                            @realcryptobeasts
                        </a>
                    </h5>
                    
                </div>
            </div>
            
            <div class="col-md-3">
                <div class="blog-item my-3 animated fadeInUpShort">
                    <div class="sqr-img"> <img src="img/HKG.png" style="width:261px;height:150px" alt="blog1"></div>
                    <div class="blog-meta row small py-3">
                        <div class="col-6 name"></div>
                        <div class="col-6 date text-right font-italic"> </div>
                    </div>
                    <h5> <a href="https://hamiltonknight.com.au/" target="_blank">Hamilton Knight Group</a> </h5>
                    
                </div>
            </div>

            <div class="col-md-3">
                <div class="blog-item my-3 animated fadeInUpShort">
                    <div class="sqr-img"> <img src="img/blueseed-group-logo.png" style="width:150px;height:150px" alt="blog1"></div>
                    <div class="blog-meta row small py-3">
                        <div class="col-6 name"></div>
                        <div class="col-6 date text-right font-italic"> </div>
                    </div>
                    <h5> <a href="https://blueseed.group" target="_blank">Blueseed Australia</a> </h5>
                </div>
            </div>

            
            <a href="#partners" class="rmap-end-btn"><i class="fas fa-angle-up" /></a>
        </div>
    </div>
</section>
<!-- End roadmap Section -->
<!-- faq Section -->
<!-- End faq Section -->
<!-- contact Section -->


    <!--End bnr-image-->

<section id="contact" class="contact py-4 animatedParent animateOnce">
    <div class="container">
        <h2 class="animated fadeInUpShort">Get In Touch <span>Contact</span></h2>
        
        <h4 style="text-align: center;" class="animated fadeInUpShort">
            <a class="col" href="https://twitter.com/GoldChainToken" style="font-size: 20px;" target="_blank"> <i class="fab fa-twitter" /><span style="margin-left:8px;"> Twitter</span></a>

            <a class="col" href="https://t.me/goldchaingroup" style="font-size: 20px;" target="_blank"> <i class="fab fa-telegram"></i><span style="margin-left:8px;"> Telegram</span></a>

            <a class="col" href="https://goldchainfinance.medium.com" style="font-size: 20px;" target="_blank"> <img src="img/medium.png" alt=""/><span style="margin-left:8px;"> Medium</span></a>

        </h4>
        <!-- <h4 style="text-align: center;" class="animated fadeInUpShort">
            <a class="col" href="https://t.me/goldchaingroup" style="font-size: 20px;"> <i class="fab fa-telegram"></i><span style="margin-left:8px;"> Telegram</span></a>
        </h4> -->
    </div>
</section>
<!-- End contact Section -->
