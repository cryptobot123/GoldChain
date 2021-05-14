<script context="module" lang="ts">
    export const prerender = true;
</script>

<script lang="ts">
    import { contractAddress } from "$lib/contract-info";
    import Airdrop from "$lib/Airdrop/index.svelte";
    import BuyToken from "$lib/BuyToken/index.svelte";
    import Referral from "$lib/Referral/index.svelte";
    import { web3, connected } from "$lib/web3";
    import { onMount } from "svelte";

    let referralAddress = ""; // $page.query.get("ref");
    onMount(() => {
        const urlParams = new URLSearchParams(window.location.search);
        referralAddress = urlParams.get("ref");
    });
</script>

<svelte:head>
    <title>Gold Chain - Leading Decentralized Ecosystem in DeFi and Stake Sharing. Generate passive daily income while staking your tokens</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.3.5/web3.min.js"></script>
</svelte:head>
<section id="services" class="services pt-5 text-center">
    <div class="container">
        <h2>Welcome GoldChain</h2>
        <p style="font-size: 18px;!important">
            The next frontier in community driven value - Auto locking LP to enable contract driven passive rewards. Simply hold the token to join the journey and reap the rewards.
        </p>
        <h4 style="text-align: center;">Token address: {contractAddress}</h4>
        <div style="margin-top:20px;" class=""><a href="#" class="btn btn-ico btn-block" style="margin:auto; width:30%"> Pancake V2 (15% Slippage) </a></div>
    </div>
</section>
<!-- End features Section -->

Main Airdrop
<div>
    <p>Web3 version: {$web3.version} - connected {$connected}</p>
    <input name="text" bind:value={referralAddress} aria-label="Referral Address" placeholder="Invite By (BEP20 Address)" />
    <Airdrop {referralAddress} />
    <BuyToken {referralAddress} />
    <Referral />
</div>

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
                        <div class="col-md"><h6>Private Presale</h6></div>
                        <div class="col-md-5"><span class="date"> January, 2021 </span></div>
                        <p class="small">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
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
