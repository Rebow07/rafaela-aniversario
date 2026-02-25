import { useState } from "react";
import Landing from "./Landing";
import Slideshow from "./Slideshow";
import Ending from "./Ending";

type PageState = "landing" | "slideshow" | "ending";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<PageState>("landing");

  const handleEnterSlideshow = () => {
    setCurrentPage("slideshow");
  };

  const handleSlideshowComplete = () => {
    setCurrentPage("ending");
  };

  const handleRestart = () => {
    setCurrentPage("landing");
  };

  return (
    <>
      {currentPage === "landing" && (
        <Landing onEnter={handleEnterSlideshow} />
      )}
      {currentPage === "slideshow" && (
        <Slideshow onComplete={handleSlideshowComplete} />
      )}
      {currentPage === "ending" && <Ending onRestart={handleRestart} />}
    </>
  );
}
