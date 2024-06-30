import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setDeliveryDetails,
  fetchDeliveryDetails,
  saveDeliveryDetails,
} from "../../reduxtoolkit/features/deliveryDetails/deliverySlice";
import FormInput from "../form-input-component/form-input.component";
import Text from "../text-component/text.component";

const SetDelivery = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const deliveryDetails = useSelector((state) => state.deliveryDetails);

  console.log(currentUser, deliveryDetails);
  const dispatch = useDispatch();

  const [editing, setEditing] = useState(false); // State to manage edit mode
  const [formInitialized, setFormInitialized] = useState(false); // State to track form initialization

  // Fetch delivery details if available for the user
  useEffect(() => {
    if (currentUser) {
      dispatch(fetchDeliveryDetails(currentUser));
    }
  }, [dispatch, currentUser]);

  // Initialize delivery details form fields
  useEffect(() => {
    if (deliveryDetails && Object.keys(deliveryDetails).length === 0) {
      // If deliveryDetails is empty (no existing data), initialize form fields
      dispatch(
        setDeliveryDetails({
          name: "",
          email: "",
          phone: "",
          country: "United States",
          city: "San Francisco",
          address: "",
        })
      );
      setFormInitialized(true); // Set form initialization state to true
    }
  }, [deliveryDetails, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setDeliveryDetails({ [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      dispatch(saveDeliveryDetails(deliveryDetails));
    } else {
      // Handle form validation errors, if any
    }
  };

  const handleUpdate = () => {
    setEditing(true); // Enable editing mode
  };

  const handleProceed = () => {
    // Proceed with the next step after updating delivery details
    // Example: navigate to the next page or perform another action
    setEditing(false); // Disable editing mode after update
  };

  const validateFields = () => {
    const { name, email, phone, address } = deliveryDetails || {};
    return name && email && phone && address;
  };

  // Loading state while fetching data
  // if (!currentUser || deliveryDetails.loading) {
  //   return <div>Loading...</div>;
  // }

  // Render form based on conditions
  return "";
  // <div className="space-y-4">
  //   <Text texttype="heading-base" textstyles="text-gray-900">
  //     Delivery Details
  //   </Text>
  //   <form onSubmit={handleSubmit}>
  //     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
  //       <FormInput
  //         type="text"
  //         name="name"
  //         value={deliveryDetails.name || ""}
  //         onChange={handleChange}
  //         placeholder="Jane Doe"
  //         labelstyle="capitalize font-medium mb-2 block"
  //         inputstyle="block w-full rounded-[0.4rem] border p-2.5 py-3 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
  //         required
  //       />
  //       {!deliveryDetails.name && (
  //         <p className="text-red-500">Name is required</p>
  //       )}

  //       {/* Repeat similar FormInput and error handling for other fields */}
  //     </div>
  //     <button type="submit" className="btn btn-primary">
  //       Save
  //     </button>
  //   </form>

  //   {/* Conditionally render update button if there are existing delivery details */}
  //   {formInitialized && Object.keys(deliveryDetails).length > 0 && (
  //     <button onClick={handleUpdate} className="btn btn-secondary">
  //       Update Details
  //     </button>
  //   )}

  //   {/* Conditionally render update form if editing mode is enabled */}
  //   {editing && (
  //     <div>
  //       <Text texttype="heading-base" textstyles="text-gray-900">
  //         Update Delivery Details
  //       </Text>
  //       <form onSubmit={handleSubmit}>
  //         {/* Include form inputs for editing */}
  //       </form>
  //       <button onClick={handleProceed} className="btn btn-primary">
  //         Proceed
  //       </button>
  //     </div>
  //   )}
  // </div>
};

export default SetDelivery;
