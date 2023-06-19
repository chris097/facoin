import React from 'react';

import signupImage from '@/images/illustrations/signup.png';
import walletImage from '@/images/illustrations/wallet.png';
import okayImage from '@/images/illustrations/okay.png';
import arrow from '@/images/arrow.svg';
import { Fade } from 'react-reveal';

export default function StepSection() {
  return (
    <section className="px-6">
      <div className='rounded-3xl bg-gradient-to-b from-[#060930] to-[#060930] py-20'>
        <div className="mx-auto text-center">
          <h2 className="font-bold text-4xl mb-6 text-white leading-normal">
            Get started in just a few minutes
          </h2>
          <div className="md:flex justify-center gap-20">
            <Fade up>
              <div className="text-center relative px-4">
                <div className='relative'>
                  <img src={signupImage} className="mb-4 mx-auto hover:-translate-y-6 hover:scale-105 transition-all duration-300" alt="" />
                  <img src={arrow} alt="" className="hidden md:block absolute top-1/2 -right-36" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-300">Sign Up</h3>
                <p className="max-w-sm text-darkgray/70">
                  Buy Bitcoin or Ethereum, then securely store it in your Wallet or send it on easily to friends
                </p>
              </div>
            </Fade>
            <Fade up delay={500}>
              <div className="text-center relative px-4">
                <div className='relative'>
                  <img src={walletImage} className="mb-4 mx-auto hover:-translate-y-6 hover:scale-105 transition-all duration-300" alt="" />
                  <img src={arrow} alt="" className="hidden md:block absolute top-1/2 -right-36" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-300">Fund</h3>
                <p className="max-w-sm text-darkgray/70">
                  Choose your preferred payment method such as bank transfer or credit card to top up your NEFA Wallet
                </p>
              </div>
            </Fade>
            <Fade up delay={1000}>
              <div className="text-center relative px-4">
                <img src={okayImage} className="mb-4 mx-auto hover:-translate-y-6 hover:scale-105 transition-all duration-300" alt="" />
                <h3 className="text-2xl font-bold mb-4 text-slate-300">Buy Crypto</h3>
                <p className="max-w-sm text-darkgray">
                  Sign up for your free NEFA Wallet on web, iOS or Android and follow our easy process to set up your profile
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}
