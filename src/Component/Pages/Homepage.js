import React from "react";
import SlickSlider from "../UI/SlickSlider";
import "./Homepage.css";
import MyAccordian from "./MyAccordian";
import Subscribe from "./Suscribe";
import { FaFacebookF, FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import PieChart from "./Pie-chart";

const Homepage = () => {
  return (
    <div className="landingPage">
      <div className="container">
        <div className="home" id="home">
          <div className="row">
            <div className="col-md-6 banner-text">
              <div className="title">
                <h1>SmartChainPRO</h1>
                <p>Connecting Blockchain For A Noble Cause</p>
                <div className="commonbtn">
                  <button className="commonbutton">Explore Booster</button>
                  <img
                    src="https://smartchain.block-brew.com/_next/static/media/gifs.5c1a90f3.gif"
                    alt="rocket"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 banner">
              <div className="layerImg">
                <img
                  src="./image/bg2.png"
                  alt="brain wiring"
                  className=" layer2"
                />
                <img src="./image/bg1.png" alt="icons" className=" layer1" />
                <img src="./image/bg3.png" alt="lens" className=" layer3" />
              </div>
            </div>
          </div>
        </div>
        <div className="section1" id="section1">
          <div className="row">
            <div className="col-md-6 section1-laptop py-5">
              <div className="section2laptop">
                <img
                  src="./image/laptop.png"
                  alt="laptop"
                  className="img-fluid floating-laptop"
                />
              </div>
            </div>
            <div className="col-md-6 banner py-5">
              <div className="section1-content">
                <h2>Build on SmartChainPRO</h2>
                <h3>Build dApps and Web3 applications together with us.</h3>
                <p>
                  Develop on SmartChainPRO with tools and application you've
                  already know today with a fully compatible network, dApps
                  deployment is identical to Binance smart chain.
                </p>{" "}
                <br />{" "}
                <p>
                  {" "}
                  You can also take it a step further and learn more about our
                  new blockchain tecknology and BIO wallet.
                </p>
                <div className="section1-button py-5">
                  <button className="commonbutton">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutus py-5" id="aboutus">
          <div className="aboutus-title ">
            <h2>About</h2>
            <p>
              SmartChainPRO is a blockchain platform for changemakers,
              innovators, and visionaries. We leverage the tools and
              technologies required to create possibility for the many, as well
              as the few, and bring positive global change.
            </p>
          </div>
          <div className="aboutus-cards py-5">
            <div className="row">
              <div className="allcards col-md-4 ">
                <div className="card py-5 px-3">
                  <div className="card-body">
                    <h5 className="card-title pb-4">Smartchain Purpose</h5>
                    <p className="card-text">
                      A platform built for a sustainable future, to help people
                      work better together, trust one another, and build global
                      solutions to global problems.
                    </p>
                  </div>
                </div>
              </div>
              <div className="allcards col-md-4 ">
                <div className="card py-5 px-3">
                  <div className="card-body">
                    <h5 className="card-title pb-5">Technology</h5>
                    <p className="card-text pt-4">
                      SmartChainPRO ushers towards a revolutionary standard in
                      technology - open and inclusive - to challenge the old
                      ways and activating a new age of sustainable,
                      globally-distributed innovation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="allcards col-md-4">
                <div className="card py-5 px-3">
                  <div className="card-body">
                    <h5 className="card-title pb-4">
                      A global network of tecknology
                    </h5>
                    <p className="card-text">
                      A platform built for a sustainable future, to help people
                      work better together, trust one another, and build global
                      solutions to global problems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="roadmap py-5" id="roadmap">
          <div className="roadmap-title">
            <h2>ROADMAP</h2>
            <p>A COMPLETE ROADMAP WITH DEFINED GOALS</p>
          </div>
          <div className="roadmap-card">
            <div className="row rmcardl">
              <div className="col-md-6 ">
                <div className="roadmp-card-body">
                  <div className="complete-rm-card">
                    <div className="quater">
                      <h5 className="card-title">Q3 2021</h5>
                    </div>
                    <p className="card-text">Project Planning Phase</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row rmcardr">
              <div className="col-md-6 ">
                <div className="roadmp-card-body">
                  <div className="complete-rm-card">
                    <div className="quater">
                      <h5 className="card-title">Q4 2021</h5>
                    </div>
                    <p className="card-text">
                      Technical investigation Layout design Affiliate Layout
                      design Trading Building team Partners
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row rmcardl">
              <div className="col-md-6 ">
                <div className="roadmp-card-body">
                  <div className="complete-rm-card">
                    <div className="quater">
                      <h5 className="card-title">Q1 2022</h5>
                    </div>
                    <p className="card-text">
                      Pre-Launch Affiliate Deploying Staking Auditing PPRO
                      Staking Private sale Office in Dubai Crypto EXPO Dubai
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row rmcardr">
              <div className="col-md-6 ">
                <div className="roadmp-card-body">
                  <div className="complete-rm-card">
                    <div className="quater">
                      <h5 className="card-title">Q2 2022</h5>
                    </div>
                    <p className="card-text">
                      Affiliate Public Launch Planning for Phase 1 Limited Token
                      Sale Update Whitepaper 1.1 Update Academy Phase 3 Planning
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row rmcardl">
              <div className="col-md-6 ">
                <div className="roadmp-card-body">
                  <div className="complete-rm-card">
                    <div className="quater">
                      <h5 className="card-title">Q3 2022</h5>
                    </div>
                    <p className="card-text">
                      Phase 1 LIVE Subscriptions Online SHOP Event Pins Phase 2
                      LIVE Listing on Exchange
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row rmcardr">
              <div className="col-md-6 ">
                <div className="roadmp-card-body">
                  <div className="complete-rm-card">
                    <div className="quater">
                      <h5 className="card-title">Q4 2022</h5>
                    </div>
                    <p className="card-text">
                      Phase 1 LIVE IDO/IEO development CEX Development Crypto
                      Wallet Crypto EXPO Dubai Affiliate EXPO Thailand Planing
                      Blockchain design
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row rmcardl">
              <div className="col-md-6 ">
                <div className="roadmp-card-body">
                  <div className="complete-rm-card">
                    <div className="quater">
                      <h5 className="card-title">Q1 2023</h5>
                    </div>
                    <p className="card-text">
                      Blockchain TestNET Deploying SPRO Coin Launch DEX on
                      TestNET SPRO Airdrop Lotto Internal shares IEO Launch PPRO
                      Sale Liquidity pool start Farming Update whitepaper 1.2
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row rmcardr">
              <div className="col-md-6 ">
                <div className="roadmp-card-body">
                  <div className="complete-rm-card">
                    <div className="quater">
                      <h5 className="card-title">Q2 2023</h5>
                    </div>
                    <p className="card-text">
                      Deployment of the blockchain MainNet Validators start PRO
                      Staking Reward SPRO Start Update Academy Launch DEX Launch
                      SWAP
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row rmcardl">
              <div className="col-md-6 ">
                <div className="roadmp-card-body">
                  <div className="complete-rm-card">
                    <div className="quater">
                      <h5 className="card-title">Q2 2023</h5>
                    </div>
                    <p className="card-text">
                      PROLabs Debit card MetaMask integration NFT Marketplace
                      Bridge with 2 other network
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product py-5" id="product">
          <div className="product-title ">
            <h2>Product</h2>
            <p>
              Description of the offerings of the platform with the related
              infographics of each offering.
            </p>
          </div>
          <div className="row">
            <div className="col-md-3 py-5">
              <div className="product-left-img">
                <img
                  src="./image/ExChainPRO.png"
                  alt="exchange"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-9 py-5">
              <div className="product-right">
                <h3>ExChainPRO</h3>
                <p>
                  Earn, Buy and Sell with Your favorite CRYPTOCURRENCY on the
                  Decentralized Market Get started with the easiest and most
                  Secure platform to buy,sell,trade and earn cryptocurrencies.
                </p>
                <div className="exchainpro-button">
                  <button className="commonbutton">Visit</button>
                </div>
              </div>
            </div>
            <div className="col-md-9 py-5">
              <div className="product-right">
                <h3>EscrowPRO</h3>
                <p>
                  EscrowPRO is designed to function as an unbiased and neutral
                  third party while ensuring that the preset conditions of the
                  trade are being satisfied by the concerned parties. EscrowPRO
                  would not release the contents until the agreed conditions are
                  met.
                </p>
                <div className="exchainpro-button">
                  <button className="commonbutton">Explore</button>
                </div>
              </div>
            </div>
            <div className="col-md-3 py-5">
              <div className="product-left-img">
                <img
                  src="./image/EscrowPRO.png"
                  alt="exchange"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-3 py-5">
              <div className="product-left-img">
                <img
                  src="./image/NFT-PRO.png"
                  alt="exchange"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-9 py-5">
              <div className="product-right">
                <h3>NFT-PRO Marketplace</h3>
                <p>
                  An enchanting NFT marketplace for enthusiasts, to trade and/or
                  collect rare NFTs.
                </p>
                <div className="exchainpro-button">
                  <button className="commonbutton">Explore</button>
                </div>
              </div>
            </div>
            <div className="col-md-9 py-5">
              <div className="product-right">
                <h3>NFT Booster</h3>
                <p>
                  Limited quantity financial instruments designed to incentivize
                  stakers holding their NFTs for longer periods of time, to
                  stand the chance of unlocking multibagger returns. There will
                  be 2 variants - X2 and X3.
                </p>
                <div className="exchainpro-button">
                  <button className="commonbutton">Explore</button>
                </div>
              </div>
            </div>
            <div className="col-md-3 py-5">
              <div className="product-left-img">
                <img
                  src="./image/NFTBooster.png"
                  alt="exchange"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-md-3 py-5">
              <div className="product-left-img">
                <img
                  src="./image/SPRO Rewards.png"
                  alt="exchange"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-9 py-5">
              <div className="product-right">
                <h3>EPRO Rewards</h3>
                <p>
                  EPRO Rewards is a loyalty program that allows customers to
                  earn and redeem points for their purchases.
                </p>
                <div className="exchainpro-button">
                  <button className="commonbutton">Explore</button>
                </div>
              </div>
            </div>
            <div className="col-md-9 py-5">
              <div className="product-right">
                <h3>Swapping</h3>
                <p>
                  Smart contract enabled exchange of one asset for another in a
                  decentralized manner using SmartChain PRO blockchain.
                  Facilitating trustless and automated transactions between two
                  parties without the need for intermediaries, such as
                  centralized exchanges. ExChainPRO Exchange is using
                  decentralized swap to give the members a seamless way to
                  exchange tokens.
                </p>
                <div className="exchainpro-button">
                  <button className="commonbutton">Explore</button>
                </div>
              </div>
            </div>
            <div className="col-md-3 py-5">
              <div className="product-left-img">
                <img
                  src="./image/Swapping.png"
                  alt="exchange"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-md-3 py-5">
              <div className="product-left-img">
                <img
                  src="./image/GasFree.png"
                  alt="exchange"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-9 py-5">
              <div className="product-right">
                <h3>Gas Free Blockchain</h3>
                <p>
                  A gas-free SmartChainPRO blockchain aims to address a
                  universal gas spike issue. It will lead to enhanced
                  accessibility and wide scale adoption by removing the
                  financial barrier to entry.
                </p>
                <div className="exchainpro-button">
                  <button className="commonbutton">Explore</button>
                </div>
              </div>
            </div>
            <div className="col-md-9 py-5">
              <div className="product-right">
                <h3>SmartChainPRO wallet</h3>
                <p>
                  First crypto wallet with enhanced security biometrics scan and
                  inheritance options. Bio Face and Eye Scan Facial and eye
                  biometrics scan storage directly on the blockchian in smart
                  contract. Finger Print Scan Finger print recognition ginving
                  you access to your private wallet in a secure way. SEED Words
                  You will also be getting the normal 12-24 SEED words to your
                  wallet.
                </p>
                <div className="exchainpro-button">
                  <button className="commonbutton">Explore</button>
                </div>
              </div>
            </div>
            <div className="col-md-3 py-5">
              <div className="product-left-img">
                <img
                  src="./image/SmartChainPRO wallet.png"
                  alt="exchange"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="Tokenomics py-5" id="Tokenomics">
          <div className="Tokenomics-title">
            <h2>Tokenomics</h2>
          </div>
          <div className="pie-chart">
            <PieChart />
          </div>
        </div>
        <div className="ourteam py-5" id="ourteam">
          <div className="ourteam-title ">
            <h2>Our Team</h2>
            <p>
              SmartChainPRO is a block chain based marketplace, where buyers &
              sellers meet to carry out operations involving digital goods &
              assets with . Our mission is to enable the most innovative
              blockchain technology companies to bring new and disruptive
              business models to market and to access these new capital markets.
            </p>
          </div>
        </div>
        <div className="our-team-carousel">
          <SlickSlider />
        </div>
        <div className="faq py-5" id="faq">
          <div className="faq-title">
            <h2>FAQ</h2>
          </div>
          <div className="faq-accordian">
            <MyAccordian />
          </div>
        </div>
        <div className="Subscribe py-5" id="Subscribe">
          <div className="Subscribe-title">
            <h2>Subscribe</h2>
          </div>
          <div className="suscribe-form">
            <Subscribe />
          </div>
        </div>
        <div className="fotter">
          <div className="row">
            <div className="col-md-3 footer-logo">
              <img src="./image/logo.webp" alt="logo" className="img-fluid" />
              <p className="my-5">
                Welcome to SmartChainPRO a inovated blockchain concept there
                share profit with internal shareholders
              </p>
            </div>
            <div className="col-md-3 py-4 policy">
              <ul>
                <li>Term of use</li>
                <li>Privacy Policy</li>
                <li>Our Team</li>
              </ul>
            </div>
            <div className="col-md-3 py-4 social-link">
              <ul className="d-flex">
                <li>
                  <FaFacebookF />
                </li>
                <li>
                  <FaDiscord />
                </li>
                <li>
                  <AiFillInstagram />
                </li>
                <li>
                  <BsTwitter />
                </li>
              </ul>
            </div>
            <div className="col-md-3 py-4 contactus">
              <p>Contact Us</p>
              <p>info@SmartChainPRO.net</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="rights-reserved">
          <h6 className="text-center">
            © 2023 SmartChainPro. All Rights Reserved.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
