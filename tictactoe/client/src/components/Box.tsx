type Props = {
  player?: string;
  index?: number;
  onClick(e: any): void;
};

export default function Box({ index, onClick, player }: Props) {
  const scallable = player ? "scale-100" : "scale-0";
  const colorText = player === "O" ? "text-blue-200" : "text-green-300";
  const hover = "transition duration-500 hover:scale-105 transform";
  return (
    <>
      <div
        data-index={index}
        className={`h-36 border-solid border-4 border-slate-200 font-display text-7xl text-center flex justify-center items-center cursor-pointer ${hover}`}
        {...{ onClick }}
      >
        <span
          data-index={index}
          className={`transform transition-all duration-150 ease-out ${scallable} ${colorText}`}
        >
          {player?.toUpperCase()}
        </span>
      </div>
    </>
  );
}
