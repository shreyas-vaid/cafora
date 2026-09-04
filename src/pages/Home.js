import React from "react";
import Discover from "./Discover";

/**
 * Home component forwards to the new Discover experience
 * ensuring legacy routes (/home) remain fully functional.
 */
export default function Home() {
  return <Discover />;
}