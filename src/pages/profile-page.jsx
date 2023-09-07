import React from "react";
import DemoProfile from "../assets/demo.jpg";
import PageTittle from "../components/PageTittle";

export default function Profile() {
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
                    <h4 className="font-extrabold text-3xl mb-1">
                        Rajiatul Kubra
                    </h4>
                    <span className="text-sm mb-1">example@gmail.com</span>
                    <p className="text-purple-500  text-sm  rounded-md italic">
                        software developer
                    </p>

                    <p className="text-sm mt-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Maiores rerum esse sapiente doloribus quisquam.
                        Laudantium facere amet a vero animi, quis sint
                        reiciendis deserunt modi deleniti! Quis vero tenetur
                        aliquam doloremque, distinctio dolorem eligendi fugit
                        voluptatem tempore numquam quos natus!
                    </p>
                </div>
            </div>
            <div className="h-[1px] bg-purple-500/30 w-full"></div>
            {/* Update Profile */}
            <div className="mt-5 lg:m-6 w-full lg:w-[40%] text-white">
                <h5 className="text-xl font-semibold">Update your Account</h5>

                <form action="" className="mt-6 ">
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block font-medium my-2"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
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
                            name="bio"
                            id=""
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
                            placeholder="Your name"
                            className="border py-2 px-4  w-full border-gray-500/30 focus:border-purple-500/50 outline-none bg-dark400 rounded"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 bg-purple-500 font-medium rounded mt-2 hover:bg-purple-500/80 ease-linear transition-all"
                    >
                        {" "}
                        Update Profile{" "}
                    </button>
                </form>
            </div>
        </>
    );
}
