import { NextPage, NextPageContext } from "next";
import Header from "../components/Header";

export async function getStaticProps(context: NextPageContext) {
  return {
    props: {
      env: process.env.NEXT_ENV
    },
  }
}

const Home: NextPage<{ env: string }> = ({ env }) => {
  return (
    <>
      <Header />
      <h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque possimus
        quaerat inventore. Unde fugit officiis enim! Dolore eius ducimus porro
        corporis sit assumenda dolor fugiat, quibusdam cupiditate hic, mollitia
        nihil.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque possimus
        quaerat inventore. Unde fugit officiis enim! Dolore eius ducimus porro
        corporis sit assumenda dolor fugiat, quibusdam cupiditate hic, mollitia
        nihil.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque possimus
        quaerat inventore. Unde fugit officiis enim! Dolore eius ducimus porro
        corporis sit assumenda dolor fugiat, quibusdam cupiditate hic, mollitia
        nihil.
      </h1>
      <h1 className="text-5xl text-red-700">ENV {env}</h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque possimus
        quaerat inventore. Unde fugit officiis enim! Dolore eius ducimus porro
        corporis sit assumenda dolor fugiat, quibusdam cupiditate hic, mollitia
        nihil.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque possimus
        quaerat inventore. Unde fugit officiis enim! Dolore eius ducimus porro
        corporis sit assumenda dolor fugiat, quibusdam cupiditate hic, mollitia
        nihil.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque possimus
        quaerat inventore. Unde fugit officiis enim! Dolore eius ducimus porro
        corporis sit assumenda dolor fugiat, quibusdam cupiditate hic, mollitia
        nihil.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque possimus
        quaerat inventore. Unde fugit officiis enim! Dolore eius ducimus porro
        corporis sit assumenda dolor fugiat, quibusdam cupiditate hic, mollitia
        nihil.
      </h1>
      <h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque possimus
        quaerat inventore. Unde fugit officiis enim! Dolore eius ducimus porro
        corporis sit assumenda dolor fugiat, quibusdam cupiditate hic, mollitia
        nihil.
      </h1>
    </>
  );
};

export default Home;
