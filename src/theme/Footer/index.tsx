import React from "react";
import FooterType from "@theme/Footer";
import type { WrapperProps } from "@docusaurus/types";
import { useColorMode } from "@docusaurus/theme-common";

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): JSX.Element {
  const { colorMode } = useColorMode();
  return (
    <>
      {/* <Footer {...props} /> */}
      <footer
        className={`w-full ${
          colorMode == "dark" ? "bg-slate-950" : "bg-[#FAFAFA]"
        }`}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-24 xl:px-48">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 py-10 sm:py-14 max-sm:max-w-sm max-sm:mx-auto gap-y-10">
            <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
              <div className="flex justify-center lg:justify-start">
                <img
                  src={
                       "/dokaai-documentation/img/Logo.png"
                  }
                  alt="Company Logo"
                />
              </div>
              <p className="py-7 text-sm  lg:max-w-xs text-center lg:text-left">
                The comprehensive notification platform tailored for developers
              </p>
            </div>
            <div className="lg:mx-auto text-center sm:text-left">
              <div className="text-lg  font-medium mb-7">Services</div>
              <div className="text-sm  transition-all duration-500">
                <div className="mb-3">
                  <div className="hover:cursor-pointer">Notification</div>
                </div>
                <div className="mb-3">
                  <div className="hover:cursor-pointer">Engagement</div>
                </div>
                <div className="mb-3">
                  <div className="hover:cursor-pointer">Rewards</div>
                </div>
                <div>
                  <div className="hover:cursor-pointer">Search</div>
                </div>
              </div>
            </div>
            {/* <!--End Col--> */}
            <div className="lg:mx-auto text-center sm:text-left ">
              <div className="text-lg  font-medium mb-7">Industry solutions</div>
              <div className="text-sm  transition-all duration-500">
                <div className="mb-3">
                  <div className="hover:cursor-pointer">Education</div>
                </div>
                <div className="mb-3">
                  <div className="hover:cursor-pointer">Retail & E-commerce</div>
                </div>
                <div className="mb-3">
                  <div className="hover:cursor-pointer">Changelog</div>
                </div>
                <div className="mb-3">
                  <div className="hover:cursor-pointer">Fintech</div>
                </div>
                <div>
                  <div className="hover:cursor-pointer">Health care</div>
                </div>
              </div>
            </div>
            {/* <!--End Col--> */}
            <div className="lg:mx-auto text-center sm:text-left">
              <div className="text-lg  font-medium mb-7">
                Use cases
              </div>
              <div className="text-sm  transition-all duration-500">
                <div className="mb-3">
                  <div className="hover:cursor-pointer">Realtime Messaging</div>
                </div>
                <div className="mb-3">
                  <div className="hover:cursor-pointer">Omnichannel communication</div>
                </div>
                <div className="mb-3">
                  <div className="hover:cursor-pointer">Developer flexibility</div>
                </div>
                <div>
                  <div className="hover:cursor-pointer">Marketing campaigns</div>
                </div>
              </div>
            </div>
            {/* <!--End Col--> */}
            <div className="lg:mx-auto text-center sm:text-left">
              <div className="text-lg  font-medium mb-7">Resources</div>
              <div className="text-sm  transition-all duration-500">
                <div className="mb-3">
                  <div className="hover:cursor-pointer">About us</div>
                </div>
                <div className="mb-3">
                  <div className="hover:cursor-pointer">Integrations</div>
                </div>
                <div className="mb-3">
                  <div className="hover:cursor-pointer">
                    Documentation
                  </div>
                </div>
                <div>
                  <div className="hover:cursor-pointer">Privacy policy</div>
                </div>
                <div>
                  <div className="hover:cursor-pointer">Terms of use</div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`h-[1px] w-full ${
              colorMode == "dark" ? "bg-[#FAFAFA]" : "bg-[#E1E1E1]"
            }`}
          ></div>

          {/* <!--Grid--> */}
          <div className="py-7 border-t border-gray-200">
            <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
              <span className="text-sm max-w-[18rem] text-center lg:text-left hover:cursor-pointer">
                Copyright © 2024 Swift. All rights reserved
              </span>
              <div className="flex mt-4 space-x-1 sm:justify-center lg:mt-0 ">
                <div className="w-9 h-9 rounded-full  flex justify-center items-center hover:bg-gray-100 hover:cursor-pointer">
                  <img src="/dokaai-documentation/img/facebook.svg" alt="X Icon" />
                </div>
                <div className="w-9 h-9 rounded-full  flex justify-center items-center hover:bg-gray-100 hover:cursor-pointer">
                  <img src="/dokaai-documentation/img/twitter.svg" alt="Linkdin Icon" />
                </div>
                <div className="w-9 h-9 rounded-full  flex justify-center items-center hover:bg-gray-100 hover:cursor-pointer">
                  <img src="/dokaai-documentation/img/instagram.svg" alt="Linkdin Icon" />
                </div>
                <div className="w-9 h-9 rounded-full flex justify-center items-center hover:bg-gray-100 hover:cursor-pointer">
                  <img src="/dokaai-documentation/img/linkedin.svg" alt="Linkdin Icon" />
                </div>
                <div className="w-9 h-9 rounded-full flex justify-center items-center hover:bg-gray-100 hover:cursor-pointer">
                  <img src="/dokaai-documentation/img/youtube.svg" alt="Linkdin Icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
