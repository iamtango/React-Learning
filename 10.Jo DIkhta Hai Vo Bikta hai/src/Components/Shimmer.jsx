import ShimmerCard from "./ShimmerCard"
import { TOTAL_SHIMMER_CARD } from "../constants"

const Shimmer = () => {
  return (
    <div className="w-[1024px] mx-auto my-4 p-4 shadow flex flex-wrap justify-start">
      {Array(TOTAL_SHIMMER_CARD)
        .fill("")
        .map((e, index) => {
          return <ShimmerCard key={index} />
        })}
    </div>
  )
}

export default Shimmer