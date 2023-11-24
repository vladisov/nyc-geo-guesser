"use client";
import React from "react";
import Button from "./component/button";

interface PlayerSetupProps {
  players: number;
  attempts: number;
  setPlayers: (num: number) => void;
  setAttempts: (num: number) => void;
  setGameSet: (bool: boolean) => void;
}

const PlayerSetup: React.FC<PlayerSetupProps> = ({
  players,
  attempts,
  setPlayers,
  setAttempts,
  setGameSet,
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen font-nunito">
      <h1 className="text-3xl font-bold mb-2">NYC Game Setup</h1>

      <div className="text-xl">
        <div className="mb-4 mt-4">
          <label className="mr-2">Number of Players:</label>
          <input
            type="number"
            value={players}
            max="5"
            onChange={(e) => setPlayers(parseInt(e.target.value))}
            min="1"
          />
        </div>
        <div className="mb-8">
          <label className="mr-2">Number of Attempts:</label>
          <input
            type="number"
            value={attempts}
            max="10"
            onChange={(e) => setAttempts(parseInt(e.target.value))}
            min="1"
          />
        </div>
      </div>

      <Button colorClass="bg-yellow-300" onClick={() => setGameSet(true)}>
        Start game
      </Button>
    </div>
  );
};

export default PlayerSetup;
