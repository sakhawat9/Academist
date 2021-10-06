import axios from "axios";
import React, { useContext, useState } from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { ICourses } from "type";
import { Store } from "utils/Store";
interface IProps {
  course: ICourses;
}

const courseCard = ({course}:IProps) => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const { price,img } = course;

  const enrollCourseHandler = async () => {
    const {state, dispatch} = useContext(Store)
    const data = await axios.get(`/api/courses/${_id}`);
    dispatch({type: 'ENROLL_ADD_ITEM', payload: {...course, quantity: 1}})
  }

  return (
    <div className="container">
      <div className="shadow-xl courseCard">
        <div
          className="imgCard relative"
          style={{
            backgroundImage: `linear-gradient(rgb(0 0 0), rgb(91 79 238 / 0%)), url(${img})`,
          }}
        >
          <button
            className="text-5xl hover:text-royal-blue text-black-squeeze transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 absolute left-5 top-5"
            onClick={onOpenModal}
          >
            <AiOutlinePlayCircle />
          </button>
        </div>

        <Modal open={open} onClose={onCloseModal} center>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ezbJwaLmOeM"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </Modal>

        <div className="px-2 Bal">
          <p className="pt-2">Acctual Price</p>
          <h3>$ {price}</h3>
          <p>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore.
          </p>
          <h6>Course Features</h6>
        </div>

        <div className="grid grid-cols-2 px-2 mt-4 bara">
          <div className="flex mr-4 hol">
            <h6>
              {" "}
              <BiLike />
            </h6>
            <p>3k View</p>
          </div>
          <div className="flex mr-4 hol">
            <h6>
              {" "}
              <BiLike />
            </h6>
            <p>2 hour 30 min</p>
          </div>
          <div className="flex mr-4 hol">
            <h6>
              {" "}
              <BiLike />
            </h6>
            <p>Principiante</p>
          </div>
          <div className="flex mr-4 hol">
            <h6>
              {" "}
              <BiLike />
            </h6>
            <p>04 Certified</p>
          </div>
        </div>

        <button className="member_ship"> Get Membership </button>
        <br />
        <button onClick={enrollCourseHandler} className="enroll_now"> Enroll Now </button>
      </div>
    </div>
  );
};

export default courseCard;
