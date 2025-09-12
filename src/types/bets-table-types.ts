export interface BetData {
  game: string;
  user: string;
  time: string;
  type: "bitcoin" | "ethereum";
  betAmount: string;
  multiplier: string;
  payout: string;
}
