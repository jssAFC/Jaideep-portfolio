import React from "react";
import ProjectCard from "./projectCard";

const huffmanProject = {
  title: "Huffman File Compressor",
  description:
    "A command line file compression and decompression program in Java using Huffman Coding Algorithm.",
  technologies: ["Java", "Data Structure", "Algorithms", "File I/O"],
  repoLink: "https://github.com/jssAFC",
  demoLink: "https://github.com/jssAFC",
  keyFeatures: [
    "Implemented Huffman Coding Algorithm.",
    "Used Priority Queue for building.",
    "HashMap for character code storage.",
    "Bit-level file operations",
    "Significant Compression Ratio",
  ],
};

const delhiMetroRouteFinder = {
  title: "Delhi Metro Route Finder",
  description:
    "A command-line application in Java that calculates the shortest route and fare between any two stations on the Delhi Metro network.",
  technologies: [
    "Java",
    "Graph Theory",
    "Dijkstra's Algorithm",
    "Data Structures",
  ],
  repoLink: "https://github.com/jssAFC", // Replace with actual repo if different
  demoLink: "https://github.com/jssAFC", // Replace with demo/video if available
  keyFeatures: [
    "Modeled the metro network as a weighted graph with stations as nodes.",
    "Implemented Dijkstra’s algorithm for efficient shortest path calculation.",
    "Custom Min-Heap data structure for performance optimization.",
    "Displays optimal route, line changes, distance, and fare.",
    "User-friendly Command Line Interface (CLI).",
  ],
};

const Projects = () => {
  return (
    <section id="projects" className="p-2 px-2 h-screen w-screen sm:p-8 ">
      <h1 className="primary-font text-5xl mb-4 sm:mb-16">Projects</h1>
      <div className="flex flex-wrap justify-center gap-6 items-start">
        <ProjectCard {...huffmanProject} />
        <ProjectCard {...delhiMetroRouteFinder} />
      </div>
    </section>
  );
};

export default Projects;
