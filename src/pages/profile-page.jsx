import React, {useEffect, useState} from "react";
import DemoProfile from "../assets/demo.jpg";
import PageTittle from "../components/PageTittle";
import {getUserDataByEmail} from "../lib/GettingUserInfo";
import {gettingUpdateUserInfo} from "../lib/updateUserProfile";

export default function Profile() {
    const userEmail = localStorage.getItem("email");
    const [userInfo, setUserInfo] = useState({});

    const {name, title, description, email, photo} = userInfo;

    const [profileUpdate, setProfileUpdate] = useState({
        name: "",
        title: "",
        description: "",
        photo: true,
    });

    useEffect(() => {
        getUserDataByEmail(userEmail)
            .then((userData) => {
                setUserInfo(userData);
            })
            .catch((error) => {
                alert("Something wrong!" + error);
            });
    }, [userInfo]);

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        setProfileUpdate({
            ...profileUpdate,
            [name]: value,
        });
    };

    const handleProfileUpdate = (e) => {
        e.preventDefault();
        gettingUpdateUserInfo(userEmail, profileUpdate);

        alert("Profile Information Updated!");
    };

    return (
        <>
            <div className=" px-4 py-4 mb-6 rounded text-white bg-dark400">
                <PageTittle />
            </div>
            <div className="bg-dark400 flex flex-col lg:flex-row justify-start items-center lg:m-6 w-full 2xl:w-1/2 space-x-4 text-white p-6 rounded m-auto  mt-4">
                <img
                    className="w-[280px] border rounded h-auto"
                    src={DemoProfile}
                    alt="man"
                />

                <div className="w-full">
                    <h4 className="font-extrabold text-3xl mb-1">{name}</h4>
                    <span className="text-sm mb-1"> {email} </span>
                    <p className="text-purple-500  text-sm  rounded-md italic">
                        {title === "" ? "unknown" : title}
                    </p>

                    <p className="text-sm mt-2">
                        {description === ""
                            ? "No Description Yet! Please Update your Info"
                            : description}
                    </p>
                </div>
            </div>
            <div className="h-[1px] bg-purple-500/30 w-full"></div>
            {/* Update Profile */}
            <div className="mt-5 lg:m-6 w-full lg:w-[40%] text-white">
                <h5 className="text-xl font-semibold xl:mx-0 mx-6">
                    Update your Account
                </h5>

                <form
                    onSubmit={handleProfileUpdate}
                    className="mt-6 mx-6 xl:mx-0"
                >
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block font-medium my-2"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={profileUpdate.name}
                            onChange={handleInputChange}
                            placeholder="Your name"
                            className="border py-2 px-4  w-full border-gray-500/30 focus:border-purple-500/50 bg-dark400 rounded outline-none"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block font-medium my-2"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={profileUpdate.title}
                            onChange={handleInputChange}
                            placeholder="software engineer"
                            className="border py-2 px-4  w-full border-gray-500/30 focus:border-purple-500/50 bg-dark400 rounded outline-none"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block font-medium my-2"
                        >
                            Summery
                        </label>
                        <textarea
                            placeholder="Summery yourself"
                            type="text"
                            name="description"
                            value={profileUpdate.description}
                            onChange={handleInputChange}
                            cols="30"
                            rows="4"
                            className="border py-2 px-4  w-full border-gray-500/30 focus:border-purple-500/50 bg-dark400 rounded outline-none"
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block font-medium my-2"
                        >
                            Upload Profile
                        </label>
                        <input
                            type="file"
                            id="photoInput"
                            accept="image/*"
                            className="border py-2 px-4  w-full border-gray-500/30 focus:border-purple-500/50 outline-none bg-dark400 rounded"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 bg-purple-500 font-medium rounded mt-2 hover:bg-purple-500/80 ease-linear transition-all"
                    >
                        Update Profile
                    </button>
                </form>
            </div>
        </>
    );
}
