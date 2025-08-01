import Link from "@docusaurus/Link";
import React from "react";

interface CardProps {
  title: string;
  description: string;
  link: string;
  bgColor?: string;
  icon?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  link,
  bgColor = "bg-white",
  icon = false,
}) => {
  return (
    <div className={`border p-6 rounded-lg shadow-md bg-[${bgColor}]`}>
      {icon && (
        <img
          src="/dokaai-documentation/img/commonIcon.svg"
          alt="Common Icon"
          className="w-8 h-8 mb-3"
        />
      )}
      <div>
        <h3 className="text-lg font-bold text-black">{title}</h3>
        <p className="text-black">{description}</p>
        <button className="border border-[#389F7F] p-1 w-32 h-8 rounded-lg hover:bg-[#E2F3EF] mt-1 bg-transparent">
          <Link href={link} className="hover:no-underline text-[#389F7F] flex items-center gap-1 ml-4">
            <span className="font-medium">Learn More</span><img src="/dokaai-documentation/img/arrow-right.svg" alt="ArrowIcon" className="w-4 h-4"/>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Card;
