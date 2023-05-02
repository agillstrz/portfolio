"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
export default function CardProject({ data, col, index }) {
  const [modal, setModal] = useState(false);
  return (
    <>
      <motion.div
        initial={{ y: 70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        viewport={{ once: true }}
        className={`${
          col == 1 ? " col1" : col === 2 ? "col2" : "col3"
        } flex  dark:bg-dark2 bg-white flex-row hover:bg-light2 dark:hover:bg-dark1 dark:text-text2  cursor-pointer group rounded-lg    dark:border-dark1 shadow-lg border-[2px]  relative  transition-all duration-150 ease-out`}
      >
        <div
          className={`${
            modal ? "" : "hidden"
          } transition-all  duration-100 ease-linear w-full h-full flex-col gap-y-2 absolute flex justify-center items-center bg-black/40 cursor-default backdrop-blur-[4px] z-[100]`}
        >
          <div className={`lg:gap-x-3 gap-x-2 flex `}>
            <a
              target={"_blank"}
              href={data.url}
              className="border text-light2 hover:bg-dark2 hover:font-bold transition-all duration-150 ease-linear border-light1 border-dark1 p-1 rounded-lg"
            >
              Visit Link
            </a>
            <a
              href={data.github}
              target={"_blank"}
              className="border  text-light2 hover:bg-dark2 hover:font-bold transition-all duration-150 ease-linear border-light1 border-dark1 p-1 rounded-lg"
            >
              Source Code
            </a>

            <div
              onClick={() => setModal(false)}
              className="absolute m-2 cursor-pointer top-0 right-0 bg-light1 dark:bg-black rounded-full z-[10]"
            >
              <MdCancel className="lg:text-[40px] text-[27px] hover:text-text2 text-dark1 dark:text-light1 " />
            </div>
          </div>
          <p className="text-light1 font-bold flex items-center gap-x-1">
            Responsive{" "}
            {data.responsive ? (
              <AiOutlineCheckCircle className="lg:text-[25px]" />
            ) : (
              <AiOutlineCloseCircle className="lg:text-[25px]" />
            )}
          </p>
        </div>
        <div
          onClick={() => setModal(true)}
          className="absolute m-2 right-0 cursor-pointer bg-light1 dark:bg-dark1 rounded-full z-[5]"
        >
          <BsInfoCircleFill className="lg:text-[40px] text-[27px] hover:text-text2 text-dark1   dark:text-light1 " />
        </div>

        <div
          className={`${
            col === 1
              ? "lg:w-[40%] h-[55%] lg:h-full"
              : "lg:h-[50%] h-[45%] w-full"
          }  relative   lg:overflow-hidden  shadow-lg  borders`}
          style={{}}
        >
          <img className="absolute w-full h-full " src={data.foto} alt="" />
        </div>

        <a
          href={data.url}
          target={"_blank"}
          className={` ${
            col === 1 ? "lg:w-[60%] h-[45%] lg:h-full " : "lg:h-[50%] h-[55%]"
          }   flex flex-col justify-between  shadow-lg  borders p-2`}
        >
          <div>
            <h1
              className={`${
                col === 1
                  ? "lg:text-[2rem] text-[22px]"
                  : col === 2
                  ? "lg:text-[22px] text-[14px]"
                  : ""
              } font-bold relative flex items-center group-hover:underline justify-between  text-dark1 dark:text-text1 `}
            >
              {data.nama}
            </h1>
            <p>{data.deskripsi}</p>
          </div>
          <div className="flex justify-end">
            <div className="flex items-end gap-x-[4px]">
              {data.technology?.map((m, index) => (
                <p
                  key={index}
                  className={`${
                    col === 1
                      ? "text-[16px] lg:text-[20px] px-2 py-1"
                      : "text-[9px]  px-[4px] py-1"
                  }  lg:text-[14px]  group-hover:underline group-hover:bg-light1   dark:group-hover:bg-dark2 rounded-lg transition-all duration-150 ease-out`}
                >
                  {m}
                </p>
              ))}
            </div>
          </div>
        </a>
      </motion.div>
    </>
  );
}
