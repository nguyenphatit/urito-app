import { FC } from "react";
import Image from "next/image";
import imageUrl from "../../../public/images/not-found.gif";

/**
 * The comoponent for the 404 page
 * @returns {JSX.Element}
 */
const NotFound: FC = () => (
  <div className="flex flex-col justify-center items-center min-h-screen">
    <div className="flex flex-col justify-items-center items-center">
      <h1 className="font-bold text-5xl uppercase text-center text-green-500 mt-10">
        Page not found
      </h1>
      <Image
        src={imageUrl}
        alt="Picture of the author"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      <a
        className="bg-green-500 py-3 px-5 rounded-full uppercase font-bold text-white transition duration-500 hover:bg-green-600"
        href={"/"}
      >
        Go home
      </a>
    </div>
  </div>
);

export default NotFound;
