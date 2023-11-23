"use client";
import { useState } from "react";
import PlayerSetup from "./player-setup";
import dynamic from "next/dynamic";

const Game = dynamic(() => import("./game"), {
  ssr: false,
}); // needed for leaflet window to be defined

const Home: React.FC = () => {
  const [players, setPlayers] = useState<number>(2);
  const [attempts, setAttempts] = useState<number>(5);
  const [isGameSet, setGameSet] = useState<boolean>(false);

  const restart = () => {
    setGameSet(false);
    setPlayers(2);
    setAttempts(5);
  };

  return !isGameSet ? (
    <PlayerSetup
      players={players}
      attempts={attempts}
      setPlayers={setPlayers}
      setGameSet={setGameSet}
      setAttempts={setAttempts}
    />
  ) : (
    <Game
      numPlayers={players}
      numAttempts={attempts}
      restart={restart}
      isGameSet={isGameSet}
    />
  );
};

export default Home;
