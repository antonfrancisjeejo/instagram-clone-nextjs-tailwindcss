import React from "react";
import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";

const signin = ({ providers }) => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
        <img className="w-80" src="https://bit.ly/3IwvKHp" alt="" />
        <p className="font-xs italic">
          This is not a REAL app, it is build for educational purposes only
        </p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() =>
                  signIn(provider.id, {
                    callbackUrl: "/",
                  })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}

export default signin;
