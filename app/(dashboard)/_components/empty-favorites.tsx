import Image from "next/image";

export const EmptyFavourites = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src={"/empty-favorites.png"} height={350} width={350} alt="Emptry" />
      <h2 className="text-2xl font-semibold mt-6">No favorite boards!</h2>
      <p className="text-muted-foreground textg-sm mt-2">
        Try favoriting a board
      </p>
    </div>
  );
};
