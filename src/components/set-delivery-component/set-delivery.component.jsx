import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setDeliveryDetails,
  fetchDeliveryDetails,
} from "../../reduxtoolkit/features/deliveryDetails/deliverySlice";
import FormInput from "../form-input-component/form-input.component";
import Text from "../text-component/text.component";

const SetDelivery = ({ onValidate }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const deliveryDetails = useSelector((state) => state.deliveryDetails);
  const dispatch = useDispatch();

  const [detailState, setDetailsState] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (currentUser) {
        try {
          const result = await dispatch(
            fetchDeliveryDetails(currentUser.userId)
          );
          if (result.meta.rejectedWithValue) {
            setDetailsState(true); // Show the form if fetching fails
          }
        } catch (error) {
          console.error("Error fetching delivery details:", error);
          setDetailsState(true); // Show the form if there is an error
        }
      } else {
        setDetailsState(true); // Show the form if there is an error
      }
    };

    fetchData();
  }, [dispatch, currentUser]);

  useEffect(() => {
    if (deliveryDetails && Object.keys(deliveryDetails).length === 0) {
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
    }
  }, [deliveryDetails, dispatch]);

  useEffect(() => {
    validateFields();
  }, [deliveryDetails]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setDeliveryDetails({ [name]: value }));
  };

  const validateFields = () => {
    const { name, email, phone, address } = deliveryDetails || {};
    const isValid = name && email && phone && address;
    onValidate(isValid);
  };

  return (
    <>
      {detailState && (
        <div className="space-y-4">
          <Text texttype="text-xmd" textstyles="text-gray-900 font-semibold">
            Delivery Details
          </Text>
          <div>
            <div className="grid grid-cols-1 gap-4 small:grid-cols-2">
              <div>
                <FormInput
                  type="text"
                  name="name"
                  value={deliveryDetails.name || ""}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  labelstyle="capitalize font-medium mb-2 block"
                  inputstyle="block w-full rounded-[0.4rem] border p-2.5 py-3 xsmall:text-sm text-xs text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                  required
                />
                {deliveryDetails.name === "" && (
                  <Text texttype="text-sm" textstyles="text-red-500 italic">
                    Name is required
                  </Text>
                )}
              </div>
              <div>
                <FormInput
                  type="email"
                  name="email"
                  value={deliveryDetails.email || ""}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  labelstyle="capitalize font-medium mb-2 block"
                  inputstyle="block w-full rounded-[0.4rem] border p-2.5 py-3 xsmall:text-sm text-xs text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                  required
                />
                {deliveryDetails.email === "" && (
                  <Text texttype="text-sm" textstyles="text-red-500 italic">
                    Email is required
                  </Text>
                )}
              </div>
              <div>
                <FormInput
                  type="tel"
                  name="phone"
                  value={deliveryDetails.phone || ""}
                  onChange={handleChange}
                  placeholder="123-456-7890"
                  labelstyle="capitalize font-medium mb-2 block"
                  inputstyle="block w-full rounded-[0.4rem] border p-2.5 py-3 xsmall:text-sm text-xs text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                  required
                />
                <div>
                  {deliveryDetails.phone === "" && (
                    <Text texttype="text-sm" textstyles="text-red-500 italic">
                      Phone number is required
                    </Text>
                  )}
                </div>
              </div>
              <div>
                <FormInput
                  type="text"
                  name="address"
                  value={deliveryDetails.address || ""}
                  onChange={handleChange}
                  placeholder="123 Main St"
                  labelstyle="capitalize font-medium mb-2 block"
                  inputstyle="block w-full rounded-[0.4rem] border p-2.5 py-3 xsmall:text-sm text-xs text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                  required
                />
                {deliveryDetails.address === "" && (
                  <Text texttype="text-sm" textstyles="text-red-500 italic">
                    Address is required
                  </Text>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SetDelivery;
