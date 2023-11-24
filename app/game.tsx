"use client";
import { useState, useEffect, useCallback } from "react";
import { LatLng } from "leaflet";
import MapPick from "./component/map";
import { GameState, Location, Player } from "./model/model";
import Button from "./component/button";
import locations_data from "./component/locations_data";

interface GameProps {
  isGameSet: boolean;
  numPlayers: number;
  numAttempts: number;
  restart: () => void;
}

const Game: React.FC<GameProps> = (props: GameProps) => {
  const { numPlayers, numAttempts, restart, isGameSet } = props;

  // all locations
  const [locations, setLocations] = useState<Array<Location>>([]);

  // user selects
  const [targetLocation, setTargetLocation] = useState<Location | null>(null);
  const [position, setPosition] = useState<LatLng | null>(null);

  const [turn, setTurn] = useState<number>(0);
  const [attemptsCounter, setAttemptsCounter] = useState<number>(0);

  const [gameState, setGameState] = useState<GameState>(
    new GameState(new Map())
  );

  const shuffle = (input: any[]) => {
    let array = input.slice();
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const setInitialGameState = useCallback(() => {
    const newGameState = new GameState(new Map());

    for (let i = 0; i < numPlayers; i++) {
      const newPlayer = new Player(i, `Player ${i + 1}`, 0, []);
      newGameState.addPlayer(newPlayer);
    }

    const locations_shuffled = shuffle(locations_data);
    setLocations(locations_shuffled);
    setTurn(0);
    setGameState(newGameState);
    setTargetLocation(locations_shuffled.pop() || null);
  }, [numPlayers]);

  useEffect(() => {
    if (isGameSet) {
      setInitialGameState();
    }
  }, [isGameSet, setInitialGameState]);

  useEffect(() => {
    if (position && targetLocation && attemptsCounter < numAttempts) {
      const distance = position.distanceTo(targetLocation.coordinates); // Distance in meters
      const currentPlayerId = turn;
      const currentPlayer = gameState.players.get(currentPlayerId);

      if (currentPlayer) {
        const attempt = {
          location: new Location("Current Position", position),
          target: targetLocation,
          distance: distance,
          score: 0,
        };

        const updatedPlayer = new Player(
          currentPlayer.id,
          currentPlayer.name,
          currentPlayer.totalScore,
          [...currentPlayer.attempts, attempt]
        );
        updatedPlayer.calculateScore();

        setGameState((prevGameState) => {
          const newPlayers = new Map(prevGameState.players);
          newPlayers.set(updatedPlayer.id, updatedPlayer);
          return new GameState(newPlayers);
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position, targetLocation, turn, attemptsCounter, numAttempts]);

  const clearMap = () => {
    setPosition(null);
    setTargetLocation(locations.pop() || null);
  };

  const nextTurn = () => {
    if (attemptsCounter >= numAttempts || !position) return;
    const nextPlayerTurn = (turn + 1) % numPlayers;
    const nextAttemptsCounter =
      turn + 1 >= numPlayers ? attemptsCounter + 1 : attemptsCounter;

    setTurn(nextPlayerTurn);
    setAttemptsCounter(nextAttemptsCounter);

    if (nextAttemptsCounter < numAttempts) {
      // Reset position for the next attempt
      clearMap();
    } else {
      // Handle what happens when the game is over
      // For example, show scores, declare winner, etc.
    }
  };

  const restartGame = () => {
    clearMap();
    restart();
  };

  const renderGameState = () => {
    const gameStateArray = Array.from(gameState.players.values());
    return (
      <div>
        {gameStateArray.map((player) => (
          <div key={player.id} className="p-4 border-black border-2 mb-4">
            <h2 className="text-lg   ">{player.name}</h2>
            <ul className="list-disc pl-5 mt-2">
              {player.attempts.map((attempt, index) => (
                <li key={index} className="text-sm">
                  {attempt.target.name}: {attempt.distance.toFixed(1)} meters
                </li>
              ))}
            </ul>
            <div className="text-sm font-medium text-gray-800 mt-2">
              Score:{" "}
              <span className="font-semibold ">
                {" " + player.totalScore.toFixed(0)}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const getWinner = () => {
    let maxScore = 0;
    let winner = "";
    const playersArray: Player[] = Array.from(gameState.players.values());

    playersArray.forEach((player) => {
      const totalScore = player.attempts.reduce(
        (acc, curr) => acc + curr.score,
        0
      );
      if (totalScore > maxScore) {
        maxScore = totalScore;
        winner = player.name;
      }
    });

    return winner;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 font-nunito">
      <div>
        {attemptsCounter == numAttempts ? (
          <h1 className="text-3xl font-bold mb-6">{getWinner()} WON</h1>
        ) : (
          <div className="group relative inline-block focus:outline-none focus:ring">
            <span className="absolute inset-0 border-b-black border-b-2 transition-transform"></span>
            <div
              onClick={restartGame}
              className="relative inline-block px-8 py-3 font-bold text-3xl uppercase tracking-widest text-black group-active:text-opacity-75"
            >
              {gameState.players.get(turn)?.name} Turn
            </div>
          </div>
        )}
      </div>

      <main className="flex flex-row items-start w-full max-w-8xl my-4 ">
        <div className="h-[80vh] w-3/4  border-2 border-black rounded-sm overflow-hidden">
          <MapPick
            position={position}
            setPosition={setPosition}
            target={targetLocation?.coordinates || null}
          />
        </div>
        <div className="w-1/4 h-[80vh] overflow-auto p-4 rounded-sm mx-2 ">
          <div className="h-20 text-center">
            <h1 className="text-3xl mb-4">Where is {targetLocation?.name}?</h1>
          </div>

          {renderGameState()}

          <div className="flex flex-row mt-4 space-x-4">
            <div className="flex justify-center">
              <Button
                text="Next"
                onClick={nextTurn}
                colorClass="bg-yellow-300"
              />
            </div>
            <div className="flex justify-center">
              <Button
                text="Restart"
                onClick={restartGame}
                colorClass="bg-red-300"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Game;
