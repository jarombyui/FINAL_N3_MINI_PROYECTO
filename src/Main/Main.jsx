import React, { useEffect } from "react";
import { fetchAllStays } from "../Store/staysSlice";
import Card from "../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";

const Main = () => {
  const dispatch = useDispatch();
  const stays = useSelector((state) => state.stays);
  useEffect(() => {
    dispatch(fetchAllStays("../data/stays.json"));
  }, [dispatch]);
  let content = "";
  if (stays.fetchStatus === "loading") {
    content = <p className="text-lg font-mulish">Loading...</p>;
  } else {
    if (stays.filteredStaysList.length === 0) {
      content = (
        <div className="flex flex-col items-center col-span-3 font-montserrat gap-3 mt-5">
          <h1 className="text-3xl font-bold text-black1">Oops!</h1>
          <h2>
            It looks like we couldn't find any search results that match your
            filters.
          </h2>
        </div>
      );
    } else {
      content = stays.filteredStaysList.map((data) => {
        return (
          <Card
            title={data.title}
            rating={data.rating}
            type={data.type}
            photo={data.photo}
            superHost={data.superHost}
            key={data.title}
          />
        );
      });
    }
  }
  return (
    <main className="mt-10">
      <div className="flex items-center justify-between font-montserrat mb-7">
        <h1 className="font-bold text-black1 text-2xl">Stays in Finland</h1>
        <h2 className="text-base">{stays.filteredStaysList.length} stays</h2>
      </div>
      <section className="grid lg:grid-cols-3 md:grid-cols-2 xl:gap-9 lg:gap-6 md:gap-7 gap-10">
        {content}
      </section>
    </main>
  );
};

export default Main;
