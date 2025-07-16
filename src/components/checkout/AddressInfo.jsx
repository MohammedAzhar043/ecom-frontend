import React, { useState } from "react";
import Skeleton from "../shared/Skeleton";
import { FaAddressBook } from "react-icons/fa";
import AddressInfoModal from "../cart/AddressInfoModal";
import AddAddressForm from "../cart/AddAddressForm";

const AddressInfo = () => {
  const noAddressExist = true;
  const isLoading = false;

  const [openAddressModal, setOpenAddressModal] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");
  const addNewAddressHandler = () => {
    setSelectedAddress("");
    setOpenAddressModal(true);
  };

  return (
    <div className="pt-4">
      {noAddressExist ? (
        <div className="p-6 rounded-lg max-w-md mx-auto flex flex-col items-center justify-center">
          <FaAddressBook size={50} className="text-gray-500 mb-4" />
          <h1 className="text-slate-900 mb-2 text-center font-semibold text-2xl">
            No Address Added Yet
          </h1>

          <p className="text-slate-800 mb-6 text-center ">
            Please add your address to complete purchase
          </p>

          <button
            className="px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-all"
            onClick={addNewAddressHandler}
          >
            {" "}
            Add Address
          </button>
        </div>
      ) : (
        <div className="relative p-6 rounded-lg max-w-md mx-auto">
          <h1 className="text-slate-800 text-center font-bold text-2xl">
            Select Address{" "}
          </h1>
          {isLoading ? (
            <div className="py-4 px-8">
              <Skeleton />
            </div>
          ) : (
            <div className="space-y-4 pt-6">
              <p>Address list here... </p>
            </div>
          )}
        </div>
      )}

      <AddressInfoModal open={openAddressModal} setOpen={setOpenAddressModal}>
        <AddAddressForm />
      </AddressInfoModal>
    </div>
  );
};

export default AddressInfo;
