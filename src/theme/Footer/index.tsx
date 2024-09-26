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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
            <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
              <div className="flex justify-center lg:justify-start">
                <img
                  src={
                    colorMode == "dark"
                      ? "/img/dokkai-smile-light.svg"
                      : "/img/dokkai-smile-dark.svg"
                  }
                  alt="Smile Icon"
                />
              </div>
              <p className="py-8 text-sm  lg:max-w-xs text-center lg:text-left">
                The comprehensive notification platform tailored for developers
              </p>
            </div>
            <div className="lg:mx-auto text-left">
              <div className="text-lg  font-medium mb-7">Campany</div>
              <div className="text-sm  transition-all duration-500">
                <div className="mb-6">
                  <div className="hover:cursor-pointer">About</div>
                </div>
                <div className="mb-6">
                  <div className="hover:cursor-pointer">Philosophy</div>
                </div>
                <div className="mb-6">
                  <div className="hover:cursor-pointer">Career</div>
                </div>
                <div>
                  <div className="hover:cursor-pointer">Blogs</div>
                </div>
              </div>
            </div>
            {/* <!--End Col--> */}
            <div className="lg:mx-auto text-left ">
              <div className="text-lg  font-medium mb-7">Products</div>
              <div className="text-sm  transition-all duration-500">
                <div className="mb-6">
                  <div className="hover:cursor-pointer">Chanells</div>
                </div>
                <div className="mb-6">
                  <div className="hover:cursor-pointer">Smart Devlivery</div>
                </div>
                <div className="mb-6">
                  <div className="hover:cursor-pointer">Changelog</div>
                </div>
                <div className="mb-6">
                  <div className="hover:cursor-pointer">Service Status</div>
                </div>
                <div>
                  <div className="hover:cursor-pointer">Playground</div>
                </div>
              </div>
            </div>
            {/* <!--End Col--> */}
            <div className="lg:mx-auto text-left">
              <div className="text-lg  font-medium mb-7">
                Why SwiftNotifier?
              </div>
              <div className="text-sm  transition-all duration-500">
                <div className="mb-6">
                  <div className="hover:cursor-pointer">Pricing</div>
                </div>
                <div className="mb-6">
                  <div className="hover:cursor-pointer">Integration</div>
                </div>
                <div className="mb-6">
                  <div className="hover:cursor-pointer">Service Status</div>
                </div>
                <div>
                  <div className="hover:cursor-pointer">Playground</div>
                </div>
              </div>
            </div>
            {/* <!--End Col--> */}
            <div className="lg:mx-auto text-left">
              <div className="text-lg  font-medium mb-7">Build</div>
              <div className="text-sm  transition-all duration-500">
                <div className="mb-6">
                  <div className="hover:cursor-pointer">API Refrence</div>
                </div>
                <div className="mb-6">
                  <div className="hover:cursor-pointer">Docs</div>
                </div>
                <div className="mb-6">
                  <div className="hover:cursor-pointer">
                    SDKs and API Wrapper
                  </div>
                </div>
                <div>
                  <div className="hover:cursor-pointer">GitHub Community</div>
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
              <span className="text-sm max-w-[12rem] hover:cursor-pointer">
                Copyright © 2024 Swift. All rights reserved
              </span>
              <span className="text-sm max-w-[12rem] hover:cursor-pointer">
                Term
              </span>
              <span className="text-sm max-w-[12rem] hover:cursor-pointer">
                Privicy
              </span>
              <span className="text-sm max-w-[12rem] hover:cursor-pointer">
                Cookie Policy
              </span>
              <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
                <div className="w-9 h-9 rounded-full  flex justify-center items-center hover:bg-[#ceffef] hover:cursor-pointer">
                  <img src="/img/X-icon.svg" alt="X Icon" />
                </div>
                <div className="w-9 h-9 rounded-full  flex justify-center items-center hover:bg-[#ceffef] hover:cursor-pointer">
                  <img src="/img/YT-icon.svg" alt="Linkdin Icon" />
                </div>
                <div className="w-9 h-9 rounded-full  flex justify-center items-center hover:bg-[#ceffef] hover:cursor-pointer">
                  <img src="/img/InstaIcon.svg" alt="Linkdin Icon" />
                </div>
                <div className="w-9 h-9 rounded-full flex justify-center items-center hover:bg-[#ceffef] hover:cursor-pointer">
                  <img src="/img/Linkdin.svg" alt="Linkdin Icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
