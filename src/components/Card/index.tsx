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
        <button className="border border-[#389F7F] p-1 w-32 h-8 rounded-lg  hover:bg-gray-400 mt-1 bg-transparent">
          <Link href={link} className="hover:no-underline text-[#389F7F]">
            Learn More →
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Card;
