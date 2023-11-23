import { LatLng } from "leaflet";
import { Exo } from "next/font/google";

class Location {
  name: string;
  coordinates: LatLng;

  constructor(name: string, coordinates: LatLng) {
    this.name = name;
    this.coordinates = coordinates;
  }
}

class Attempt {
  location: Location;
  target: Location;
  distance: number;
  score: number;

  constructor(
    location: Location,
    target: Location,
    distance: number,
    score: number
  ) {
    this.location = location;
    this.target = target;
    this.distance = distance;
    this.score = score;
  }
}

class Player {
  id: number;
  name: string;
  attempts: Attempt[];
  totalScore: number;

  constructor(
    id: number,
    name: string,
    totalScore: number,
    attempts: Attempt[] = []
  ) {
    this.id = id;
    this.name = name;
    this.attempts = attempts;
    this.totalScore = 0;
  }

  addAttempt(attempt: Attempt) {
    this.attempts.push(attempt);
    this.calculateScore();
  }

  public calculateScore() {
    // Simple scoring logic: the closer the distance, the higher the score.
    // This is just an example and can be replaced with more complex logic.
    const lastAttempt = this.attempts[this.attempts.length - 1];
    lastAttempt.score = Math.max(0, 1000 - lastAttempt.distance / 10);
    this.totalScore += lastAttempt.score;
  }
}

class GameState {
  players: Map<number, Player>;

  constructor(players: Map<number, Player>) {
    this.players = players;
  }

  addPlayer(player: Player) {
    this.players.set(player.id, player);
  }

  getPlayer(id: number): Player | undefined {
    return this.players.get(id);
  }

  // Additional methods to manage game state can be added here.
}

export { Location, Attempt, Player, GameState };
