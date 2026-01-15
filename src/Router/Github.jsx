import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-red-500 text-xl">
        Failed to load data.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-20 py-12">
      {/* Header */}
      <h1 className="text-4xl font-bold text-amber-300 mb-10 text-center">
        GitHub Profile
      </h1>

      {/* Avatar */}
      <div className="flex justify-center mb-10">
        <img
          src={data.avatar_url}
          alt="avatar"
          className="w-40 h-40 rounded-full border-4 border-amber-300 shadow-lg"
        />
      </div>

      {/* Info Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-900 rounded-lg overflow-hidden shadow-lg">
          <tbody>
            <tr className="border-b border-gray-700">
              <td className="px-6 py-4 font-semibold text-amber-300">
                Username
              </td>
              <td className="px-6 py-4">{data.login}</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="px-6 py-4 font-semibold text-amber-300">Name</td>
              <td className="px-6 py-4">{data.name || "Not provided"}</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="px-6 py-4 font-semibold text-amber-300">
                Public Repos
              </td>
              <td className="px-6 py-4">{data.public_repos}</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="px-6 py-4 font-semibold text-amber-300">
                Followers
              </td>
              <td className="px-6 py-4">{data.followers}</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="px-6 py-4 font-semibold text-amber-300">
                Following
              </td>
              <td className="px-6 py-4">{data.following}</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="px-6 py-4 font-semibold text-amber-300">
                Location
              </td>
              <td className="px-6 py-4">{data.location || "Not provided"}</td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-semibold text-amber-300">Bio</td>
              <td className="px-6 py-4">{data.bio || "Not provided"}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Link to GitHub */}
      <div className="text-center mt-10">
        <a
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-amber-300 text-black px-6 py-3 rounded-full font-semibold hover:bg-amber-400 transition-colors duration-300"
        >
          Visit GitHub Profile
        </a>
      </div>
    </div>
  );
}

export default Github;

export let getInfo = async () => {
  let res = await fetch("https://api.github.com/users/zulkaifkhan123");
  if (!res.ok) throw new Error("Failed to fetch GitHub data");
  return res.json();
};
