import React from "react";
import logo from "../assets/logo.svg";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import modalSlice from "../Store/modalSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const stays = useSelector((state) => state.stays);
  const { openModal } = modalSlice.actions;
  let sum = 0;
  sum = Object.values(stays.guests).reduce((acc, val) => {
    return acc + val;
  }, 0);
  return (
    <nav className="mt-5 flex sm:flex-row sm:gap-0 gap-5 flex-col justify-between sm:items-center font-mulish">
      <div className="self-start sm:self-center">
        <img src={logo} alt="windbnb" />
      </div>
      <form
        className="flex sm:items-center"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(openModal());
        }}
      >
        <Input
          type="text"
          name="location"
          id="location"
          readOnly
          value={stays.location}
          onFocus={() => dispatch(openModal())}
          className="sm:px-5 sm:py-3 px-3 py-2 border rounded-l-xl border-gray2 shadow-cu w-5/12 sm:w-auto"
        />
        <Input
          type="text"
          name="guests"
          id="guests"
          onFocus={() => dispatch(openModal())}
          value={sum}
          placeholder="Add guests"
          className="sm:px-5 sm:py-3 px-4 py-2 border border-gray2 shadow-cu w-5/12 sm:w-auto"
          readOnly
        />
        <Button
          type="submit"
          className="flex items-center border rounded-r-xl border-gray2 sm:px-4 sm:py-3 px-3 py-2"
        >
          <span className="material-symbols-outlined text-darkOrange">
            search
          </span>
        </Button>
      </form>
    </nav>
  );
};

export default Navbar;
