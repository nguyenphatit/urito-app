import { FC, useState } from "react";
import Image from "next/image";
import ActiveLink from "../ActiveLink";
import navigation from "../../data/navigation.json";
import navigationApp from "../../data/navigation-app.json";
import navigationEvent from "../../data/navigation-event.json";
import {
  NavigationAppType,
  NavigationEventType,
  NavigationType,
} from "../../types/navigation.type";
import Dropdown from "../Dropdown";

interface CardProps {
  image: string;
  description: string;
}

const Card: FC<CardProps> = ({ image, description }) => (
  <div className="w-full">
    <Image
      src={image}
      alt="Picture of the author"
      layout="responsive"
      width={300}
      height={200}
      className="rounded-lg shadow-lg"
    />
    <p className="py-2 text-justify">{description}</p>
  </div>
);

const Header: FC = () => {
  const [isOpenLeftMenu, setIsOpenLeftMenu] = useState<boolean>(false);
  const [isOpenRightMenu, setIsOpenRightMenu] = useState<boolean>(false);

  const openLeftMenu = () => {
    setIsOpenLeftMenu(!isOpenLeftMenu);
  };

  const openRightMenu = () => {
    setIsOpenRightMenu(!isOpenRightMenu);
  };

  return (
    <div className="fixed top-0 z-50 w-full flex">
      {/* Toolbar */}
      <div className="relative bg-gray-900 z-48 w-full flex">
        <div className="flex items-center justify-center box-border">
          <div className="flex items-center justify-center h-20 mx-8">
            <div
              className="font-bold text-xl text-white cursor-pointer uppercase flex flex-row justify-center items-center gap-1"
              onClick={openLeftMenu}
            >
              <span>URITO</span>
              <svg width="8" height="5" viewBox="0 0 8 5">
                <title>mainMenuDownNonHover</title>
                <path
                  d="M.707 1.707l2.586 2.586a1 1 0 001.414 0l2.586-2.586C7.923 1.077 7.477 0 6.586 0H1.414C.524 0 .077 1.077.707 1.707z"
                  fill="#FFFFFF"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-start font-bold box-border">
          {navigation.map((item: NavigationType) => (
            <ActiveLink
              key={item.id}
              activeClassName="text-red-300"
              href={item.href}
            >
              <a className="text-white px-8 py-6 hidden md:inline-block hover:text-gray-400">
                {item.name}
              </a>
            </ActiveLink>
          ))}
        </div>
        <div className="flex items-center justify-center box-border mx-8">
          <Dropdown>
            <div className="h-8 w-8 cursor-pointer flex items-center justify-center ml-4 hover:bg-gray-800 rounded-full">
              <svg width="14" height="14" viewBox="0 0 16 16">
                <title>globeIcon</title>
                <path
                  d="M7.992 0C3.576 0 0 3.584 0 8s3.576 8 7.992 8C12.416 16 16 12.416 16 8s-3.584-8-8.008-8zm5.544 4.8h-2.36c-.256-1-.624-1.96-1.104-2.848A6.424 6.424 0 0113.536 4.8zM8 1.632A11.27 11.27 0 019.528 4.8H6.472A11.27 11.27 0 018 1.632zM1.808 9.6A6.594 6.594 0 011.6 8c0-.552.08-1.088.208-1.6h2.704A13.212 13.212 0 004.4 8c0 .544.048 1.072.112 1.6H1.808zm.656 1.6h2.36c.256 1 .624 1.96 1.104 2.848A6.39 6.39 0 012.464 11.2zm2.36-6.4h-2.36a6.39 6.39 0 013.464-2.848A12.52 12.52 0 004.824 4.8zM8 14.368A11.27 11.27 0 016.472 11.2h3.056A11.27 11.27 0 018 14.368zM9.872 9.6H6.128A11.77 11.77 0 016 8c0-.544.056-1.08.128-1.6h3.744C9.944 6.92 10 7.456 10 8s-.056 1.072-.128 1.6zm.2 4.448a12.52 12.52 0 001.104-2.848h2.36a6.424 6.424 0 01-3.464 2.848zM11.488 9.6c.064-.528.112-1.056.112-1.6s-.048-1.072-.112-1.6h2.704c.128.512.208 1.048.208 1.6s-.08 1.088-.208 1.6h-2.704z"
                  fill="#E8E8E8"
                ></path>
              </svg>
            </div>
            <div>
              <ul>
                <li className="px-4 py-3 cursor-pointer hover:text-red-400">English</li>
                <li className="px-4 py-3 cursor-pointer hover:text-red-400">Vietnamese</li>
              </ul>
            </div>
          </Dropdown>
          <div
            className="h-8 w-8 ml-4 cursor-pointer md:hidden"
            onClick={openRightMenu}
          >
            <svg width="32" height="32" viewBox="0 0 32 32">
              <title>burgerNav</title>
              <circle
                opacity=".07"
                cx="16"
                cy="16"
                r="16"
                fill="#F9F9F9"
              ></circle>
              <path
                fill="#C7C7C7"
                d="M22 10v2H10v-2zm0 5v2H10v-2zm0 5v2H10v-2z"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Left menu */}
      <div
        className={`w-full sm:w-9/12 md:w-full h-screen md:h-auto left-0 top-0 absolute z-50 bg-white overflow-y-auto box-border shadow-md transition duration-200 ease-in-out ${
          isOpenLeftMenu
            ? "transform -translate-y-0"
            : "transform -translate-y-full"
        } `}
      >
        <div className="fake-bg"></div>
        <div className="relative text-black w-full">
          <div className="p-4 md:p-8 mt-4 flex items-center justify-between">
            <div
              className="font-bold text-xl text-black cursor-pointer uppercase flex flex-row justify-center items-center gap-1"
              onClick={openLeftMenu}
            >
              <span>URITO</span>
              <svg width="8" height="5" viewBox="0 0 8 5">
                <title>mainMenuUpNonHover</title>
                <path d="M7.3 2.9L4.7.3c-.4-.4-1-.4-1.4 0L.7 2.9c-.6.6-.2 1.7.7 1.7h5.2c.9 0 1.3-1.1.7-1.7z"></path>
              </svg>
            </div>
            <div className="cursor-pointer rounded-full" onClick={openLeftMenu}>
              <svg width="32" height="32" viewBox="0 0 24 24">
                <title>applicationSwitcherDesktopClose</title>
                <rect
                  opacity=".07"
                  width="24"
                  height="24"
                  rx="2"
                  fill="#333"
                ></rect>
                <path
                  stroke="#7E7E7E"
                  strokeWidth="2"
                  d="M8.007 7.973l8.132 8.132m-8.146-.012l8.132-8.132"
                ></path>
              </svg>
            </div>
          </div>
          <div className="box-border py-4 flex flex-col md:flex-row">
            <div className="w-full h-auto flex flex-col md:grid md:grid-cols-1 lg:grid-cols-2 gap-1.5 px-4 md:px-8">
              {navigationApp.map((item: NavigationAppType, index: number) => (
                <div key={index} className="box-border mb-2 md:mr-8">
                  <div className="relative w-full h-8 font-bold text-left uppercase select-none">
                    {item.title}
                  </div>
                  <div className="relative w-full flex flex-col">
                    {item.items.map((child: NavigationType) => (
                      <div
                        key={`${item.title}${child.id}`}
                        className="py-2 pl-4 pr-2 rounded-sm flex hover:bg-gray-300"
                      >
                        <a
                          className="w-full uppercase font-light"
                          href={child.href}
                        >
                          {child.name}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full h-auto flex flex-col lg:flex-row gap-8 px-4 mt-8 md:mt-0 md:px-8">
              {navigationEvent.map((item: NavigationEventType) => (
                <Card
                  key={item.id}
                  image={item.image}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-full sm:max-w-xs h-screen right-0 top-0 absolute z-49 bg-gray-900 overflow-y-auto box-border shadow-md transition duration-200 ease-in-out md:invisible ${
          isOpenRightMenu
            ? "transform translate-x-0"
            : "transform translate-x-full"
        } `}
      >
        <div className="h-20 flex justify-end items-center px-8 bg-black">
          <div className="cursor-pointer" onClick={openRightMenu}>
            <svg width="32" height="32" viewBox="0 0 32 32">
              <title>burgerNavClose</title>
              <circle
                opacity=".07"
                cx="16"
                cy="16"
                r="16"
                fill="#F9F9F9"
              ></circle>
              <path
                d="M12.007 11.973l8.132 8.132m-8.146-.012l8.131-8.132"
                stroke="#C7C7C7"
                strokeWidth="2"
              ></path>
            </svg>
          </div>
        </div>
        <div className="flex flex-col">
          {navigation.map((item: NavigationType) => (
            <ActiveLink
              key={item.id}
              activeClassName="bg-gray-500"
              href={item.href}
            >
              <a className="text-white px-8 py-6 hover:bg-gray-700 border-b-2 border-gray-700">
                {item.name}
              </a>
            </ActiveLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
