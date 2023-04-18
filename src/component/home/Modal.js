import { useState } from "react";
const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="bg-white h-9  w-9 pt-1 rounded-full  self-end ">
        <img
          src="/images/newbubble.png"
          alt="bubble"
          type="button"
          onClick={() => setShowModal(true)}
        />
      </div>

      {showModal ? (
        <>
          <div className=" h-full md:h-[600px] md:w-[380px] md:rounded-2xl md:mt-24 md:ml-10  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className=" w-auto  mx-auto max-w-3xl">
              <div className=" absolute flex items-center flex-col  w-full h-full bg-white  outline-none focus:outline-none">
                <div className="bg-darkgreen p-7 pb-16  flex flex-col ">
                  <div className=" justify-end  ">
                    <span
                      className=" float-right  text-white text-xl "
                      onClick={() => setShowModal(false)}
                    >
                      x
                    </span>
                  </div>
                  <div className="text-white text-center w-full ">
                    <span className="text-lg">Chat with us</span>
                    <p className="font-light text-sm tracking-wide leading-relaxed">
                      👋 Hello! Let us know if you have a specific question, or
                      give an idea of what you're looking for. We're happy to
                      make recommendations.
                    </p>
                  </div>
                </div>
                <div className="w-full px-4 flex-row">
                  <div className="flex   -mt-10 rounded-lg bg-white border focus:ring-1 focus:ring-darkgreen  ">
                    <textarea
                      className="textarea h-36 w-full focus:outline-none"
                      placeholder="Write a message"
                    ></textarea>
                    <div className="flex items-end p-3">
                      <img src="/images/sendgray.png" alt="send" />
                    </div>
                  </div>
                </div>

                <span className="my-5 ">Instant answers</span>
                <div className="w-full px-4 flex-row">
                  <div className="flex   rounded-lg bg-white border border-darkgreen  focus:ring-1 focus:ring-darkgreen  ">
                    <input
                      type="text"
                      placeholder="Track my order "
                      className="input placeholder-black  focus:outline-none border-none  w-full text-black max-w-xs border-darkgreen"
                    />
                    <div className="flex items-end p-3">
                      <img src="/images/sendblack.png" alt="send" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
