"use client";
import { motion, useDragControls } from "framer-motion";
import type {FC} from "react";
import { useEffect, useRef } from "react";
import {cn} from "@/utils/cn";
import Image from "next/image";

type DraggableDialogProps = {
  initialRight: string;
  initialTop: string;
  className?: string;
  src: any;
  caption: string;
};

export const DraggablePhoto: FC<DraggableDialogProps> = ({
                                                                    className,
                                                                    initialTop,
                                                                    initialRight,
  src, caption
                                                                  }) => {
  const controls = useDragControls();
  const constraintsRef = useRef<HTMLDivElement>(null);



  useEffect(() => {
    const updateConstraints = () => {
      if (constraintsRef.current) {
        constraintsRef.current.style.width = `${window.innerWidth}px`;
        constraintsRef.current.style.height = `${window.innerHeight}px`;
      }
    };

    window.addEventListener("resize", updateConstraints);
    updateConstraints();

    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  return (

        <div
          ref={constraintsRef}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            pointerEvents: "none",
            zIndex: 100,
          }}
        >
          <motion.div
            className={cn(
              "fixed pointer-events-auto outline-none bg-white p-2 border border-stone-400 rounded-lg shadow-lg z-30 w-fit text-sm",
              "z-10 drop-shadow-lg",
              className,
            )}
            style={{
              pointerEvents: "all",
            }}
            drag
            dragMomentum={false}
            dragElastic={0.2}
            initial={{
              right: initialRight,
              top: initialTop,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragControls={controls}
            dragConstraints={constraintsRef}
          >

            <Image src={src} width={200} height={200} alt="Riya and Caelin photo"/>
            <p className="font-chewy mt-2 text-center">{caption}</p>
          </motion.div>
      </div>
  );
};
