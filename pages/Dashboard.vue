<template>
    
    <div class="color-highlight-bg color-main-text page-heading">DASHBOARD</div>
    <div v-show="connected" class="d-none"></div>

    <main>

        <div class="row align-items-center mb-4">
            <div class="col-md-6">
                <div class="gray-bg">
                    <BalanceBlock />
                </div>
            </div>
            <div class="col-md-6">
                <div class="gray-bg">
                    <div class="gray-bg-padding">
                        <div class="heading-text">SimpleStake</div>
                        <p>Every transaction in the TNTSwap&trade; ecosystem helps someone, somewhere on the planet.&trade;</p>

                        <SwapBlock />

                        <div class="staking-begin color-highlight-bg p-2 mt-3 mb-3">
                            <div class="row">
                                <div class="col-3">
                                    <div class="staking-openings color-main-text">
                                        <div class="staking-openings-available">15</div>
                                        <div class="staking-openings-text">Red Carpet Openings</div>
                                    </div>
                                </div>
                                <div class="col-9">
                                    <div class="start-staking color-main-text">START STAKING</div>
                                </div>
                            </div>
                        </div>

                        <p>If the Red Carpet is full, system will auto direct to White Carpet Staking.</p>

                        <div class="d-none">
                            <hr />
                            <p>Need more tokens?</p>

                            <div class="form-group">
                                <div class="row">
                                    <div class="col-4">
                                        <input type="text" class="form-control" value="0.00" />
                                    </div>
                                    <div class="col-8">
                                        <input type="button" class="btn btn-secondary" value="Buy More TNT Tokens" />
                                    </div>
                                </div>
                            </div>

                            <hr />

                            <div class="form-group d-none">
                                <div class="row">
                                    <div class="col-6">
                                        <input type="button" class="btn btn-primary-red" value="Sell Your TNT Tokens" />
                                    </div>
                                    <div class="col-6">
                                        <input type="button" class="btn btn-primary-red" value="Buy More TNT Tokens" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="pt-3 pb-4 px-1">
            <nuxt-img src="/images/bitcoin-mining.jpg" style="width: 100%;" />
        </div>

        <div class="row align-items-center mb-4">
            <div class="col-md-6">
                <div class="gray-bg">
                    <div class="gray-bg-padding" style="padding-bottom: 35px;">
                        <div class="heading-text">Global CTNT</div>
                        <p>Get the full live details of CTNT Globely</p>
                        <hr />
                        <div class="global-item color-highlight-bg px-2 mb-2">
                            <div class="row">
                                <div class="col-5 color-gray-text">
                                    <div class="pt-2"><strong>TNT in White Carpet</strong></div>
                                </div>
                                <div class="col-7">
                                    <div class="color-gray-bg text-end" style="margin: 2px 0; padding: 5px; ">
                                        <div style="font-size: 22px; letter-spacing: 4px; font-weight: 700; margin-bottom: 0; padding-bottom: 0;">526,072,012</div>
                                        <div style="margin-top: -5px; font-size: 12px;" class="color-highlight-text">TNT Tokens</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="global-item color-highlight-bg px-2 mb-2">
                            <div class="row">
                                <div class="col-5 color-gray-text">
                                    <div class="pt-2"><strong>TNT in White Carpet</strong></div>
                                </div>
                                <div class="col-7">
                                    <div class="color-gray-bg text-end" style="margin: 2px 0; padding: 5px; ">
                                        <div style="font-size: 22px; letter-spacing: 4px; font-weight: 700; margin-bottom: 0; padding-bottom: 0;">526,072,012</div>
                                        <div style="margin-top: -5px; font-size: 12px;" class="color-highlight-text">TNT Tokens</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p style="margin-bottom: 0; padding-bottom: 0;" class="text-end">View Full Global Breakdown ></p>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="gray-bg">
                    <div class="gray-bg-padding">                        
                        <ContractsBlock />
                    </div>
                </div>
            </div>
        </div>

        <div class="py-3">
            <div class="row align-items-center mb-4">
                <div class="col-md-6">
                    <div class="gray-bg">
                        <div class="gray-bg-padding">
                            <RedCarpetBlock />
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="gray-bg">
                        <div class="gray-bg-padding">
                            <WhiteCarpetBlock />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="py-3">
            <div class="row">
                <div class="col-md-10">

                    <div class="row align-items-center mb-4">
                        <div class="col-md-12">
                            <div class="gray-bg">
                                <ul class="nav nav-tabs">
                                    <li class="nav-item nav-main">
                                        <a class="nav-link heading-text tab-link" href="#" data-val="list-certificates">CERTIFICATES OWNED</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link tab-link" href="#" data-val="list-sale">FOR SALE</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link tab-link" href="#" data-val="list-sold">SOLD</a>
                                    </li>
                                </ul>
                                <div class="tab-content p-4">
                                    <div class="tab-pane active" id="list-certificates">
                                        <div id="carouselExample" class="carousel slide">
                                            <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                    <div style="width: 100%; min-height: 250px; padding: 0 25px;">
                                                        <div class="row gx-1">
                                                            <div class="col">
                                                                <div class="certificate">
                                                                    <div class="cert-image">
                                                                        <nuxt-img src="/images/cert-image.jpg" />
                                                                    </div>
                                                                    <div class="cert-text">
                                                                        <div class="cert-title pb-2">
                                                                            Red Carpet Rewards Certificates
                                                                        </div>
                                                                    </div>
                                                                    <div class="row gx-0">
                                                                        <div class="col-6">
                                                                            <div class="cert-time-remaining">
                                                                                <div class="color-highlight-text">Time Remaining</div>
                                                                                <div class="color-highlight-text" style="font-size: 10px;">070:20:00</div>
                                                                                <input type="button" class="mt-1 btn btn-primary-yellow btn-xs" value="Make Offer" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-6">
                                                                            <div class="cert-info">
                                                                                <div class="cert-code">RC0237811</div>
                                                                                <div class="cert-listing-price-text">Listing Price</div>
                                                                                <div class="cert-listing-price color-main-text">$1,560</div>
                                                                                <div class="cert-listing-price-text color-highlight-text" style="font-size: 9px;">Rewards $10,000</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col">
                                                                <div class="certificate">
                                                                    <div class="cert-image">
                                                                        <nuxt-img src="/images/cert-image.jpg" />
                                                                    </div>
                                                                    <div class="cert-text">
                                                                        <div class="cert-title pb-2">
                                                                            Red Carpet Rewards Certificates
                                                                        </div>
                                                                    </div>
                                                                    <div class="row gx-0">
                                                                        <div class="col-6">
                                                                            <div class="cert-time-remaining">
                                                                                <div class="color-highlight-text">Time Remaining</div>
                                                                                <div class="color-highlight-text" style="font-size: 10px;">070:20:00</div>
                                                                                <input type="button" class="mt-1 btn btn-primary-yellow btn-xs" value="Make Offer" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-6">
                                                                            <div class="cert-info">
                                                                                <div class="cert-code">RC0237811</div>
                                                                                <div class="cert-listing-price-text">Listing Price</div>
                                                                                <div class="cert-listing-price color-main-text">$1,560</div>
                                                                                <div class="cert-listing-price-text color-highlight-text" style="font-size: 9px;">Rewards $10,000</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col">
                                                                <div class="certificate">
                                                                    <div class="cert-image">
                                                                        <nuxt-img src="/images/cert-image.jpg" style="width: 100%;" />
                                                                    </div>
                                                                    <div class="cert-text">
                                                                        <div class="cert-title pb-2">
                                                                            Red Carpet Rewards Certificates
                                                                        </div>
                                                                    </div>
                                                                    <div class="row gx-0">
                                                                        <div class="col-6">
                                                                            <div class="cert-time-remaining">
                                                                                <div class="color-highlight-text">Time Remaining</div>
                                                                                <div class="color-highlight-text" style="font-size: 10px;">070:20:00</div>
                                                                                <input type="button" class="mt-1 btn btn-primary-yellow btn-xs" value="Make Offer" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-6">
                                                                            <div class="cert-info">
                                                                                <div class="cert-code">RC0237811</div>
                                                                                <div class="cert-listing-price-text">Listing Price</div>
                                                                                <div class="cert-listing-price color-main-text">$1,560</div>
                                                                                <div class="cert-listing-price-text color-highlight-text" style="font-size: 9px;">Rewards $10,000</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col">
                                                                <div class="certificate">
                                                                    <div class="cert-image">
                                                                        <nuxt-img src="/images/cert-image.jpg" style="width: 100%;" />
                                                                    </div>
                                                                    <div class="cert-text">
                                                                        <div class="cert-title pb-2">
                                                                            Red Carpet Rewards Certificates
                                                                        </div>
                                                                    </div>
                                                                    <div class="row gx-0">
                                                                        <div class="col-6">
                                                                            <div class="cert-time-remaining">
                                                                                <div class="color-highlight-text">Time Remaining</div>
                                                                                <div class="color-highlight-text" style="font-size: 10px;">070:20:00</div>
                                                                                <input type="button" class="mt-1 btn btn-primary-yellow btn-xs" value="Make Offer" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-6">
                                                                            <div class="cert-info">
                                                                                <div class="cert-code">RC0237811</div>
                                                                                <div class="cert-listing-price-text">Listing Price</div>
                                                                                <div class="cert-listing-price color-main-text">$1,560</div>
                                                                                <div class="cert-listing-price-text color-highlight-text" style="font-size: 9px;">Rewards $10,000</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col">
                                                                <div class="certificate">
                                                                    <div class="cert-image">
                                                                        <nuxt-img src="/images/cert-image.jpg" style="width: 100%;" />
                                                                    </div>
                                                                    <div class="cert-text">
                                                                        <div class="cert-title pb-2">
                                                                            Red Carpet Rewards Certificates
                                                                        </div>
                                                                    </div>
                                                                    <div class="row gx-0">
                                                                        <div class="col-6">
                                                                            <div class="cert-time-remaining">
                                                                                <div class="color-highlight-text">Time Remaining</div>
                                                                                <div class="color-highlight-text" style="font-size: 10px;">070:20:00</div>
                                                                                <input type="button" class="mt-1 btn btn-primary-yellow btn-xs" value="Make Offer" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-6">
                                                                            <div class="cert-info">
                                                                                <div class="cert-code">RC0237811</div>
                                                                                <div class="cert-listing-price-text">Listing Price</div>
                                                                                <div class="cert-listing-price color-main-text">$1,560</div>
                                                                                <div class="cert-listing-price-text color-highlight-text" style="font-size: 9px;">Rewards $10,000</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                                                                                                </div>
                                                    </div>
                                                </div>
                                                <div class="carousel-item">
                                                    <div style="width: 100%; min-height: 250px; padding: 0 25px;">
                                                        <div class="row gx-1">
                                                            <div class="col">
                                                                <div class="certificate">
                                                                    <div class="cert-image">
                                                                        <nuxt-img src="/images/cert-image.jpg" style="width: 100%;" />
                                                                    </div>
                                                                    <div class="cert-text">
                                                                        <div class="cert-title pb-2">
                                                                            Red Carpet Rewards Certificates
                                                                        </div>
                                                                    </div>
                                                                    <div class="row gx-0">
                                                                        <div class="col-6">
                                                                            <div class="cert-time-remaining">
                                                                                <div class="color-highlight-text">Time Remaining</div>
                                                                                <div class="color-highlight-text" style="font-size: 10px;">070:20:00</div>
                                                                                <input type="button" class="mt-1 btn btn-primary-yellow btn-xs" value="Make Offer" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-6">
                                                                            <div class="cert-info">
                                                                                <div class="cert-code">RC0237811</div>
                                                                                <div class="cert-listing-price-text">Listing Price</div>
                                                                                <div class="cert-listing-price color-main-text">$1,560</div>
                                                                                <div class="cert-listing-price-text color-highlight-text" style="font-size: 9px;">Rewards $10,000</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col">
                                                                <div class="certificate">
                                                                    <div class="cert-image">
                                                                        <nuxt-img src="/images/cert-image.jpg" style="width: 100%;" />
                                                                    </div>
                                                                    <div class="cert-text">
                                                                        <div class="cert-title pb-2">
                                                                            Red Carpet Rewards Certificates
                                                                        </div>
                                                                    </div>
                                                                    <div class="row gx-0">
                                                                        <div class="col-6">
                                                                            <div class="cert-time-remaining">
                                                                                <div class="color-highlight-text">Time Remaining</div>
                                                                                <div class="color-highlight-text" style="font-size: 10px;">070:20:00</div>
                                                                                <input type="button" class="mt-1 btn btn-primary-yellow btn-xs" value="Make Offer" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-6">
                                                                            <div class="cert-info">
                                                                                <div class="cert-code">RC0237811</div>
                                                                                <div class="cert-listing-price-text">Listing Price</div>
                                                                                <div class="cert-listing-price color-main-text">$1,560</div>
                                                                                <div class="cert-listing-price-text color-highlight-text" style="font-size: 9px;">Rewards $10,000</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col">
                                                                <div class="certificate">
                                                                    <div class="cert-image">
                                                                        <nuxt-img src="/images/cert-image.jpg" style="width: 100%;" />
                                                                    </div>
                                                                    <div class="cert-text">
                                                                        <div class="cert-title pb-2">
                                                                            Red Carpet Rewards Certificates
                                                                        </div>
                                                                    </div>
                                                                    <div class="row gx-0">
                                                                        <div class="col-6">
                                                                            <div class="cert-time-remaining">
                                                                                <div class="color-highlight-text">Time Remaining</div>
                                                                                <div class="color-highlight-text" style="font-size: 10px;">070:20:00</div>
                                                                                <input type="button" class="mt-1 btn btn-primary-yellow btn-xs" value="Make Offer" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-6">
                                                                            <div class="cert-info">
                                                                                <div class="cert-code">RC0237811</div>
                                                                                <div class="cert-listing-price-text">Listing Price</div>
                                                                                <div class="cert-listing-price color-main-text">$1,560</div>
                                                                                <div class="cert-listing-price-text color-highlight-text" style="font-size: 9px;">Rewards $10,000</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col">
                                                                <div class="certificate">
                                                                    <div class="cert-image">
                                                                        <nuxt-img src="/images/cert-image.jpg" style="width: 100%;" />
                                                                    </div>
                                                                    <div class="cert-text">
                                                                        <div class="cert-title pb-2">
                                                                            Red Carpet Rewards Certificates
                                                                        </div>
                                                                    </div>
                                                                    <div class="row gx-0">
                                                                        <div class="col-6">
                                                                            <div class="cert-time-remaining">
                                                                                <div class="color-highlight-text">Time Remaining</div>
                                                                                <div class="color-highlight-text" style="font-size: 10px;">070:20:00</div>
                                                                                <input type="button" class="mt-1 btn btn-primary-yellow btn-xs" value="Make Offer" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-6">
                                                                            <div class="cert-info">
                                                                                <div class="cert-code">RC0237811</div>
                                                                                <div class="cert-listing-price-text">Listing Price</div>
                                                                                <div class="cert-listing-price color-main-text">$1,560</div>
                                                                                <div class="cert-listing-price-text color-highlight-text" style="font-size: 9px;">Rewards $10,000</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col">
                                                                <div class="certificate">
                                                                    <div class="cert-image">
                                                                        <nuxt-img src="/images/cert-image.jpg" style="width: 100%;" />
                                                                    </div>
                                                                    <div class="cert-text">
                                                                        <div class="cert-title pb-2">
                                                                            Red Carpet Rewards Certificates
                                                                        </div>
                                                                    </div>
                                                                    <div class="row gx-0">
                                                                        <div class="col-6">
                                                                            <div class="cert-time-remaining">
                                                                                <div class="color-highlight-text">Time Remaining</div>
                                                                                <div class="color-highlight-text" style="font-size: 10px;">070:20:00</div>
                                                                                <input type="button" class="mt-1 btn btn-primary-yellow btn-xs" value="Make Offer" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-6">
                                                                            <div class="cert-info">
                                                                                <div class="cert-code">RC0237811</div>
                                                                                <div class="cert-listing-price-text">Listing Price</div>
                                                                                <div class="cert-listing-price color-main-text">$1,560</div>
                                                                                <div class="cert-listing-price-text color-highlight-text" style="font-size: 9px;">Rewards $10,000</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                                                                                                </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Previous</span>
                                            </button>
                                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="tab-pane" id="list-sale">
                                        These items are for sale
                                    </div>
                                    <div class="tab-pane" id="list-sold">
                                        These items were sold
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row align-items-center mb-4">
                        <div class="col-md-12">
                            <div class="gray-bg">
                                <ul class="nav nav-tabs">
                                    <li class="nav-item nav-main">
                                        <a class="nav-link heading-text tab-link" href="#" data-val="list-certificates">CERTIFICATES OWNED</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link tab-link" href="#" data-val="list-sale">FOR SALE</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link tab-link" href="#" data-val="list-sold">SOLD</a>
                                    </li>
                                </ul>
                                <div class="tab-content p-4">
                                    <div class="tab-pane active" id="list-certificates">
                                        <div id="carouselExample" class="carousel slide">
                                            <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                    <div style="width: 100%; min-height: 250px; padding: 0 25px;">
                                                        <div class="row gx-1">
                                                            <div class="col">
                                                                <div class="certificate">
                                                                    <div class="cert-image">
                                                                        <nuxt-img src="/images/cert-image.jpg" style="width: 100%;" />
                                                                    </div>
                                                                    <div class="cert-text">
                                                                        <div class="cert-title pb-2">
                                                                            Red Carpet Rewards Certificates
                                                                        </div>
                                                                    </div>
                                                                    <div class="row gx-0">
                                                                        <div class="col-6">
                                                                            <div class="cert-time-remaining">
                                                                                <div class="color-highlight-text">Time Remaining</div>
                                                                                <div class="color-highlight-text" style="font-size: 10px;">070:20:00</div>
                                                                                <input type="button" class="mt-1 btn btn-primary-yellow btn-xs" value="Make Offer" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-6">
                                                                            <div class="cert-info">
                                                                                <div class="cert-code">RC0237811</div>
                                                                                <div class="cert-listing-price-text">Listing Price</div>
                                                                                <div class="cert-listing-price color-main-text">$1,560</div>
                                                                                <div class="cert-listing-price-text color-highlight-text" style="font-size: 9px;">Rewards $10,000</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col">
                                                                <div class="certificate">
                                                                    <div class="cert-image">
                                                                        <nuxt-img src="/images/cert-image.jpg" style="width: 100%;" />
                                                                    </div>
                                                                    <div class="cert-text">
                                                                        <div class="cert-title pb-2">
                                                                            Red Carpet Rewards Certificates
                                                                        </div>
                                                                    </div>
                                                                    <div class="row gx-0">
                                                                        <div class="col-6">
                                                                            <div class="cert-time-remaining">
                                                                                <div class="color-highlight-text">Time Remaining</div>
                                                                                <div class="color-highlight-text" style="font-size: 10px;">070:20:00</div>
                                                                                <input type="button" class="mt-1 btn btn-primary-yellow btn-xs" value="Make Offer" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-6">
                                                                            <div class="cert-info">
                                                                                <div class="cert-code">RC0237811</div>
                                                                                <div class="cert-listing-price-text">Listing Price</div>
                                                                                <div class="cert-listing-price color-main-text">$1,560</div>
                                                                                <div class="cert-listing-price-text color-highlight-text" style="font-size: 9px;">Rewards $10,000</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col">
                                                                <div class="certificate">
                                                                    <div class="cert-image">
                                                                        <nuxt-img src="/images/cert-image.jpg" style="width: 100%;" />
                                                                    </div>
                                                                    <div class="cert-text">
                                                                        <div class="cert-title pb-2">
                                                                            Red Carpet Rewards Certificates
                                                                        </div>
                                                                    </div>
                                                                    <div class="row gx-0">
                                                                        <div class="col-6">
                                                                            <div class="cert-time-remaining">
                                                                                <div class="color-highlight-text">Time Remaining</div>
                                                                                <div class="color-highlight-text" style="font-size: 10px;">070:20:00</div>
                                                                                <input type="button" class="mt-1 btn btn-primary-yellow btn-xs" value="Make Offer" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-6">
                                                                            <div class="cert-info">
                                                                                <div class="cert-code">RC0237811</div>
                                                                                <div class="cert-listing-price-text">Listing Price</div>
                                                                                <div class="cert-listing-price color-main-text">$1,560</div>
                                                                                <div class="cert-listing-price-text color-highlight-text" style="font-size: 9px;">Rewards $10,000</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col">
                                                                <div class="certificate">
                                                                    <div class="cert-image">
                                                                        <nuxt-img src="/images/cert-image.jpg" style="width: 100%;" />
                                                                    </div>
                                                                    <div class="cert-text">
                                                                        <div class="cert-title pb-2">
                                                                            Red Carpet Rewards Certificates
                                                                        </div>
                                                                    </div>
                                                                    <div class="row gx-0">
                                                                        <div class="col-6">
                                                                            <div class="cert-time-remaining">
                                                                                <div class="color-highlight-text">Time Remaining</div>
                                                                                <div class="color-highlight-text" style="font-size: 10px;">070:20:00</div>
                                                                                <input type="button" class="mt-1 btn btn-primary-yellow btn-xs" value="Make Offer" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-6">
                                                                            <div class="cert-info">
                                                                                <div class="cert-code">RC0237811</div>
                                                                                <div class="cert-listing-price-text">Listing Price</div>
                                                                                <div class="cert-listing-price color-main-text">$1,560</div>
                                                                                <div class="cert-listing-price-text color-highlight-text" style="font-size: 9px;">Rewards $10,000</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col">
                                                                <div class="certificate">
                                                                    <div class="cert-image">
                                                                        <nuxt-img src="/images/cert-image.jpg" style="width: 100%;" />
                                                                    </div>
                                                                    <div class="cert-text">
                                                                        <div class="cert-title pb-2">
                                                                            Red Carpet Rewards Certificates
                                                                        </div>
                                                                    </div>
                                                                    <div class="row gx-0">
                                                                        <div class="col-6">
                                                                            <div class="cert-time-remaining">
                                                                                <div class="color-highlight-text">Time Remaining</div>
                                                                                <div class="color-highlight-text" style="font-size: 10px;">070:20:00</div>
                                                                                <input type="button" class="mt-1 btn btn-primary-yellow btn-xs" value="Make Offer" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-6">
                                                                            <div class="cert-info">
                                                                                <div class="cert-code">RC0237811</div>
                                                                                <div class="cert-listing-price-text">Listing Price</div>
                                                                                <div class="cert-listing-price color-main-text">$1,560</div>
                                                                                <div class="cert-listing-price-text color-highlight-text" style="font-size: 9px;">Rewards $10,000</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                                                                                                </div>
                                                    </div>
                                                </div>
                                                <div class="carousel-item">
                                                    <div style="width: 100%; min-height: 250px; padding: 0 25px;">
                                                        <div class="row gx-1">
                                                            <div class="col">
                                                                <div class="certificate">
                                                                    <div class="cert-image">
                                                                        <nuxt-img src="/images/cert-image.jpg" style="width: 100%;" />
                                                                    </div>
                                                                    <div class="cert-text">
                                                                        <div class="cert-title pb-2">
                                                                            Red Carpet Rewards Certificates
                                                                        </div>
                                                                    </div>
                                                                    <div class="row gx-0">
                                                                        <div class="col-6">
                                                                            <div class="cert-time-remaining">
                                                                                <div class="color-highlight-text">Time Remaining</div>
                                                                                <div class="color-highlight-text" style="font-size: 10px;">070:20:00</div>
                                                                                <input type="button" class="mt-1 btn btn-primary-yellow btn-xs" value="Make Offer" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-6">
                                                                            <div class="cert-info">
                                                                                <div class="cert-code">RC0237811</div>
                                                                                <div class="cert-listing-price-text">Listing Price</div>
                                                                                <div class="cert-listing-price color-main-text">$1,560</div>
                                                                                <div class="cert-listing-price-text color-highlight-text" style="font-size: 9px;">Rewards $10,000</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col">
                                                                <div class="certificate">
                                                                    <div class="cert-image">
                                                                        <nuxt-img src="/images/cert-image.jpg" style="width: 100%;" />
                                                                    </div>
                                                                    <div class="cert-text">
                                                                        <div class="cert-title pb-2">
                                                                            Red Carpet Rewards Certificates
                                                                        </div>
                                                                    </div>
                                                                    <div class="row gx-0">
                                                                        <div class="col-6">
                                                                            <div class="cert-time-remaining">
                                                                                <div class="color-highlight-text">Time Remaining</div>
                                                                                <div class="color-highlight-text" style="font-size: 10px;">070:20:00</div>
                                                                                <input type="button" class="mt-1 btn btn-primary-yellow btn-xs" value="Make Offer" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-6">
                                                                            <div class="cert-info">
                                                                                <div class="cert-code">RC0237811</div>
                                                                                <div class="cert-listing-price-text">Listing Price</div>
                                                                                <div class="cert-listing-price color-main-text">$1,560</div>
                                                                                <div class="cert-listing-price-text color-highlight-text" style="font-size: 9px;">Rewards $10,000</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col">
                                                                <div class="certificate">
                                                                    <div class="cert-image">
                                                                        <nuxt-img src="/images/cert-image.jpg" style="width: 100%;" />
                                                                    </div>
                                                                    <div class="cert-text">
                                                                        <div class="cert-title pb-2">
                                                                            Red Carpet Rewards Certificates
                                                                        </div>
                                                                    </div>
                                                                    <div class="row gx-0">
                                                                        <div class="col-6">
                                                                            <div class="cert-time-remaining">
                                                                                <div class="color-highlight-text">Time Remaining</div>
                                                                                <div class="color-highlight-text" style="font-size: 10px;">070:20:00</div>
                                                                                <input type="button" class="mt-1 btn btn-primary-yellow btn-xs" value="Make Offer" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-6">
                                                                            <div class="cert-info">
                                                                                <div class="cert-code">RC0237811</div>
                                                                                <div class="cert-listing-price-text">Listing Price</div>
                                                                                <div class="cert-listing-price color-main-text">$1,560</div>
                                                                                <div class="cert-listing-price-text color-highlight-text" style="font-size: 9px;">Rewards $10,000</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col">
                                                                <div class="certificate">
                                                                    <div class="cert-image">
                                                                        <nuxt-img src="/images/cert-image.jpg" style="width: 100%;" />
                                                                    </div>
                                                                    <div class="cert-text">
                                                                        <div class="cert-title pb-2">
                                                                            Red Carpet Rewards Certificates
                                                                        </div>
                                                                    </div>
                                                                    <div class="row gx-0">
                                                                        <div class="col-6">
                                                                            <div class="cert-time-remaining">
                                                                                <div class="color-highlight-text">Time Remaining</div>
                                                                                <div class="color-highlight-text" style="font-size: 10px;">070:20:00</div>
                                                                                <input type="button" class="mt-1 btn btn-primary-yellow btn-xs" value="Make Offer" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-6">
                                                                            <div class="cert-info">
                                                                                <div class="cert-code">RC0237811</div>
                                                                                <div class="cert-listing-price-text">Listing Price</div>
                                                                                <div class="cert-listing-price color-main-text">$1,560</div>
                                                                                <div class="cert-listing-price-text color-highlight-text" style="font-size: 9px;">Rewards $10,000</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col">
                                                                <div class="certificate">
                                                                    <div class="cert-image">
                                                                        <nuxt-img src="/images/cert-image.jpg" style="width: 100%;" />
                                                                    </div>
                                                                    <div class="cert-text">
                                                                        <div class="cert-title pb-2">
                                                                            Red Carpet Rewards Certificates
                                                                        </div>
                                                                    </div>
                                                                    <div class="row gx-0">
                                                                        <div class="col-6">
                                                                            <div class="cert-time-remaining">
                                                                                <div class="color-highlight-text">Time Remaining</div>
                                                                                <div class="color-highlight-text" style="font-size: 10px;">070:20:00</div>
                                                                                <input type="button" class="mt-1 btn btn-primary-yellow btn-xs" value="Make Offer" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-6">
                                                                            <div class="cert-info">
                                                                                <div class="cert-code">RC0237811</div>
                                                                                <div class="cert-listing-price-text">Listing Price</div>
                                                                                <div class="cert-listing-price color-main-text">$1,560</div>
                                                                                <div class="cert-listing-price-text color-highlight-text" style="font-size: 9px;">Rewards $10,000</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                                                                                                </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Previous</span>
                                            </button>
                                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="tab-pane" id="list-sale">
                                        These items are for sale
                                    </div>
                                    <div class="tab-pane" id="list-sold">
                                        These items were sold
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
                <div class="col-md-2">
                    <div class="text-center">
                        <nuxt-img src="/images/bitcoin-mining-tall.jpg" style="max-width: 100%;" />
                    </div>
                </div>
            </div>
        </div>

        <div class="row align-items-center d-none">
            <div class="col-md-6">
                <div class="gray-bg">
                    <div class="gray-bg-padding">
                        <div class="heading-text">Certificate Offers</div>
                        <hr />
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="gray-bg">
                    <div class="gray-bg-padding">
                        <div class="heading-text">Certificates Wishlist</div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>

    </main>
    
</template>

<script setup>

    useSeoMeta({
        title: 'Dashboard',
    });
    const connected = useState('connected');
    
</script>