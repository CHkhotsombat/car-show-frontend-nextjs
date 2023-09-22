"use client";

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import { CustomButton } from ".";
import { updateSearchParams } from "@/utils";

const ShowMore = ({
  pageNumber,
  isNext
}: ShowMoreProps) => {
  const router = useRouter()

  console.log('pageNumber===', pageNumber);

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    console.log('newLimit===', newLimit);
    const newPathName = updateSearchParams("limit", `${newLimit}`)

    router.push(newPathName)
  }

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton 
          btnType="button"
          title='Show More'
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}

    </div>
  )
}

export default ShowMore