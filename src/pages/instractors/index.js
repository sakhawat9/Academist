import InstractorCard from "components/InstractorCard/InstractorCard";
import User from "models/User";
import React from "react";
import db from "utils/db";
import Layout from "../../components/utilities/Layout";
import PageTitle from "../../components/utilities/PageTitle";
const instructor = (props) => {
  const { user } = props;

  const instructors = user.filter((instructor) => instructor.instructor === true);

  return (
    <Layout>
      <PageTitle background="bg-gray-50" title="Instructors" subtitle="Our all instractors" />
      <div className="instractorsWrapper section-padding">
        <div className="container ">

          <div className="flex flex-wrap page-content__body">
            {instructors.map((instructor) => (
              <InstractorCard key={instructor._id} instructor={instructor} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default instructor;

export async function getServerSideProps() {
  await db.connect();
  const user = await User.find({}).lean();
  await db.disconnect();
  return {
    props: {
      user: user.map(db.convertDocToObj),
    },
  };
}
