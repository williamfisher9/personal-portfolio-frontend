import { useState } from "react";

const Carousel = ({images}) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const moveNext = () => {
        if(currentIndex == images.length-1){
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    }

    const moveBack = () => {
        if(currentIndex == 0){
            setCurrentIndex(images.length-1)
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    }

    return <div className="carousel-container w-full h-[500px] relative p-6">

                <span className="material-symbols-rounded absolute top-[50%] right-9 translate-y-[-50%] text-zinc-300
                        bg-neutral-900/10 rounded-full p-2 flex justify-center items-center cursor-pointer hover:scale-110 transition"
                        onClick={moveNext}>
                    arrow_forward_ios
                </span>

                <span className="material-symbols-rounded absolute top-[50%] left-9 translate-y-[-50%] text-zinc-300
                        bg-neutral-900/10 rounded-full p-2 flex justify-center items-center cursor-pointer hover:scale-110 transition"
                        onClick={moveBack}>
                    arrow_back_ios
                </span>

                <div className="w-full h-full  flex justify-center items-center">
                    <img src={images[currentIndex]} alt="img" className=""/>
                </div>

    </div>
}

export default Carousel;