import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useReducer } from 'react';
import { Store } from 'utils/Store';
// import Image from 'next/image'

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true, error: "" };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, users: action.payload, error: "" };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    case "DELETE_REQUEST":
      return { ...state, loadingDelete: true };
    case "DELETE_SUCCESS":
      return { ...state, loadingDelete: false, successDelete: true };
    case "DELETE_FAIL":
      return { ...state, loadingDelete: false };
    case "DELETE_RESET":
      return { ...state, loadingDelete: false, successDelete: false };
    default:
      state;
  }
}


const ManageTable = (user) => {
  const { name, email, isAdmin, _id } = user.user;
  
  const { state } = useContext(Store);
  const router = useRouter();
  const { userInfo } = state;

  const [{ loading, error, users, successDelete, loadingDelete }, dispatch] =
    useReducer(reducer, {
      loading: true,
      users: [],
      error: "",
    });

  useEffect(() => {
    if (!userInfo) {
      router.push("/login");
    }
    const fetchData = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        const { data } = await axios.get(`/api/admin/users`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        console.log(err);
        
      }
    };
    if (successDelete) {
      dispatch({ type: "DELETE_RESET" });
    } else {
      fetchData();
    }
  }, [successDelete]);



  const deleteHandler = async (userId) => {
    console.log("userId", userId);
    if (!window.confirm("Are you sure?")) {
      return;
    }
    try {
      dispatch({ type: "DELETE_REQUEST" });
      await axios.delete(`/api/admin/users/${userId}`, {
        headers: { authorization: `Bearer ${userInfo.token}` },
      });
      dispatch({ type: "DELETE_SUCCESS" });
      
    } catch (err) {
      dispatch({ type: "DELETE_FAIL" });
      console.log(err);
      
    }
  };

  return (
    <>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
          <td className="px-2 py-4 text-left whitespace-nowrap">
            {name}
          </td>
          <td className="px-2 py-4 text-left whitespace-nowrap">
            {email}
          </td>
          <td className="px-2 py-4 text-sm text-left text-gray-500 whitespace-nowrap">
            {isAdmin ? 'Yes' : 'No'}
          </td>
          <td className="px-2 py-4 text-sm font-medium text-center whitespace-nowrap">
            <span className="inline-flex px-2 mx-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full ">
              <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
            </span>
            <span onClick={() => deleteHandler(_id)} className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full cursor-pointer">
              Delete
            </span>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default ManageTable;
