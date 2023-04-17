import React from "react";
import api from "../assets/portfolio/api.jpg";
import apod from "../assets/portfolio/apod.jpg";
import iptracker from "../assets/portfolio/iptracker.jpg";
import nftportal from "../assets/portfolio/nftportal.jpg";
import webpostman from "../assets/portfolio/webpostman.jpg";
import waveportal from "../assets/portfolio/waveportal.jpg";
import jcrew from "../assets/portfolio/jcrew.png"
import bellavita from "../assets/portfolio/bellavita.png"
import harvest from "../assets/portfolio/harvest.png"
import expedia from "../assets/portfolio/expedia.png"
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: jcrew,
      link: "https://jovial-starship-1d1c5c.netlify.app/",
      repo: "https://github.com/rahuljithu123/happy-notebook-3138.git",
    },
    {
      id: 2,
      src: bellavita,
      link: "https://bellavita0.netlify.app/",
      repo: "https://github.com/sujeetcoder/bellavitaproject1.git",
    },
    {
      id: 3,
      src: harvest,
      link: "harvesttt.netlify.app/",
      repo: "https://github.com/Faizankhan99/resonant-run-2352.git",
    },
    {
      id: 4,
      src: expedia,
      link: "https://stately-beignet-2a2aed.netlify.app/",
      repo: "https://github.com/rahuljithu123/poised-society-7641.git",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          {/* <p className="py-6">Check out some of my work right here</p> */}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(repo, "_blank")}
                >
                  GitHub
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(link, "_blank")}
                >
                  Deployed
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
