interface PlayerStatusProps {
  players?: number;
}

const PlayerStatus: React.FC<PlayerStatusProps> = ({ players }) => {
  return (
    <p className="text-xs flex items-center gap-1">
      <span
        className={`inline-block size-1.5 rounded-full ${
          players ? "bg-sports" : "bg-red-500"
        }`}
      ></span>
      <span className="inline-block space-x-1">
        <span className="font-semibold">{players ?? 0}</span>
        <span className="text-white-3">playing</span>
      </span>
    </p>
  );
};

export default PlayerStatus;
